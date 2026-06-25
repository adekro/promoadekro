## 2025-05-14 - Accessible Smooth Scrolling
**Learning:** Global `scroll-behavior: smooth` can cause motion sickness or discomfort for users with vestibular disorders if not properly gated.
**Action:** Always wrap smooth scrolling CSS in a `@media (prefers-reduced-motion: no-preference)` block.

## 2025-05-14 - Keyboard Navigation Visibility
**Learning:** Default browser focus rings are often insufficient or inconsistent with brand identity, leading to poor keyboard navigation experiences.
**Action:** Implement a global `*:focus-visible` style using brand-consistent colors and adequate contrast to ensure clear focus states.

## 2025-05-14 - Dynamic Navigation States
**Learning:** In Next.js App Router, using a dedicated Client Component for navigation links allows for efficient active state detection using `usePathname` without converting the entire layout to a Client Component. Semantic `aria-current="page"` should only be applied to exact matches, while visual highlights can use prefix matching (e.g., `pathname.startsWith(href + '/')`) to maintain context in dynamic sub-routes.
**Action:** Extract navigation logic into a `NavLinks.tsx` component and use the `usePathname` hook for both accessibility attributes and visual styling.

## 2025-05-14 - Sticky Header Anchor Overlap
**Learning:** Sticky headers often obscure anchor link targets, causing a poor "Jump to" experience. Using a hardcoded `padding-top` on the target can break layout spacing.
**Action:** Use `scroll-margin-top` on the main content container (or specific targets) mapped to a CSS variable representing the header height (e.g., `--header-offset`). This provides a clean buffer without affecting the actual layout positioning.
