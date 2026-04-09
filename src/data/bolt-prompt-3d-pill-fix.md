# Bolt.new Prompt -- Fix Broken 3D Pill Capsules

## How to Use

Paste this single prompt into Bolt.new. This completely replaces the broken Pill3D component with a corrected version. One prompt, one step.

---
---

## Replace the Pill3D Component with a Working 3D Capsule

*Scope: The Pill3D component on the Landing/homepage ONLY. Do NOT touch any other page, the mobile flat pill view, the MatrixRain component, or any other element.*

---

```
CONTEXT: This is a React + Vite + Tailwind CSS app. The homepage has two 3D pill capsule components (Pill3D) that were recently added for the desktop view. They are BROKEN and need to be completely rewritten. The current problems are:

1. HUGE GAPS between cylinder halves: The top cylinder half and bottom cylinder half have a ~30px empty gap between them, making the pill look like two separate drums stacked with a dark void in the middle.
2. TOP CAP DISCONNECTED: The hemisphere cap at the top is positioned 30px above where the cylinder body starts, creating a floating cap with a dark gap beneath it.
3. RIBBED/STRIPED appearance: Only 10 slats per half with no gap-filling means the pill looks like a stack of separated rings or a ribbed barrel, not a smooth capsule.
4. SEE-THROUGH: The inner cylinder has the same gaps, so you can see the Matrix rain background through the middle of the pill.
5. GLOW IS RECTANGULAR: The glow behind each pill renders as a visible rectangle instead of a soft diffused oval.

I need you to DELETE the entire current Pill3D component code and REPLACE it with a completely new, simpler, more reliable approach described below.

Do NOT change any visual design, colors, fonts, or page content on any other page. Do NOT change the MatrixRain background. Do NOT change the mobile flat pill view (the existing pill-capsule divs that render below 1024px). Do NOT change the homepage text, layout, or footer.

THE NEW APPROACH -- SINGLE CONTINUOUS CYLINDER (NOT SPLIT HALVES):

The current broken approach splits the cylinder into two halves with a gap. The fix is simple: build ONE continuous cylinder that spans the entire capsule body height, with no split.

Here is the exact new Pill3D component structure:

STEP 1 -- THE CONTAINER:
- A div with class "pill-3d-capsule"
- width: 60px, height: 180px
- position: relative
- transform-style: preserve-3d
- Apply the existing pillSpin animation to this div (same keyframes, same duration, same timing)

STEP 2 -- THE SOLID INNER CORE (prevents see-through):
- A single div positioned absolute inside the container
- width: 52px (slightly less than capsule diameter)
- height: 180px (full height of capsule)
- left: 4px (centered)
- top: 0px
- border-radius: 30px (makes it a pill/capsule shape)
- background: solid dark color (#001a33 for blue pill, #1a0008 for red pill)
- This is the opaque backing that prevents any see-through between slats
- No transform needed -- it sits at translateZ(0) as the core

STEP 3 -- THE CYLINDER SLATS (the 3D surface):
- Create 16 slats (NOT 10 -- more slats = smoother cylinder)
- Each slat is a div with:
  - position: absolute
  - width: 14px
  - height: 120px (this is the straight cylinder body, not including the rounded caps)
  - top: 30px (starts 30px down, leaving room for the top hemisphere)
  - left: 23px (centered: (60 - 14) / 2 = 23)
  - transform: rotateY(i * 22.5deg) translateZ(28px)
    where i goes from 0 to 15, and 22.5 = 360/16
    and 28px is the cylinder radius
  - backface-visibility: hidden
  - background: linear-gradient(90deg, [darkColor] 0%, [lightColor] 40%, [midColor] 60%, [darkColor] 100%)
    This gradient across each slat's width creates the shading that makes the cylinder look round
  - border-radius: 1px (very slight rounding to soften hard edges between slats)

  Colors for blue pill slats: darkColor=#003399, lightColor=#2080ff, midColor=#1a66cc
  Colors for red pill slats: darkColor=#8a0018, lightColor=#ff1744, midColor=#cc1235

STEP 4 -- THE TOP HEMISPHERE CAP:
- 8 concentric disc rings stacked to form a dome
- Each ring is a div with:
  - position: absolute
  - border-radius: 50%
  - transform: rotateX(90deg) translateZ([yOffset]px)
  - transform-origin: center center
  - backface-visibility: hidden
  - background: radial-gradient(ellipse, [lightColor] 20%, [darkColor] 80%)

  Ring dimensions and positions (top cap, dome curves upward):
  - Ring 0: width 56px, height 56px, left 2px, translateZ(-30px) -- base of dome, connects to cylinder top
  - Ring 1: width 54px, height 54px, left 3px, translateZ(-26px)
  - Ring 2: width 50px, height 50px, left 5px, translateZ(-22px)
  - Ring 3: width 44px, height 44px, left 8px, translateZ(-18px)
  - Ring 4: width 36px, height 36px, left 12px, translateZ(-14px)
  - Ring 5: width 26px, height 26px, left 17px, translateZ(-10px)
  - Ring 6: width 16px, height 16px, left 22px, translateZ(-6px)
  - Ring 7: width 8px, height 8px, left 26px, translateZ(-3px) -- tip of dome

  The translateZ values position each ring along the vertical axis (since it's rotated 90deg on X, the Z axis becomes the visual Y axis). Negative Z = upward in screen space when rotateX(90deg).

  Top cap color: Use the pill's "left half" color palette (darker half)
  Blue: light=#2070dd, dark=#003399
  Red: light=#cc1030, dark=#8a0018

STEP 5 -- THE BOTTOM HEMISPHERE CAP:
- Same 8 rings as top, but mirrored (dome curves downward):
  - Ring 0: width 56px, height 56px, left 2px, translateZ(150px) -- base of dome, connects to cylinder bottom (cylinder body ends at top:30px + 120px = 150px from container top)
  - Ring 1: width 54px, height 54px, left 3px, translateZ(154px)
  - Ring 2: width 50px, height 50px, left 5px, translateZ(158px)
  - Ring 3: width 44px, height 44px, left 8px, translateZ(162px)
  - Ring 4: width 36px, height 36px, left 12px, translateZ(166px)
  - Ring 5: width 26px, height 26px, left 17px, translateZ(170px)
  - Ring 6: width 16px, height 16px, left 22px, translateZ(174px)
  - Ring 7: width 8px, height 8px, left 26px, translateZ(177px) -- tip of dome

  Bottom cap color: Use the pill's "right half" color palette (brighter half)
  Blue: light=#2080ff, dark=#1a66cc
  Red: light=#ff1744, dark=#cc1235

STEP 6 -- THE SEAM:
- A single ring at the midpoint of the cylinder body (where the two color halves meet)
- position: absolute, top: 89px (midpoint: 30px + 120px/2 - 1px), left: 0px
- width: 60px, height: 3px
- border-radius: 50%
- background: linear-gradient(90deg, rgba(0,0,0,0.5), rgba(0,0,0,0.7), rgba(0,0,0,0.5))
- transform: translateZ(29px) -- just slightly in front of the slats
- Plus a 1px light line directly below it:
  - Same positioning but top: 92px, height: 1px
  - background: rgba(255,255,255,0.12)

STEP 7 -- THE SPECULAR HIGHLIGHT:
- A single vertical strip overlaid on the capsule:
- position: absolute
- width: 16px, height: 140px
- top: 20px, left: 12px
- background: linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.06) 10%, rgba(255,255,255,0.22) 45%, rgba(255,255,255,0.22) 55%, rgba(255,255,255,0.06) 90%, transparent 100%)
- border-radius: 40%
- transform: translateZ(29px) -- in front of slats
- pointer-events: none
- backface-visibility: hidden

STEP 8 -- THE GLOW (FIX THE RECTANGULAR SHAPE):
This is critical. The glow div that sits BEHIND the pill must be fixed. Currently it appears as a visible rectangle.

The glow div should be:
- position: absolute
- width: 90px
- height: 200px
- top: 10px (centered vertically in the 220px container)
- left: 15px (centered horizontally in the 120px container)
- border-radius: 50% (this makes it a true ellipse/oval, NOT a rectangle)
- background: radial-gradient(ellipse at center, [glowColor] 0%, transparent 70%)
  Blue: glowColor = rgba(32, 128, 255, 0.35)
  Red: glowColor = rgba(255, 23, 68, 0.35)
- filter: blur(20px)
- pointer-events: none
- z-index: -1 (behind the pill)

DELETE the existing split glow divs (the two half-pill-shaped glow divs with boxShadow). Replace them with this single radial-gradient ellipse. This creates a soft, diffused, oval glow instead of a rectangular one.

Also DELETE the outer "rounded-full blur-3xl" ambient glow div if it's creating a visible rectangle. Replace it with the single radial-gradient glow described above. One glow layer is enough.

STEP 9 -- AMBIENT SHADOW (optional polish):
- A flat ellipse beneath the pill to ground it:
- position: absolute
- width: 50px, height: 14px
- bottom: -8px, left: 5px
- border-radius: 50%
- background: rgba(0, 0, 0, 0.35)
- filter: blur(6px)
- pointer-events: none

STEP 10 -- CYLINDER BODY COLOR SPLIT:
The capsule should have two distinct color halves (like a real pharmaceutical capsule). The top half of the cylinder slats should use the darker color and the bottom half should use the lighter color. To achieve this, each slat's background should be a VERTICAL gradient (top-to-bottom) in addition to the horizontal shading gradient. Use this combined approach:

Each slat background: 
- Top 48% of slat height: darker color palette with horizontal shading
- A 4% transition zone in the middle
- Bottom 48% of slat height: lighter color palette with horizontal shading

This can be done with a single background using multiple gradient layers or by splitting each slat into a top div and bottom div inside it (simpler).

SIMPLEST approach: Make each slat have a CSS background that uses the gradient:
background: linear-gradient(180deg, [topDarkColor] 0%, [topLightColor] 20%, [topMidColor] 30%, [topDarkColor] 48%, [seamDarkColor] 50%, [bottomDarkColor] 52%, [bottomLightColor] 70%, [bottomMidColor] 80%, [bottomDarkColor] 100%)

The horizontal shading (making the cylinder look round) comes from varying the gradient's light/dark colors per-slat based on its angle:
- Slats in positions 0-3 and 13-15 (front-facing): use brighter versions of the colors
- Slats in positions 5-11 (back-facing, but hidden by backface-visibility): won't be visible anyway
- Slats 4 and 12 (side-facing): use the mid/dark versions

Actually, since backface-visibility:hidden hides the back slats automatically, just use the same gradient on all slats. The 3D rotation will naturally create the lighting effect as different slats face toward and away from the viewer.

IMPORTANT CONSTRAINTS:
- Do NOT add Three.js, WebGL, or any new npm packages
- Do NOT change any other page
- Do NOT change the mobile flat pill view (below 1024px)
- Do NOT change the MatrixRain component
- Do NOT change the homepage text, layout, heading, or footer
- Do NOT change the Framer Motion button wrapper (whileHover, whileTap, scale effects)
- Do NOT change the tooltip behavior
- Keep the pillSpin animation keyframes exactly as they are
- Keep the spinning-fast hover acceleration
- Keep prefers-reduced-motion support
- Keep the animation delay offset (blue: 0s, red: -3.3s)
- The pill must remain clickable (the button wrapper captures all clicks)
- The 3D pill must be approximately the same size as the old flat pill (60px wide, 180px tall)
- Performance: add will-change: transform on the pill-3d-capsule div and contain: layout style paint on the button container

TESTING AFTER IMPLEMENTATION:
1. Both pills should look like smooth, solid, pharmaceutical capsules -- NOT ribbed barrels or striped cylinders
2. No dark gaps or stripes visible anywhere on the capsule surface
3. The glow behind each pill should be a soft, diffused oval -- NOT a visible rectangle
4. You should NOT be able to see the Matrix rain through the pill body
5. The two-tone color split (dark top half, bright bottom half) should be visible
6. The pills should spin smoothly at 60fps
7. Hover should speed up the spin and slightly scale the button
8. Mobile (< 1024px) should show the original flat pills with zero changes
9. The specular highlight should create a glossy sheen on the front face
```

---
---

## What This Fixes

| Problem | Cause | Fix |
|---------|-------|-----|
| Dark horizontal stripes/gaps | Cylinder split into two halves with 30px gap between them | Single continuous cylinder body, no split |
| Floating top cap | Cap positioned at top:30px, cylinder starts at top:60px | Cap rings positioned to connect directly to cylinder top |
| See-through body | Inner cylinder also had gaps | Single full-height solid core div behind all slats |
| Rectangular glow | Multiple glow divs with box-shadow creating visible edges | Single radial-gradient ellipse with blur |
| Ribbed/faceted look | Only 10 slats, no edge rounding | 16 slats with 1px border-radius |
| Not pill-shaped | Separate disconnected elements | Unified structure: solid core + continuous slats + connected caps |

## Verification Checklist

After Bolt applies the changes:
- [ ] Both pills render as smooth, solid capsules (no gaps, no stripes, no see-through)
- [ ] Glow is a soft oval, not a rectangle
- [ ] Two-tone color split is visible (dark top half, bright bottom half)
- [ ] Pills spin smoothly without jank
- [ ] Hover speeds up spin and scales button
- [ ] Mobile (resize to < 1024px) shows original flat pills unchanged
- [ ] Matrix rain background still runs normally
- [ ] Both pills are clickable (blue goes to UN Global Compact, red goes to evidence)
- [ ] Tooltip appears on hover
