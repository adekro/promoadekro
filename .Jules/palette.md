## 2025-05-14 - Accessible Smooth Scrolling
**Learning:** Global `scroll-behavior: smooth` can cause motion sickness or discomfort for users with vestibular disorders if not properly gated.
**Action:** Always wrap smooth scrolling CSS in a `@media (prefers-reduced-motion: no-preference)` block.

## 2025-05-14 - Keyboard Navigation Visibility
**Learning:** Default browser focus rings are often insufficient or inconsistent with brand identity, leading to poor keyboard navigation experiences.
**Action:** Implement a global `*:focus-visible` style using brand-consistent colors and adequate contrast to ensure clear focus states.

## 2025-05-15 - Sticky Header Content Overlap
**Learning:** Sticky headers can obscure anchor targets (like 'Skip to content' or section links) when navigating, leading to poor accessibility and UX.
**Action:** Use a CSS variable for the header height (e.g., `--header-offset`) and apply `scroll-margin-top` to anchor targets or the `main` element to preserve visibility.

## 2025-05-15 - Dynamic Navigation States
**Learning:** Next.js navigation often lacks visual active states, especially for nested routes. `aria-current="page"` should be reserved for exact matches, while visual active classes can be used for parent sections.
**Action:** Use a Client Component with `usePathname` to implement conditional logic that matches exact routes and sub-paths (using directory boundary checks) to maintain user context.
