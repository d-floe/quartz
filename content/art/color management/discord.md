---
title: Discord Color Management
description: d-floe's guide on disabling color management in Discord.
tags:
  - guide
---
The following guide is a sub-article of [[color-precision|Achieving Color Precision]].
## Discord

### New Solution (Automatic)

To disable color management in Discord we will be implementing the `--force-color-profile=srgb` command line argument. Unfortunately this is not as simple as adding the parameter to the current Discord shortcut, so as a remedy I have created a script (with the help of ChatGPT) to resolve this issue.

Open **Notepad** and paste the following script:

```bat
@echo off
set "discord_dir=%LOCALAPPDATA%\Discord"

rem Find the newest app-* folder
for /f "delims=" %%i in ('dir /b /ad "%discord_dir%\app-*" ^| sort /r') do (
    set "latest=%%i"
    goto :found
)

:found
start "" "%discord_dir%\%latest%\Discord.exe" --force-color-profile=srgb
```

> [!info] How it works
> The program runs the following steps:
> 1. Looks inside `%LOCALAPPDATA%\Discord\`
> 2. Finds all folders starting with `app-`
> 3. Sorts them in reverse `(sort /r)` so the latest version is on top
> 4. Launches that version with `--force-color-profile=srgb`

Save the file as a `.bat` file and name it whatever you like. Make sure to set `Save as type` to `All Files (*.*)`, and save it wherever you like.

![[color-precision-58.png]]

#### Creating the Shortcut

Find the `.bat` file you created and create a shortcut by right clicking the file -> `Send to` -> `Desktop (create shortcut)`

![[color-precision-59.png]]

Now that you have a shortcut, right click the shortcut you made and go to `Properties`.

![[color-precision-60.png]]

In the `General` tab you can choose to rename it to whatever you like, and you can even change the icon in the `Shortcut` tab.

![[color-precision-61.png]]

To use the original discord icon simply locate the `%localappdata%\Discord` path, find the `app-1.0.####` folder, locate `app.ico`, and copy-paste the file to a different location.

Then in the `Properties` you can click `Change Icon` to set the icon to the new `app.ico` icon you just pasted.

![[image-1.png]]

### Auto Startup

To run your `.bat` file on startup, go to `%appdata%\Microsoft\Windows\Start Menu\Programs\Startup` in your file explorer. If there is already a Discord shortcut present feel free to delete the old shortcut and copy your new shortcut into the directory. Once that is done, the `.bat` file you created should start up every time you log into windows.

![[color-precision-63.png]]

#### Start Menu

To add your `.bat` file to your Start Menu, simply go up a folder or go to `%appdata%\Microsoft\Windows\Start Menu\Programs` and copy your shortcut to the destination.

![[color-precision-64.png]]

### New Solution (Manual)

For those who prefer a more straightforward solution with no scripting involved, this is an alternative way to disable color management in Discord.

> [!warning]
> This method only works on a per-version basis. When discord updates, the shortcut path to Discord.exe gets changed so this is not a permanent solution. For an automatic solution please see the above section.

Navigate to `%localappdata%\Discord`, find the `app-1.0.####` folder and locate `Discord.exe`. Right click the executable -> `Send to` -> `Desktop (create shortcut)`.

![[color-precision-55.png]]

Once you have created a shortcut (you may rename it), right click the shortcut and click `Properties`.

![[image.png]]

At the end of the `Target` dialogue box past the following command line argument and click `OK` or `Apply`.

```
--force-color-profile srgb
```

![[color-precision-56.png]]

Afterwards you may launch Discord through the shortcut on your desktop and the colors should be displaying correctly.

![[color-precision-57.png]]

> Left: Default | Right: With `--force-color-profile srgb`

### Old Solution (Deprecated)

In Discord, go to your user settings in the bottom left. Click on `Advanced` in the sidebar and make sure to turn `Hardware Acceleration` OFF. Your Discord will restart automatically.

![[color-precision-33.png]]
![[color-precision-36.png]]

> Left: `Hardware Acceleration` ON | Right: `Hardware Acceleration` OFF


