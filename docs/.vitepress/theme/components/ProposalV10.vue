<template>
  <div class="control-room">
    <!-- Top Bar -->
    <div class="topbar">
      <div class="topbar-left">
        <span class="topbar-title">DANIEL MURNANE &mdash; OPERATIONS CENTER</span>
      </div>
      <div class="topbar-center">
        <span class="clock">{{ currentTime }}</span>
      </div>
      <div class="topbar-right">
        <span class="status-label">SYSTEM: ONLINE</span>
        <span class="status-dot online"></span>
      </div>
    </div>

    <!-- Dashboard Grid -->
    <div class="dashboard-grid">

      <!-- Panel 1: Career Timeline (2 cols) -->
      <div class="panel panel-wide">
        <div class="panel-header">
          <span class="panel-title">CAREER TIMELINE</span>
          <span class="panel-status">LIVE</span>
        </div>
        <div class="panel-body">
          <canvas ref="timelineCanvas" class="timeline-canvas"></canvas>
        </div>
      </div>

      <!-- Panel 2: Citation Metrics -->
      <div class="panel">
        <div class="panel-header">
          <span class="panel-title">CITATION METRICS</span>
          <span class="panel-status">UPDATED</span>
        </div>
        <div class="panel-body metrics-panel">
          <div class="big-counter">
            <span class="counter-value">{{ animatedCitations.toLocaleString() }}</span>
            <span class="counter-label">Total Citations</span>
          </div>
          <div class="small-counters">
            <div class="small-counter">
              <span class="sc-value">{{ animatedHIndex }}</span>
              <span class="sc-label">h-index</span>
            </div>
            <div class="small-counter">
              <span class="sc-value">{{ animatedI10 }}</span>
              <span class="sc-label">i10-index</span>
            </div>
          </div>
          <canvas ref="sparklineCanvas" class="sparkline-canvas"></canvas>
        </div>
      </div>

      <!-- Panel 3: Publication Output -->
      <div class="panel">
        <div class="panel-header">
          <span class="panel-title">PUBLICATION OUTPUT</span>
          <span class="panel-status">42 TOTAL</span>
        </div>
        <div class="panel-body">
          <canvas ref="barChartCanvas" class="bar-chart-canvas"></canvas>
        </div>
      </div>

      <!-- Panel 4: Active Projects -->
      <div class="panel">
        <div class="panel-header">
          <span class="panel-title">ACTIVE PROJECTS</span>
          <span class="panel-status">4 TRACKED</span>
        </div>
        <div class="panel-body projects-panel">
          <div
            v-for="project in projects"
            :key="project.name"
            class="project-row"
          >
            <div class="project-info">
              <span class="project-name">{{ project.name }}</span>
              <span class="project-status" :class="project.statusClass">{{ project.status }}</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: project.progress + '%' }" :class="project.statusClass"></div>
            </div>
            <span class="progress-pct">{{ project.progress }}%</span>
          </div>
        </div>
      </div>

      <!-- Panel 5: System Diagnostics -->
      <div class="panel">
        <div class="panel-header">
          <span class="panel-title">SYSTEM DIAGNOSTICS</span>
          <span class="panel-status">NOMINAL</span>
        </div>
        <div class="panel-body diagnostics-panel">
          <div class="gauge-container">
            <canvas ref="gaugeCanvas" class="gauge-canvas"></canvas>
            <div class="gauge-label">Caffeine Level</div>
          </div>
          <div class="diag-info">
            <div class="diag-row">
              <span class="diag-key">Focus Mode:</span>
              <span class="diag-val engaged">ENGAGED</span>
            </div>
            <div class="diag-row">
              <span class="diag-key">Current Task:</span>
              <span class="diag-val">Research</span>
            </div>
            <div class="diag-row">
              <span class="diag-key">Timezone:</span>
              <span class="diag-val">Europe/Copenhagen (CET)</span>
            </div>
            <div class="diag-row">
              <span class="diag-key">Uptime:</span>
              <span class="diag-val">{{ uptime }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Panel 6: Research Areas (Radar) -->
      <div class="panel">
        <div class="panel-header">
          <span class="panel-title">RESEARCH AREAS</span>
          <span class="panel-status">SCAN</span>
        </div>
        <div class="panel-body">
          <canvas ref="radarCanvas" class="radar-canvas"></canvas>
        </div>
      </div>

      <!-- Panel 7: Collaboration Network (2 cols) -->
      <div class="panel panel-wide">
        <div class="panel-header">
          <span class="panel-title">COLLABORATION NETWORK</span>
          <span class="panel-status">CONNECTED</span>
        </div>
        <div class="panel-body network-panel">
          <div class="network-layout">
            <div class="network-node primary">
              <div class="node-circle cern"></div>
              <div class="node-label">CERN</div>
              <div class="node-sub">ATLAS Experiment</div>
              <div class="node-sub">ML Co-convener</div>
            </div>
            <div class="network-connector">
              <div class="connector-line"></div>
              <div class="connector-pulse"></div>
            </div>
            <div class="network-node primary">
              <div class="node-circle berkeley"></div>
              <div class="node-label">Berkeley Lab</div>
              <div class="node-sub">LBNL / NERSC</div>
              <div class="node-sub">Research Affiliate</div>
            </div>
            <div class="network-connector">
              <div class="connector-line"></div>
              <div class="connector-pulse"></div>
            </div>
            <div class="network-node primary current">
              <div class="node-circle nbi"></div>
              <div class="node-label">NBI Copenhagen</div>
              <div class="node-sub">Niels Bohr Institute</div>
              <div class="node-sub">DDSA Fellow</div>
              <div class="current-badge">CURRENT</div>
            </div>
          </div>
          <div class="network-meta">
            <span class="meta-item">
              <span class="meta-dot green"></span> Active collaboration
            </span>
            <span class="meta-item">
              <span class="meta-dot blue"></span> Affiliate
            </span>
            <span class="meta-item">
              5,500+ ATLAS collaborators worldwide
            </span>
          </div>
        </div>
      </div>

      <!-- Panel 8: Recent Transmissions -->
      <div class="panel">
        <div class="panel-header">
          <span class="panel-title">RECENT TRANSMISSIONS</span>
          <span class="panel-status blinking">RX</span>
        </div>
        <div class="panel-body transmissions-panel" ref="transmissionsPanel">
          <div
            v-for="(tx, i) in transmissions"
            :key="i"
            class="tx-line"
          >
            <span class="tx-date">{{ tx.date }}</span>
            <span class="tx-type">TX:</span>
            <span class="tx-title">"{{ tx.title }}"</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, nextTick } from 'vue'

// Clock
const currentTime = ref('')
let clockInterval = null

function updateClock() {
  const now = new Date()
  currentTime.value = now.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }) + ' UTC+' + String(Math.abs(Math.round(-now.getTimezoneOffset() / 60)))
}

// Uptime
const uptime = ref('')
function updateUptime() {
  const born = new Date(1990, 0, 1)
  const now = new Date()
  const diff = now - born
  const years = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000))
  const months = Math.floor((diff % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000))
  const days = Math.floor((diff % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000))
  uptime.value = `${years}y ${months}m ${days}d`
}

// Animated counters
const animatedCitations = ref(0)
const animatedHIndex = ref(0)
const animatedI10 = ref(0)

function animateCounter(target, finalValue, duration) {
  const start = performance.now()
  function step(now) {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    target.value = Math.round(eased * finalValue)
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

// Projects
const projects = [
  { name: 'Physics Language Model', status: 'ACTIVE', statusClass: 'active', progress: 80 },
  { name: 'GNN4ITk Pipeline', status: 'DEPLOYED', statusClass: 'deployed', progress: 100 },
  { name: 'ChATLAS', status: 'ACTIVE', statusClass: 'active', progress: 60 },
  { name: 'Equivariant GNNs', status: 'PUBLISHED', statusClass: 'deployed', progress: 100 },
]

// Transmissions
const transmissions = [
  { date: '[2024-09-30]', title: 'Learning to Reconstruct Quirky Tracks' },
  { date: '[2024-02-14]', title: 'A Language Model for Particle Tracking' },
  { date: '[2024-01-01]', title: 'GNN4ITk Track Reconstruction Chain' },
  { date: '[2023-11-15]', title: 'Equivariant GNNs for Tracking at HL-LHC' },
  { date: '[2023-09-20]', title: 'Reconstructing Graph Structure from Point Clouds' },
  { date: '[2023-06-01]', title: 'Performance of GNN-based Tracking for ATLAS' },
  { date: '[2023-03-10]', title: 'Charged Particle Tracking with ML at ATLAS' },
  { date: '[2022-12-01]', title: 'Exa.TrkX Pipeline: From Prototype to Production' },
  { date: '[2022-08-15]', title: 'Metric Learning for Track Building' },
  { date: '[2022-04-20]', title: 'Graph Neural Networks for Particle Reconstruction' },
]

// Canvas refs
const timelineCanvas = ref(null)
const sparklineCanvas = ref(null)
const barChartCanvas = ref(null)
const gaugeCanvas = ref(null)
const radarCanvas = ref(null)
const transmissionsPanel = ref(null)

let animFrameId = null

// Timeline drawing
function drawTimeline(canvas) {
  if (!canvas) return
  const dpr = window.devicePixelRatio || 1
  const rect = canvas.getBoundingClientRect()
  canvas.width = rect.width * dpr
  canvas.height = rect.height * dpr
  const ctx = canvas.getContext('2d')
  ctx.scale(dpr, dpr)
  const w = rect.width
  const h = rect.height

  ctx.clearRect(0, 0, w, h)

  const milestones = [
    { year: 2014, label: 'BSc', sub: 'Adelaide' },
    { year: 2019, label: 'PhD', sub: 'Adelaide' },
    { year: 2019.5, label: 'Berkeley', sub: 'LBNL' },
    { year: 2023, label: 'ML Convener', sub: 'ATLAS' },
    { year: 2024, label: 'NBI', sub: 'Copenhagen' },
  ]

  const padding = 60
  const lineY = h * 0.55
  const startYear = 2012
  const endYear = 2026

  // Timeline line
  ctx.strokeStyle = '#30363d'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(padding, lineY)
  ctx.lineTo(w - padding, lineY)
  ctx.stroke()

  // Year markers
  for (let y = 2012; y <= 2026; y += 2) {
    const x = padding + ((y - startYear) / (endYear - startYear)) * (w - 2 * padding)
    ctx.strokeStyle = '#21262d'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(x, lineY - 6)
    ctx.lineTo(x, lineY + 6)
    ctx.stroke()
    ctx.fillStyle = '#484f58'
    ctx.font = '10px monospace'
    ctx.textAlign = 'center'
    ctx.fillText(String(y), x, lineY + 20)
  }

  // Milestone dots and labels
  milestones.forEach((m, i) => {
    const x = padding + ((m.year - startYear) / (endYear - startYear)) * (w - 2 * padding)
    const isLast = i === milestones.length - 1
    const above = i % 2 === 0

    // Dot
    ctx.beginPath()
    ctx.arc(x, lineY, isLast ? 7 : 5, 0, Math.PI * 2)
    ctx.fillStyle = isLast ? '#3fb950' : '#58a6ff'
    ctx.fill()

    // Glow for current
    if (isLast) {
      ctx.beginPath()
      ctx.arc(x, lineY, 12, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(63, 185, 80, 0.3)'
      ctx.lineWidth = 2
      ctx.stroke()
    }

    // Connecting line to label
    const labelY = above ? lineY - 35 : lineY + 35
    ctx.strokeStyle = '#30363d'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(x, lineY + (above ? -8 : 8))
    ctx.lineTo(x, labelY + (above ? 12 : -12))
    ctx.stroke()

    // Label
    ctx.fillStyle = isLast ? '#3fb950' : '#e6edf3'
    ctx.font = 'bold 11px -apple-system, sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText(m.label, x, above ? labelY : labelY + 4)

    // Sub label
    ctx.fillStyle = '#484f58'
    ctx.font = '10px -apple-system, sans-serif'
    ctx.fillText(m.sub, x, above ? labelY + 14 : labelY + 16)
  })
}

// Sparkline drawing
function drawSparkline(canvas) {
  if (!canvas) return
  const dpr = window.devicePixelRatio || 1
  const rect = canvas.getBoundingClientRect()
  canvas.width = rect.width * dpr
  canvas.height = rect.height * dpr
  const ctx = canvas.getContext('2d')
  ctx.scale(dpr, dpr)
  const w = rect.width
  const h = rect.height

  const data = [5, 12, 25, 50, 90, 160, 280, 420, 650, 900, 1100, 1276]
  const maxVal = Math.max(...data)
  const padding = 4

  // Gradient fill
  const grad = ctx.createLinearGradient(0, 0, 0, h)
  grad.addColorStop(0, 'rgba(88, 166, 255, 0.3)')
  grad.addColorStop(1, 'rgba(88, 166, 255, 0.0)')

  ctx.beginPath()
  ctx.moveTo(padding, h)
  data.forEach((d, i) => {
    const x = padding + (i / (data.length - 1)) * (w - 2 * padding)
    const y = h - padding - (d / maxVal) * (h - 2 * padding)
    ctx.lineTo(x, y)
  })
  ctx.lineTo(w - padding, h)
  ctx.closePath()
  ctx.fillStyle = grad
  ctx.fill()

  // Line
  ctx.beginPath()
  data.forEach((d, i) => {
    const x = padding + (i / (data.length - 1)) * (w - 2 * padding)
    const y = h - padding - (d / maxVal) * (h - 2 * padding)
    if (i === 0) ctx.moveTo(x, y)
    else ctx.lineTo(x, y)
  })
  ctx.strokeStyle = '#58a6ff'
  ctx.lineWidth = 2
  ctx.stroke()
}

// Bar chart drawing
function drawBarChart(canvas) {
  if (!canvas) return
  const dpr = window.devicePixelRatio || 1
  const rect = canvas.getBoundingClientRect()
  canvas.width = rect.width * dpr
  canvas.height = rect.height * dpr
  const ctx = canvas.getContext('2d')
  ctx.scale(dpr, dpr)
  const w = rect.width
  const h = rect.height

  const data = [
    { year: '2017', value: 2 },
    { year: '2018', value: 3 },
    { year: '2019', value: 4 },
    { year: '2020', value: 5 },
    { year: '2021', value: 6 },
    { year: '2022', value: 7 },
    { year: '2023', value: 14 },
    { year: '2024', value: 5 },
  ]

  const maxVal = Math.max(...data.map(d => d.value))
  const paddingLeft = 30
  const paddingBottom = 28
  const paddingTop = 10
  const paddingRight = 10
  const chartW = w - paddingLeft - paddingRight
  const chartH = h - paddingBottom - paddingTop
  const barWidth = chartW / data.length * 0.6
  const barGap = chartW / data.length * 0.4

  // Grid lines
  ctx.strokeStyle = '#21262d'
  ctx.lineWidth = 0.5
  for (let i = 0; i <= 4; i++) {
    const y = paddingTop + (i / 4) * chartH
    ctx.beginPath()
    ctx.moveTo(paddingLeft, y)
    ctx.lineTo(w - paddingRight, y)
    ctx.stroke()
    // Label
    const val = Math.round(maxVal * (1 - i / 4))
    ctx.fillStyle = '#484f58'
    ctx.font = '10px monospace'
    ctx.textAlign = 'right'
    ctx.fillText(String(val), paddingLeft - 6, y + 4)
  }

  // Bars
  data.forEach((d, i) => {
    const x = paddingLeft + i * (barWidth + barGap) + barGap / 2
    const barH = (d.value / maxVal) * chartH
    const y = paddingTop + chartH - barH

    // Bar gradient
    const grad = ctx.createLinearGradient(x, y, x, paddingTop + chartH)
    grad.addColorStop(0, '#58a6ff')
    grad.addColorStop(1, '#1f6feb')
    ctx.fillStyle = grad
    ctx.fillRect(x, y, barWidth, barH)

    // Value on top
    ctx.fillStyle = '#e6edf3'
    ctx.font = '10px monospace'
    ctx.textAlign = 'center'
    ctx.fillText(String(d.value), x + barWidth / 2, y - 4)

    // Year label
    ctx.fillStyle = '#484f58'
    ctx.font = '9px monospace'
    ctx.textAlign = 'center'
    ctx.fillText(d.year.slice(-2), x + barWidth / 2, h - 6)
  })
}

// Gauge drawing
let gaugeAngle = 0
function drawGauge(canvas) {
  if (!canvas) return
  const dpr = window.devicePixelRatio || 1
  const rect = canvas.getBoundingClientRect()
  canvas.width = rect.width * dpr
  canvas.height = rect.height * dpr
  const ctx = canvas.getContext('2d')
  ctx.scale(dpr, dpr)
  const w = rect.width
  const h = rect.height

  const cx = w / 2
  const cy = h / 2 + 5
  const radius = Math.min(w, h) / 2 - 12
  const lineW = 10
  const targetPercent = 78

  // Animate
  if (gaugeAngle < targetPercent) {
    gaugeAngle = Math.min(gaugeAngle + 1.5, targetPercent)
  }

  ctx.clearRect(0, 0, w, h)

  // Background arc
  const startAngle = -Math.PI * 0.75
  const endAngle = Math.PI * 0.75
  const totalArc = endAngle - startAngle

  ctx.beginPath()
  ctx.arc(cx, cy, radius, startAngle, endAngle)
  ctx.strokeStyle = '#21262d'
  ctx.lineWidth = lineW
  ctx.lineCap = 'round'
  ctx.stroke()

  // Value arc
  const valueAngle = startAngle + (gaugeAngle / 100) * totalArc
  ctx.beginPath()
  ctx.arc(cx, cy, radius, startAngle, valueAngle)
  const grad = ctx.createLinearGradient(cx - radius, cy, cx + radius, cy)
  grad.addColorStop(0, '#d29922')
  grad.addColorStop(0.5, '#3fb950')
  grad.addColorStop(1, '#3fb950')
  ctx.strokeStyle = grad
  ctx.lineWidth = lineW
  ctx.lineCap = 'round'
  ctx.stroke()

  // Percentage text
  ctx.fillStyle = '#e6edf3'
  ctx.font = 'bold 20px monospace'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(Math.round(gaugeAngle) + '%', cx, cy)
}

// Radar chart drawing
function drawRadar(canvas) {
  if (!canvas) return
  const dpr = window.devicePixelRatio || 1
  const rect = canvas.getBoundingClientRect()
  canvas.width = rect.width * dpr
  canvas.height = rect.height * dpr
  const ctx = canvas.getContext('2d')
  ctx.scale(dpr, dpr)
  const w = rect.width
  const h = rect.height

  const labels = [
    { name: 'GNNs', value: 0.95 },
    { name: 'Physics', value: 0.90 },
    { name: 'ML', value: 0.92 },
    { name: 'SWE', value: 0.85 },
    { name: 'Teaching', value: 0.80 },
    { name: 'Leadership', value: 0.88 },
  ]

  const cx = w / 2
  const cy = h / 2 + 4
  const radius = Math.min(w, h) / 2 - 32
  const n = labels.length

  // Grid rings
  for (let ring = 1; ring <= 5; ring++) {
    const r = (ring / 5) * radius
    ctx.beginPath()
    for (let i = 0; i <= n; i++) {
      const angle = (i / n) * Math.PI * 2 - Math.PI / 2
      const x = cx + Math.cos(angle) * r
      const y = cy + Math.sin(angle) * r
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.closePath()
    ctx.strokeStyle = '#21262d'
    ctx.lineWidth = 0.5
    ctx.stroke()
  }

  // Axis lines
  for (let i = 0; i < n; i++) {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2
    ctx.beginPath()
    ctx.moveTo(cx, cy)
    ctx.lineTo(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius)
    ctx.strokeStyle = '#21262d'
    ctx.lineWidth = 0.5
    ctx.stroke()
  }

  // Data polygon
  ctx.beginPath()
  labels.forEach((item, i) => {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2
    const r = item.value * radius
    const x = cx + Math.cos(angle) * r
    const y = cy + Math.sin(angle) * r
    if (i === 0) ctx.moveTo(x, y)
    else ctx.lineTo(x, y)
  })
  ctx.closePath()
  ctx.fillStyle = 'rgba(88, 166, 255, 0.15)'
  ctx.fill()
  ctx.strokeStyle = '#58a6ff'
  ctx.lineWidth = 2
  ctx.stroke()

  // Data points
  labels.forEach((item, i) => {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2
    const r = item.value * radius
    const x = cx + Math.cos(angle) * r
    const y = cy + Math.sin(angle) * r
    ctx.beginPath()
    ctx.arc(x, y, 3, 0, Math.PI * 2)
    ctx.fillStyle = '#58a6ff'
    ctx.fill()
  })

  // Labels
  labels.forEach((item, i) => {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2
    const labelR = radius + 18
    const x = cx + Math.cos(angle) * labelR
    const y = cy + Math.sin(angle) * labelR
    ctx.fillStyle = '#8b949e'
    ctx.font = '10px -apple-system, sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(item.name, x, y)
  })
}

// Draw all charts
function drawAllCharts() {
  drawTimeline(timelineCanvas.value)
  drawSparkline(sparklineCanvas.value)
  drawBarChart(barChartCanvas.value)
  drawGauge(gaugeCanvas.value)
  drawRadar(radarCanvas.value)
}

// Animation loop for gauge
function animateLoop() {
  if (gaugeAngle < 78) {
    drawGauge(gaugeCanvas.value)
  }
  animFrameId = requestAnimationFrame(animateLoop)
}

// Auto-scroll transmissions
let scrollInterval = null

function startTransmissionScroll() {
  const panel = transmissionsPanel.value
  if (!panel) return
  scrollInterval = setInterval(() => {
    if (panel.scrollTop < panel.scrollHeight - panel.clientHeight) {
      panel.scrollTop += 1
    } else {
      panel.scrollTop = 0
    }
  }, 100)
}

// Resize handler
function handleResize() {
  nextTick(() => {
    drawAllCharts()
  })
}

onMounted(() => {
  updateClock()
  updateUptime()
  clockInterval = setInterval(() => {
    updateClock()
    updateUptime()
  }, 1000)

  // Animate counters
  setTimeout(() => {
    animateCounter(animatedCitations, 1276, 2000)
    animateCounter(animatedHIndex, 8, 1500)
    animateCounter(animatedI10, 7, 1500)
  }, 300)

  nextTick(() => {
    drawAllCharts()
    animateLoop()
    startTransmissionScroll()
  })

  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (clockInterval) clearInterval(clockInterval)
  if (animFrameId) cancelAnimationFrame(animFrameId)
  if (scrollInterval) clearInterval(scrollInterval)
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
/* Full page reset */
.control-room {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  background: #0d1117;
  color: #e6edf3;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  overflow: hidden;
}

/* Top Bar */
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  background: #0a0a0a;
  border-bottom: 1px solid #30363d;
  padding: 0 20px;
  flex-shrink: 0;
}
.topbar-title {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 3px;
  color: #8b949e;
}
.clock {
  font-family: 'Consolas', 'Courier New', monospace;
  font-size: 18px;
  color: #e6edf3;
  letter-spacing: 2px;
}
.topbar-right {
  display: flex;
  align-items: center;
  gap: 8px;
}
.status-label {
  font-size: 11px;
  letter-spacing: 1px;
  color: #3fb950;
}
.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  animation: pulse-dot 2s ease-in-out infinite;
}
.status-dot.online {
  background: #3fb950;
  box-shadow: 0 0 6px rgba(63, 185, 80, 0.5);
}
@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

/* Dashboard Grid */
.dashboard-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  padding: 12px;
  overflow: auto;
}

/* Panel */
.panel {
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 200px;
}
.panel-wide {
  grid-column: span 2;
}
.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 14px;
  background: #0d1117;
  border-bottom: 1px solid #30363d;
  flex-shrink: 0;
}
.panel-title {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #8b949e;
}
.panel-status {
  font-size: 9px;
  letter-spacing: 1px;
  color: #3fb950;
  font-weight: 600;
}
.panel-status.blinking {
  animation: blink-text 1.5s ease-in-out infinite;
}
@keyframes blink-text {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
.panel-body {
  flex: 1;
  padding: 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Timeline Canvas */
.timeline-canvas {
  width: 100%;
  height: 100%;
  min-height: 120px;
}

/* Citation Metrics */
.metrics-panel {
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.big-counter {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.counter-value {
  font-family: 'Consolas', 'Courier New', monospace;
  font-size: 40px;
  font-weight: 700;
  color: #58a6ff;
  line-height: 1;
}
.counter-label {
  font-size: 11px;
  color: #8b949e;
  margin-top: 4px;
  letter-spacing: 0.5px;
}
.small-counters {
  display: flex;
  gap: 24px;
  margin-top: 4px;
}
.small-counter {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sc-value {
  font-family: 'Consolas', 'Courier New', monospace;
  font-size: 20px;
  font-weight: 700;
  color: #e6edf3;
}
.sc-label {
  font-size: 10px;
  color: #8b949e;
}
.sparkline-canvas {
  width: 100%;
  height: 50px;
  margin-top: auto;
  flex-shrink: 0;
}

/* Bar Chart */
.bar-chart-canvas {
  width: 100%;
  height: 100%;
  min-height: 150px;
}

/* Active Projects */
.projects-panel {
  gap: 10px;
  justify-content: center;
}
.project-row {
  display: flex;
  align-items: center;
  gap: 10px;
}
.project-info {
  flex: 0 0 auto;
  min-width: 140px;
}
.project-name {
  font-size: 12px;
  color: #e6edf3;
  display: block;
}
.project-status {
  font-size: 9px;
  letter-spacing: 0.5px;
  font-weight: 600;
}
.project-status.active {
  color: #58a6ff;
}
.project-status.deployed {
  color: #3fb950;
}
.project-status.planned {
  color: #8b949e;
}
.progress-bar {
  flex: 1;
  height: 8px;
  background: #21262d;
  border-radius: 4px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 1.5s ease;
}
.progress-fill.active {
  background: linear-gradient(90deg, #1f6feb, #58a6ff);
}
.progress-fill.deployed {
  background: linear-gradient(90deg, #238636, #3fb950);
}
.progress-fill.planned {
  background: #484f58;
}
.progress-pct {
  font-family: 'Consolas', 'Courier New', monospace;
  font-size: 11px;
  color: #8b949e;
  width: 36px;
  text-align: right;
  flex-shrink: 0;
}

/* System Diagnostics */
.diagnostics-panel {
  flex-direction: row;
  gap: 16px;
  align-items: center;
}
.gauge-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 auto;
}
.gauge-canvas {
  width: 120px;
  height: 100px;
}
.gauge-label {
  font-size: 10px;
  color: #8b949e;
  letter-spacing: 0.5px;
  margin-top: -2px;
}
.diag-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.diag-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
}
.diag-key {
  color: #8b949e;
  white-space: nowrap;
}
.diag-val {
  color: #e6edf3;
  font-family: 'Consolas', 'Courier New', monospace;
  font-size: 11px;
}
.diag-val.engaged {
  color: #3fb950;
}

/* Radar Chart */
.radar-canvas {
  width: 100%;
  height: 100%;
  min-height: 180px;
}

/* Collaboration Network */
.network-panel {
  justify-content: center;
  gap: 16px;
}
.network-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  flex-wrap: nowrap;
}
.network-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 16px;
  position: relative;
}
.network-node.current {
  background: rgba(63, 185, 80, 0.05);
  border: 1px solid rgba(63, 185, 80, 0.2);
  border-radius: 8px;
}
.node-circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-bottom: 6px;
  border: 2px solid;
}
.node-circle.cern {
  border-color: #58a6ff;
  background: rgba(88, 166, 255, 0.15);
}
.node-circle.berkeley {
  border-color: #d29922;
  background: rgba(210, 153, 34, 0.15);
}
.node-circle.nbi {
  border-color: #3fb950;
  background: rgba(63, 185, 80, 0.15);
}
.node-label {
  font-size: 12px;
  font-weight: 600;
  color: #e6edf3;
  white-space: nowrap;
}
.node-sub {
  font-size: 10px;
  color: #8b949e;
  white-space: nowrap;
}
.current-badge {
  margin-top: 4px;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #3fb950;
  padding: 1px 6px;
  border: 1px solid rgba(63, 185, 80, 0.3);
  border-radius: 3px;
}
.network-connector {
  display: flex;
  align-items: center;
  width: 60px;
  position: relative;
}
.connector-line {
  width: 100%;
  height: 2px;
  background: #30363d;
}
.connector-pulse {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #58a6ff;
  top: 50%;
  transform: translateY(-50%);
  animation: pulse-move 3s ease-in-out infinite;
}
@keyframes pulse-move {
  0% { left: 0; opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { left: calc(100% - 8px); opacity: 0; }
}
.network-meta {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}
.meta-item {
  font-size: 10px;
  color: #8b949e;
  display: flex;
  align-items: center;
  gap: 6px;
}
.meta-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}
.meta-dot.green { background: #3fb950; }
.meta-dot.blue { background: #58a6ff; }

/* Recent Transmissions */
.transmissions-panel {
  font-family: 'Consolas', 'Courier New', monospace;
  font-size: 11px;
  overflow-y: auto;
  gap: 4px;
  padding: 8px;
}
.tx-line {
  display: flex;
  gap: 8px;
  white-space: nowrap;
  line-height: 1.8;
}
.tx-date {
  color: #484f58;
  flex-shrink: 0;
}
.tx-type {
  color: #3fb950;
  flex-shrink: 0;
}
.tx-title {
  color: #3fb950;
  opacity: 0.85;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Responsive */
@media (max-width: 1200px) {
  .dashboard-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .panel-wide {
    grid-column: span 2;
  }
}

@media (max-width: 768px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 8px;
  }
  .panel-wide {
    grid-column: span 1;
  }
  .topbar {
    padding: 0 10px;
    height: 40px;
  }
  .topbar-title {
    font-size: 10px;
    letter-spacing: 1.5px;
  }
  .clock {
    font-size: 14px;
  }
  .topbar-right {
    gap: 4px;
  }
  .status-label {
    font-size: 9px;
  }
  .network-layout {
    flex-wrap: wrap;
    gap: 8px;
  }
  .network-connector {
    width: 30px;
  }
  .diagnostics-panel {
    flex-direction: column;
  }
  .counter-value {
    font-size: 30px;
  }
  .project-info {
    min-width: 100px;
  }
  .project-name {
    font-size: 11px;
  }
}

@media (max-width: 480px) {
  .topbar-title {
    display: none;
  }
  .panel {
    min-height: 160px;
  }
}
</style>
