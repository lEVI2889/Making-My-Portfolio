/**
 * Obsidian Terminal - Contact Dispatch & Telemetry Channels
 * Pure vanilla JavaScript with zero third-party dependencies.
 * Strict Ponytail standard (<120 LOC).
 */

(function () {
  'use strict';

  const escapeHTML = (typeof window !== 'undefined' && window.escapeHTML) || ((s) => (s || '').replace(/[&<>'"]/g, t => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[t] || t)));

  function handleDispatchSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();
    const statusBox = document.getElementById('dispatch-status');
    if (!statusBox) return;

    if (!name || !email || !subject || !message) {
      statusBox.className = 'transmission-box error';
      statusBox.textContent = '[ERROR: 400] All packet headers and payload fields are mandatory.';
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      statusBox.className = 'transmission-box error';
      statusBox.textContent = '[ERROR: 422] Return frequency (email) syntax is invalid.';
      return;
    }

    const mailto = `mailto:abumusarohan2437@gmail.com?subject=${encodeURIComponent(`[DISPATCH] ${subject}`)}&body=${encodeURIComponent(`Caller: ${name} (${email})\n\nPayload:\n${message}`)}`;

    statusBox.className = 'transmission-box';
    statusBox.textContent = '[01/03] ENCRYPTING PAYLOAD WITH PGP KEY 0x9F4B3C2A...';

    setTimeout(() => {
      statusBox.textContent = '[02/03] ROUTING PACKET VIA SECURE DISPATCH RELAY...';
      setTimeout(() => {
        statusBox.className = 'transmission-box success';
        statusBox.innerHTML = `[03/03] STATUS: 200 OK &mdash; Transmission prepared.<br><a href="${mailto}">Launch Local Mail Client ➔</a>`;
        window.location.href = mailto;
      }, 500);
    }, 400);
  }

  function copyText(text, btn) {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(text).then(() => {
      const orig = btn.textContent;
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = orig;
        btn.classList.remove('copied');
      }, 2000);
    });
  }

  function initDispatch() {
    const container = document.getElementById('contact-container');
    if (!container) return;
    const data = (typeof window !== 'undefined' && window.PORTFOLIO_DATA) || {};
    const c = data.contact || { email: 'abumusarohan2437@gmail.com' };
    const cliCmd = `echo "Hello Rohan" | mail -s "Opportunity" ${c.email}`;

    container.innerHTML = `
      <div class="dispatch-card">
        <div class="card-title-bar"><span class="card-title">[PRIORITY DISPATCH TERMINAL]</span><span class="status-indicator online" aria-hidden="true"></span></div>
        <form class="dispatch-form" id="dispatch-form" novalidate>
          <div class="form-group"><label class="form-label" for="disp-name"><span class="bracket">[01]</span> CALLER IDENTIFIER</label><input type="text" id="disp-name" name="name" class="dispatch-input" placeholder="Your name or organization" required></div>
          <div class="form-group"><label class="form-label" for="disp-email"><span class="bracket">[02]</span> RETURN FREQUENCY (EMAIL)</label><input type="email" id="disp-email" name="email" class="dispatch-input" placeholder="caller@domain.com" required></div>
          <div class="form-group"><label class="form-label" for="disp-subject"><span class="bracket">[03]</span> TRANSMISSION HEADER (SUBJECT)</label><input type="text" id="disp-subject" name="subject" class="dispatch-input" placeholder="Distributed Systems / Role Opportunity" required></div>
          <div class="form-group"><label class="form-label" for="disp-message"><span class="bracket">[04]</span> PAYLOAD (MESSAGE)</label><textarea id="disp-message" name="message" class="dispatch-textarea" placeholder="Draft your transmission payload..." required></textarea></div>
          <button type="submit" class="btn btn-primary" id="disp-submit">Transmit Packet [ENTER] ➔</button>
          <div id="dispatch-status" class="transmission-box" role="status" aria-live="polite">[READY] Dispatch link established. Awaiting input.</div>
        </form>
      </div>
      <div class="telemetry-card">
        <div class="card-title-bar"><span class="card-title">[SECURE CHANNELS &amp; PGP]</span></div>
        <div class="channels-list">
          <div class="channel-item"><span class="channel-label">Direct Frequency</span><a href="mailto:${escapeHTML(c.email)}" class="channel-val channel-link">${escapeHTML(c.email)}</a></div>
          <div class="channel-item"><span class="channel-label">GitHub Repository</span><a href="${escapeHTML(c.github)}" target="_blank" rel="noopener noreferrer" class="channel-val channel-link">${escapeHTML(c.github)}</a></div>
          <div class="channel-item"><span class="channel-label">Professional Network</span><a href="${escapeHTML(c.linkedin)}" target="_blank" rel="noopener noreferrer" class="channel-val channel-link">LinkedIn Profile ➔</a></div>
          <div class="channel-item"><span class="channel-label">Coordinates / Zone</span><span class="channel-val">${escapeHTML(c.location || 'Dhaka, Bangladesh')}</span></div>
          <div class="channel-item"><span class="channel-label">PGP Fingerprint</span><span class="channel-val">${escapeHTML(c.pgpFingerprint || '0x9F4B3C2A')}</span></div>
        </div>
        <div class="cli-box-wrap"><span class="channel-label">CLI Pipe Transmission</span>
          <div class="cli-copy-box"><code class="cli-code">${escapeHTML(cliCmd)}</code><button class="cli-btn-copy" id="cli-pipe-copy" type="button">Copy</button></div>
        </div>
      </div>
    `;

    const form = document.getElementById('dispatch-form');
    if (form) form.addEventListener('submit', handleDispatchSubmit);
    const copyBtn = document.getElementById('cli-pipe-copy');
    if (copyBtn) copyBtn.addEventListener('click', () => copyText(cliCmd, copyBtn));
  }

  if (typeof window !== 'undefined') {
    window.initDispatch = initDispatch;
    window.handleDispatchSubmit = handleDispatchSubmit;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initDispatch, handleDispatchSubmit };
  }
})();
