"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/prodotti", label: "Prodotti" },
  { href: "/contatti", label: "Contatti" },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map(({ href, label }) => {
        const isExact = pathname === href;
        const isParent = href !== "/" && pathname.startsWith(href + "/");
        const isActive = isExact || isParent;

        return (
          <Link
            key={href}
            href={href}
            aria-current={isExact ? "page" : undefined}
            className={isActive ? "active" : undefined}
          >
            {label}
          </Link>
        );
      })}
    </>
  );
}
