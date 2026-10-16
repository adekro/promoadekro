"use client";

export default function CookieSettingsButton() {
  return (
    <button
      className="footer-legal-button"
      onClick={() => window.dispatchEvent(new Event("adekro:open-cookie-settings"))}
      type="button"
    >
      Informativa cookie
    </button>
  );
}