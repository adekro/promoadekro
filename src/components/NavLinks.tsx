"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/chi-siamo", label: "Chi siamo" },
    { href: "/prodotti", label: "Prodotti" },
    { href: "/contatti", label: "Contatti" },
  ];

  return (
    <>
      {links.map((link) => {
        const isExact = pathname === link.href;
        // Highlighting logic: exact match OR starts with href + '/' (e.g. /prodotti/slug matches /prodotti)
        // We exclude "/" from the startsWith check to avoid matching everything
        const isActive = isExact || (link.href !== "/" && pathname.startsWith(link.href + "/"));

        return (
          <Link
            key={link.href}
            href={link.href}
            className={isActive ? "active" : ""}
            aria-current={isExact ? "page" : undefined}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}
