## 2026-09-07 - Radial Spotlight Event Delegation & Squared Distance Check
**Learning:** Unconditional calls to `getBoundingClientRect()` inside global `mousemove` handlers trigger forced synchronous layouts across all cards on every frame. Using event delegation (`e.target.closest('.bento-card')`) combined with `requestAnimationFrame` eliminates layout thrashing. Furthermore, guarding `Math.sqrt()` with squared distance (`distSq < radiusSq`) avoids expensive square root calculations in animation loops.
**Action:** Target only active DOM elements during mousemove events and delay distance calculations until squared boundary checks pass.

## 2026-03-19 - Canvas Animation Hot Path State & String Allocation Optimization
**Learning:** In 60 FPS canvas animation loops, constructing string templates (e.g. `${p.color}${p.baseAlpha})`) and setting context properties (`shadowBlur`, `lineWidth`) repeatedly per particle causes unnecessary garbage collection pressure and canvas context state overhead. Pre-calculating `fillStyle` and `shadowColor` during particle setup and setting context states outside inner loops eliminates per-frame string allocations and context switches.
**Action:** Pre-compute immutable color/style strings at initialization and hoist static canvas context configuration outside per-particle loops.

## 2026-09-22 - Scroll Listener Layout Thrashing & rAF Throttling
**Learning:** Attaching an unthrottled  listener that reads DOM layout properties (, , ) on every scroll event causes layout thrashing during fast scroll sequences. Guarding the handler with  () limits execution to at most once per animation frame (~60 FPS), drastically reducing redundant DOM read/write cycles.
**Action:** Wrap DOM layout query logic inside scroll handlers with a boolean flag check and .

## 2026-10-05 - Canvas 2D Constellation Line Batching & Quantized Alpha Buckets
**Learning:** Calling `beginPath()`, setting dynamic `strokeStyle` strings, and issuing `stroke()` per line segment inside a 60 FPS Canvas 2D loop causes thousands of draw calls and string allocations per second. Quantizing line opacity into 10 pre-calculated alpha bucket strings and collecting coordinate endpoints into pre-allocated bucket arrays reduces Canvas `stroke()` calls by over 80% and eliminates per-line GC churn.
**Action:** Group variable-opacity canvas path coordinates into pre-allocated alpha buckets and draw path batches with single `stroke()` calls per alpha bucket.
