## 2025-05-14 - Accessible Smooth Scrolling
**Learning:** Global `scroll-behavior: smooth` can cause motion sickness or discomfort for users with vestibular disorders if not properly gated.
**Action:** Always wrap smooth scrolling CSS in a `@media (prefers-reduced-motion: no-preference)` block.

## 2025-05-14 - Keyboard Navigation Visibility
**Learning:** Default browser focus rings are often insufficient or inconsistent with brand identity, leading to poor keyboard navigation experiences.
**Action:** Implement a global `*:focus-visible` style using brand-consistent colors and adequate contrast to ensure clear focus states.

## 2025-05-14 - Hybrid Navigation State Detection
**Learning:** For effective navigation UX, exact path matches should be used for semantic ARIA attributes (`aria-current="page"`), while prefix-based matching should be used for visual "active" states to preserve context when a user navigates to sub-resources.
**Action:** In Next.js navigation components, distinguish between the semantic current page and the visual active section.
