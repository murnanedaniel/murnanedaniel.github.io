<template>
  <div class="proposal-v1">
    <!-- Hero Section -->
    <section class="hero">
      <canvas ref="canvasRef" class="hero-canvas"></canvas>
      <div class="hero-overlay">
        <div class="hero-content">
          <p class="hero-label">@daniel-murnane/core v3.0.0</p>
          <h1 class="hero-name">Daniel Murnane</h1>
          <p class="hero-tagline">High-performance human integration library</p>
          <p class="hero-position">DDSA Postdoctoral Fellow — Niels Bohr Institute</p>
          <div class="hero-actions">
            <a href="/guide/quickstart" class="btn btn-primary">Get Started</a>
            <a href="/api/core" class="btn btn-secondary">View API</a>
          </div>
        </div>
      </div>
      <div class="scroll-indicator">
        <span class="scroll-arrow"></span>
      </div>
    </section>

    <!-- Detector Layers Section -->
    <section class="section detector-layers">
      <div class="section-inner">
        <h2 class="section-title">Detector Layers</h2>
        <p class="section-subtitle">Research areas mapped to concentric detector subsystems</p>
        <div class="layers-container">
          <div class="layer-ring-display">
            <svg viewBox="0 0 400 400" class="ring-svg">
              <circle cx="200" cy="200" r="50" fill="none" stroke="#4a9eff" stroke-width="2" opacity="0.6" />
              <circle cx="200" cy="200" r="100" fill="none" stroke="#f5a623" stroke-width="2" opacity="0.5" />
              <circle cx="200" cy="200" r="150" fill="none" stroke="#4ade80" stroke-width="2" opacity="0.4" />
              <circle cx="200" cy="200" r="190" fill="none" stroke="#f87171" stroke-width="2" opacity="0.3" />
              <!-- Center dot -->
              <circle cx="200" cy="200" r="4" fill="#ffffff" opacity="0.8" />
              <!-- Layer labels -->
              <text x="200" y="40" text-anchor="middle" fill="#f87171" font-size="11" opacity="0.7">Tracking</text>
              <text x="200" y="80" text-anchor="middle" fill="#4ade80" font-size="11" opacity="0.7">GNN</text>
              <text x="200" y="120" text-anchor="middle" fill="#f5a623" font-size="11" opacity="0.7">Physics</text>
              <text x="200" y="160" text-anchor="middle" fill="#4a9eff" font-size="11" opacity="0.7">ML</text>
            </svg>
          </div>
          <div class="layers-list">
            <div class="layer-item" style="--layer-color: #4a9eff;">
              <div class="layer-marker"></div>
              <div class="layer-info">
                <h3>Machine Learning</h3>
                <p>Inner tracker — Core algorithms for particle physics reconstruction using deep learning architectures, geometric learning, and scalable inference pipelines.</p>
              </div>
            </div>
            <div class="layer-item" style="--layer-color: #f5a623;">
              <div class="layer-marker"></div>
              <div class="layer-info">
                <h3>Particle Physics</h3>
                <p>Electromagnetic calorimeter — ATLAS experiment at CERN, Standard Model measurements, and beyond-Standard-Model searches with the Large Hadron Collider.</p>
              </div>
            </div>
            <div class="layer-item" style="--layer-color: #4ade80;">
              <div class="layer-marker"></div>
              <div class="layer-info">
                <h3>Graph Neural Networks</h3>
                <p>Hadronic calorimeter — Developing GNN-based pipelines for charged particle tracking, jet classification, and event reconstruction at scale.</p>
              </div>
            </div>
            <div class="layer-item" style="--layer-color: #f87171;">
              <div class="layer-marker"></div>
              <div class="layer-info">
                <h3>Charged Particle Tracking</h3>
                <p>Muon spectrometer — Building next-generation tracking algorithms for HL-LHC, including the Exa.TrkX and ACTS integration projects.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Reconstructed Tracks Section -->
    <section class="section reconstructed-tracks">
      <div class="section-inner">
        <h2 class="section-title">Reconstructed Tracks</h2>
        <p class="section-subtitle">Recent publications and key contributions</p>
        <ul class="tracks-list">
          <li class="track-item">
            <span class="track-type ml">ML</span>
            <div class="track-info">
              <a href="https://arxiv.org/abs/2309.16754" class="track-title" target="_blank">Charged Particle Tracking with Machine Learning on FPGAs</a>
              <p class="track-meta">JINST, 2024</p>
            </div>
          </li>
          <li class="track-item">
            <span class="track-type gnn">GNN</span>
            <div class="track-info">
              <a href="https://arxiv.org/abs/2304.01150" class="track-title" target="_blank">Graph Neural Network Track Reconstruction for the ATLAS ITk Detector</a>
              <p class="track-meta">ATL-ITK-PROC, 2023</p>
            </div>
          </li>
          <li class="track-item">
            <span class="track-type physics">PHY</span>
            <div class="track-info">
              <a href="https://arxiv.org/abs/2203.12852" class="track-title" target="_blank">Performance of the ATLAS Track Reconstruction Algorithms</a>
              <p class="track-meta">Eur. Phys. J. C, 2022</p>
            </div>
          </li>
          <li class="track-item">
            <span class="track-type tracking">TRK</span>
            <div class="track-info">
              <a href="https://arxiv.org/abs/2103.06995" class="track-title" target="_blank">Exa.TrkX: Graph Neural Networks for Particle Track Reconstruction</a>
              <p class="track-meta">CHEP 2021</p>
            </div>
          </li>
          <li class="track-item">
            <span class="track-type ml">ML</span>
            <div class="track-info">
              <a href="https://arxiv.org/abs/2007.00149" class="track-title" target="_blank">Track Seeding and Labelling with Embedded-space Graph Neural Networks</a>
              <p class="track-meta">EPJ Web of Conferences, 2021</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- Collision Parameters Section -->
    <section class="section collision-params">
      <div class="section-inner">
        <h2 class="section-title">Collision Parameters</h2>
        <p class="section-subtitle">Integrated luminosity of research output</p>
        <div class="params-grid">
          <div class="param-card">
            <div class="param-value">1276+</div>
            <div class="param-label">Citations</div>
            <div class="param-detail">Total integrated luminosity</div>
          </div>
          <div class="param-card">
            <div class="param-value">42</div>
            <div class="param-label">Publications</div>
            <div class="param-detail">Reconstructed event count</div>
          </div>
          <div class="param-card">
            <div class="param-value">8</div>
            <div class="param-label">h-index</div>
            <div class="param-detail">Signal significance</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let animationId = null
let ctx = null
let width = 0
let height = 0

// --- Particle system state ---
const collisions = ref([])
const particles = ref([])
const rings = ref([])
const detectorRings = [0.12, 0.22, 0.34, 0.46] // fractions of min(w,h)/2

// Color palette by "type"
const TRACK_COLORS = [
  { r: 74, g: 158, b: 255, label: 'ml' },      // blue — ML
  { r: 245, g: 166, b: 35, label: 'physics' },  // gold — physics
  { r: 74, g: 222, b: 128, label: 'gnn' },      // green — GNN
  { r: 248, g: 113, b: 113, label: 'tracking' }, // red — tracking
]

// Persistent background stars
let stars = []

function initStars() {
  stars = []
  for (let i = 0; i < 200; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.3,
      opacity: Math.random() * 0.5 + 0.1,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinklePhase: Math.random() * Math.PI * 2,
    })
  }
}

// --- Create a collision event ---
function createCollision() {
  const cx = width / 2 + (Math.random() - 0.5) * 30
  const cy = height / 2 + (Math.random() - 0.5) * 30
  const numTracks = Math.floor(Math.random() * 8) + 6
  const now = performance.now()

  // Expanding rings for this collision
  for (let r = 0; r < 3; r++) {
    rings.value.push({
      x: cx,
      y: cy,
      radius: 0,
      maxRadius: Math.min(width, height) * 0.5,
      speed: 1.5 + r * 0.7,
      opacity: 0.5,
      born: now,
      color: TRACK_COLORS[r % TRACK_COLORS.length],
    })
  }

  // Particle tracks
  for (let i = 0; i < numTracks; i++) {
    const color = TRACK_COLORS[Math.floor(Math.random() * TRACK_COLORS.length)]
    const angle = (Math.PI * 2 * i) / numTracks + (Math.random() - 0.5) * 0.3
    const charge = Math.random() > 0.5 ? 1 : -1
    const speed = 1.2 + Math.random() * 2.5
    const curvature = (0.002 + Math.random() * 0.006) * charge
    const maxAge = 2500 + Math.random() * 3000

    particles.value.push({
      x: cx,
      y: cy,
      originX: cx,
      originY: cy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      curvature,
      color,
      opacity: 1,
      born: now,
      maxAge,
      trail: [{ x: cx, y: cy }],
      trailMax: 80,
      size: 1.2 + Math.random() * 1.5,
    })
  }
}

// --- Animation loop ---
function animate(timestamp) {
  if (!ctx) return

  // Clear
  ctx.globalCompositeOperation = 'source-over'
  ctx.fillStyle = '#0a0a1a'
  ctx.fillRect(0, 0, width, height)

  // Draw stars
  drawStars(timestamp)

  // Draw static detector layer circles (faint)
  drawDetectorLayers()

  // Draw expanding collision rings
  ctx.globalCompositeOperation = 'lighter'
  for (let i = rings.value.length - 1; i >= 0; i--) {
    const ring = rings.value[i]
    const age = timestamp - ring.born
    ring.radius += ring.speed
    ring.opacity = Math.max(0, 0.5 - ring.radius / ring.maxRadius * 0.6)

    if (ring.opacity <= 0 || ring.radius > ring.maxRadius) {
      rings.value.splice(i, 1)
      continue
    }

    ctx.beginPath()
    ctx.arc(ring.x, ring.y, ring.radius, 0, Math.PI * 2)
    ctx.strokeStyle = `rgba(${ring.color.r}, ${ring.color.g}, ${ring.color.b}, ${ring.opacity * 0.4})`
    ctx.lineWidth = 1.5
    ctx.stroke()
  }

  // Draw and update particle tracks
  for (let i = particles.value.length - 1; i >= 0; i--) {
    const p = particles.value[i]
    const age = timestamp - p.born

    if (age > p.maxAge) {
      particles.value.splice(i, 1)
      continue
    }

    // Apply curvature (simulate magnetic field bending)
    const cos = Math.cos(p.curvature)
    const sin = Math.sin(p.curvature)
    const nvx = p.vx * cos - p.vy * sin
    const nvy = p.vx * sin + p.vy * cos
    p.vx = nvx
    p.vy = nvy

    p.x += p.vx
    p.y += p.vy

    // Record trail
    p.trail.push({ x: p.x, y: p.y })
    if (p.trail.length > p.trailMax) {
      p.trail.shift()
    }

    // Fade out near end of life
    const lifeRatio = age / p.maxAge
    p.opacity = lifeRatio < 0.7 ? 1 : 1 - (lifeRatio - 0.7) / 0.3

    // Draw trail
    if (p.trail.length > 1) {
      ctx.globalCompositeOperation = 'lighter'
      for (let t = 1; t < p.trail.length; t++) {
        const trailOpacity = (t / p.trail.length) * p.opacity * 0.6
        ctx.beginPath()
        ctx.moveTo(p.trail[t - 1].x, p.trail[t - 1].y)
        ctx.lineTo(p.trail[t].x, p.trail[t].y)
        ctx.strokeStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${trailOpacity})`
        ctx.lineWidth = p.size * 0.6
        ctx.stroke()
      }
    }

    // Draw particle head (glowing dot)
    ctx.globalCompositeOperation = 'lighter'
    const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4)
    gradient.addColorStop(0, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.opacity * 0.9})`)
    gradient.addColorStop(0.3, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.opacity * 0.4})`)
    gradient.addColorStop(1, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0)`)
    ctx.beginPath()
    ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2)
    ctx.fillStyle = gradient
    ctx.fill()
  }

  // Central glow
  ctx.globalCompositeOperation = 'lighter'
  const centerGlow = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, 60)
  centerGlow.addColorStop(0, 'rgba(255, 255, 255, 0.08)')
  centerGlow.addColorStop(0.5, 'rgba(74, 158, 255, 0.03)')
  centerGlow.addColorStop(1, 'rgba(0, 0, 0, 0)')
  ctx.beginPath()
  ctx.arc(width / 2, height / 2, 60, 0, Math.PI * 2)
  ctx.fillStyle = centerGlow
  ctx.fill()

  // Reset composite op
  ctx.globalCompositeOperation = 'source-over'

  animationId = requestAnimationFrame(animate)
}

function drawStars(timestamp) {
  ctx.globalCompositeOperation = 'lighter'
  for (const star of stars) {
    const twinkle = Math.sin(timestamp * star.twinkleSpeed + star.twinklePhase) * 0.3 + 0.7
    const opacity = star.opacity * twinkle
    ctx.beginPath()
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(180, 200, 255, ${opacity})`
    ctx.fill()
  }
}

function drawDetectorLayers() {
  ctx.globalCompositeOperation = 'source-over'
  const scale = Math.min(width, height) / 2
  const colors = ['#4a9eff', '#f5a623', '#4ade80', '#f87171']
  for (let i = 0; i < detectorRings.length; i++) {
    const r = detectorRings[i] * scale
    ctx.beginPath()
    ctx.arc(width / 2, height / 2, r, 0, Math.PI * 2)
    ctx.strokeStyle = colors[i]
    ctx.globalAlpha = 0.08
    ctx.lineWidth = 1
    ctx.setLineDash([4, 8])
    ctx.stroke()
    ctx.setLineDash([])
    ctx.globalAlpha = 1
  }
}

function handleResize() {
  const canvas = canvasRef.value
  if (!canvas) return
  const dpr = window.devicePixelRatio || 1
  width = canvas.clientWidth
  height = canvas.clientHeight
  canvas.width = width * dpr
  canvas.height = height * dpr
  ctx = canvas.getContext('2d')
  ctx.scale(dpr, dpr)
  initStars()
}

let collisionInterval = null

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)

  // Initial collision
  createCollision()

  // Recurring collisions
  collisionInterval = setInterval(() => {
    createCollision()
  }, 3500)

  animationId = requestAnimationFrame(animate)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  if (animationId) cancelAnimationFrame(animationId)
  if (collisionInterval) clearInterval(collisionInterval)
})
</script>

<style scoped>
/* ============================
   Reset & Root
   ============================ */
.proposal-v1 {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #e0e6ed;
  background: #0a0a1a;
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
}

.hero-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  pointer-events: none;
}

.hero-content {
  text-align: center;
  pointer-events: auto;
  max-width: 700px;
  padding: 0 24px;
}

.hero-label {
  font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;
  font-size: 0.85rem;
  color: #4a9eff;
  letter-spacing: 0.08em;
  margin-bottom: 12px;
  opacity: 0.9;
}

.hero-name {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 8px 0;
  background: linear-gradient(135deg, #ffffff 0%, #a0c4ff 50%, #4a9eff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
}

.hero-tagline {
  font-size: clamp(1rem, 2.2vw, 1.3rem);
  color: #8b95a5;
  margin: 0 0 6px 0;
  font-weight: 400;
}

.hero-position {
  font-size: clamp(0.85rem, 1.8vw, 1rem);
  color: #5a6577;
  margin: 0 0 32px 0;
  font-weight: 400;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 12px 28px;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: linear-gradient(135deg, #4a9eff, #2563eb);
  color: #ffffff;
  box-shadow: 0 0 20px rgba(74, 158, 255, 0.25);
}

.btn-primary:hover {
  box-shadow: 0 0 30px rgba(74, 158, 255, 0.45);
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
  border-right: 2px solid rgba(255, 255, 255, 0.25);
  border-bottom: 2px solid rgba(255, 255, 255, 0.25);
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
   Detector Layers
   ============================ */
.layers-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

.layer-ring-display {
  display: flex;
  justify-content: center;
}

.ring-svg {
  width: 100%;
  max-width: 340px;
}

.layers-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.layer-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.layer-marker {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--layer-color);
  margin-top: 5px;
  flex-shrink: 0;
  box-shadow: 0 0 8px var(--layer-color);
}

.layer-info h3 {
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0 0 4px 0;
  color: #d0d8e4;
}

.layer-info p {
  font-size: 0.88rem;
  color: #6b7a8d;
  line-height: 1.55;
  margin: 0;
}

/* ============================
   Reconstructed Tracks
   ============================ */
.tracks-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.track-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.04);
  transition: background 0.2s ease;
}

.track-item:hover {
  background: rgba(255, 255, 255, 0.04);
}

.track-type {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 4px;
  letter-spacing: 0.08em;
  flex-shrink: 0;
  text-transform: uppercase;
}

.track-type.ml {
  background: rgba(74, 158, 255, 0.12);
  color: #4a9eff;
}

.track-type.gnn {
  background: rgba(74, 222, 128, 0.12);
  color: #4ade80;
}

.track-type.physics {
  background: rgba(245, 166, 35, 0.12);
  color: #f5a623;
}

.track-type.tracking {
  background: rgba(248, 113, 113, 0.12);
  color: #f87171;
}

.track-info {
  flex: 1;
  min-width: 0;
}

.track-title {
  font-size: 0.92rem;
  color: #c8d0dc;
  text-decoration: none;
  display: block;
  line-height: 1.4;
  transition: color 0.2s ease;
}

.track-title:hover {
  color: #4a9eff;
}

.track-meta {
  font-size: 0.78rem;
  color: #4e5a6b;
  margin: 4px 0 0 0;
}

/* ============================
   Collision Parameters
   ============================ */
.params-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.param-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 32px 24px;
  text-align: center;
  transition: border-color 0.25s ease;
}

.param-card:hover {
  border-color: rgba(74, 158, 255, 0.2);
}

.param-value {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  background: linear-gradient(135deg, #4a9eff, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 4px;
}

.param-label {
  font-size: 1rem;
  font-weight: 600;
  color: #c0c8d4;
  margin-bottom: 4px;
}

.param-detail {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.72rem;
  color: #4e5a6b;
  letter-spacing: 0.04em;
}

/* ============================
   Responsive
   ============================ */
@media (max-width: 768px) {
  .layers-container {
    grid-template-columns: 1fr;
  }

  .layer-ring-display {
    order: -1;
  }

  .ring-svg {
    max-width: 260px;
  }

  .params-grid {
    grid-template-columns: 1fr;
  }

  .track-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .section {
    padding: 60px 20px;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>
