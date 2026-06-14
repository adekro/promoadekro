"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav aria-label="Navigazione principale" className="site-nav">
      <Link
        href="/"
        className={isActive("/") ? "active" : ""}
        aria-current={pathname === "/" ? "page" : undefined}
      >
        Home
      </Link>
      <Link
        href="/chi-siamo"
        className={isActive("/chi-siamo") ? "active" : ""}
        aria-current={pathname === "/chi-siamo" ? "page" : undefined}
      >
        Chi siamo
      </Link>
      <Link
        href="/prodotti"
        className={isActive("/prodotti") ? "active" : ""}
        aria-current={pathname === "/prodotti" ? "page" : undefined}
      >
        Prodotti
      </Link>
      <Link
        href="/contatti"
        className={isActive("/contatti") ? "active" : ""}
        aria-current={pathname === "/contatti" ? "page" : undefined}
      >
        Contatti
      </Link>
    </nav>
  );
}
