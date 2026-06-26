## 2025-05-14 - Accessible Smooth Scrolling
**Learning:** Global `scroll-behavior: smooth` can cause motion sickness or discomfort for users with vestibular disorders if not properly gated.
**Action:** Always wrap smooth scrolling CSS in a `@media (prefers-reduced-motion: no-preference)` block.

## 2025-05-14 - Keyboard Navigation Visibility
**Learning:** Default browser focus rings are often insufficient or inconsistent with brand identity, leading to poor keyboard navigation experiences.
**Action:** Implement a global `*:focus-visible` style using brand-consistent colors and adequate contrast to ensure clear focus states.

## 2025-05-15 - Dynamic Navigation Subpath Highlighting
**Learning:** Visual navigation persistence is lost on subpages if only exact path matching is used. Combining exact match for ARIA and prefix matching for visual highlights improves orientation.
**Action:** Use `pathname.startsWith(href + '/')` to maintain active states for parent navigation items when users are deep-linked into subpaths.
