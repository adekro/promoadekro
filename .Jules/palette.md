## 2025-06-14 - Dynamic Navigation & Sticky Header Accessibility
**Learning:** Sticky headers often obscure content when users navigate via internal anchors or "Skip to Content" links. Additionally, static navigation menus fail to provide the visual and semantic context necessary for a good user experience.
**Action:** Use `scroll-margin-top` on main content containers to account for fixed header heights. Implement Client Components with `usePathname` in Next.js to provide dynamic `.active` classes and `aria-current="page"` attributes for better orientation and accessibility.
