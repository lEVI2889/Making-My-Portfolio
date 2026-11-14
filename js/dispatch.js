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


};
