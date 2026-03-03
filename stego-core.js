// ─── STEGO CORE ENGINE ───
// Code Share mode: Base62 encoded, works on every platform

const StegoCore = (() => {

  async function deriveKey(password) {
    const enc = new TextEncoder();
    const keyMaterial = await crypto.subtle.importKey(
      'raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']
    );
    const bits = await crypto.subtle.deriveBits(
      { name: 'PBKDF2', salt: enc.encode('emoji-stego-salt-v2'), iterations: 100000, hash: 'SHA-256' },
      keyMaterial, 256
    );
    return new Uint8Array(bits);
  }

  async function encryptBytes(data, password) {
    if (!password) return data;
    const key = await deriveKey(password);
    const out = new Uint8Array(data.length);
    for (let i = 0; i < data.length; i++) {
      out[i] = data[i] ^ key[i % key.length];
    }
    return out;
  }

  async function decryptBytes(data, password) {
    return encryptBytes(data, password);
  }

  // ─── CODE SHARE (Base62) ───

  const CODE_PREFIX = '#STEGO-';
  const B62_CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  function bytesToBase62(bytes) {
    let result = '';
    for (let i = 0; i < bytes.length; i += 2) {
      if (i + 1 < bytes.length) {
        const val = (bytes[i] << 8) | bytes[i + 1];
        result += B62_CHARS[Math.floor(val / 3844) % 62];
        result += B62_CHARS[Math.floor(val / 62) % 62];
        result += B62_CHARS[val % 62];
      } else {
        const val = bytes[i];
        result += B62_CHARS[Math.floor(val / 62) % 62];
        result += B62_CHARS[val % 62];
      }
    }
    return result;
  }

  function base62ToBytes(str) {
    const bytes = [];
    let i = 0;
    const fullGroups = Math.floor(str.length / 3);
    const remainder = str.length % 3;

    if (remainder === 1) throw new Error('Bozuk kod: gecersiz uzunluk');

    for (let g = 0; g < fullGroups; g++) {
      const c0 = B62_CHARS.indexOf(str[i++]);
      const c1 = B62_CHARS.indexOf(str[i++]);
      const c2 = B62_CHARS.indexOf(str[i++]);
      if (c0 === -1 || c1 === -1 || c2 === -1) throw new Error('Bozuk kod: gecersiz karakter');
      const val = c0 * 3844 + c1 * 62 + c2;
      bytes.push((val >> 8) & 0xFF);
      bytes.push(val & 0xFF);
    }

    if (remainder === 2) {
      const c0 = B62_CHARS.indexOf(str[i++]);
      const c1 = B62_CHARS.indexOf(str[i++]);
      if (c0 === -1 || c1 === -1) throw new Error('Bozuk kod: gecersiz karakter');
      bytes.push(c0 * 62 + c1);
    }

    return new Uint8Array(bytes);
  }

  async function encode(secretMessage, password) {
    if (!secretMessage) throw new Error('Gizli mesaj bos olamaz');
    const raw = new TextEncoder().encode(secretMessage);
    const encrypted = await encryptBytes(raw, password);
    return CODE_PREFIX + bytesToBase62(encrypted);
  }

  async function decode(stegoText, password) {
    let code = stegoText.trim();
    const idx = code.indexOf(CODE_PREFIX);
    if (idx === -1) throw new Error('Kod bulunamadi (#STEGO- prefix eksik)');
    code = code.substring(idx + CODE_PREFIX.length).replace(/[^0-9A-Za-z]/g, '');
    if (!code.length) throw new Error('Bos kod');

    const encBytes = base62ToBytes(code);
    const decBytes = await decryptBytes(encBytes, password);
    return new TextDecoder().decode(decBytes);
  }

  function isValid(text) {
    return text.indexOf(CODE_PREFIX) !== -1;
  }

  return { encode, decode, isValid, CODE_PREFIX };

})();
