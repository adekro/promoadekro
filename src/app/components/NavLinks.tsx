"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/chi-siamo", label: "Chi siamo" },
    { href: "/prodotti", label: "Prodotti" },
    { href: "/contatti", label: "Contatti" },
  ];

  return (
    <>
      {links.map(({ href, label }) => {
        const isExactMatch = pathname === href;
        const isPartiallyActive = href !== "/" && pathname.startsWith(href + "/");
        const isActive = isExactMatch || isPartiallyActive;

        return (
          <Link
            key={href}
            href={href}
            className={isActive ? "active" : ""}
            aria-current={isExactMatch ? "page" : undefined}
          >
            {label}
          </Link>
        );
      })}
    </>
  );
}
