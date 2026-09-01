## 2026-03-20 - Global Mousemove Listener Layout Thrashing
**Learning:** Attaching a global `window` `mousemove` listener that loops through all `.bento-card` elements to call `getBoundingClientRect()` and set inline CSS properties on every mouse pixel movement forces DOM layout recalculations across unhovered cards up to 240+ times per second.
**Action:** Attach `mouseenter`, `mousemove`, and `mouseleave` listeners directly to card elements, cache bounding rects on hover (invalidating on resize/scroll), and update CSS custom properties only on the active hovered card.
