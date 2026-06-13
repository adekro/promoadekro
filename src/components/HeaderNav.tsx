"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderNav() {
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
        const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
        return (
          <Link
            key={href}
            href={href}
            className={isActive ? "active" : ""}
            aria-current={isActive ? "page" : undefined}
          >
            {label}
          </Link>
        );
      })}
    </>
  );
}
