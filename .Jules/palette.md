## 2025-05-14 - Accessible Smooth Scrolling
**Learning:** Global `scroll-behavior: smooth` can cause motion sickness or discomfort for users with vestibular disorders if not properly gated.
**Action:** Always wrap smooth scrolling CSS in a `@media (prefers-reduced-motion: no-preference)` block.

## 2025-05-14 - Keyboard Navigation Visibility
**Learning:** Default browser focus rings are often insufficient or inconsistent with brand identity, leading to poor keyboard navigation experiences.
**Action:** Implement a global `*:focus-visible` style using brand-consistent colors and adequate contrast to ensure clear focus states.

## 2025-05-15 - Dynamic Navigation States in Next.js
**Learning:** In Next.js App Router, using a dedicated Client Component for navigation links allows for dynamic active states using `usePathname` while keeping the Root Layout as a Server Component. Combining `pathname === href` for accessibility (`aria-current`) and `pathname.startsWith(href + '/')` for visual hierarchy (parent highlighting) provides a superior UX.
**Action:** Implement navigation links in a Client Component and use both exact and prefix matching for optimal state representation.
