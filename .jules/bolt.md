## 2026-03-22 - Layout Thrashing on High-Frequency Mousemove Events
**Learning:** Calling `getBoundingClientRect()` inside a global `mousemove` handler on all grid/card items causes forced synchronous layout thrashing up to 120+ times per second, even when hover CSS effects (`.bento-card::before`, `.bento-card::after`) are only visible on `:hover` (`opacity: 1`).
**Action:** Use event delegation (`e.target.closest('.selector')`) or `:hover` state checks to invoke `getBoundingClientRect()` and CSS custom variable updates (`--mouse-x`, `--mouse-y`) strictly on the active target element.
