"use client";

import { useEffect, useState } from "react";

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

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      const preferences = readPreferences();
      setAnalytics(preferences?.analytics ?? false);
      setIsOpen(!preferences);
    });

    const openSettings = () => {
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
        role="dialog"
      >
        <div className="cookie-consent-copy">
          <p className="cookie-consent-label">PREFERENZE COOKIE</p>
          <h2 id="cookie-consent-title">
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