## 2025-05-14 - Accessible Smooth Scrolling
**Learning:** Global `scroll-behavior: smooth` can cause motion sickness or discomfort for users with vestibular disorders if not properly gated.
**Action:** Always wrap smooth scrolling CSS in a `@media (prefers-reduced-motion: no-preference)` block.

## 2025-05-14 - Keyboard Navigation Visibility
**Learning:** Default browser focus rings are often insufficient or inconsistent with brand identity, leading to poor keyboard navigation experiences.
**Action:** Implement a global `*:focus-visible` style using brand-consistent colors and adequate contrast to ensure clear focus states.

## 2025-05-14 - Sticky Header Anchor Offsets
**Learning:** Fixed/Sticky headers often obscure content when navigating via anchor links (like "Skip to Content") because the browser aligns the top of the element with the top of the viewport.
**Action:** Apply `scroll-margin-top` (matching header height) to anchor targets or the `main` element to preserve visibility during navigation.

## 2025-05-14 - Contextual Navigation Highlighting
**Learning:** Users can lose context when navigating from a list page (e.g., /products) to a detail page (e.g., /products/1) if the navigation link loses its active state.
**Action:** Use `usePathname` to implement navigation highlighting that recognizes sub-paths (e.g., `pathname.startsWith(href + '/')`) so parent sections stay visually active.
