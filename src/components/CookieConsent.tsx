"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const storageKey = "adekro-cookie-preferences";
const noticeVersion = "2026-10-16";

type CookiePreferences = {
  analytics: boolean;
  savedAt?: string;
  noticeVersion?: string;
};

function readPreferences(): CookiePreferences | null {
  try {
    const storedPreferences = localStorage.getItem(storageKey);
    return storedPreferences ? (JSON.parse(storedPreferences) as CookiePreferences) : null;
  } catch {
    return null;
  }
}

// The site sets no statistics or profiling cookies, so there is nothing to consent to:
// this is an information notice. The stored value only remembers that it was shown.
export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      setIsOpen(!readPreferences());
    });

    const openNotice = () => {
      returnFocusRef.current = document.activeElement as HTMLElement | null;
      setIsOpen(true);
    };

    window.addEventListener("adekro:open-cookie-settings", openNotice);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("adekro:open-cookie-settings", openNotice);
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
        acknowledge();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        "a[href], button, [tabindex]:not([tabindex='-1'])",
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

  function acknowledge() {
    const preferences: CookiePreferences = {
      analytics: false,
      savedAt: new Date().toISOString(),
      noticeVersion,
    };
    try {
      localStorage.setItem(storageKey, JSON.stringify(preferences));
    } catch {
      // Storage unavailable: the notice may reappear on the next visit.
    }
    setIsOpen(false);
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
          <p className="cookie-consent-label">Informativa cookie</p>
          <h2 id="cookie-consent-title" ref={titleRef} tabIndex={-1}>
            Nessun cookie di tracciamento
          </h2>
          <p>
            Questo sito non usa cookie statistici né di profilazione. Salva nel tuo browser
            solo una preferenza tecnica per non riproporti questo avviso. Trovi i dettagli
            nella <Link href="/cookie-policy">Cookie Policy</Link> e nella{" "}
            <Link href="/privacy-policy">Privacy Policy</Link>.
          </p>
        </div>

        <div className="cookie-actions">
          <button className="cookie-primary-button" onClick={acknowledge} type="button">
            Ho capito
          </button>
        </div>
      </section>
    </div>
  );
}
