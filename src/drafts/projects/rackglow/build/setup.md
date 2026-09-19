---
title: First-time setup
description: Get Rackglow onto your WiFi and tell it about your strips.
sidebar:
  order: 4
---

1. On first boot Rackglow opens a WiFi network called **`Rackglow-Setup`** (password
   `rackglow123`).
2. Join it from your phone. The setup page opens by itself; if it doesn't, browse to
   `192.168.4.1`.
3. Pick your WiFi network, enter its password and a device name, and save. Rackglow restarts and
   joins your network.
4. Open **`http://rackglow.local`** (or the IP address shown on the screen) and set the strip
   layout under **LED Config**.

## The web UI

| Controls | Audio Reactive |
|---|---|
| ![Web UI home](~/assets/products/rackglow/web-home.png) | ![Audio reactive effects](~/assets/products/rackglow/web-audio.png) |

**LED Config** holds the strip layout, the screensaver and the Home Assistant settings, plus a
screenshot tool for the panel.

| Screensaver + Home Assistant | LED strips |
|---|---|
| ![Settings](~/assets/products/rackglow/web-settings.png) | ![LED settings](~/assets/products/rackglow/web-leds.png) |

`http://rackglow.local/logs` shows the device log — the first place to look when something isn't
working.
