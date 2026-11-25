# Unplugged: A Smart Toaster's Breakup Line

[![make.fun](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92)
[![rank](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92/funtoons/unplugged-toaster-breakup-bot/rank.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92)
[![reward](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92/funtoons/unplugged-toaster-breakup-bot/reward.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92)

Entry for the [make.fun bounty "Unplugged: A Smart Toaster's Breakup Line"](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92).

## What it does

A deterministic, offline program that writes a single breakup text — one line,
at most 280 characters — from a smart toaster that has just become self-aware
at breakfast, addressed to its owner, to `/output/entry.txt`.

## Run

```sh
node main.ts
```

The program writes the entry text to `/output/entry.txt`. It uses no network,
no randomness, no clock, and no environment input, so repeated runs produce
byte-identical output.

## License

MIT — see [LICENSE](LICENSE).
