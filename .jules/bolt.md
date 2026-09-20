## 2026-09-07 - Radial Spotlight Event Delegation & Squared Distance Check
**Learning:** Unconditional calls to `getBoundingClientRect()` inside global `mousemove` handlers trigger forced synchronous layouts across all cards on every frame. Using event delegation (`e.target.closest('.bento-card')`) combined with `requestAnimationFrame` eliminates layout thrashing. Furthermore, guarding `Math.sqrt()` with squared distance (`distSq < radiusSq`) avoids expensive square root calculations in animation loops.
**Action:** Target only active DOM elements during mousemove events and delay distance calculations until squared boundary checks pass.

## 2026-09-08 - Canvas Animation Particle Property Pre-computation
**Learning:** Constructing template literal strings (`${p.color}${p.baseAlpha})`) and invoking string methods (`p.color.includes(...)`) inside 60 FPS Canvas `requestAnimationFrame` loops generates significant GC memory allocation overhead per frame across dozens of particles. Pre-computing `fillStyle` and `shadowColor` on particle instantiation completely eliminates string allocation overhead during rendering.
**Action:** Always pre-compute static canvas styling strings during object creation rather than dynamically constructing them in animation loop iterations.
