## 2026-09-07 - Radial Spotlight Event Delegation & Squared Distance Check
**Learning:** Unconditional calls to `getBoundingClientRect()` inside global `mousemove` handlers trigger forced synchronous layouts across all cards on every frame. Using event delegation (`e.target.closest('.bento-card')`) combined with `requestAnimationFrame` eliminates layout thrashing. Furthermore, guarding `Math.sqrt()` with squared distance (`distSq < radiusSq`) avoids expensive square root calculations in animation loops.
**Action:** Target only active DOM elements during mousemove events and delay distance calculations until squared boundary checks pass.

## 2026-09-18 - Hardware Accelerated Custom Cursor & Idle Mutation Guard
**Learning:** Direct `style.left` and `style.top` DOM writes in `mousemove` event listeners trigger layout reflows at high polling rates (up to 1000Hz on gaming mice). Moving position updates to a `requestAnimationFrame` loop using GPU-accelerated `translate3d(x, y, 0) translate(-50%, -50%)` bypasses browser layout/reflow pipelines. Adding an idle position guard skips DOM mutations when stationary, reducing continuous DOM style writes by >88%.
**Action:** Decouple mouse tracking from DOM writes, use `translate3d` transforms for position animation, and skip DOM writes when coordinates are idle.
