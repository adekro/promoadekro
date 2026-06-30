## 2025-05-14 - Accessible Smooth Scrolling
**Learning:** Global `scroll-behavior: smooth` can cause motion sickness or discomfort for users with vestibular disorders if not properly gated.
**Action:** Always wrap smooth scrolling CSS in a `@media (prefers-reduced-motion: no-preference)` block.

## 2025-05-14 - Keyboard Navigation Visibility
**Learning:** Default browser focus rings are often insufficient or inconsistent with brand identity, leading to poor keyboard navigation experiences.
**Action:** Implement a global `*:focus-visible` style using brand-consistent colors and adequate contrast to ensure clear focus states.

## 2026-06-30 - Precise Navigation Highlighting
**Learning:** Highlighting navigation links requires distinguishing between the exact current page and parent routes. Using `aria-current="page"` strictly for exact matches while using a visual class for parent routes ensures both accessibility and intuitive UX.
**Action:** Combine exact match (`pathname === href`) for ARIA attributes and prefix match (`pathname.startsWith(href + "/")`) for visual highlighting of parent categories.
