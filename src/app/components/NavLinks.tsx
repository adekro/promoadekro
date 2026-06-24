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
        const isExactMatch = pathname === href;
        const isParentMatch = href !== "/" && pathname.startsWith(href + "/");
        const isActive = isExactMatch || isParentMatch;

        return (
          <Link
            key={href}
            href={href}
            className={isActive ? "active" : undefined}
            aria-current={isExactMatch ? "page" : undefined}
          >
            {label}
          </Link>
        );
      })}
    </>
  );
}
