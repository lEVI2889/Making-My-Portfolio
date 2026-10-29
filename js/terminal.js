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
    }
    if (lower === 'skills') {
      return 'Core Competencies:\n  Systems:   Distributed Systems, AsyncIO, Linux, Low-Latency Networking\n  Languages: Python, JavaScript, TypeScript, C++, SQL, Bash\n  Frontend:  Vanilla Web Standards, Semantic HTML5, CSS Custom Properties, A11y';
    }
    return `command not found: ${escapeHTML(cmd)}. Type 'help' to inspect available system commands.`;
  }

  function appendLine(html, type = '') {
    const output = document.getElementById('terminal-output');
    if (!output) return;
    const line = document.createElement('div');
    line.className = `terminal-line ${type}`.trim();
    line.innerHTML = html;
    output.appendChild(line);
    const body = document.getElementById('terminal-body');
    if (body) body.scrollTop = body.scrollHeight;
  }

  function initTerminal() {
    if (typeof document === 'undefined') return;
    const input = document.getElementById('terminal-input');
    const copyBtn = document.getElementById('cli-copy-btn');
    if (!input) return;

    // Display startup profile payload
    appendLine('<span class="prompt">guest@amr-terminal:~$</span> cat profile.json', 'cmd-echo');
    const startupProfile = handleCommand('cat profile.json');
    if (startupProfile) appendLine(startupProfile);

    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        const val = input.value.trim();
        if (val) {
          history.push(val);
          historyIndex = history.length;

};
