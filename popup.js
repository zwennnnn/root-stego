// ─── MATRIX RAIN ───

(function initMatrix() {
  const canvas = document.getElementById('matrix-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = 400;
    canvas.height = 600;
  }
  resize();

  const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF<>/{}[]';
  const fontSize = 12;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = 'rgba(3, 10, 2, 0.12)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff41';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(char, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(draw, 50);
})();

// ─── UI ───

const $  = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

// ─── TABS ───

$$('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    $$('.tab').forEach(t => t.classList.remove('active'));
    $$('.panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    $(`#${tab.dataset.tab}`).classList.add('active');
  });
});

// ─── HELPERS ───

function showError(panelId, message) {
  const existing = $(`#${panelId} .error-msg`);
  if (existing) existing.remove();
  const el = document.createElement('div');
  el.className = 'error-msg';
  el.textContent = message;
  $(`#${panelId} .btn-primary`).insertAdjacentElement('afterend', el);
  setTimeout(() => el.remove(), 4000);
}

function flashBadge(id) {
  const badge = $(`#${id}`);
  badge.classList.remove('hidden');
  setTimeout(() => badge.classList.add('hidden'), 2000);
}

// ─── ENCRYPT ───

$('#btn-encode').addEventListener('click', async () => {
  try {
    const secret = $('#secret-msg').value.trim();
    const pass   = $('#password-enc').value;

    if (!secret) { showError('encode', 'Gizli mesaj bos olamaz!'); return; }

    const result = await StegoCore.encode(secret, pass);

    $('#encoded-output').textContent = result;
    $('#encode-result').classList.remove('hidden');

    await navigator.clipboard.writeText(result);
    flashBadge('copy-badge-enc');
  } catch (e) {
    showError('encode', e.message);
  }
});

// ─── DECRYPT ───

$('#btn-decode').addEventListener('click', async () => {
  try {
    const input = $('#stego-input').value;
    const pass  = $('#password-dec').value;

    if (!input.trim()) { showError('decode', 'Kod bos olamaz!'); return; }

    const result = await StegoCore.decode(input, pass);

    $('#decoded-output').textContent = result;
    $('#decode-result').classList.remove('hidden');
  } catch (e) {
    showError('decode', e.message);
  }
});

// ─── COPY DECODED ───

$('#btn-copy-decoded').addEventListener('click', async () => {
  const text = $('#decoded-output').textContent;
  await navigator.clipboard.writeText(text);
  flashBadge('copy-badge-dec');
});

// ─── PASTE BUTTON ───

$('#btn-paste').addEventListener('click', async () => {
  try {
    const text = await navigator.clipboard.readText();
    $('#stego-input').value = text;
  } catch {
    showError('decode', 'Pano erisimi reddedildi. Ctrl+V ile yapistir.');
  }
});

// ─── PASSWORD TOGGLE ───

function setupPassToggle(btnId, inputId) {
  $(btnId).addEventListener('click', () => {
    const input = $(inputId);
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    $(btnId).textContent = isPassword ? '\u25C9' : '\u25CE';
  });
}

setupPassToggle('#btn-toggle-pass-enc', '#password-enc');
setupPassToggle('#btn-toggle-pass-dec', '#password-dec');

// ─── PASSWORD INFO BOX ───

$('#password-enc').addEventListener('input', () => {
  const hasPass = $('#password-enc').value.length > 0;
  $('#info-no-pass').classList.toggle('hidden', hasPass);
});
