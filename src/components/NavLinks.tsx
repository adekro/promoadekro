"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/prodotti", label: "Prodotti" },
  { href: "/contatti", label: "Contatti" },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {NAV_LINKS.map(({ href, label }) => {
        const isExact = pathname === href;
        const isActive = isExact || (href !== "/" && pathname.startsWith(`${href}/`));

        return (
          <Link
            key={href}
            href={href}
            className={isActive ? "active" : ""}
            aria-current={isExact ? "page" : undefined}
          >
            {label}
          </Link>
        );
      })}
    </>
  );
}
