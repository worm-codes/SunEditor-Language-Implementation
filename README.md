# SunEditor Language file implementation for Turkish

This repository contains the language file implementation for SunEditor, an open-source
text editor.
[SunEditor](http://suneditor.com/sample/index.html)

## Overview

SunEditor is a lightweight and customizable text editor for web development projects. This repository provides the Turkish language support, enabling users to utilize SunEditor in Turkish, enhancing accessibility for Turkish-speaking developers and users.

## Getting Started

To use SunEditor with Turkish localization:

1. **Download:** Clone or download this repository.\

2. **Create a Language File:** Create a new file in the in your language

3. **Include Lang File:** Add the `data/SunEditorTRLocalization/index.js` file to your project like i did.

4. **Initialize SunEditor:** Initialize language file with useMemo hook in your component.

5. **Use SunEditor:** Use SunEditor as you normally would, with the
   lang ={memorizedLang} prop.
