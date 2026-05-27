<template>
  <div class="proposal-v2">
    <!-- Hero Section -->
    <section class="hero" ref="heroRef">
      <canvas ref="canvasRef" class="hero-canvas"></canvas>

      <!-- Tooltip -->
      <div
        v-if="tooltip.visible"
        class="node-tooltip"
        :style="{ left: tooltip.x + 'px', top: tooltip.y + 'px' }"
      >
        <div class="tooltip-type" :style="{ color: tooltip.color }">{{ tooltip.type }}</div>
        <div class="tooltip-label">{{ tooltip.label }}</div>
        <div v-if="tooltip.detail" class="tooltip-detail">{{ tooltip.detail }}</div>
      </div>

      <!-- Overlay Panel -->
      <div class="hero-overlay">
        <div class="hero-panel">
          <p class="hero-label">@daniel-murnane/graph v2.0.0</p>
          <h1 class="hero-name">Daniel Murnane</h1>
          <p class="hero-tagline">A graph-structured human interface</p>
          <p class="hero-description">
            Researcher specializing in Graph Neural Networks for particle physics.
            This page <em>is</em> a graph — every node is a facet of the work,
            every edge a connection.
          </p>
          <div class="legend">
            <div class="legend-item">
              <span class="legend-dot" style="background: #FFD54F;"></span>
              <span class="legend-text">Research Areas</span>
            </div>
            <div class="legend-item">
              <span class="legend-dot" style="background: #81C784;"></span>
              <span class="legend-text">Skills</span>
            </div>
            <div class="legend-item">
              <span class="legend-dot" style="background: #64B5F6;"></span>
              <span class="legend-text">Publications</span>
            </div>
            <div class="legend-item">
              <span class="legend-dot" style="background: #E57373;"></span>
              <span class="legend-text">Collaborators</span>
            </div>
          </div>
          <div class="hero-actions">
            <a href="#details" class="btn btn-primary" @click.prevent="scrollToDetails">Explore the Graph</a>
            <a href="/guide/introduction" class="btn btn-secondary">Read the Docs</a>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="scroll-indicator">
        <span class="scroll-arrow"></span>
      </div>
    </section>

    <!-- Node Types Section -->
    <section class="section node-types" id="details">
      <div class="section-inner">
        <h2 class="section-title">Node Types</h2>
        <p class="section-subtitle">Research areas represented as graph nodes</p>
        <div class="node-types-grid">
          <div class="node-card" v-for="area in researchAreas" :key="area.name">
            <div class="node-card-header">
              <span class="node-card-dot" :style="{ background: area.color, boxShadow: '0 0 12px ' + area.color }"></span>
              <h3>{{ area.name }}</h3>
            </div>
            <p>{{ area.description }}</p>
            <div class="node-card-meta">
              <span class="meta-tag" v-for="tag in area.tags" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Edge Weights Section -->
    <section class="section edge-weights">
      <div class="section-inner">
        <h2 class="section-title">Edge Weights</h2>
        <p class="section-subtitle">Collaboration strength and publication connections</p>
        <div class="edge-list">
          <div class="edge-item" v-for="edge in edgeWeights" :key="edge.label">
            <div class="edge-info">
              <span class="edge-label">{{ edge.label }}</span>
              <span class="edge-value">{{ edge.value }}</span>
            </div>
            <div class="edge-bar-track">
              <div class="edge-bar-fill" :style="{ width: edge.percent + '%', background: edge.color }"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="section stats-section">
      <div class="section-inner">
        <h2 class="section-title">Graph Metrics</h2>
        <p class="section-subtitle">Integrated measures of research output</p>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value">1276+</div>
            <div class="stat-label">Citations</div>
            <div class="stat-detail">Total edge traversals</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">42</div>
            <div class="stat-label">Publications</div>
            <div class="stat-detail">Leaf nodes in the graph</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">8</div>
            <div class="stat-label">h-index</div>
            <div class="stat-detail">Graph centrality measure</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { forceSimulation, forceLink, forceManyBody, forceCenter, forceCollide } from 'd3-force'

// ============================================================
// Refs
// ============================================================
const canvasRef = ref(null)
const heroRef = ref(null)
let animationId = null
let ctx = null
let width = 0
let height = 0
let dpr = 1
let simulation = null
let graphNodes = []
let graphLinks = []
let hoveredNode = null
let mouseX = 0
let mouseY = 0
let time = 0

const tooltip = reactive({
  visible: false,
  x: 0,
  y: 0,
  label: '',
  type: '',
  detail: '',
  color: '#fff',
})

// ============================================================
// Graph Data
// ============================================================
const NODE_COLORS = {
  central: '#ffffff',
  research: '#FFD54F',
  skill: '#81C784',
  publication: '#64B5F6',
  collaborator: '#E57373',
}

const NODE_RADII = {
  central: 28,
  research: 16,
  skill: 12,
  publication: 7,
  collaborator: 12,
}

const nodeData = [
  // Central
  { id: 'daniel', label: 'Daniel Murnane', type: 'central', detail: 'DDSA Postdoctoral Fellow, Niels Bohr Institute' },
  // Research areas
  { id: 'gnn', label: 'Graph Neural Networks', type: 'research', detail: 'Core research focus: GNN architectures for physics' },
  { id: 'tracking', label: 'Particle Tracking', type: 'research', detail: 'ML-driven charged particle track reconstruction' },
  { id: 'physml', label: 'Physics ML', type: 'research', detail: 'Machine learning methods for high-energy physics' },
  { id: 'equivariant', label: 'Equivariant Networks', type: 'research', detail: 'Symmetry-preserving neural network architectures' },
  { id: 'lm4phys', label: 'Language Models for Physics', type: 'research', detail: 'LLMs applied to scientific reasoning and discovery' },
  // Skills
  { id: 'pytorch', label: 'PyTorch', type: 'skill', detail: 'Primary deep learning framework' },
  { id: 'python', label: 'Python', type: 'skill', detail: 'Core programming language' },
  { id: 'atlas', label: 'ATLAS', type: 'skill', detail: 'ATLAS experiment at CERN LHC' },
  { id: 'hpc', label: 'HPC', type: 'skill', detail: 'High-performance computing and GPU clusters' },
  { id: 'dl', label: 'Deep Learning', type: 'skill', detail: 'Neural network theory and practice' },
  // Publications
  { id: 'pub1', label: 'GNN4ITk Track Reconstruction', type: 'publication', detail: 'ATL-ITK-PROC, 2023' },
  { id: 'pub2', label: 'Equivariant GNNs for Tracking', type: 'publication', detail: 'NeurIPS ML4PS Workshop' },
  { id: 'pub3', label: 'Physics Language Model', type: 'publication', detail: 'Under review, 2024' },
  { id: 'pub4', label: 'Graph Structure from Point Clouds', type: 'publication', detail: 'CHEP 2023' },
  { id: 'pub5', label: 'Exa.TrkX Pipeline', type: 'publication', detail: 'CHEP 2021' },
  { id: 'pub6', label: 'Track Seeding with GNNs', type: 'publication', detail: 'EPJ Web of Conferences, 2021' },
  { id: 'pub7', label: 'ATLAS Tracking Performance', type: 'publication', detail: 'Eur. Phys. J. C, 2022' },
  { id: 'pub8', label: 'ML on FPGAs for Tracking', type: 'publication', detail: 'JINST, 2024' },
  { id: 'pub9', label: 'CommonTRK Benchmark Suite', type: 'publication', detail: 'Open community benchmark' },
  { id: 'pub10', label: 'Scalable GNN Inference', type: 'publication', detail: 'vCHEP 2021' },
  // Collaborators
  { id: 'collab1', label: 'Xiangyang Ju', type: 'collaborator', detail: 'Lawrence Berkeley National Lab' },
  { id: 'collab2', label: 'Paolo Calafiura', type: 'collaborator', detail: 'Lawrence Berkeley National Lab' },
  { id: 'collab3', label: 'Savannah Thais', type: 'collaborator', detail: 'Columbia University' },
  { id: 'collab4', label: 'Jan Stark', type: 'collaborator', detail: 'IPHC Strasbourg' },
]

const linkData = [
  // Daniel -> Research areas
  { source: 'daniel', target: 'gnn' },
  { source: 'daniel', target: 'tracking' },
  { source: 'daniel', target: 'physml' },
  { source: 'daniel', target: 'equivariant' },
  { source: 'daniel', target: 'lm4phys' },
  // Daniel -> Collaborators
  { source: 'daniel', target: 'collab1' },
  { source: 'daniel', target: 'collab2' },
  { source: 'daniel', target: 'collab3' },
  { source: 'daniel', target: 'collab4' },
  // Research -> Skills
  { source: 'gnn', target: 'pytorch' },
  { source: 'gnn', target: 'python' },
  { source: 'gnn', target: 'dl' },
  { source: 'tracking', target: 'atlas' },
  { source: 'tracking', target: 'hpc' },
  { source: 'physml', target: 'pytorch' },
  { source: 'physml', target: 'python' },
  { source: 'physml', target: 'hpc' },
  { source: 'equivariant', target: 'dl' },
  { source: 'equivariant', target: 'pytorch' },
  { source: 'lm4phys', target: 'python' },
  { source: 'lm4phys', target: 'dl' },
  // Publications -> Research areas
  { source: 'pub1', target: 'gnn' },
  { source: 'pub1', target: 'tracking' },
  { source: 'pub2', target: 'equivariant' },
  { source: 'pub2', target: 'tracking' },
  { source: 'pub3', target: 'lm4phys' },
  { source: 'pub4', target: 'gnn' },
  { source: 'pub5', target: 'gnn' },
  { source: 'pub5', target: 'tracking' },
  { source: 'pub6', target: 'gnn' },
  { source: 'pub7', target: 'tracking' },
  { source: 'pub7', target: 'physml' },
  { source: 'pub8', target: 'physml' },
  { source: 'pub8', target: 'tracking' },
  { source: 'pub9', target: 'tracking' },
  { source: 'pub10', target: 'gnn' },
  { source: 'pub10', target: 'hpc' },
  // Collaborators -> Research areas
  { source: 'collab1', target: 'gnn' },
  { source: 'collab1', target: 'tracking' },
  { source: 'collab2', target: 'tracking' },
  { source: 'collab2', target: 'physml' },
  { source: 'collab3', target: 'gnn' },
  { source: 'collab3', target: 'physml' },
  { source: 'collab4', target: 'tracking' },
  { source: 'collab4', target: 'atlas' },
]

// ============================================================
// Content Data
// ============================================================
const researchAreas = [
  {
    name: 'Graph Neural Networks',
    color: NODE_COLORS.research,
    description: 'Designing and deploying GNN architectures for particle physics reconstruction tasks at the LHC. From message-passing networks to attention-based graph transformers.',
    tags: ['PyTorch Geometric', 'Message Passing', 'Graph Transformers'],
  },
  {
    name: 'Particle Tracking',
    color: NODE_COLORS.research,
    description: 'ML-driven charged particle track reconstruction for the ATLAS Inner Tracker. Building pipelines that scale to HL-LHC data rates.',
    tags: ['Exa.TrkX', 'ACTS', 'HL-LHC'],
  },
  {
    name: 'Physics ML',
    color: NODE_COLORS.research,
    description: 'Applying modern machine learning techniques to high-energy physics problems — from jet classification to anomaly detection.',
    tags: ['Classification', 'Anomaly Detection', 'Generative Models'],
  },
  {
    name: 'Equivariant Networks',
    color: NODE_COLORS.research,
    description: 'Symmetry-preserving neural networks that respect physical invariances. Gauge-equivariant architectures for physics-aware learning.',
    tags: ['E(3)-equivariance', 'Gauge Symmetry', 'Geometric DL'],
  },
  {
    name: 'Language Models for Physics',
    color: NODE_COLORS.research,
    description: 'Exploring how large language models can accelerate scientific discovery, automate literature review, and assist in hypothesis generation.',
    tags: ['LLMs', 'Scientific Reasoning', 'RAG'],
  },
]

const edgeWeights = [
  { label: 'GNN + Tracking', value: '18 joint publications', percent: 90, color: '#FFD54F' },
  { label: 'Xiangyang Ju', value: '12 co-authored papers', percent: 72, color: '#E57373' },
  { label: 'Paolo Calafiura', value: '10 co-authored papers', percent: 60, color: '#E57373' },
  { label: 'PyTorch + GNN Research', value: 'Primary framework', percent: 95, color: '#81C784' },
  { label: 'ATLAS + Tracking', value: 'Core experiment', percent: 85, color: '#64B5F6' },
  { label: 'Savannah Thais', value: '8 co-authored papers', percent: 48, color: '#E57373' },
]

// ============================================================
// Force Simulation Setup
// ============================================================
function initGraph() {
  // Deep-copy nodes and links so d3 can mutate them
  graphNodes = nodeData.map(d => ({
    ...d,
    x: width / 2 + (Math.random() - 0.5) * 200,
    y: height / 2 + (Math.random() - 0.5) * 200,
    radius: NODE_RADII[d.type],
    color: NODE_COLORS[d.type],
  }))

  graphLinks = linkData.map(d => ({
    source: d.source,
    target: d.target,
  }))

  simulation = forceSimulation(graphNodes)
    .force('link', forceLink(graphLinks).id(d => d.id).distance(d => {
      const src = typeof d.source === 'object' ? d.source : graphNodes.find(n => n.id === d.source)
      const tgt = typeof d.target === 'object' ? d.target : graphNodes.find(n => n.id === d.target)
      if (!src || !tgt) return 120
      // Shorter links for central connections, longer for publications
      if (src.type === 'central' || tgt.type === 'central') return 100
      if (src.type === 'publication' || tgt.type === 'publication') return 80
      return 100
    }).strength(0.4))
    .force('charge', forceManyBody().strength(d => {
      if (d.type === 'central') return -600
      if (d.type === 'research') return -250
      return -120
    }))
    .force('center', forceCenter(width / 2, height / 2).strength(0.05))
    .force('collide', forceCollide().radius(d => d.radius + 6).strength(0.7))
    .alphaDecay(0.008)
    .velocityDecay(0.3)

  // Keep simulation warm — never fully settle
  simulation.alphaTarget(0.02)
}

// ============================================================
// Canvas Drawing
// ============================================================
function draw() {
  if (!ctx) return
  time += 0.016 // ~60fps

  // Clear with gradient background
  const grad = ctx.createLinearGradient(0, 0, 0, height)
  grad.addColorStop(0, '#0d1117')
  grad.addColorStop(1, '#161b22')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, width, height)

  // Draw edges
  ctx.globalCompositeOperation = 'source-over'
  for (const link of graphLinks) {
    const src = typeof link.source === 'object' ? link.source : null
    const tgt = typeof link.target === 'object' ? link.target : null
    if (!src || !tgt) continue

    const isHovered = hoveredNode && (
      src.id === hoveredNode.id || tgt.id === hoveredNode.id
    )

    ctx.beginPath()
    ctx.moveTo(src.x, src.y)
    ctx.lineTo(tgt.x, tgt.y)
    ctx.strokeStyle = isHovered
      ? 'rgba(255, 255, 255, 0.35)'
      : 'rgba(255, 255, 255, 0.06)'
    ctx.lineWidth = isHovered ? 1.5 : 0.7
    ctx.stroke()
  }

  // Draw nodes
  ctx.globalCompositeOperation = 'source-over'
  for (const node of graphNodes) {
    const isHovered = hoveredNode && hoveredNode.id === node.id
    const isConnected = hoveredNode && graphLinks.some(l => {
      const sId = typeof l.source === 'object' ? l.source.id : l.source
      const tId = typeof l.target === 'object' ? l.target.id : l.target
      return (sId === hoveredNode.id && tId === node.id) ||
             (tId === hoveredNode.id && sId === node.id)
    })

    // Breathing / pulse effect
    const breathe = Math.sin(time * 1.5 + node.x * 0.01 + node.y * 0.01) * 0.15 + 1
    const r = node.radius * breathe

    // Dimming for non-connected nodes when hovering
    let alpha = 1
    if (hoveredNode && !isHovered && !isConnected) {
      alpha = 0.2
    }

    // Outer glow
    ctx.globalCompositeOperation = 'lighter'
    const glowRadius = r * (isHovered ? 4 : 2.5)
    const glowGrad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowRadius)
    const glowAlpha = isHovered ? 0.3 * alpha : 0.12 * alpha
    glowGrad.addColorStop(0, colorWithAlpha(node.color, glowAlpha))
    glowGrad.addColorStop(1, colorWithAlpha(node.color, 0))
    ctx.beginPath()
    ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2)
    ctx.fillStyle = glowGrad
    ctx.fill()

    // Node fill
    ctx.globalCompositeOperation = 'source-over'
    ctx.beginPath()
    ctx.arc(node.x, node.y, r, 0, Math.PI * 2)
    ctx.fillStyle = colorWithAlpha(node.color, 0.85 * alpha)
    ctx.fill()

    // Node border
    ctx.strokeStyle = colorWithAlpha(node.color, 0.5 * alpha)
    ctx.lineWidth = isHovered ? 2 : 1
    ctx.stroke()

    // Label for larger nodes
    if (node.type === 'central' || node.type === 'research' || isHovered) {
      ctx.globalCompositeOperation = 'source-over'
      const fontSize = node.type === 'central' ? 13 : node.type === 'research' ? 10 : 10
      ctx.font = `${fontSize}px Inter, -apple-system, BlinkMacSystemFont, sans-serif`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillStyle = colorWithAlpha('#ffffff', 0.9 * alpha)

      if (node.type === 'central') {
        ctx.fillText(node.label, node.x, node.y)
      } else {
        ctx.fillText(node.label, node.x, node.y + r + fontSize + 2)
      }
    }
  }

  ctx.globalCompositeOperation = 'source-over'
  animationId = requestAnimationFrame(draw)
}

function colorWithAlpha(hex, alpha) {
  // Convert hex to rgba
  let r = 0, g = 0, b = 0
  if (hex.length === 7) {
    r = parseInt(hex.slice(1, 3), 16)
    g = parseInt(hex.slice(3, 5), 16)
    b = parseInt(hex.slice(5, 7), 16)
  } else if (hex === '#ffffff' || hex === 'white') {
    r = 255; g = 255; b = 255
  }
  return `rgba(${r}, ${g}, ${b}, ${Math.max(0, Math.min(1, alpha))})`
}

// ============================================================
// Interaction
// ============================================================
function handleMouseMove(e) {
  const canvas = canvasRef.value
  if (!canvas) return
  const rect = canvas.getBoundingClientRect()
  mouseX = (e.clientX - rect.left)
  mouseY = (e.clientY - rect.top)

  // Find hovered node
  let found = null
  for (let i = graphNodes.length - 1; i >= 0; i--) {
    const node = graphNodes[i]
    const dx = mouseX - node.x
    const dy = mouseY - node.y
    const hitRadius = Math.max(node.radius * 1.5, 12)
    if (dx * dx + dy * dy < hitRadius * hitRadius) {
      found = node
      break
    }
  }

  hoveredNode = found

  if (found) {
    canvas.style.cursor = 'pointer'
    tooltip.visible = true
    tooltip.x = e.clientX + 16
    tooltip.y = e.clientY - 10
    tooltip.label = found.label
    tooltip.type = found.type.charAt(0).toUpperCase() + found.type.slice(1)
    tooltip.detail = found.detail || ''
    tooltip.color = found.color
  } else {
    canvas.style.cursor = 'default'
    tooltip.visible = false
  }
}

function handleMouseLeave() {
  hoveredNode = null
  tooltip.visible = false
}

function handleResize() {
  const canvas = canvasRef.value
  if (!canvas) return
  dpr = window.devicePixelRatio || 1
  width = canvas.clientWidth
  height = canvas.clientHeight
  canvas.width = width * dpr
  canvas.height = height * dpr
  ctx = canvas.getContext('2d')
  ctx.scale(dpr, dpr)

  // Update simulation center
  if (simulation) {
    simulation.force('center', forceCenter(width / 2, height / 2).strength(0.05))
    simulation.alpha(0.3).restart()
  }
}

function scrollToDetails() {
  const el = document.getElementById('details')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

// ============================================================
// Lifecycle
// ============================================================
onMounted(() => {
  handleResize()
  initGraph()
  window.addEventListener('resize', handleResize)

  const canvas = canvasRef.value
  if (canvas) {
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)
  }

  animationId = requestAnimationFrame(draw)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  if (animationId) cancelAnimationFrame(animationId)

  const canvas = canvasRef.value
  if (canvas) {
    canvas.removeEventListener('mousemove', handleMouseMove)
    canvas.removeEventListener('mouseleave', handleMouseLeave)
  }

  if (simulation) {
    simulation.stop()
    simulation = null
  }
})
</script>

<style scoped>
/* ============================
   Reset & Root
   ============================ */
.proposal-v2 {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #e0e6ed;
  background: #0d1117;
  min-height: 100vh;
  overflow-x: hidden;
}

/* ============================
   Hero
   ============================ */
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(180deg, #0d1117 0%, #161b22 100%);
}

.hero-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
}

/* Tooltip */
.node-tooltip {
  position: fixed;
  z-index: 100;
  pointer-events: none;
  background: rgba(22, 27, 34, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  padding: 10px 14px;
  max-width: 260px;
  backdrop-filter: blur(8px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
}

.tooltip-type {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 2px;
}

.tooltip-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #e0e6ed;
  margin-bottom: 2px;
}

.tooltip-detail {
  font-size: 0.78rem;
  color: #8b949e;
  line-height: 1.4;
}

/* Overlay Panel */
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 2;
  pointer-events: none;
  padding: 40px;
}

.hero-panel {
  pointer-events: auto;
  background: rgba(13, 17, 23, 0.75);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 40px 36px;
  max-width: 420px;
  margin-left: 5vw;
}

.hero-label {
  font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;
  font-size: 0.8rem;
  color: #FFD54F;
  letter-spacing: 0.06em;
  margin: 0 0 12px 0;
  opacity: 0.9;
}

.hero-name {
  font-size: clamp(2rem, 4.5vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 8px 0;
  background: linear-gradient(135deg, #ffffff 0%, #c8d6e5 50%, #8b949e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
}

.hero-tagline {
  font-size: 1.1rem;
  color: #8b949e;
  margin: 0 0 12px 0;
  font-weight: 500;
}

.hero-description {
  font-size: 0.88rem;
  color: #6b7a8d;
  line-height: 1.6;
  margin: 0 0 24px 0;
}

.hero-description em {
  color: #FFD54F;
  font-style: italic;
}

/* Legend */
.legend {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 20px;
  margin-bottom: 28px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

.legend-text {
  font-size: 0.78rem;
  color: #8b949e;
}

/* CTA Buttons */
.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 10px 22px;
  border-radius: 8px;
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: linear-gradient(135deg, #FFD54F, #FFC107);
  color: #0d1117;
  box-shadow: 0 0 20px rgba(255, 213, 79, 0.2);
}

.btn-primary:hover {
  box-shadow: 0 0 30px rgba(255, 213, 79, 0.4);
  transform: translateY(-1px);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.06);
  color: #a0b4cc;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #e0e6ed;
  transform: translateY(-1px);
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  animation: bobble 2s ease-in-out infinite;
}

.scroll-arrow {
  display: block;
  width: 24px;
  height: 24px;
  border-right: 2px solid rgba(255, 255, 255, 0.2);
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  transform: rotate(45deg);
}

@keyframes bobble {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(8px); }
}

/* ============================
   Sections (shared)
   ============================ */
.section {
  padding: 80px 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.04);
}

.section-inner {
  max-width: 960px;
  margin: 0 auto;
}

.section-title {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;
  margin: 0 0 8px 0;
  color: #e8ecf1;
}

.section-subtitle {
  font-size: 1rem;
  color: #5a6577;
  margin: 0 0 48px 0;
}

/* ============================
   Node Types
   ============================ */
.node-types-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.node-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 24px;
  transition: all 0.25s ease;
}

.node-card:hover {
  border-color: rgba(255, 213, 79, 0.2);
  background: rgba(255, 255, 255, 0.03);
}

.node-card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.node-card-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  flex-shrink: 0;
}

.node-card-header h3 {
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0;
  color: #d0d8e4;
}

.node-card p {
  font-size: 0.88rem;
  color: #6b7a8d;
  line-height: 1.55;
  margin: 0 0 14px 0;
}

.node-card-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.meta-tag {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.7rem;
  padding: 3px 10px;
  border-radius: 4px;
  background: rgba(255, 213, 79, 0.08);
  color: #FFD54F;
  letter-spacing: 0.02em;
}

/* ============================
   Edge Weights
   ============================ */
.edge-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.edge-item {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 8px;
  padding: 18px 20px;
}

.edge-info {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
}

.edge-label {
  font-size: 0.92rem;
  color: #c8d0dc;
  font-weight: 500;
}

.edge-value {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.78rem;
  color: #6b7a8d;
}

.edge-bar-track {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 2px;
  overflow: hidden;
}

.edge-bar-fill {
  height: 100%;
  border-radius: 2px;
  transition: width 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

/* ============================
   Stats
   ============================ */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.stat-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 32px 24px;
  text-align: center;
  transition: border-color 0.25s ease;
}

.stat-card:hover {
  border-color: rgba(255, 213, 79, 0.2);
}

.stat-value {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  background: linear-gradient(135deg, #FFD54F, #81C784);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 1rem;
  font-weight: 600;
  color: #c0c8d4;
  margin-bottom: 4px;
}

.stat-detail {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.72rem;
  color: #4e5a6b;
  letter-spacing: 0.04em;
}

/* ============================
   Responsive
   ============================ */
@media (max-width: 768px) {
  .hero-overlay {
    align-items: flex-end;
    justify-content: center;
    padding: 20px;
  }

  .hero-panel {
    margin-left: 0;
    max-width: 100%;
    padding: 24px 20px;
    margin-bottom: 60px;
    background: rgba(13, 17, 23, 0.85);
  }

  .hero-name {
    font-size: 1.8rem;
  }

  .hero-tagline {
    font-size: 0.95rem;
  }

  .hero-description {
    font-size: 0.82rem;
  }

  .legend {
    gap: 8px 16px;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    text-align: center;
  }

  .node-types-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 60px 20px;
  }
}
</style>
