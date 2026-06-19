"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/prodotti", label: "Prodotti" },
  { href: "/contatti", label: "Contatti" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map(({ href, label }) => {
        const isExact = pathname === href;
        const isSubPath = href !== "/" && pathname.startsWith(href + "/");
        const isActive = isExact || isSubPath;

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
