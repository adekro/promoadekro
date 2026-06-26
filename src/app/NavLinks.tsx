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
      {navLinks.map((link) => {
        const isExact = pathname === link.href;
        // Visual highlight for subpaths (e.g., /prodotti/some-product highlights "Prodotti")
        const isActive = isExact || (link.href !== "/" && pathname.startsWith(link.href + "/"));

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isExact ? "page" : undefined}
            style={
              isActive
                ? {
                    backgroundColor: "var(--brand)",
                    color: "white",
                    borderColor: "var(--brand)",
                    boxShadow: "0 8px 20px rgba(79, 70, 229, 0.2)",
                  }
                : undefined
            }
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}
