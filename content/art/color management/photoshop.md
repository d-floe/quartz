---
title: Photoshop and Illustrator Color Management
description: d-floe's guide on disabling color management in Adobe Photoshop and Illustrator.
tags:
  - guide
---
The following guide is a sub-article of [[color-precision|Achieving Color Precision]].
### Adobe Photoshop / Illustrator

This one took a while to figure out because people online would explicitly say **not** to do this, and yet it ended up being the solution I needed.

To disable color management in Photoshop and Illustrator, simply go to `Edit` -> `Color Settings` and set the `Settings` dropdown to `Monitor Color`. Then, click `OK`.

![[color-precision-37.png]]
![[color-precision-40.png]]

If you want to undo this, simply change the `Settings` dropdown to `North America General Purpose 2`.

#### Save for Web, Quick Export, and Export As

When using the `Save for Web` feature, make sure to uncheck `Convert to sRGB`. This will keep images from exporting _too_ saturated.

![[color-precision-41.png]]

Before using the Quick Export feature, go to `File` -> `Export `-> `Export Preferences` and make sure to uncheck `Convert to sRGB`.

![[color-precision-50.png]]

When using the `Export As` feature, make sure to uncheck `Convert to sRGB`.

![[color-precision-51.png]]

---

## Conclusion

I decided to write all this because color has been — and continues to be — a logistical nightmare to deal with. Hopefully, this guide will help clear up any confusion you may have about how to maintain color consistency. If you have any questions or suggestions, please reach out to me!