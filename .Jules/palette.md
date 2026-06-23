## 2025-05-14 - Accessible Smooth Scrolling
**Learning:** Global `scroll-behavior: smooth` can cause motion sickness or discomfort for users with vestibular disorders if not properly gated.
**Action:** Always wrap smooth scrolling CSS in a `@media (prefers-reduced-motion: no-preference)` block.

## 2025-05-14 - Keyboard Navigation Visibility
**Learning:** Default browser focus rings are often insufficient or inconsistent with brand identity, leading to poor keyboard navigation experiences.
**Action:** Implement a global `*:focus-visible` style using brand-consistent colors and adequate contrast to ensure clear focus states.

## 2025-05-14 - Active Navigation and Header Offset
**Learning:** Fixed-header layouts often cause anchor navigation to land behind the header, and users lose spatial awareness without visual feedback of the active page.
**Action:** Use `scroll-margin-top` on main content areas to account for sticky headers. Implement dynamic navigation that applies both visual highlighting for parent/active routes and semantic `aria-current="page"` for accessibility.
