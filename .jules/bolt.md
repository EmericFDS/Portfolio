## 2026-08-31 - Eliminate Layout Thrashing in Card Spotlight Interactions
**Learning:** Attaching `mousemove` listeners to `window` that iterate over multiple elements calling `getBoundingClientRect()` and `style.setProperty()` causes forced synchronous layout thrashing on every cursor movement pixel (~1000 DOM ops/sec).
**Action:** Always scope mouse tracking to individual hovered elements, cache bounding rects on `mouseenter` (invalidating on scroll/resize), and throttle CSS variable updates with `requestAnimationFrame`.
