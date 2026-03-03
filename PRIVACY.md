# Privacy Policy – Code Stego / root-stego

_Last updated: March 2026_

This document describes how the **Code Stego / root-stego** Chrome extension handles data and protects your privacy.

The extension is designed with a simple, single purpose:  
**Encrypting and decrypting text locally in your browser using `#STEGO-` Base62 codes.**

The same information is first provided in **English**, then in **Turkish**.

---

## 1. Data collection and storage

- The extension **does not collect, store, or transmit** any personal data.
- All encryption and decryption operations run **locally in your browser**, inside the extension’s JavaScript.
- No data is sent to any external server owned by the developer or third parties.

The text you type into the extension, and the encrypted `#STEGO-` codes you paste, are processed only in memory to produce the encrypted or decrypted result.

---

## 2. Clipboard access

The extension requests the following permissions:

- `clipboardWrite` – used **only** to copy the encrypted `#STEGO-...` code or decrypted text to your clipboard **after you click a button** (e.g., “ENCRYPT & COPY”, “COPY”).
- `clipboardRead` – used **only** when you explicitly click the “Paste” button, to read text from your clipboard into the input box.

Clipboard contents are:

- Never sent to remote servers,
- Never logged or stored persistently,
- Never accessed in the background without a direct user action.

---

## 3. Encryption and security

- Encryption is performed locally using XOR with a key derived from your password via **PBKDF2-SHA256** (100,000 iterations).
- If you do not provide a password, the message is only encoded as Base62; the extension still does not send it anywhere.
- The extension does **not** guarantee absolute cryptographic security and should not be used for extremely sensitive data (e.g., state secrets, banking details).

You are responsible for choosing a strong password and keeping it secret.

---

## 4. Third‑party services and remote code

- The extension does **not** load or execute any remote code for its core logic.
- All functional JavaScript and HTML files are bundled inside the extension package.
- A remote font (e.g., from Google Fonts) may be loaded only for **visual styling** of the UI; this does not include any of your encrypted or decrypted text.

The extension does not integrate analytics, advertising SDKs, or tracking scripts.

---

## 5. Single purpose

The extension has a **single, narrow purpose**:

> Converting user‑provided text into `#STEGO-` Base62 codes (encryption/encoding) and converting such codes back into readable text (decryption/decoding), locally on the user’s device.

It is not intended for, and does not implement, any features related to tracking, advertising, or monetization of user data.

---

## 6. Changes to this policy

This privacy policy may be updated occasionally. Any changes will be committed to the public repository and visible in the Git history at:

`https://github.com/zwennnnn/root-stego`

---

## 7. Contact

If you have any questions or privacy concerns, please open an issue on GitHub:

`https://github.com/zwennnnn/root-stego/issues`

---

# Gizlilik Politikası – Code Stego / root-stego (TR)

_Son güncelleme: Mart 2026_

Bu belge, **Code Stego / root-stego** Chrome eklentisinin verileri nasıl işlediğini ve gizliliğinizi nasıl koruduğunu açıklar.

Eklenti çok basit ve tek bir amaçla tasarlanmıştır:  
**Metni, tarayıcınız içinde yerel olarak `#STEGO-` Base62 kodlarına şifrelemek ve geri çözmek.**

---

## 1. Veri toplama ve saklama

- Eklenti **herhangi bir kişisel veri toplamaz, saklamaz veya iletmez**.
- Tüm şifreleme ve çözme işlemleri **tarayıcınız içinde yerel olarak** çalışır.
- Girdiğiniz metinler veya yapıştırdığınız `#STEGO-` kodları geliştiriciye veya üçüncü taraflara gönderilmez.

Metinler sadece bellekte işlenir; sonuç üretildikten sonra kalıcı olarak depolanmaz.

---

## 2. Pano (clipboard) erişimi

Eklenti aşağıdaki izinleri ister:

- `clipboardWrite` – Sadece **kullanıcı bir düğmeye bastığında** (örn. “ENCRYPT & COPY”, “COPY”) üretilen `#STEGO-...` kodunu veya çözülen metni panoya kopyalamak için kullanılır.
- `clipboardRead` – Sadece **kullanıcı “Yapıştır” düğmesine bastığında** panodaki metni giriş alanına otomatik olarak yapıştırmak için kullanılır.

Pano içeriği:

- Hiçbir zaman uzak sunuculara gönderilmez,
- Günlük/log dosyalarına yazılmaz veya kalıcı olarak saklanmaz,
- Kullanıcı etkileşimi olmadan arka planda okunmaz.

---

## 3. Şifreleme ve güvenlik

- Şifreleme, yerel olarak XOR ve **PBKDF2-SHA256** (100.000 iterasyon) ile türetilen bir anahtar kullanılarak yapılır.
- Şifre girmezseniz mesaj sadece Base62 formatına kodlanır; yine de hiçbir yere gönderilmez.
- Eklenti, teorik olarak tam kriptografik güvenlik garantisi vermez; **devlet sırrı, banka bilgisi gibi çok hassas veriler için kullanmanız tavsiye edilmez**.

Güçlü bir şifre seçmek ve bu şifreyi gizli tutmak kullanıcının sorumluluğundadır.

---

## 4. Üçüncü taraf servisler ve uzak kod

- Eklenti çekirdek iş mantığı için **uzaktan kod yüklemez ve çalıştırmaz**.
- Tüm JavaScript ve HTML dosyaları eklenti paketinin içindedir.
- Sadece arayüzü daha güzel göstermek için harici bir yazı tipi (örneğin Google Fonts) yüklenebilir; bu isteklerde gizli metniniz gönderilmez.

Eklenti; analiz, reklam veya takip amaçlı hiçbir üçüncü taraf kütüphane kullanmaz.

---

## 5. Tek amaç

Bu eklentinin **tek amacı** şudur:

> Kullanıcının girdiği metni `#STEGO-` Base62 kodlarına dönüştürmek ve bu kodları tekrar okunabilir metne çevirmek; tümünü kullanıcının cihazında, yerel olarak yapmak.

Takip, reklam gösterme veya kullanıcı verisini paraya çevirme gibi başka bir amaç yoktur.

---

## 6. Politika değişiklikleri

Bu gizlilik politikası zaman zaman güncellenebilir. Tüm değişiklikler herkese açık GitHub deposuna commit edilerek yayınlanır:

`https://github.com/zwennnnn/root-stego`

---

## 7. İletişim

Gizlilikle ilgili sorularınız veya endişeleriniz varsa GitHub üzerinden issue açabilirsiniz:

`https://github.com/zwennnnn/root-stego/issues`

