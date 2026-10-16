"use client";

import { useEffect, useRef, useState } from "react";

const storageKey = "adekro-cookie-preferences";

type CookiePreferences = {
  analytics: boolean;
};

function readPreferences(): CookiePreferences | null {
  try {
    const storedPreferences = localStorage.getItem(storageKey);
    return storedPreferences ? (JSON.parse(storedPreferences) as CookiePreferences) : null;
  } catch {
    return null;
  }
}

export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const dialogRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      const preferences = readPreferences();
      setAnalytics(preferences?.analytics ?? false);
      setIsOpen(!preferences);
    });

    const openSettings = () => {
      returnFocusRef.current = document.activeElement as HTMLElement | null;
      setAnalytics(readPreferences()?.analytics ?? false);
      setShowSettings(true);
      setIsOpen(true);
    };

    window.addEventListener("adekro:open-cookie-settings", openSettings);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("adekro:open-cookie-settings", openSettings);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      returnFocusRef.current?.focus();
      returnFocusRef.current = null;
      return;
    }

    titleRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        // Esc declines optional cookies on first visit; when reopened from the
        // footer it just closes and keeps the stored choice.
        if (readPreferences()) {
          setShowSettings(false);
          setIsOpen(false);
        } else {
          savePreferences(false);
        }
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        "button, input, [tabindex]:not([tabindex='-1'])",
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && (active === first || active === titleRef.current)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  function savePreferences(nextAnalytics: boolean) {
    const preferences: CookiePreferences = { analytics: nextAnalytics };
    localStorage.setItem(storageKey, JSON.stringify(preferences));
    setAnalytics(nextAnalytics);
    setIsOpen(false);
    setShowSettings(false);
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div className="cookie-backdrop" role="presentation">
      <section
        aria-labelledby="cookie-consent-title"
        aria-modal="true"
        className="cookie-consent"
        ref={dialogRef}
        role="dialog"
      >
        <div className="cookie-consent-copy">
          <p className="cookie-consent-label">PREFERENZE COOKIE</p>
          <h2 id="cookie-consent-title" ref={titleRef} tabIndex={-1}>
            {showSettings ? "Gestisci le preferenze" : "La tua privacy conta"}
          </h2>
          <p>
            Usiamo cookie tecnici necessari al funzionamento del sito. Puoi scegliere
            se autorizzare anche strumenti statistici, quando saranno attivati.
          </p>
        </div>

        {showSettings && (
          <div className="cookie-options">
            <div className="cookie-option">
              <div>
                <h3>Cookie tecnici</h3>
                <p>Necessari per memorizzare la tua scelta sui cookie.</p>
              </div>
              <span className="cookie-status">Sempre attivi</span>
            </div>
            <label className="cookie-option cookie-toggle">
              <span>
                <strong>Cookie statistici</strong>
                <small>Ci aiutano a capire come viene usato il sito.</small>
              </span>
              <input
                checked={analytics}
                onChange={(event) => setAnalytics(event.target.checked)}
                type="checkbox"
              />
              <span aria-hidden="true" className="toggle-track" />
            </label>
          </div>
        )}

        <div className="cookie-actions">
          {!showSettings && (
            <button className="cookie-text-button" onClick={() => setShowSettings(true)} type="button">
              Personalizza
            </button>
          )}
          <button className="cookie-secondary-button" onClick={() => savePreferences(false)} type="button">
            Rifiuta facoltativi
          </button>
          <button className="cookie-primary-button" onClick={() => savePreferences(showSettings ? analytics : true)} type="button">
            {showSettings ? "Salva preferenze" : "Accetta tutti"}
          </button>
        </div>
      </section>
    </div>
  );
}