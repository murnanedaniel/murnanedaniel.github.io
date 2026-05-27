<template>
  <div class="v3-root">
    <!-- Terminal Phase -->
    <div v-if="!animationDone" class="terminal-wrapper">
      <button class="skip-btn" @click="skipAnimation">Skip intro &rarr;</button>
      <div class="terminal">
        <div class="terminal-header">
          <span class="terminal-dot red"></span>
          <span class="terminal-dot yellow"></span>
          <span class="terminal-dot green"></span>
          <span class="terminal-title">daniel@copenhagen ~ </span>
        </div>
        <div class="terminal-body" ref="terminalBody">
          <div class="scanlines"></div>
          <div class="terminal-content">
            <span v-for="(line, i) in displayedLines" :key="i" class="terminal-line" :class="lineClass(line)">{{ line.text }}<br /></span>
            <span v-if="currentlyTyping" class="terminal-line" :class="lineClass(currentLine)">{{ typedText }}<span class="cursor">&#9608;</span><br /></span>
            <span v-else-if="!allDone" class="cursor blink">&#9608;</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Content Phase -->
    <transition name="fade-up">
      <div v-if="animationDone" class="content-phase">
        <!-- Hero -->
        <div class="content-hero">
          <div class="hero-badge">v3.0.0 &mdash; Copenhagen build</div>
          <h1>@daniel-murnane/core</h1>
          <p class="hero-sub">A production-ready physicist and ML researcher. Successfully installed.</p>
        </div>

        <!-- Installed Packages = Research Areas -->
        <section class="content-section">
          <h2><span class="prompt">$</span> daniel list --installed</h2>
          <div class="packages-grid">
            <div class="package-card" v-for="pkg in packages" :key="pkg.name">
              <div class="package-name">{{ pkg.name }}</div>
              <div class="package-version">{{ pkg.version }}</div>
              <div class="package-desc">{{ pkg.description }}</div>
            </div>
          </div>
        </section>

        <!-- Build Artifacts = Publications -->
        <section class="content-section">
          <h2><span class="prompt">$</span> daniel build --list-artifacts</h2>
          <div class="artifacts">
            <div class="artifact-row" v-for="pub in publications" :key="pub.name">
              <span class="artifact-icon">&#9724;</span>
              <span class="artifact-name">{{ pub.name }}</span>
              <span class="artifact-meta">{{ pub.meta }}</span>
            </div>
          </div>
        </section>

        <!-- Connection Endpoints = Contact -->
        <section class="content-section">
          <h2><span class="prompt">$</span> daniel config --endpoints</h2>
          <div class="endpoints">
            <div class="endpoint-row" v-for="ep in endpoints" :key="ep.protocol">
              <span class="ep-protocol">{{ ep.protocol }}://</span>
              <span class="ep-addr">{{ ep.address }}</span>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <div class="content-footer">
          <p><span class="prompt">$</span> daniel --status</p>
          <p class="status-line">Ready. Listening on port 42. Caffeine level: <span class="green-text">HIGH</span>.</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, onUnmounted } from 'vue'

const terminalBody = ref(null)

// Animation state
const displayedLines = ref([])
const typedText = ref('')
const currentlyTyping = ref(false)
const currentLine = ref({ text: '', type: 'normal' })
const allDone = ref(false)
const animationDone = ref(false)

let cancelAnimation = false
let timeoutIds = []

function lineClass(line) {
  if (!line) return ''
  return {
    'line-command': line.type === 'command',
    'line-info': line.type === 'info',
    'line-dep': line.type === 'dep',
    'line-success': line.type === 'success',
    'line-help': line.type === 'help',
    'line-header': line.type === 'header',
    'line-blank': line.type === 'blank',
    'line-progress': line.type === 'progress',
    'line-ready': line.type === 'ready',
  }
}

// The terminal script
const terminalScript = [
  { text: '$ npm install @daniel-murnane/core', type: 'command', charDelay: 45 },
  { text: '', type: 'blank', charDelay: 0, pause: 400 },
  { text: 'Resolving dependencies...', type: 'info', charDelay: 25 },
  { text: '+ physics-phd@2019.0.0 (University of Adelaide)', type: 'dep', charDelay: 18, pause: 200 },
  { text: '+ postdoc-berkeley@2024.0.0 (Lawrence Berkeley National Lab)', type: 'dep', charDelay: 18, pause: 200 },
  { text: '+ ddsa-fellow@2024.1.0 (Niels Bohr Institute, Copenhagen)', type: 'dep', charDelay: 18, pause: 200 },
  { text: '+ atlas-ml-convener@2023.0.0 (CERN)', type: 'dep', charDelay: 18, pause: 200 },
  { text: '+ gnn-expertise@3.0.0', type: 'dep', charDelay: 18, pause: 100 },
  { text: '+ particle-tracking@2.1.0', type: 'dep', charDelay: 18, pause: 100 },
  { text: '+ equivariant-networks@1.5.0', type: 'dep', charDelay: 18, pause: 100 },
  { text: '+ physics-language-models@0.9.0-beta', type: 'dep', charDelay: 18, pause: 100 },
  { text: '', type: 'blank', charDelay: 0, pause: 300 },
  { text: 'Installing 42 publications... done', type: 'progress', charDelay: 20, pause: 600 },
  { text: 'Compiling 1,276 citations... done', type: 'progress', charDelay: 20, pause: 500 },
  { text: 'Building h-index... 8 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 complete', type: 'progress', charDelay: 20, pause: 500 },
  { text: '', type: 'blank', charDelay: 0, pause: 200 },
  { text: '@daniel-murnane/core@3.0.0 installed successfully', type: 'success', charDelay: 22 },
  { text: '', type: 'blank', charDelay: 0, pause: 600 },
  { text: '$ daniel --version', type: 'command', charDelay: 45, pause: 200 },
  { text: 'Daniel Murnane v3.0.0 (Copenhagen build)', type: 'info', charDelay: 22 },
  { text: '', type: 'blank', charDelay: 0, pause: 500 },
  { text: '$ daniel --help', type: 'command', charDelay: 45, pause: 200 },
  { text: '', type: 'blank', charDelay: 0, pause: 100 },
  { text: 'USAGE: daniel <command> [options]', type: 'header', charDelay: 12 },
  { text: '', type: 'blank', charDelay: 0, pause: 50 },
  { text: 'COMMANDS:', type: 'header', charDelay: 12 },
  { text: '  research     Start a research collaboration', type: 'help', charDelay: 10 },
  { text: '  schedule     Book a meeting', type: 'help', charDelay: 10 },
  { text: '  cite         Get citation info', type: 'help', charDelay: 10 },
  { text: '  teach        Request a tutorial/lecture', type: 'help', charDelay: 10 },
  { text: '', type: 'blank', charDelay: 0, pause: 50 },
  { text: 'OPTIONS:', type: 'header', charDelay: 12 },
  { text: '  --coffee     Set caffeine level (default: high)', type: 'help', charDelay: 10 },
  { text: '  --mode       Set mode: research|coding|writing', type: 'help', charDelay: 10 },
  { text: '  --timezone   Australia/Sydney \u2192 Europe/Copenhagen', type: 'help', charDelay: 10 },
  { text: '', type: 'blank', charDelay: 0, pause: 500 },
  { text: '$ daniel research --topic "graph-neural-networks" --mode collaborate', type: 'command', charDelay: 35 },
  { text: '', type: 'blank', charDelay: 0, pause: 800 },
  { text: 'Ready. Listening on port 42...', type: 'ready', charDelay: 40 },
]

function sleep(ms) {
  return new Promise(resolve => {
    const id = setTimeout(resolve, ms)
    timeoutIds.push(id)
  })
}

async function scrollToBottom() {
  await nextTick()
  if (terminalBody.value) {
    terminalBody.value.scrollTop = terminalBody.value.scrollHeight
  }
}

async function typeLine(line) {
  if (cancelAnimation) return

  if (line.pause) {
    await sleep(line.pause)
    if (cancelAnimation) return
  }

  if (line.type === 'blank' || line.charDelay === 0) {
    displayedLines.value.push({ text: line.text, type: line.type })
    await scrollToBottom()
    return
  }

  currentLine.value = line
  currentlyTyping.value = true
  typedText.value = ''

  for (let i = 0; i < line.text.length; i++) {
    if (cancelAnimation) return
    typedText.value = line.text.substring(0, i + 1)
    await scrollToBottom()
    await sleep(line.charDelay)
  }

  currentlyTyping.value = false
  displayedLines.value.push({ text: line.text, type: line.type })
  await scrollToBottom()
}

async function runAnimation() {
  for (const line of terminalScript) {
    if (cancelAnimation) return
    await typeLine(line)
  }
  allDone.value = true
  await sleep(1500)
  if (!cancelAnimation) {
    animationDone.value = true
  }
}

function skipAnimation() {
  cancelAnimation = true
  timeoutIds.forEach(id => clearTimeout(id))
  timeoutIds = []
  currentlyTyping.value = false
  animationDone.value = true
}

// Content data
const packages = [
  { name: 'gnn-expertise', version: '^3.0.0', description: 'Graph Neural Networks for particle physics reconstruction. Pioneering GNN-based charged particle tracking at ATLAS.' },
  { name: 'particle-tracking', version: '^2.1.0', description: 'ML-driven track reconstruction for High Energy Physics. From Exa.TrkX to production at the LHC.' },
  { name: 'equivariant-networks', version: '^1.5.0', description: 'Symmetry-preserving neural networks. Gauge-equivariant architectures for physics-aware ML.' },
  { name: 'physics-language-models', version: '^0.9.0-beta', description: 'LLMs for scientific reasoning. Exploring how language models can accelerate physics research.' },
  { name: 'atlas-framework', version: '^2023.0.0', description: 'ATLAS experiment collaboration at CERN. ML convener driving adoption of modern techniques.' },
  { name: 'open-science', version: '^1.0.0', description: 'Open-source tools and reproducible research. CommonTRK benchmarking suite and community building.' },
]

const publications = [
  { name: 'GNN-based tracking at ATLAS', meta: '42 publications \u00b7 1,276 citations' },
  { name: 'Exa.TrkX: GNN Tracking Pipeline', meta: 'Flagship project \u00b7 multi-experiment' },
  { name: 'Equivariant Point Cloud Networks', meta: 'NeurIPS ML4PS workshop' },
  { name: 'Particle Track Reconstruction with GNNs', meta: 'Nature Reviews Physics coverage' },
  { name: 'ATLAS ITk Tracking Studies', meta: 'HL-LHC preparation' },
  { name: 'CommonTRK Benchmark Suite', meta: 'Open community benchmark' },
]

const endpoints = [
  { protocol: 'mailto', address: 'daniel.murnane@nbi.ku.dk' },
  { protocol: 'https', address: 'github.com/murnanedaniel' },
  { protocol: 'https', address: 'inspirehep.net/authors/1798sergei' },
  { protocol: 'https', address: 'linkedin.com/in/daniel-murnane' },
  { protocol: 'geo', address: 'Copenhagen, Denmark (Niels Bohr Institute)' },
]

onMounted(() => {
  runAnimation()
})

onUnmounted(() => {
  cancelAnimation = true
  timeoutIds.forEach(id => clearTimeout(id))
})
</script>

<style scoped>
/* Reset VitePress wrapper */
.v3-root {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  font-family: 'Fira Code', 'Cascadia Code', 'JetBrains Mono', 'Consolas', monospace;
}

/* ===== TERMINAL PHASE ===== */
.terminal-wrapper {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: #0c0c0c;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.skip-btn {
  position: fixed;
  top: 24px;
  right: 32px;
  z-index: 200;
  background: transparent;
  border: 1px solid rgba(0, 255, 65, 0.3);
  color: rgba(0, 255, 65, 0.6);
  font-family: inherit;
  font-size: 13px;
  padding: 6px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}
.skip-btn:hover {
  background: rgba(0, 255, 65, 0.1);
  color: #00ff41;
  border-color: #00ff41;
}

.terminal {
  width: 100%;
  max-width: 820px;
  height: 80vh;
  max-height: 600px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 20px 80px rgba(0, 255, 65, 0.08), 0 0 1px rgba(0, 255, 65, 0.3);
  display: flex;
  flex-direction: column;
}

.terminal-header {
  background: #2d2d2d;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.terminal-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.terminal-dot.red { background: #ff5f56; }
.terminal-dot.yellow { background: #ffbd2e; }
.terminal-dot.green { background: #27c93f; }

.terminal-title {
  margin-left: 10px;
  color: #999;
  font-size: 12px;
  font-family: inherit;
}

.terminal-body {
  flex: 1;
  background: #0c0c0c;
  padding: 20px;
  overflow-y: auto;
  position: relative;
}

/* Scanline effect */
.scanlines {
  pointer-events: none;
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.08) 2px,
    rgba(0, 0, 0, 0.08) 4px
  );
  z-index: 1;
}

.terminal-content {
  position: relative;
  z-index: 2;
}

.terminal-line {
  display: block;
  line-height: 1.7;
  font-size: 14px;
  white-space: pre-wrap;
  word-break: break-word;
}

/* Line types */
.line-command {
  color: #00ff41;
  font-weight: bold;
}
.line-info {
  color: #b0b0b0;
}
.line-dep {
  color: #ffb000;
}
.line-success {
  color: #27c93f;
  font-weight: bold;
}
.line-help {
  color: #888;
}
.line-header {
  color: #00ff41;
  font-weight: bold;
}
.line-blank {
  color: transparent;
  line-height: 0.8;
}
.line-progress {
  color: #5ef;
}
.line-ready {
  color: #00ff41;
  text-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
}

/* Cursor */
.cursor {
  color: #00ff41;
  font-weight: normal;
}
.cursor.blink {
  animation: blink-cursor 1s step-end infinite;
}

@keyframes blink-cursor {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* ===== CONTENT PHASE ===== */
.content-phase {
  max-width: 860px;
  margin: 0 auto;
  padding: 60px 24px 80px;
  color: #c8c8c8;
  background: #0c0c0c;
  min-height: 100vh;
}

.content-hero {
  text-align: center;
  margin-bottom: 60px;
  padding: 40px 0;
  border-bottom: 1px solid #222;
}

.hero-badge {
  display: inline-block;
  background: rgba(0, 255, 65, 0.1);
  color: #00ff41;
  font-size: 13px;
  padding: 4px 14px;
  border-radius: 20px;
  border: 1px solid rgba(0, 255, 65, 0.25);
  margin-bottom: 16px;
}

.content-hero h1 {
  font-size: 2.4em;
  color: #00ff41;
  margin: 12px 0;
  font-weight: 600;
  letter-spacing: -0.5px;
}

.hero-sub {
  color: #888;
  font-size: 1.05em;
  margin: 0;
}

.content-section {
  margin-bottom: 50px;
}

.content-section h2 {
  font-size: 1.15em;
  color: #999;
  margin-bottom: 24px;
  padding-bottom: 10px;
  border-bottom: 1px solid #1a1a1a;
  font-weight: 400;
}

.prompt {
  color: #00ff41;
  font-weight: bold;
}

/* Packages grid */
.packages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 16px;
}

.package-card {
  background: #111;
  border: 1px solid #222;
  border-radius: 8px;
  padding: 20px;
  transition: border-color 0.2s;
}
.package-card:hover {
  border-color: rgba(0, 255, 65, 0.3);
}

.package-name {
  color: #00ff41;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 4px;
}

.package-version {
  color: #555;
  font-size: 12px;
  margin-bottom: 10px;
}

.package-desc {
  color: #888;
  font-size: 13px;
  line-height: 1.6;
}

/* Artifacts / Publications */
.artifacts {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.artifact-row {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #111;
  border: 1px solid #1a1a1a;
  border-radius: 6px;
  padding: 14px 18px;
}

.artifact-icon {
  color: #5ef;
  font-size: 10px;
}

.artifact-name {
  color: #c8c8c8;
  font-size: 14px;
  flex: 1;
}

.artifact-meta {
  color: #555;
  font-size: 12px;
  white-space: nowrap;
}

/* Endpoints / Contact */
.endpoints {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.endpoint-row {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 10px 16px;
  background: #111;
  border: 1px solid #1a1a1a;
  border-radius: 6px;
  font-size: 14px;
}

.ep-protocol {
  color: #ffb000;
  font-weight: 600;
}

.ep-addr {
  color: #aaa;
}

/* Footer */
.content-footer {
  margin-top: 60px;
  padding-top: 24px;
  border-top: 1px solid #1a1a1a;
  text-align: center;
}

.content-footer p {
  margin: 4px 0;
  font-size: 14px;
  color: #666;
}

.status-line {
  color: #555 !important;
}

.green-text {
  color: #00ff41;
}

/* Transitions */
.fade-up-enter-active {
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.fade-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* Scrollbar */
.terminal-body::-webkit-scrollbar {
  width: 8px;
}
.terminal-body::-webkit-scrollbar-track {
  background: #0c0c0c;
}
.terminal-body::-webkit-scrollbar-thumb {
  background: #222;
  border-radius: 4px;
}

/* Responsive */
@media (max-width: 600px) {
  .packages-grid {
    grid-template-columns: 1fr;
  }
  .terminal {
    height: 85vh;
    max-height: none;
    border-radius: 0;
  }
  .terminal-wrapper {
    padding: 0;
  }
  .content-hero h1 {
    font-size: 1.6em;
  }
  .artifact-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
  .artifact-meta {
    white-space: normal;
  }
}
</style>
