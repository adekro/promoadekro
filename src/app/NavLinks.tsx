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
        const isExact = pathname === href;
        const isParent = href !== "/" && pathname.startsWith(href + "/");
        const isActive = isExact || isParent;

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
