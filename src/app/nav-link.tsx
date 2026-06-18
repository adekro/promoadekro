"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
  "aria-label"?: string;
}

/**
 * NavLink component that automatically applies an active class and ARIA attributes
 * based on the current pathname.
 */
export function NavLink({
  href,
  children,
  className = "",
  activeClassName = "active",
  "aria-label": ariaLabel,
}: NavLinkProps) {
  const pathname = usePathname();

  // Exact match for aria-current="page"
  const isExact = pathname === href;

  // Parent match (e.g., /prodotti/something matches /prodotti)
  // We avoid matching / on everything by checking href !== "/"
  const isParent = href !== "/" && pathname.startsWith(href + "/");

  const isActive = isExact || isParent;

  return (
    <Link
      href={href}
      className={`${className} ${isActive ? activeClassName : ""}`.trim()}
      aria-current={isExact ? "page" : undefined}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
}
