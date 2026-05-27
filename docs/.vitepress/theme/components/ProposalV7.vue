<template>
  <div class="gh-page">
    <!-- GitHub Header -->
    <header class="gh-header">
      <div class="gh-header-inner">
        <div class="gh-header-left">
          <svg class="gh-logo" viewBox="0 0 16 16" width="32" height="32" fill="#ffffff">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          <div class="gh-search-wrapper">
            <svg class="gh-search-icon" viewBox="0 0 16 16" width="14" height="14" fill="#8b949e">
              <path d="M10.68 11.74a6 6 0 01-7.922-8.982 6 6 0 018.982 7.922l3.04 3.04a.749.749 0 01-.326 1.275.749.749 0 01-.734-.215l-3.04-3.04zM11.5 7a4.499 4.499 0 10-8.997 0A4.499 4.499 0 0011.5 7z"/>
            </svg>
            <input class="gh-search" type="text" placeholder="Type / to search" readonly />
          </div>
          <nav class="gh-nav">
            <a href="#">Pull requests</a>
            <a href="#">Issues</a>
            <a href="#">Marketplace</a>
            <a href="#">Explore</a>
          </nav>
        </div>
        <div class="gh-header-right">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="#ffffff">
            <path d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0113.482 13H2.518a1.516 1.516 0 01-1.263-2.36l1.703-2.554A.255.255 0 003 7.947V5z"/>
          </svg>
          <div class="gh-avatar-small">DM</div>
        </div>
      </div>
    </header>

    <!-- Profile Tabs -->
    <div class="gh-tabs-bar">
      <div class="gh-tabs-inner">
        <a class="gh-tab active">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75zm7.251 10.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574zM8.755 4.75l-.004 7.322a3.752 3.752 0 011.992-.572H14.5v-9h-3.495a2.252 2.252 0 00-2.25 2.25z"/></svg>
          Overview
        </a>
        <a class="gh-tab">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5zm10.5-1h-8a1 1 0 00-1 1v6.708A2.486 2.486 0 014.5 9h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/></svg>
          Repositories <span class="gh-counter">47</span>
        </a>
        <a class="gh-tab">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0114.25 16H1.75A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0zM1.5 1.75v12.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25zM11.75 3a.75.75 0 01.75.75v7.5a.75.75 0 01-1.5 0v-7.5a.75.75 0 01.75-.75zm-8.25 5.5a.75.75 0 01.75-.75h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75zM5 3.75a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5zM7.25 6a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 017.25 6z"/></svg>
          Projects
        </a>
        <a class="gh-tab">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M.427 1.927A2.5 2.5 0 012.5 1h11A2.5 2.5 0 0116 3.5v9a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 010 12.5v-9c0-.676.271-1.286.71-1.731l-.283.158zM2.5 2.5a1 1 0 00-1 1v.07l6.5 3.65 6.5-3.65V3.5a1 1 0 00-1-1zM14.5 5.13L8.243 8.67a.5.5 0 01-.486 0L1.5 5.13V12.5a1 1 0 001 1h11a1 1 0 001-1z"/></svg>
          Packages
        </a>
        <a class="gh-tab">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.751.751 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/></svg>
          Stars <span class="gh-counter">23</span>
        </a>
      </div>
    </div>

    <!-- Main Content -->
    <div class="gh-main">
      <!-- Left Sidebar: Profile -->
      <aside class="gh-sidebar">
        <div class="gh-avatar-wrapper">
          <div class="gh-avatar-large">
            <span>DM</span>
          </div>
        </div>
        <div class="gh-profile-info">
          <h1 class="gh-display-name">Daniel Murnane</h1>
          <p class="gh-username">murnanedaniel</p>
        </div>
        <p class="gh-bio">High-performance human integration library | ML Co-convener @ATLAS | Postdoc @NBI Copenhagen</p>
        <button class="gh-follow-btn">Follow</button>
        <div class="gh-follow-stats">
          <a href="#">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e"><path d="M2 5.5a3.5 3.5 0 115.898 2.549 5.508 5.508 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-6.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.493 3.493 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"/></svg>
            <strong>42</strong> followers
          </a>
          <span class="gh-dot-sep">&middot;</span>
          <a href="#"><strong>7</strong> following</a>
        </div>
        <div class="gh-profile-meta">
          <div class="gh-meta-item">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e"><path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5zm10.5-1h-8a1 1 0 00-1 1v6.708A2.486 2.486 0 014.5 9h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/></svg>
            <span class="gh-org-badge">ATLAS Collaboration</span>
          </div>
          <div class="gh-meta-item">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e"><path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5zm10.5-1h-8a1 1 0 00-1 1v6.708A2.486 2.486 0 014.5 9h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/></svg>
            <span class="gh-org-badge">Berkeley Lab</span>
          </div>
          <div class="gh-meta-item">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e"><path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5zm10.5-1h-8a1 1 0 00-1 1v6.708A2.486 2.486 0 014.5 9h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/></svg>
            <span class="gh-org-badge">Niels Bohr Institute</span>
          </div>
          <div class="gh-meta-item">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e"><path d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"/></svg>
            Copenhagen, Denmark
          </div>
          <div class="gh-meta-item">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e"><path d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"/></svg>
            <a href="https://danielmurnane.com" class="gh-link">danielmurnane.com</a>
          </div>
          <div class="gh-meta-item">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e"><path d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"/></svg>
            <a href="https://orcid.org/0000-0003-4046-4822" class="gh-link">ORCID: 0000-0003-4046-4822</a>
          </div>
        </div>
      </aside>

      <!-- Right Content -->
      <div class="gh-content">
        <!-- Pinned Repositories -->
        <div class="gh-section-header">
          <span>Pinned</span>
          <a href="#" class="gh-customize">Customize your pins</a>
        </div>
        <div class="gh-pinned-grid">
          <div v-for="repo in pinnedRepos" :key="repo.name" class="gh-repo-card">
            <div class="gh-repo-header">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e"><path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5zm10.5-1h-8a1 1 0 00-1 1v6.708A2.486 2.486 0 014.5 9h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/></svg>
              <a class="gh-repo-name">{{ repo.name }}</a>
              <span class="gh-repo-visibility">Public</span>
            </div>
            <p class="gh-repo-desc">{{ repo.description }}</p>
            <div class="gh-repo-meta">
              <span class="gh-lang">
                <span class="gh-lang-dot" :style="{ background: repo.langColor }"></span>
                {{ repo.language }}
              </span>
              <span class="gh-stars">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e"><path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.751.751 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/></svg>
                {{ repo.stars }}
              </span>
              <span v-if="repo.forks" class="gh-forks">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e"><path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-.878a2.25 2.25 0 111.5 0v.878a2.25 2.25 0 01-2.25 2.25h-1.5v2.128a2.251 2.251 0 11-1.5 0V8.5h-1.5A2.25 2.25 0 013.5 6.25v-.878a2.25 2.25 0 111.5 0zM5 3.25a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm6.75.75a.75.75 0 10 0-1.5.75.75 0 000 1.5zM8 12.75a.75.75 0 10 0-1.5.75.75 0 000 1.5z"/></svg>
                {{ repo.forks }}
              </span>
            </div>
          </div>
        </div>

        <!-- Contribution Graph -->
        <div class="gh-contrib-section">
          <h2 class="gh-contrib-title">1,276 contributions in the last year</h2>
          <div class="gh-contrib-graph">
            <div class="gh-contrib-labels">
              <span></span>
              <span>Mon</span>
              <span></span>
              <span>Wed</span>
              <span></span>
              <span>Fri</span>
              <span></span>
            </div>
            <div class="gh-contrib-grid-wrapper">
              <div class="gh-contrib-months">
                <span v-for="m in months" :key="m">{{ m }}</span>
              </div>
              <div class="gh-contrib-grid">
                <div v-for="(week, wi) in heatmapData" :key="wi" class="gh-contrib-week">
                  <div
                    v-for="(day, di) in week"
                    :key="di"
                    class="gh-contrib-day"
                    :style="{ background: day }"
                    :title="`${getContribCount(day)} contributions`"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div class="gh-contrib-legend">
            <span>Less</span>
            <div class="gh-contrib-day" style="background: #ebedf0"></div>
            <div class="gh-contrib-day" style="background: #9be9a8"></div>
            <div class="gh-contrib-day" style="background: #40c463"></div>
            <div class="gh-contrib-day" style="background: #30a14e"></div>
            <div class="gh-contrib-day" style="background: #216e39"></div>
            <span>More</span>
          </div>
        </div>

        <!-- README -->
        <div class="gh-readme">
          <div class="gh-readme-header">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e"><path d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75zm7.251 10.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574zM8.755 4.75l-.004 7.322a3.752 3.752 0 011.992-.572H14.5v-9h-3.495a2.252 2.252 0 00-2.25 2.25z"/></svg>
            <span>murnanedaniel</span> / <strong>README</strong>.md
          </div>
          <div class="gh-readme-body">
            <!-- Badges -->
            <div class="gh-badges">
              <span class="gh-badge gh-badge-green">
                <span class="gh-badge-label">build</span><span class="gh-badge-value gh-badge-value-green">passing</span>
              </span>
              <span class="gh-badge">
                <span class="gh-badge-label">python</span><span class="gh-badge-value gh-badge-value-blue">3.10+</span>
              </span>
              <span class="gh-badge">
                <span class="gh-badge-label">h-index</span><span class="gh-badge-value gh-badge-value-orange">8</span>
              </span>
              <span class="gh-badge">
                <span class="gh-badge-label">license</span><span class="gh-badge-value gh-badge-value-blue">MIT</span>
              </span>
              <span class="gh-badge">
                <span class="gh-badge-label">status</span><span class="gh-badge-value gh-badge-value-green">actively maintained</span>
              </span>
            </div>

            <h2 class="gh-md-h2">Hi there <span class="gh-wave">&#x1F44B;</span></h2>
            <p>I'm a postdoctoral researcher at the <strong>Niels Bohr Institute</strong> in Copenhagen, working at the intersection of <strong>particle physics</strong> and <strong>machine learning</strong>. I co-convene the ML efforts for the ATLAS Inner Tracker, building graph neural networks that reconstruct charged particle trajectories from billions of detector hits.</p>

            <h3 class="gh-md-h3">&#x1F527; What I'm working on</h3>
            <ul class="gh-md-list">
              <li><strong>GNN4ITk</strong> &mdash; Production-grade graph neural networks for the ATLAS ITk detector upgrade</li>
              <li><strong>Exa.TrkX</strong> &mdash; Scalable particle tracking pipelines for High Luminosity LHC</li>
              <li><strong>Equivariant architectures</strong> &mdash; Geometric deep learning for physics-aware inference</li>
              <li><strong>Physics Language Models</strong> &mdash; Exploring LLMs for HEP knowledge retrieval</li>
            </ul>

            <h3 class="gh-md-h3">&#x1F4E6; Latest releases</h3>
            <ul class="gh-md-list">
              <li><code>v2024.3</code> &mdash; "Graph Construction for Charged Particle Tracking" (NeurIPS ML4PS 2024)</li>
              <li><code>v2024.1</code> &mdash; "Equivariant GNNs for Tracking at the ATLAS Detector"</li>
              <li><code>v2023.2</code> &mdash; "Large-scale GNN Training for Particle Track Reconstruction"</li>
              <li><code>v2022.4</code> &mdash; "Exa.TrkX: TrackML Particle Tracking Challenge Solutions"</li>
            </ul>

            <h3 class="gh-md-h3">&#x1F4CA; Stats</h3>
            <div class="gh-stats-card">
              <div class="gh-stats-header">Daniel Murnane's Research Stats</div>
              <div class="gh-stats-body">
                <div class="gh-stats-row">
                  <span>Total Citations (Contributions)</span>
                  <strong>1,276</strong>
                </div>
                <div class="gh-stats-row">
                  <span>Publications Shipped</span>
                  <strong>42</strong>
                </div>
                <div class="gh-stats-row">
                  <span>h-index</span>
                  <strong>8</strong>
                </div>
                <div class="gh-stats-row">
                  <span>Active Collaborators</span>
                  <strong>3,000+</strong>
                </div>
                <div class="gh-stats-row">
                  <span>Conferences Attended</span>
                  <strong>27</strong>
                </div>
                <div class="gh-stats-row">
                  <span>Cups of Coffee (est.)</span>
                  <strong>12,410</strong>
                </div>
              </div>
              <div class="gh-stats-langs">
                <div class="gh-stats-langs-title">Most Used Languages</div>
                <div class="gh-stats-lang-bar">
                  <div style="width: 62%; background: #3572A5;"></div>
                  <div style="width: 18%; background: #f1e05a;"></div>
                  <div style="width: 10%; background: #e34c26;"></div>
                  <div style="width: 6%; background: #2b7489;"></div>
                  <div style="width: 4%; background: #89e051;"></div>
                </div>
                <div class="gh-stats-lang-legend">
                  <span><span class="gh-lang-dot" style="background: #3572A5;"></span> Python 62%</span>
                  <span><span class="gh-lang-dot" style="background: #f1e05a;"></span> JavaScript 18%</span>
                  <span><span class="gh-lang-dot" style="background: #e34c26;"></span> C++ 10%</span>
                  <span><span class="gh-lang-dot" style="background: #2b7489;"></span> TypeScript 6%</span>
                  <span><span class="gh-lang-dot" style="background: #89e051;"></span> Shell 4%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const pinnedRepos = ref([
  {
    name: 'gnn4itk',
    description: 'Graph Neural Networks for ATLAS Inner Tracker reconstruction. Production pipeline for HL-LHC.',
    stars: 89,
    forks: 23,
    language: 'Python',
    langColor: '#3572A5'
  },
  {
    name: 'physics-lm',
    description: 'Physics Language Model prototype for HEP knowledge retrieval and question answering.',
    stars: 42,
    forks: 8,
    language: 'Python',
    langColor: '#3572A5'
  },
  {
    name: 'exa-trkx',
    description: 'Particle tracking with the Exa.TrkX pipeline. Scalable GNN-based track reconstruction.',
    stars: 156,
    forks: 41,
    language: 'Python',
    langColor: '#3572A5'
  },
  {
    name: 'equivariant-gnn',
    description: 'Equivariant Graph Neural Networks for charged particle tracking with geometric deep learning.',
    stars: 67,
    forks: 15,
    language: 'Python',
    langColor: '#3572A5'
  },
  {
    name: 'chatlas',
    description: 'AI assistant for the ATLAS collaboration. RAG-powered Q&A over internal documentation.',
    stars: 31,
    forks: 5,
    language: 'TypeScript',
    langColor: '#2b7489'
  },
  {
    name: 'composite-higgs',
    description: 'Fine-tuning analysis of composite Higgs models. Phenomenological constraints and predictions.',
    stars: 24,
    forks: 3,
    language: 'Python',
    langColor: '#3572A5'
  }
])

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const colors = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']

function seededRandom(seed) {
  let s = seed
  return function () {
    s = (s * 16807 + 0) % 2147483647
    return (s - 1) / 2147483646
  }
}

const heatmapData = ref([])

onMounted(() => {
  const rand = seededRandom(42)
  const data = []
  for (let w = 0; w < 52; w++) {
    const week = []
    for (let d = 0; d < 7; d++) {
      const r = rand()
      // Create a realistic-looking distribution: many empty, some light, fewer dark
      let colorIdx
      if (r < 0.30) colorIdx = 0
      else if (r < 0.55) colorIdx = 1
      else if (r < 0.75) colorIdx = 2
      else if (r < 0.90) colorIdx = 3
      else colorIdx = 4
      week.push(colors[colorIdx])
    }
    data.push(week)
  }
  heatmapData.value = data
})

function getContribCount(color) {
  const map = {
    '#ebedf0': 0,
    '#9be9a8': '1-3',
    '#40c463': '4-6',
    '#30a14e': '7-9',
    '#216e39': '10+'
  }
  return map[color] || 0
}
</script>

<style scoped>
/* Reset VitePress styles */
.gh-page {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif;
  color: #1f2328;
  background: #ffffff;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  /* Override VitePress container */
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-top: -24px;
}

.gh-page *,
.gh-page *::before,
.gh-page *::after {
  box-sizing: border-box;
}

.gh-page a {
  color: inherit;
  text-decoration: none;
}

.gh-page ul {
  list-style: disc;
}

/* Header */
.gh-header {
  background: #24292e;
  padding: 0 32px;
  height: 62px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
}

.gh-header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}

.gh-header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.gh-logo {
  flex-shrink: 0;
}

.gh-search-wrapper {
  position: relative;
}

.gh-search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.gh-search {
  background: #24292e;
  border: 1px solid #57606a;
  border-radius: 6px;
  color: #ffffff;
  padding: 5px 12px 5px 32px;
  font-size: 14px;
  width: 272px;
  outline: none;
  transition: width 0.2s;
}

.gh-search::placeholder {
  color: rgba(255,255,255,0.5);
}

.gh-search:focus {
  width: 400px;
  border-color: #58a6ff;
  background: #0d1117;
}

.gh-nav {
  display: flex;
  gap: 16px;
}

.gh-nav a {
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  opacity: 0.85;
  transition: opacity 0.15s;
}

.gh-nav a:hover {
  opacity: 1;
}

.gh-header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.gh-avatar-small {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  font-size: 8px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

/* Tabs Bar */
.gh-tabs-bar {
  border-bottom: 1px solid #d0d7de;
  background: #f6f8fa;
  padding: 0 32px;
}

.gh-tabs-inner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  gap: 0;
  padding-left: 296px;
}

.gh-tab {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  font-size: 14px;
  color: #1f2328;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: border-color 0.15s;
}

.gh-tab:hover {
  border-bottom-color: #d0d7de;
}

.gh-tab.active {
  font-weight: 600;
  border-bottom-color: #fd8c73;
}

.gh-tab svg {
  opacity: 0.6;
}

.gh-counter {
  background: rgba(175, 184, 193, 0.2);
  border-radius: 10px;
  padding: 0 8px;
  font-size: 12px;
  font-weight: 600;
  min-width: 20px;
  text-align: center;
}

/* Main Layout */
.gh-main {
  max-width: 1280px;
  margin: 0 auto;
  padding: 32px;
  display: grid;
  grid-template-columns: 264px 1fr;
  gap: 32px;
}

/* Sidebar */
.gh-sidebar {
  position: relative;
}

.gh-avatar-wrapper {
  margin-top: -32px;
}

.gh-avatar-large {
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: 4px solid #ffffff;
  box-shadow: 0 0 0 1px rgba(27, 31, 36, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
}

.gh-avatar-large span {
  font-size: 80px;
  font-weight: 700;
  color: white;
  letter-spacing: -2px;
}

.gh-profile-info {
  margin-top: 16px;
}

.gh-display-name {
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
  margin: 0;
  color: #1f2328;
}

.gh-username {
  font-size: 20px;
  font-weight: 300;
  color: #656d76;
  margin: 0;
  font-style: normal;
  line-height: 1.5;
}

.gh-bio {
  font-size: 14px;
  color: #1f2328;
  margin: 12px 0 16px;
  line-height: 1.5;
}

.gh-follow-btn {
  width: 100%;
  padding: 5px 16px;
  background: #f6f8fa;
  border: 1px solid rgba(27, 31, 36, 0.15);
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  color: #1f2328;
  cursor: pointer;
  transition: background 0.15s;
}

.gh-follow-btn:hover {
  background: #f3f4f6;
  border-color: rgba(27, 31, 36, 0.25);
}

.gh-follow-stats {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 16px;
  font-size: 14px;
  color: #656d76;
}

.gh-follow-stats a {
  color: #656d76;
  display: flex;
  align-items: center;
  gap: 4px;
}

.gh-follow-stats a:hover {
  color: #0969da;
}

.gh-follow-stats strong {
  color: #1f2328;
}

.gh-dot-sep {
  margin: 0 2px;
}

.gh-profile-meta {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.gh-meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #1f2328;
}

.gh-meta-item svg {
  flex-shrink: 0;
}

.gh-org-badge {
  color: #1f2328;
  font-size: 13px;
}

.gh-link {
  color: #0969da !important;
}

.gh-link:hover {
  text-decoration: underline !important;
}

/* Pinned Repos */
.gh-section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 16px;
  color: #1f2328;
}

.gh-customize {
  font-size: 12px;
  color: #0969da !important;
}

.gh-customize:hover {
  text-decoration: underline !important;
}

.gh-pinned-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 32px;
}

.gh-repo-card {
  border: 1px solid #d0d7de;
  border-radius: 6px;
  padding: 16px;
  display: flex;
  flex-direction: column;
}

.gh-repo-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.gh-repo-name {
  color: #0969da !important;
  font-size: 14px;
  font-weight: 600;
}

.gh-repo-name:hover {
  text-decoration: underline !important;
}

.gh-repo-visibility {
  font-size: 12px;
  color: #656d76;
  border: 1px solid #d0d7de;
  border-radius: 12px;
  padding: 0 8px;
  line-height: 20px;
}

.gh-repo-desc {
  font-size: 12px;
  color: #656d76;
  margin: 0 0 auto;
  line-height: 1.5;
  flex: 1;
}

.gh-repo-meta {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 12px;
  font-size: 12px;
  color: #656d76;
}

.gh-lang {
  display: flex;
  align-items: center;
  gap: 4px;
}

.gh-lang-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.gh-stars,
.gh-forks {
  display: flex;
  align-items: center;
  gap: 4px;
}

.gh-stars svg,
.gh-forks svg {
  width: 14px;
  height: 14px;
}

/* Contribution Graph */
.gh-contrib-section {
  margin-bottom: 32px;
}

.gh-contrib-title {
  font-size: 16px;
  font-weight: 400;
  color: #1f2328;
  margin: 0 0 8px;
}

.gh-contrib-graph {
  border: 1px solid #d0d7de;
  border-radius: 6px;
  padding: 16px;
  display: flex;
  gap: 8px;
  overflow-x: auto;
}

.gh-contrib-labels {
  display: flex;
  flex-direction: column;
  gap: 0;
  padding-top: 22px;
}

.gh-contrib-labels span {
  height: 13px;
  font-size: 10px;
  color: #656d76;
  line-height: 13px;
}

.gh-contrib-grid-wrapper {
  flex: 1;
  overflow-x: auto;
}

.gh-contrib-months {
  display: flex;
  gap: 0;
  margin-bottom: 4px;
}

.gh-contrib-months span {
  font-size: 10px;
  color: #656d76;
  min-width: calc((13px + 2px) * 4);
}

.gh-contrib-grid {
  display: flex;
  gap: 2px;
}

.gh-contrib-week {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.gh-contrib-day {
  width: 11px;
  height: 11px;
  border-radius: 2px;
  outline: 1px solid rgba(27, 31, 36, 0.06);
  outline-offset: -1px;
}

.gh-contrib-legend {
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: flex-end;
  margin-top: 8px;
  font-size: 10px;
  color: #656d76;
}

/* README */
.gh-readme {
  border: 1px solid #d0d7de;
  border-radius: 6px;
  margin-bottom: 32px;
}

.gh-readme-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid #d0d7de;
  background: #f6f8fa;
  border-radius: 6px 6px 0 0;
  font-size: 14px;
  color: #656d76;
}

.gh-readme-header strong {
  color: #1f2328;
}

.gh-readme-body {
  padding: 32px;
}

/* Badges */
.gh-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 24px;
}

.gh-badge {
  display: inline-flex;
  border-radius: 4px;
  font-size: 12px;
  font-family: 'Verdana', 'DejaVu Sans', Geneva, sans-serif;
  overflow: hidden;
  line-height: 1;
}

.gh-badge-label {
  background: #555;
  color: #ffffff;
  padding: 4px 6px;
}

.gh-badge-value {
  padding: 4px 6px;
  color: #ffffff;
}

.gh-badge-value-green {
  background: #4c1;
}

.gh-badge-value-blue {
  background: #007ec6;
}

.gh-badge-value-orange {
  background: #fe7d37;
}

/* Markdown content */
.gh-md-h2 {
  font-size: 24px;
  font-weight: 600;
  padding-bottom: 0.3em;
  border-bottom: 1px solid hsla(210, 18%, 87%, 1);
  margin: 0 0 16px;
  color: #1f2328;
}

.gh-wave {
  display: inline-block;
  animation: gh-wave-anim 2.5s infinite;
  transform-origin: 70% 70%;
}

@keyframes gh-wave-anim {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}

.gh-md-h3 {
  font-size: 20px;
  font-weight: 600;
  margin: 24px 0 16px;
  color: #1f2328;
}

.gh-readme-body p {
  margin: 0 0 16px;
  font-size: 16px;
  color: #1f2328;
  line-height: 1.6;
}

.gh-md-list {
  padding-left: 2em;
  margin: 0 0 16px;
}

.gh-md-list li {
  margin-bottom: 4px;
  font-size: 15px;
  color: #1f2328;
  line-height: 1.6;
}

.gh-md-list code,
.gh-readme-body code {
  background: rgba(175, 184, 193, 0.2);
  padding: 0.2em 0.4em;
  border-radius: 6px;
  font-size: 85%;
  font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace;
}

/* Stats Card */
.gh-stats-card {
  border: 1px solid #e4e2e2;
  border-radius: 8px;
  overflow: hidden;
  max-width: 500px;
  margin: 16px 0;
  background: linear-gradient(135deg, #0d1117 0%, #161b22 100%);
}

.gh-stats-header {
  padding: 16px 20px;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  border-bottom: 1px solid #30363d;
}

.gh-stats-body {
  padding: 12px 20px;
}

.gh-stats-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
  font-size: 14px;
  color: #c9d1d9;
}

.gh-stats-row strong {
  color: #58a6ff;
  font-weight: 700;
}

.gh-stats-langs {
  padding: 12px 20px 16px;
  border-top: 1px solid #30363d;
}

.gh-stats-langs-title {
  font-size: 14px;
  font-weight: 600;
  color: #c9d1d9;
  margin-bottom: 8px;
}

.gh-stats-lang-bar {
  display: flex;
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
  gap: 2px;
}

.gh-stats-lang-bar div {
  border-radius: 2px;
}

.gh-stats-lang-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 8px;
  font-size: 12px;
  color: #8b949e;
}

.gh-stats-lang-legend span {
  display: flex;
  align-items: center;
  gap: 4px;
}

.gh-stats-lang-legend .gh-lang-dot {
  width: 10px;
  height: 10px;
}

/* Responsive */
@media (max-width: 1024px) {
  .gh-main {
    grid-template-columns: 1fr;
    padding: 24px 16px;
  }

  .gh-tabs-inner {
    padding-left: 0;
  }

  .gh-avatar-large {
    width: 160px;
    height: 160px;
    margin: 0 auto;
  }

  .gh-avatar-large span {
    font-size: 50px;
  }

  .gh-sidebar {
    text-align: center;
  }

  .gh-profile-meta {
    align-items: center;
  }

  .gh-follow-stats {
    justify-content: center;
  }

  .gh-pinned-grid {
    grid-template-columns: 1fr;
  }

  .gh-nav {
    display: none;
  }

  .gh-search {
    width: 160px;
  }

  .gh-search:focus {
    width: 200px;
  }
}

@media (max-width: 600px) {
  .gh-header {
    padding: 0 16px;
  }

  .gh-tabs-bar {
    padding: 0 16px;
    overflow-x: auto;
  }

  .gh-tabs-inner {
    min-width: max-content;
  }

  .gh-readme-body {
    padding: 16px;
  }

  .gh-badges {
    gap: 4px;
  }

  .gh-stats-card {
    max-width: 100%;
  }
}
</style>
