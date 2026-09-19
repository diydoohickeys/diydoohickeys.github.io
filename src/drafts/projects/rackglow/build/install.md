---
title: Install the firmware
description: Flash Rackglow from your browser, then keep it updated over WiFi.
sidebar:
  order: 3
---

## From your browser

1. Open the **[Rackglow installer](/Rackglow/)** in desktop Chrome or Edge. Firefox, Safari and
   phones don't support Web Serial.
2. Plug the board in over USB-C and click **Install**.
   <!-- TODO: confirm whether a first install needs BOOT held while plugging in -->
3. The install erases the board, so it starts fresh.

## Updating

Download `firmware.bin` from the
[latest release](https://github.com/diydoohickeys/Rackglow/releases/latest) and upload it at
**`http://rackglow.local/update`**. Settings are kept.
