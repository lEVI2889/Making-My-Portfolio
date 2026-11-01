/**
 * Obsidian Terminal - Projects Grid & Category Filter
 * Pure vanilla JavaScript with zero third-party dependencies.
 * Strict Ponytail standard (<120 LOC).
 */

(function () {
  'use strict';

  let currentFilter = 'all';

  const escapeHTML = (typeof window !== 'undefined' && window.escapeHTML) || ((s) => (s || '').replace(/[&<>'"]/g, t => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[t] || t)));

  function formatArchitecture(snippet) {
    if (!snippet) return '';
    return escapeHTML(snippet).replace(/(-&gt;|-&gt;|->)/g, '<span class="arch-arrow">➔</span>');
  }

  function matchesCategory(project, filter) {
    if (filter === 'all') return true;
    if (filter === 'ai-tools') return project.category === 'ai' || project.category === 'tools';
    return project.category === filter;
  }

  function createCardHTML(p) {
    const stars = p.stars ? `<span class="project-stars" title="${p.stars} GitHub Stars">★ ${p.stars}</span>` : '';
    const highlights = (p.highlights || []).map(h => `<li>${escapeHTML(h)}</li>`).join('');
    const tech = (p.techStack || []).map(t => `<span class="tech-pill">${escapeHTML(t)}</span>`).join('');
    
    const ghSvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>';
    const extSvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>';
    const githubLink = p.githubUrl ? `<a href="${escapeHTML(p.githubUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm">${ghSvg} Source</a>` : '';
    const liveLink = p.liveUrl ? `<a href="${escapeHTML(p.liveUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-cyan btn-sm">${extSvg} Live Demo</a>` : '';

    return `
      <article class="project-card" data-category="${escapeHTML(p.category)}">
        <div class="project-card-header">
          <div class="project-meta-top">
            <span class="project-badge">${escapeHTML(p.badge || p.category)}</span>
            ${stars}
          </div>
          <h3 class="project-title">${escapeHTML(p.title)}</h3>
        </div>
        <p class="project-desc">${escapeHTML(p.description)}</p>
        <ul class="project-highlights">${highlights}</ul>
        <div class="arch-snippet">
          <div class="arch-tag">// ARCHITECTURE PIPELINE</div>
          <div class="arch-code">${formatArchitecture(p.architectureSnippet)}</div>
        </div>
        <div class="tech-pills">${tech}</div>
        <div class="project-actions">${githubLink}${liveLink}</div>
      </article>
    `;
  }

  function renderProjects(filter = currentFilter) {
    currentFilter = filter;
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    const data = (typeof window !== 'undefined' && window.PORTFOLIO_DATA) || {};
    const projects = (data.projects || []).filter(p => matchesCategory(p, filter));

    grid.innerHTML = projects.map(createCardHTML).join('');
  }


};
