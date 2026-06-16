"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
}

export function NavLink({
  href,
  children,
  className = "",
  activeClassName = "active",
}: NavLinkProps) {
  const pathname = usePathname();

  // Exact match for aria-current
  const isExactMatch = pathname === href;

  // Active match: exact match OR starts with href (if href is not root) followed by /
  const isActive =
    isExactMatch || (href !== "/" && pathname.startsWith(href + "/"));

  return (
    <Link
      href={href}
      className={`${className} ${isActive ? activeClassName : ""}`.trim()}
      aria-current={isExactMatch ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
