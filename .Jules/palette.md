## 2025-05-14 - Accessible Smooth Scrolling
**Learning:** Global `scroll-behavior: smooth` can cause motion sickness or discomfort for users with vestibular disorders if not properly gated.
**Action:** Always wrap smooth scrolling CSS in a `@media (prefers-reduced-motion: no-preference)` block.

## 2025-05-14 - Keyboard Navigation Visibility
**Learning:** Default browser focus rings are often insufficient or inconsistent with brand identity, leading to poor keyboard navigation experiences.
**Action:** Implement a global `*:focus-visible` style using brand-consistent colors and adequate contrast to ensure clear focus states.

## 2025-05-15 - Sticky Header Overlay on Anchors
**Learning:** Sticky headers often overlap target elements when using internal anchor links or "Skip to content" links, breaking the user's focus and obscuring content.
**Action:** Apply `scroll-margin-top` to target containers (like `#main-content`) equal to or greater than the header height to ensure the target is fully visible after navigation.

## 2025-05-15 - Dynamic Navigation Feedback
**Learning:** Users can lose context of their location in a multi-page app if the navigation menu doesn't provide visual and programmatic feedback about the active route.
**Action:** Use a dedicated Client Component with `usePathname` in Next.js layouts to apply `aria-current="page"` and active visual states to navigation links.
