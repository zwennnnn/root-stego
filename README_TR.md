# root-stego

Sifrelenmis kod paylasimi icin Chrome eklentisi. Gizli mesajlari Base62 kodlarina (`#STEGO-...`) donustur ve WhatsApp, Telegram, Discord veya herhangi bir platformda paylas.

> **For English README** → [README.md](README.md)

## Ozellikler

- **Base62 Kodlama** — Mesajlar yalnizca ASCII karakterlerle kodlanir, her platformda calisir
- **XOR + PBKDF2 Sifreleme** — 100.000 iterasyonlu anahtar turetmeli opsiyonel sifre korumasi
- **Hacker Arayuzu** — Matrix yagmuru, terminal estetigi, CRT tarama cizgileri
- **Tek Tikla Kopyala** — Sifrele ve aninda panoya kopyala
- **Yapistir & Coz** — Sifrelenmis kodu yapistir, tek tikla coz

## Nasil Calisir?

1. Gizli mesajini yaz
2. (Opsiyonel) Ortak bir sifreleme anahtari belirle
3. **ENCRYPT & COPY** butonuna tikla
4. Olusan `#STEGO-...` kodunu istedigin kisiye gonder
5. Alici kodu yapistirip ayni anahtari girerek mesaji cozer

## Kurulum

1. Bu repoyu klonla
2. `chrome://extensions/` adresini ac
3. **Gelistirici modu**'nu etkinlestir
4. **Paketlenmemis oge yukle** butonuna tikla ve bu klasoru sec

## Teknoloji

- Saf vanilla JS, bagimsizlik yok
- Chrome Extension Manifest V3
- PBKDF2-SHA256 anahtar turetme + XOR sifreleme
- Base62 kodlama (0-9, A-Z, a-z)

## Guvenlik

- Eklenti olmadan `#STEGO-` kodu anlamsizdir — standart Base62 decoder'lar sadece rastgele bir sayi dondurur
- Sifre kullanildiginda mesajlar PBKDF2 turetilmis 256-bit anahtar ile XOR sifrelenir (100.000 iterasyon)
- Eklenti olsa bile dogru sifre olmadan mesaj cozulemez

---

crafted by **zwennnnn**
