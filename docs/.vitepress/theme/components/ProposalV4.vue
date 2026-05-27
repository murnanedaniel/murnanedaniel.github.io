<template>
  <div class="npm-root">
    <!-- npm Header -->
    <header class="npm-header">
      <div class="npm-header-inner">
        <div class="npm-logo">
          <svg viewBox="0 0 780 250" width="52" height="18">
            <path fill="#fff" d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"/>
          </svg>
        </div>
        <div class="npm-search">
          <div class="npm-search-box">
            <svg class="npm-search-icon" viewBox="0 0 18 18" width="18" height="18"><path fill="#999" d="M12.14 11.07a6.5 6.5 0 1 0-1.07 1.07l4.39 4.4 1.07-1.08-4.39-4.39zM6.5 12A5.5 5.5 0 1 1 12 6.5 5.51 5.51 0 0 1 6.5 12z"/></svg>
            <input type="text" placeholder="Search packages" disabled />
          </div>
          <button class="npm-search-btn" disabled>Search</button>
        </div>
        <div class="npm-header-links">
          <span>Sign Up</span>
          <span>Sign In</span>
        </div>
      </div>
    </header>

    <!-- Package Info Bar -->
    <div class="npm-pkg-bar">
      <div class="npm-pkg-bar-inner">
        <div class="npm-pkg-name-row">
          <h1 class="npm-pkg-name">@daniel-murnane/core</h1>
          <span class="npm-pkg-version">3.0.0</span>
          <span class="npm-pkg-public-badge">Public</span>
        </div>
        <div class="npm-pkg-meta-row">
          <span>Published 2 months ago</span>
          <span class="npm-meta-sep">&bull;</span>
          <span>License: MIT</span>
          <span class="npm-meta-sep">&bull;</span>
          <span>42 Versions</span>
        </div>
      </div>
    </div>

    <!-- Tabs -->
    <div class="npm-tabs-bar">
      <div class="npm-tabs-inner">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          :class="['npm-tab', { active: activeTab === tab.id }]"
          @click="activeTab = tab.id"
        >{{ tab.label }}</button>
      </div>
    </div>

    <!-- Main Content -->
    <div class="npm-main">
      <div class="npm-main-inner">
        <!-- Left Content -->
        <div class="npm-content-left">
          <!-- README Tab -->
          <div v-if="activeTab === 'readme'" class="npm-readme">
            <!-- Badges -->
            <div class="readme-badges">
              <span class="badge badge-green">build: passing</span>
              <span class="badge badge-green">coverage: 99%</span>
              <span class="badge badge-blue">license: MIT</span>
              <span class="badge badge-orange">downloads: 1.2k/week</span>
              <span class="badge badge-purple">h-index: 8</span>
            </div>

            <h1>@daniel-murnane/core</h1>
            <blockquote>A production-ready physicist and machine learning researcher specializing in graph neural networks for particle physics.</blockquote>

            <p>
              <strong>Daniel Murnane</strong> is a researcher at the Niels Bohr Institute in Copenhagen (DDSA Fellow)
              working at the intersection of machine learning and high-energy physics. Previously a postdoc at
              Lawrence Berkeley National Lab and PhD graduate from the University of Adelaide. He convenes the
              Machine Learning group within the ATLAS experiment at CERN, driving the adoption of modern deep
              learning techniques for charged particle tracking and event reconstruction.
            </p>

            <h2>Features</h2>
            <ul class="feature-list">
              <li><strong>Graph Neural Networks</strong> &mdash; Pioneering GNN-based charged particle tracking. Led the Exa.TrkX project from R&amp;D to multi-experiment adoption.</li>
              <li><strong>Particle Track Reconstruction</strong> &mdash; End-to-end ML pipelines that match or exceed classical combinatorial algorithms in physics performance.</li>
              <li><strong>Equivariant Networks</strong> &mdash; Symmetry-preserving architectures (gauge equivariance, Lorentz invariance) for physics-aware learning.</li>
              <li><strong>Physics Language Models</strong> <code>beta</code> &mdash; Exploring LLMs for scientific reasoning, hypothesis generation, and literature synthesis.</li>
              <li><strong>Open Science &amp; Benchmarks</strong> &mdash; Creator of the CommonTRK benchmark suite. Advocate for reproducible, community-driven research.</li>
            </ul>

            <h2>Quick Start</h2>
            <div class="code-block">
              <div class="code-header">JavaScript</div>
              <pre><code><span class="kw">const</span> daniel = <span class="fn">require</span>(<span class="str">'@daniel-murnane/core'</span>);

<span class="cm">// Initialize a research collaboration</span>
<span class="kw">const</span> collab = daniel.<span class="fn">research</span>({
  topic: <span class="str">'graph-neural-networks'</span>,
  mode: <span class="str">'collaborate'</span>,
  caffeine: <span class="str">'high'</span>
});

<span class="cm">// Access expertise</span>
collab.<span class="fn">getExpertise</span>(<span class="str">'particle-tracking'</span>);
<span class="cm">// =&gt; { papers: 42, citations: 1276, hIndex: 8 }</span>

<span class="cm">// Schedule a meeting</span>
daniel.<span class="fn">schedule</span>({
  timezone: <span class="str">'Europe/Copenhagen'</span>,
  preference: <span class="str">'morning-coffee'</span>
});</code></pre>
            </div>

            <h2>API Reference</h2>
            <table class="api-table">
              <thead>
                <tr><th>Method</th><th>Description</th><th>Returns</th></tr>
              </thead>
              <tbody>
                <tr><td><code>.research(opts)</code></td><td>Start a research collaboration</td><td><code>Collaboration</code></td></tr>
                <tr><td><code>.cite(paper)</code></td><td>Get citation info for a paper</td><td><code>Citation</code></td></tr>
                <tr><td><code>.teach(topic)</code></td><td>Request a tutorial or lecture</td><td><code>Lecture</code></td></tr>
                <tr><td><code>.schedule(opts)</code></td><td>Book a meeting</td><td><code>Meeting</code></td></tr>
                <tr><td><code>.getExpertise(area)</code></td><td>Query expertise in a domain</td><td><code>ExpertiseReport</code></td></tr>
              </tbody>
            </table>

            <h2>Changelog</h2>
            <ul>
              <li><strong>v3.0.0</strong> (2024) &mdash; DDSA Fellow at Niels Bohr Institute. Copenhagen era begins.</li>
              <li><strong>v2.0.0</strong> (2020) &mdash; Postdoc at Lawrence Berkeley National Lab. Exa.TrkX project lead.</li>
              <li><strong>v1.0.0</strong> (2019) &mdash; PhD from University of Adelaide. ATLAS experiment foundation.</li>
            </ul>

            <h2>License</h2>
            <p>MIT &copy; Daniel Murnane</p>
          </div>

          <!-- Versions Tab -->
          <div v-if="activeTab === 'versions'" class="npm-versions">
            <h2>Version History</h2>
            <p class="versions-subtitle">Career milestones as semantic versions</p>
            <div class="version-list">
              <div class="version-item" v-for="v in versions" :key="v.version">
                <div class="version-left">
                  <span class="version-tag">{{ v.version }}</span>
                  <span class="version-label" v-if="v.tag">{{ v.tag }}</span>
                </div>
                <div class="version-right">
                  <div class="version-title">{{ v.title }}</div>
                  <div class="version-desc">{{ v.description }}</div>
                  <div class="version-date">{{ v.date }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Dependencies Tab -->
          <div v-if="activeTab === 'dependencies'" class="npm-deps">
            <h2>Dependencies <span class="dep-count">{{ dependencies.length }}</span></h2>
            <div class="dep-grid">
              <a v-for="dep in dependencies" :key="dep.name" class="dep-item" href="javascript:void(0)">
                <span class="dep-name">{{ dep.name }}</span>
                <span class="dep-ver">{{ dep.version }}</span>
              </a>
            </div>

            <h2 style="margin-top: 32px;">Dev Dependencies <span class="dep-count">{{ devDependencies.length }}</span></h2>
            <div class="dep-grid">
              <a v-for="dep in devDependencies" :key="dep.name" class="dep-item" href="javascript:void(0)">
                <span class="dep-name">{{ dep.name }}</span>
                <span class="dep-ver">{{ dep.version }}</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Right Sidebar -->
        <aside class="npm-sidebar">
          <!-- Install box -->
          <div class="sidebar-section">
            <h3>Install</h3>
            <div class="install-box" @click="copyInstall">
              <code>npm i @daniel-murnane/core</code>
              <svg class="copy-icon" viewBox="0 0 24 24" width="16" height="16"><path fill="#666" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
            </div>
          </div>

          <!-- Weekly Downloads -->
          <div class="sidebar-section">
            <h3>Weekly Downloads</h3>
            <div class="weekly-downloads-number">1,276</div>
            <canvas ref="chartCanvas" width="260" height="90" class="downloads-chart"></canvas>
          </div>

          <!-- Version -->
          <div class="sidebar-section">
            <h3>Version</h3>
            <p>3.0.0</p>
          </div>

          <!-- License -->
          <div class="sidebar-section">
            <h3>License</h3>
            <p>MIT</p>
          </div>

          <!-- Last publish -->
          <div class="sidebar-section">
            <h3>Last publish</h3>
            <p>2 months ago</p>
          </div>

          <!-- Collaborators -->
          <div class="sidebar-section">
            <h3>Collaborators</h3>
            <div class="collab-row">
              <div class="collab-avatar" v-for="c in collaborators" :key="c.initials" :title="c.name" :style="{ background: c.color }">{{ c.initials }}</div>
            </div>
          </div>

          <!-- Dependencies -->
          <div class="sidebar-section">
            <h3>Dependencies</h3>
            <div class="sidebar-deps">
              <span v-for="dep in sidebarDeps" :key="dep">{{ dep }}</span>
            </div>
          </div>

          <!-- Keywords -->
          <div class="sidebar-section">
            <h3>Keywords</h3>
            <div class="keywords">
              <span class="keyword" v-for="kw in keywords" :key="kw">{{ kw }}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const activeTab = ref('readme')
const chartCanvas = ref(null)

const tabs = [
  { id: 'readme', label: 'Readme' },
  { id: 'versions', label: 'Versions (42)' },
  { id: 'dependencies', label: 'Dependencies (8)' },
]

const versions = [
  { version: '3.0.0', tag: 'latest', title: 'DDSA Fellow, Niels Bohr Institute', description: 'Major release: relocated to Copenhagen. New focus on equivariant architectures and physics language models.', date: '2024-06-01' },
  { version: '2.5.0', tag: '', title: 'ATLAS ML Convener', description: 'Promoted to convener of ATLAS ML group at CERN. Driving adoption of modern deep learning across the collaboration.', date: '2023-01-15' },
  { version: '2.2.0', tag: '', title: 'Exa.TrkX Production', description: 'GNN tracking pipeline reaches production readiness. Multi-experiment adoption begins.', date: '2022-06-01' },
  { version: '2.0.0', tag: '', title: 'Postdoc at Berkeley Lab', description: 'Breaking change: moved from theory-adjacent to fully ML-focused research. Exa.TrkX project initiated.', date: '2020-03-01' },
  { version: '1.0.0', tag: '', title: 'PhD, University of Adelaide', description: 'Initial stable release. Foundation in particle physics, ATLAS experiment, early ML explorations.', date: '2019-11-01' },
  { version: '0.1.0-alpha', tag: '', title: 'Undergraduate', description: 'Pre-release version. Physics and mathematics foundations. First taste of research.', date: '2015-02-01' },
]

const dependencies = [
  { name: 'pytorch', version: '^2.0.0' },
  { name: 'python', version: '>=3.9' },
  { name: 'atlas-framework', version: '^23.0.0' },
  { name: 'root-cern', version: '^6.28' },
  { name: 'pytorch-geometric', version: '^2.3' },
  { name: 'cuda-toolkit', version: '>=11.8' },
  { name: 'numpy', version: '^1.24' },
  { name: 'wandb', version: '^0.15' },
]

const devDependencies = [
  { name: 'pytest', version: '^7.0' },
  { name: 'jupyter', version: '^1.0' },
  { name: 'matplotlib', version: '^3.7' },
  { name: 'latex', version: '*' },
  { name: 'coffee-machine', version: '^9000.0.0' },
  { name: 'git', version: '>=2.40' },
]

const collaborators = [
  { initials: 'SC', name: 'Steve Farrell (LBNL)', color: '#e74c3c' },
  { initials: 'XJ', name: 'Xiangyang Ju (LBNL)', color: '#3498db' },
  { initials: 'CT', name: 'Charline Rougier (CERN)', color: '#2ecc71' },
  { initials: 'TP', name: 'Tobias Golling (Geneva)', color: '#9b59b6' },
  { initials: 'AG', name: 'Aishik Ghosh (UCI)', color: '#f39c12' },
]

const sidebarDeps = ['PyTorch', 'Python', 'ATLAS Framework', 'ROOT']

const keywords = ['physics', 'machine-learning', 'gnn', 'particle-tracking', 'atlas', 'cern', 'deep-learning', 'hep']

function copyInstall() {
  if (navigator.clipboard) {
    navigator.clipboard.writeText('npm i @daniel-murnane/core')
  }
}

function drawChart() {
  const canvas = chartCanvas.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  const W = canvas.width
  const H = canvas.height

  // Citation data (citations per year)
  const data = [5, 12, 25, 80, 120, 180, 350, 300]
  const labels = ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024']
  const maxVal = Math.max(...data)

  // Clear
  ctx.clearRect(0, 0, W, H)

  // Draw area
  const padL = 4
  const padR = 4
  const padT = 8
  const padB = 20
  const chartW = W - padL - padR
  const chartH = H - padT - padB

  const points = data.map((d, i) => ({
    x: padL + (i / (data.length - 1)) * chartW,
    y: padT + chartH - (d / maxVal) * chartH
  }))

  // Fill area
  ctx.beginPath()
  ctx.moveTo(points[0].x, padT + chartH)
  points.forEach(p => ctx.lineTo(p.x, p.y))
  ctx.lineTo(points[points.length - 1].x, padT + chartH)
  ctx.closePath()
  ctx.fillStyle = 'rgba(203, 56, 55, 0.1)'
  ctx.fill()

  // Draw line
  ctx.beginPath()
  points.forEach((p, i) => {
    if (i === 0) ctx.moveTo(p.x, p.y)
    else ctx.lineTo(p.x, p.y)
  })
  ctx.strokeStyle = '#cb3837'
  ctx.lineWidth = 2
  ctx.stroke()

  // Draw dots
  points.forEach(p => {
    ctx.beginPath()
    ctx.arc(p.x, p.y, 3, 0, Math.PI * 2)
    ctx.fillStyle = '#cb3837'
    ctx.fill()
  })

  // Labels
  ctx.fillStyle = '#999'
  ctx.font = '9px -apple-system, sans-serif'
  ctx.textAlign = 'center'
  labels.forEach((l, i) => {
    if (i % 2 === 0 || i === labels.length - 1) {
      ctx.fillText(l, points[i].x, H - 4)
    }
  })
}

onMounted(() => {
  drawChart()
})
</script>

<style scoped>
/* ===== Reset & Root ===== */
.npm-root {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #333;
  background: #fff;
  min-height: 100vh;
  font-size: 15px;
  line-height: 1.6;
}
.npm-root *, .npm-root *::before, .npm-root *::after {
  box-sizing: border-box;
}

/* ===== Header ===== */
.npm-header {
  background: #cb3837;
  padding: 0 20px;
  height: 56px;
  display: flex;
  align-items: center;
}
.npm-header-inner {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
}
.npm-logo {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}
.npm-search {
  flex: 1;
  display: flex;
  gap: 0;
  max-width: 600px;
}
.npm-search-box {
  flex: 1;
  position: relative;
}
.npm-search-box input {
  width: 100%;
  height: 36px;
  border: none;
  border-radius: 3px 0 0 3px;
  padding: 0 12px 0 36px;
  font-size: 14px;
  background: #fff;
  color: #333;
}
.npm-search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}
.npm-search-btn {
  height: 36px;
  background: #222;
  color: #fff;
  border: none;
  border-radius: 0 3px 3px 0;
  padding: 0 16px;
  font-size: 14px;
  cursor: pointer;
}
.npm-header-links {
  display: flex;
  gap: 16px;
  color: #fff;
  font-size: 13px;
  flex-shrink: 0;
}
.npm-header-links span {
  cursor: pointer;
  opacity: 0.85;
}
.npm-header-links span:hover {
  opacity: 1;
}

/* ===== Package Bar ===== */
.npm-pkg-bar {
  background: #fafafa;
  border-bottom: 1px solid #e5e5e5;
  padding: 20px;
}
.npm-pkg-bar-inner {
  max-width: 1200px;
  margin: 0 auto;
}
.npm-pkg-name-row {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.npm-pkg-name {
  font-size: 1.6em;
  font-weight: 700;
  color: #333;
  margin: 0;
}
.npm-pkg-version {
  background: #e5e5e5;
  color: #555;
  font-size: 13px;
  padding: 2px 8px;
  border-radius: 3px;
  font-weight: 600;
}
.npm-pkg-public-badge {
  background: #27ae60;
  color: #fff;
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 3px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.npm-pkg-meta-row {
  margin-top: 8px;
  color: #888;
  font-size: 13px;
}
.npm-meta-sep {
  margin: 0 8px;
}

/* ===== Tabs ===== */
.npm-tabs-bar {
  border-bottom: 1px solid #e5e5e5;
  background: #fff;
  padding: 0 20px;
}
.npm-tabs-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 0;
}
.npm-tab {
  background: none;
  border: none;
  border-bottom: 3px solid transparent;
  padding: 12px 20px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.15s;
}
.npm-tab:hover {
  color: #333;
}
.npm-tab.active {
  color: #333;
  border-bottom-color: #333;
}

/* ===== Main Layout ===== */
.npm-main {
  padding: 24px 20px;
  background: #fff;
}
.npm-main-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 40px;
  align-items: flex-start;
}
.npm-content-left {
  flex: 1;
  min-width: 0;
}
.npm-sidebar {
  width: 280px;
  flex-shrink: 0;
}

/* ===== README ===== */
.npm-readme h1 {
  font-size: 1.8em;
  margin: 20px 0 16px;
  color: #333;
  border-bottom: 1px solid #eee;
  padding-bottom: 12px;
}
.npm-readme h2 {
  font-size: 1.3em;
  margin: 28px 0 12px;
  color: #333;
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;
}
.npm-readme blockquote {
  border-left: 4px solid #cb3837;
  padding: 8px 16px;
  margin: 16px 0;
  color: #555;
  background: #fafafa;
  border-radius: 0 4px 4px 0;
}
.npm-readme p {
  margin: 12px 0;
  color: #444;
}
.npm-readme ul {
  padding-left: 20px;
}
.npm-readme li {
  margin: 8px 0;
  color: #444;
}
.npm-readme code {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 0.9em;
  font-family: 'Fira Code', 'Consolas', monospace;
  color: #c7254e;
}

/* Badges */
.readme-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 8px;
}
.badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 3px;
  color: #fff;
  letter-spacing: 0.3px;
}
.badge-green { background: #4c1; }
.badge-blue { background: #007ec6; }
.badge-orange { background: #e05d44; }
.badge-purple { background: #9b59b6; }

/* Code block */
.code-block {
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  overflow: hidden;
  margin: 16px 0;
}
.code-header {
  background: #f6f8fa;
  padding: 8px 16px;
  font-size: 12px;
  color: #888;
  border-bottom: 1px solid #e5e5e5;
  font-weight: 600;
}
.code-block pre {
  margin: 0;
  padding: 16px;
  overflow-x: auto;
  background: #fafafa;
  font-size: 13px;
  line-height: 1.6;
}
.code-block code {
  font-family: 'Fira Code', 'Consolas', monospace;
  background: none;
  padding: 0;
  color: #333;
}
.code-block .kw { color: #d73a49; }
.code-block .fn { color: #6f42c1; }
.code-block .str { color: #032f62; }
.code-block .cm { color: #6a737d; }

/* Feature list */
.feature-list li {
  margin: 10px 0;
  line-height: 1.5;
}

/* API table */
.api-table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;
  font-size: 14px;
}
.api-table th {
  text-align: left;
  padding: 10px 12px;
  background: #f6f8fa;
  border: 1px solid #e5e5e5;
  color: #333;
  font-weight: 600;
}
.api-table td {
  padding: 10px 12px;
  border: 1px solid #e5e5e5;
  color: #555;
}
.api-table code {
  font-size: 12px;
}

/* ===== Versions Tab ===== */
.npm-versions h2 {
  font-size: 1.4em;
  color: #333;
  margin: 0 0 4px;
}
.versions-subtitle {
  color: #888;
  font-size: 13px;
  margin: 0 0 24px;
}
.version-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.version-item {
  display: flex;
  gap: 20px;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}
.version-left {
  width: 110px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.version-tag {
  font-family: 'Fira Code', monospace;
  font-size: 15px;
  font-weight: 600;
  color: #cb3837;
}
.version-label {
  display: inline-block;
  font-size: 10px;
  background: #27ae60;
  color: #fff;
  padding: 1px 6px;
  border-radius: 3px;
  width: fit-content;
  font-weight: 600;
  text-transform: uppercase;
}
.version-right {
  flex: 1;
}
.version-title {
  font-weight: 600;
  color: #333;
  font-size: 15px;
}
.version-desc {
  color: #666;
  font-size: 13px;
  margin: 4px 0;
}
.version-date {
  color: #aaa;
  font-size: 12px;
}

/* ===== Dependencies Tab ===== */
.npm-deps h2 {
  font-size: 1.3em;
  color: #333;
  margin: 0 0 16px;
}
.dep-count {
  background: #e5e5e5;
  color: #666;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 10px;
  font-weight: normal;
}
.dep-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.dep-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fafafa;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 8px 14px;
  min-width: 200px;
  text-decoration: none;
  transition: border-color 0.15s;
}
.dep-item:hover {
  border-color: #cb3837;
}
.dep-name {
  color: #cb3837;
  font-weight: 500;
  font-size: 14px;
}
.dep-ver {
  color: #888;
  font-size: 12px;
  margin-left: 12px;
}

/* ===== Sidebar ===== */
.sidebar-section {
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #eee;
}
.sidebar-section:last-child {
  border-bottom: none;
}
.sidebar-section h3 {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: #888;
  margin: 0 0 8px;
  font-weight: 600;
}
.sidebar-section p {
  margin: 0;
  color: #333;
  font-size: 14px;
}

/* Install box */
.install-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fafafa;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 10px 12px;
  cursor: pointer;
  transition: border-color 0.15s;
}
.install-box:hover {
  border-color: #cb3837;
}
.install-box code {
  font-family: 'Fira Code', monospace;
  font-size: 13px;
  color: #333;
}
.copy-icon {
  flex-shrink: 0;
}

/* Weekly downloads */
.weekly-downloads-number {
  font-size: 22px;
  font-weight: 700;
  color: #333;
  margin-bottom: 8px;
}
.downloads-chart {
  width: 100%;
  height: auto;
  display: block;
}

/* Collaborators */
.collab-row {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
.collab-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  cursor: default;
}

/* Sidebar deps */
.sidebar-deps {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.sidebar-deps span {
  color: #cb3837;
  font-size: 13px;
  font-weight: 500;
}
.sidebar-deps span::after {
  content: ',';
  color: #999;
}
.sidebar-deps span:last-child::after {
  content: '';
}

/* Keywords */
.keywords {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.keyword {
  display: inline-block;
  background: #fef3c7;
  color: #92400e;
  font-size: 12px;
  padding: 3px 10px;
  border-radius: 12px;
  font-weight: 500;
  cursor: pointer;
}
.keyword:hover {
  background: #fde68a;
}

/* ===== Responsive ===== */
@media (max-width: 860px) {
  .npm-main-inner {
    flex-direction: column;
  }
  .npm-sidebar {
    width: 100%;
    order: -1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 24px;
  }
  .npm-header-links {
    display: none;
  }
  .npm-pkg-name {
    font-size: 1.3em;
  }
}
@media (max-width: 520px) {
  .npm-sidebar {
    grid-template-columns: 1fr;
  }
  .npm-search {
    display: none;
  }
  .npm-tabs-inner {
    gap: 0;
  }
  .npm-tab {
    padding: 10px 12px;
    font-size: 13px;
  }
  .dep-item {
    min-width: 100%;
  }
}
</style>
