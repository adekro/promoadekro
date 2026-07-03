"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/prodotti", label: "Prodotti" },
  { href: "/contatti", label: "Contatti" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {navItems.map(({ href, label }) => {
        const isExactMatch = pathname === href;
        const isSubPath = href !== "/" && pathname.startsWith(href + "/");
        const isActive = isExactMatch || isSubPath;

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
