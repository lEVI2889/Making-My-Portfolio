/**
 * Obsidian Terminal - Interactive Terminal Console Emulator
 * Pure vanilla JavaScript with zero third-party dependencies.
 * Strict Ponytail standard (<120 LOC).
 */

(function () {
  'use strict';

  const history = [];
  let historyIndex = -1;

  const escapeHTML = (typeof window !== 'undefined' && (window.escapeHTML = window.escapeHTML || ((s) => (s || '').replace(/[&<>'"]/g, t => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[t] || t))))) || ((s) => (s || '').replace(/[&<>'"]/g, t => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[t] || t)));

  function highlightJSON(jsonStr) {
    return jsonStr.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\\-]?\d+)?|[{}[\],])/g, match => {
      if (/^"/.test(match)) {
        if (/:$/.test(match)) return `<span class="json-key">${match}</span>`;
        return `<span class="json-string">${match}</span>`;
      }
      if (/true|false/.test(match)) return `<span class="json-boolean">${match}</span>`;
      if (/null/.test(match)) return `<span class="json-null">${match}</span>`;
      if (/[{}[\],]/.test(match)) return `<span class="json-bracket">${match}</span>`;
      return `<span class="json-number">${match}</span>`;
    });
  }

  function handleCommand(rawCmd) {
    const cmd = (rawCmd || '').trim();
    if (!cmd) return '';
    const lower = cmd.toLowerCase();
    const data = (typeof window !== 'undefined' && window.PORTFOLIO_DATA) || {};

    if (lower === 'clear') {
      const output = document.getElementById('terminal-output');
      if (output) output.innerHTML = '';
      return null;
    }
    if (lower === 'cat profile.json' || lower === 'profile') {
      return highlightJSON(JSON.stringify(data.profile || { name: 'Abu Musa Rohan' }, null, 2));
    }
    const key = lower.startsWith('sudo') ? 'sudo' : lower;
    if (data.cliCommands && data.cliCommands[key]) {
      const out = data.cliCommands[key].output;
      return Array.isArray(out) ? out.join('\n') : String(out);

};
