## 2025-05-14 - Accessible Smooth Scrolling
**Learning:** Global `scroll-behavior: smooth` can cause motion sickness or discomfort for users with vestibular disorders if not properly gated.
**Action:** Always wrap smooth scrolling CSS in a `@media (prefers-reduced-motion: no-preference)` block.

## 2025-05-14 - Keyboard Navigation Visibility
**Learning:** Default browser focus rings are often insufficient or inconsistent with brand identity, leading to poor keyboard navigation experiences.
**Action:** Implement a global `*:focus-visible` style using brand-consistent colors and adequate contrast to ensure clear focus states.

## 2025-06-27 - Intelligent Navigation Highlighting
**Learning:** Using exact pathname matches for navigation links breaks when users visit sub-pages (e.g., /blog/my-post), losing the visual scent of information. However, simple prefix matching can cause "false positives" (e.g., /prodotti-vecchi matching /prodotti).
**Action:** Use a combination of exact match for ARIA attributes and a directory-boundary prefix check (e.g., `pathname.startsWith(href + '/')`) for visual highlights to maintain context on nested routes without matching sibling paths.
