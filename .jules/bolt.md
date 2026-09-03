## 2026-03-20 - Canvas Particle Render Loop Allocation Churn

**Learning:** In 60 FPS Canvas animation loops (`requestAnimationFrame`), dynamically concatenating strings (e.g. `${p.color}${p.baseAlpha})`) and searching strings (`p.color.includes(...)`) per particle causes garbage collection pressure and unnecessary string parsing CPU work. Also, calling `Math.sqrt` before checking squared distance thresholds leads to redundant square root calculations for distant particles.

**Action:** Pre-calculate `fillStyle` and `shadowColor` properties when particles are initialized or resized, and check squared distances (`distSq < radiusSq`) before executing `Math.sqrt`.
