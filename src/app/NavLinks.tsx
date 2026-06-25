"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/prodotti", label: "Prodotti" },
  { href: "/contatti", label: "Contatti" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map(({ href, label }) => {
        const isExactMatch = pathname === href;
        const isParentPath = href !== "/" && pathname.startsWith(href + "/");
        const isActive = isExactMatch || isParentPath;

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
