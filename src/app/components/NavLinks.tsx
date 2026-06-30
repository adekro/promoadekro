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
      {navItems.map((item) => {
        const isExact = pathname === item.href;
        const isParent = item.href !== "/" && pathname.startsWith(item.href + "/");
        const isActive = isExact || isParent;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={isActive ? "active" : ""}
            aria-current={isExact ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}
