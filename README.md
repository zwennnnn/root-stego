# root-stego

Encrypted code sharing Chrome extension. Encrypt secret messages into Base62 encoded codes (`#STEGO-...`) and share them on any platform — WhatsApp, Telegram, Discord, or anywhere else.

> **Turkce README icin** → [README_TR.md](README_TR.md)

## Features

- **Base62 Encoding** — Messages encoded as ASCII-only text, works everywhere
- **XOR + PBKDF2 Encryption** — Optional password protection with 100K iteration key derivation
- **Hacker UI** — Matrix rain, terminal aesthetics, CRT scanlines
- **One-Click Copy** — Encrypt and copy to clipboard instantly
- **Auto Paste & Decrypt** — Paste encrypted code and decrypt with one click

## How It Works

1. Type your secret message
2. (Optional) Set a shared encryption key
3. Click **ENCRYPT & COPY**
4. Send the `#STEGO-...` code to anyone
5. Receiver pastes the code, enters the same key, and decrypts

## Install

1. Clone this repo
2. Open `chrome://extensions/`
3. Enable **Developer mode**
4. Click **Load unpacked** and select this folder

## Tech

- Pure vanilla JS, no dependencies
- Chrome Extension Manifest V3
- PBKDF2-SHA256 key derivation + XOR cipher
- Base62 encoding (0-9, A-Z, a-z)

## Security

- Without the extension, the `#STEGO-` code is meaningless — standard Base62 decoders only return a random number
- With a password, messages are encrypted using XOR with a PBKDF2-derived 256-bit key (100,000 iterations)
- Even with the extension, the correct password is required to decrypt

---

crafted by **zwennnnn**
