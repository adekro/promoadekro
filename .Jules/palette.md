## 2025-05-14 - Accessible Smooth Scrolling
**Learning:** Global `scroll-behavior: smooth` can cause motion sickness or discomfort for users with vestibular disorders if not properly gated.
**Action:** Always wrap smooth scrolling CSS in a `@media (prefers-reduced-motion: no-preference)` block.

## 2025-05-14 - Keyboard Navigation Visibility
**Learning:** Default browser focus rings are often insufficient or inconsistent with brand identity, leading to poor keyboard navigation experiences.
**Action:** Implement a global `*:focus-visible` style using brand-consistent colors and adequate contrast to ensure clear focus states.

## 2026-07-01 - Dynamic Navigation States
**Learning:** Showing the current page in the navigation improves orientation. Combining exact match for `aria-current="page"` and prefix matching for visual highlights ensures both accessibility and correct parent highlighting for nested routes.
**Action:** Use a dedicated Client Component (e.g., `NavLinks.tsx`) with `usePathname` to manage active states, keeping the layout as a Server Component.
