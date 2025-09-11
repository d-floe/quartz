---
title: Fixing Color Management in Figma
description: d-floe's guide on disabling color management in Figma.
tags:
  - guide
---
The following guide is a sub-article of [[color-precision|Achieving Color Precision]].
### Figma

Currently there doesn't appear to be a viable way to turn off color management for the Figma desktop app. I suggest using the in-browser version of the app instead for color sensitive usage.

![[color-precision-52.png]]

> Left: Figma desktop (sRGB color profile) | Right: Figma in Firefox (sRGB)

You can try to set the color profile mode to `Display P3`, however this will instead slightly boost the saturation instead of displaying the colors accurately. This also affects how colors are exported, too.

![[color-precision-53.png]]

> Left: Figma in Firefox (sRGB) | Right: Figma desktop (Display P3 color profile)

---

