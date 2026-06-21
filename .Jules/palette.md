## 2025-05-14 - Accessible Smooth Scrolling
**Learning:** Global `scroll-behavior: smooth` can cause motion sickness or discomfort for users with vestibular disorders if not properly gated.
**Action:** Always wrap smooth scrolling CSS in a `@media (prefers-reduced-motion: no-preference)` block.

## 2025-05-14 - Keyboard Navigation Visibility
**Learning:** Default browser focus rings are often insufficient or inconsistent with brand identity, leading to poor keyboard navigation experiences.
**Action:** Implement a global `*:focus-visible` style using brand-consistent colors and adequate contrast to ensure clear focus states.

## 2025-05-15 - Subpath Navigation Highlighting
**Learning:** Standard exact-match route highlighting fails when viewing nested resources (e.g., product details), losing context for the user.
**Action:** Implement directory boundary checks (e.g., `pathname.startsWith(href + '/')`) in navigation components to maintain parent link highlighting for subpaths.

## 2025-05-15 - Sticky Header Offset Management
**Learning:** Sticky headers often obscure anchor targets (like 'Skip to Content' or internal links), creating a jarring jump-cut experience.
**Action:** Use a CSS variable for header height (e.g., `--header-offset`) and apply it via `scroll-margin-top` to the `main` element or specific anchor targets.
