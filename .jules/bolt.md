## 2026-09-02 - Eliminate Layout Thrashing in Bento Card Spotlight Effect
**Learning:** Calling `getBoundingClientRect()` on every element in a global `window` `mousemove` handler causes severe layout thrashing and forced reflows on every pixel of mouse movement.
**Action:** Attach `mousemove` listeners directly to specific hoverable targets (`.bento-card`), and cache bounding rect measurements on `mouseenter` and `resize` events to avoid layout recalculations during motion.
