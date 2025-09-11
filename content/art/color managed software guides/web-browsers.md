---
title: Fixing Color Management in Web Browsers
description: d-floe's guide on disabling color management in various web browsers.
tags:
  - guide
---

The following guide is a sub-article of [[color-precision|Achieving Color Precision]].
### Web Browsers

Below is an untagged CSS element on top of a tagged sRGB image. If you see any difference in each color vertically, your browser is currently color managed; otherwise, both reds should look the same, both greens should look the same, and both blues should look the same.

<div class="bars">
	<div class="red bar"></div>
	<div class="green bar"></div>
	<div class="blue bar"></div>
</div>
![[color-precision-1.jpg]]

> [!info] Note
>
> If you have any extensions that mess with how websites are displayed such as Dark Reader, you may need to turn them OFF or disable them for this test.

#### Google Chrome

In Chrome, go to `chrome://flags/#force-color-profile` into your address bar, and set `Force color profile` to `sRGB`. Then, restart your browser.

![[color-precision-29.png]]

#### Microsoft Edge

In Edge, go to `edge://flags/#force-color-profile` into your address bar, and set `Force color profile` to `sRGB`. Then, restart your browser.

![[Pasted image 20230722051222.png]]

#### Firefox

In Firefox, go to `about:config` into your address bar and type `srgb` in the search bar. Double-click on `gfx.color_management.native_srgb` so it switches to `true`. Then, restart your browser.

![[color-precision-31.png]]

#### Other Browsers

If you are using another browser, it's either not color managed, or you know how to look up the solution.

---
