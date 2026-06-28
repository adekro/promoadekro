## 2025-05-14 - Accessible Smooth Scrolling
**Learning:** Global `scroll-behavior: smooth` can cause motion sickness or discomfort for users with vestibular disorders if not properly gated.
**Action:** Always wrap smooth scrolling CSS in a `@media (prefers-reduced-motion: no-preference)` block.

## 2025-05-14 - Keyboard Navigation Visibility
**Learning:** Default browser focus rings are often insufficient or inconsistent with brand identity, leading to poor keyboard navigation experiences.
**Action:** Implement a global `*:focus-visible` style using brand-consistent colors and adequate contrast to ensure clear focus states.

## 2026-06-28 - Hybrid Navigation Highlights
**Learning:** For multi-level navigation in Next.js, a hybrid matching strategy is optimal. Use exact path matching for `aria-current="page"` to follow ARIA standards, while using directory-based partial matching (e.g., `startsWith(href + '/')`) for visual highlights to maintain context when a user is deep within a section.
**Action:** Implement `NavLinks` as a client component using `usePathname` with distinct logic for semantic labeling vs. visual styling.
