/**
 * Obsidian Terminal - Git-Commit Timeline, Publications & Education
 * Pure vanilla JavaScript with zero third-party dependencies.
 * Strict Ponytail standard (<120 LOC).
 */

(function () {
  'use strict';

  const escapeHTML = (typeof window !== 'undefined' && window.escapeHTML) || ((s) => (s || '').replace(/[&<>'"]/g, t => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[t] || t)));

  function renderTimeline() {
    const container = document.getElementById('timeline-container');
    if (!container) return;
    const data = (typeof window !== 'undefined' && window.PORTFOLIO_DATA) || {};
    const items = data.experience || [];

    container.innerHTML = `
      <div class="timeline-tree">
        ${items.map(item => `
          <div class="timeline-item">
            <span class="commit-node ${item.isMilestone ? 'milestone-node' : ''}" aria-hidden="true"></span>
            <div class="commit-header">
              <span class="commit-hash" title="Commit Hash">commit ${escapeHTML(item.hash)}</span>
              <span class="commit-branch">(${escapeHTML(item.branch || 'main')})</span>
              <span class="commit-date">${escapeHTML(item.date)}</span>
            </div>
            <div class="commit-body">
              <h3 class="commit-role">${escapeHTML(item.role)}</h3>
              <div class="commit-org">${escapeHTML(item.company)} // ${escapeHTML(item.location)}</div>
              <p class="commit-desc">${escapeHTML(item.description)}</p>
              ${item.impactMetrics?.length ? `<ul class="commit-metrics">${item.impactMetrics.map(m => `<li>${escapeHTML(m)}</li>`).join('')}</ul>` : ''}
              ${item.tech?.length ? `<div class="tech-pills">${item.tech.map(t => `<span class="tech-pill">${escapeHTML(t)}</span>`).join('')}</div>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  function renderPublications() {
    const container = document.getElementById('publications-container');
    if (!container) return;
    const data = (typeof window !== 'undefined' && window.PORTFOLIO_DATA) || {};
    const items = data.publications || [];
    if (!items.length) return;

    container.innerHTML = `
      <div class="sub-section-header">
        <h3 class="sub-section-title"><span class="title-bracket">[</span>RESEARCH &amp; WHITE PAPERS<span class="title-bracket">]</span></h3>
      </div>
      <div class="publications-grid">
        ${items.map(pub => `
          <article class="pub-card">
            <div class="pub-meta">
              <span class="pub-badge">${escapeHTML(pub.type || 'Research')}</span>
              <span class="pub-year">${escapeHTML(pub.year)}</span>
            </div>
            <h4 class="pub-title">${escapeHTML(pub.title)}</h4>
            <div class="pub-venue">${escapeHTML(pub.venue)}</div>

};
