## 2026-03-29 - Target Hovered Bento Card Spotlight on Mousemove
**Learning:** Attaching a global `mousemove` listener that iterates over all DOM elements and calls `getBoundingClientRect()` causes unnecessary layout recalculations and style mutations for unhovered elements.
**Action:** Use event delegation (`e.target.closest('.bento-card')`) to measure layout and update CSS variables (`--mouse-x`, `--mouse-y`) strictly for the currently hovered card.
