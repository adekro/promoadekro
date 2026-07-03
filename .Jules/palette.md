## 2025-05-14 - Accessible Smooth Scrolling
**Learning:** Global `scroll-behavior: smooth` can cause motion sickness or discomfort for users with vestibular disorders if not properly gated.
**Action:** Always wrap smooth scrolling CSS in a `@media (prefers-reduced-motion: no-preference)` block.

## 2025-05-14 - Keyboard Navigation Visibility
**Learning:** Default browser focus rings are often insufficient or inconsistent with brand identity, leading to poor keyboard navigation experiences.
**Action:** Implement a global `*:focus-visible` style using brand-consistent colors and adequate contrast to ensure clear focus states.

## 2025-05-14 - Dynamic Navigation Highlights
**Learning:** Hardcoded navigation links without active state indicators create a disconnected user experience and lack essential semantic cues for screen readers.
**Action:** Use a dedicated Client Component with `usePathname` to apply `aria-current="page"` for exact matches and a visual `.active` class for subpath matches (e.g., highlighting "Products" when viewing a specific product).
