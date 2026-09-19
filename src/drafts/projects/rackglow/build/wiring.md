---
title: Wiring
description: Connecting the LED strips and the MSGEQ7 to the WT32-SC01 Plus.
sidebar:
  order: 2
---

Everything connects to the board's **Extended IO header**, which also carries +5 V and GND. These
are the only GPIOs the WT32-SC01 Plus breaks out; the rest drive the display and touch.

| Header pin | GPIO | Connect to |
|---|---|---|
| EXT_IO1 | 10 | WS2812 data in |
| EXT_IO3 | 12 | MSGEQ7 analog out |
| EXT_IO4 | 13 | MSGEQ7 strobe |
| EXT_IO6 | 21 | MSGEQ7 reset |
| EXT_IO2, EXT_IO5 | 11, 14 | free |

<!-- PHOTO: Extended IO header close-up, LED data + MSGEQ7 lines legible (shot R3) -->

<!-- PHOTO: the MSGEQ7 board and how it is wired/mounted (shot R4) -->

## Power

<!-- PHOTO: the supply, where 5 V enters, ground shared with the board (shot R6) -->

TODO: whether the strips are powered straight from the supply with the board sharing ground, and
when longer runs need power injection.

## Strip layout

Strips are daisy-chained on the one data line and treated as equal-length rows. Alternate strips run
in opposite directions (serpentine), which is how they chain naturally behind a rail. You set the
strip count and LEDs per strip in the web UI after installing.

<!-- PHOTO: strips behind the rails — mounting and the serpentine chaining (shot R5) -->
