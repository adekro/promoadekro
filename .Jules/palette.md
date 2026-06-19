## 2025-05-14 - Accessible Smooth Scrolling
**Learning:** Global `scroll-behavior: smooth` can cause motion sickness or discomfort for users with vestibular disorders if not properly gated.
**Action:** Always wrap smooth scrolling CSS in a `@media (prefers-reduced-motion: no-preference)` block.

## 2025-05-14 - Keyboard Navigation Visibility
**Learning:** Default browser focus rings are often insufficient or inconsistent with brand identity, leading to poor keyboard navigation experiences.
**Action:** Implement a global `*:focus-visible` style using brand-consistent colors and adequate contrast to ensure clear focus states.

## 2025-06-19 - Subpath Navigation Highlighting
**Learning:** In Next.js App Router, using exact pathname matches for active states fails when users navigate to detail pages (e.g., /prodotti/item).
**Action:** Use directory boundary checks (e.g., `pathname.startsWith(href + '/')`) in addition to exact matches to maintain visual context in navigation.

## 2025-06-19 - Sticky Header Accessibility
**Learning:** Sticky headers often obscure anchor targets and "Skip to Content" destinations, frustrating keyboard and screen reader users.
**Action:** Apply `scroll-margin-top` to the main container or specific anchor targets that matches or exceeds the sticky header's height (e.g., 6rem for a ~92px header).
