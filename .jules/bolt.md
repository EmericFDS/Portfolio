## 2026-03-19 - Canvas Particle Constellation Line Batching & Style Precomputation
**Learning:** Unbatched `stroke()` draw calls and string creation inside canvas particle connection loops create high CPU/GPU state switching overhead (~100-200 draw calls/frame). Quantizing line opacity into pre-allocated opacity bins reduces draw calls by ~95% (down to <=8 stroke calls/frame) while precomputing particle `fillStyle` and `shadowColor` eliminates per-frame string allocations.
**Action:** Always batch canvas path drawing operations into discrete opacity/style bins and precompute invariant particle style strings during initialization.

## 2026-09-07 - Radial Spotlight Event Delegation & Squared Distance Check
**Learning:** Unconditional calls to `getBoundingClientRect()` inside global `mousemove` handlers trigger forced synchronous layouts across all cards on every frame. Using event delegation (`e.target.closest('.bento-card')`) combined with `requestAnimationFrame` eliminates layout thrashing. Furthermore, guarding `Math.sqrt()` with squared distance (`distSq < radiusSq`) avoids expensive square root calculations in animation loops.
**Action:** Target only active DOM elements during mousemove events and delay distance calculations until squared boundary checks pass.
