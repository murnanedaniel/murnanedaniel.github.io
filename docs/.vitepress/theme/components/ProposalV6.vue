<template>
  <div class="proposal-v6" @click="handleClick">
    <!-- Three.js Canvas Container -->
    <div ref="canvasContainer" class="scene-container"></div>

    <!-- Hero Overlay -->
    <section class="hero-overlay">
      <div class="hero-panel">
        <p class="hero-version">@daniel-murnane/core v3.0</p>
        <h1 class="hero-name">Daniel Murnane</h1>
        <p class="hero-role">Postdoctoral Fellow &mdash; Niels Bohr Institute</p>
        <p class="hero-role-secondary">ML Co-convener &mdash; ATLAS, CERN</p>
        <p class="hero-hint">Click anywhere to create a collision event</p>
        <div class="hero-actions">
          <a href="/guide/introduction" class="btn btn-primary">Documentation</a>
          <a href="/api/core" class="btn btn-outline">API Reference</a>
        </div>
      </div>
      <div class="scroll-indicator">
        <div class="scroll-chevron"></div>
      </div>
    </section>

    <!-- Content Below the Fold -->
    <section class="content-section detector-systems">
      <div class="section-inner">
        <h2 class="section-label">Detector Systems</h2>
        <p class="section-desc">Research areas mapped to detector subsystems</p>
        <div class="systems-grid">
          <div class="system-card">
            <div class="system-icon" style="--accent: #4a9eff;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v4M12 19v4M1 12h4M19 12h4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
              </svg>
            </div>
            <h3>Machine Learning</h3>
            <p>Deep learning architectures for particle physics reconstruction. Graph neural networks, transformers, and scalable inference pipelines for HL-LHC.</p>
          </div>
          <div class="system-card">
            <div class="system-icon" style="--accent: #f5a623;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <h3>Particle Physics</h3>
            <p>ATLAS experiment at CERN. Standard Model measurements, BSM searches, and detector operations with the Large Hadron Collider.</p>
          </div>
          <div class="system-card">
            <div class="system-icon" style="--accent: #4ade80;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="5" cy="6" r="2" /><circle cx="19" cy="6" r="2" /><circle cx="12" cy="18" r="2" />
                <path d="M5 8v2a7 7 0 0 0 7 8m7-10v2a7 7 0 0 1-7 8" />
                <path d="M5 6h14" />
              </svg>
            </div>
            <h3>Graph Neural Networks</h3>
            <p>GNN-based pipelines for charged particle tracking (GNN4ITk), jet classification, and event reconstruction at production scale.</p>
          </div>
          <div class="system-card">
            <div class="system-icon" style="--accent: #a78bfa;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                <path d="M8 7h8M8 11h6" />
              </svg>
            </div>
            <h3>Physics Language Models</h3>
            <p>Foundation model paradigm for HEP. Exploring how large language model architectures can learn the language of particle physics data.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section reconstructed-events">
      <div class="section-inner">
        <h2 class="section-label">Reconstructed Events</h2>
        <p class="section-desc">Recent publications and key contributions</p>
        <div class="events-list">
          <a href="https://arxiv.org/abs/2309.16754" target="_blank" class="event-row">
            <span class="event-tag ml">ML</span>
            <span class="event-title">Charged Particle Tracking with Machine Learning on FPGAs</span>
            <span class="event-venue">JINST, 2024</span>
          </a>
          <a href="https://arxiv.org/abs/2304.01150" target="_blank" class="event-row">
            <span class="event-tag gnn">GNN</span>
            <span class="event-title">Graph Neural Network Track Reconstruction for the ATLAS ITk Detector</span>
            <span class="event-venue">ATL-ITK-PROC, 2023</span>
          </a>
          <a href="https://arxiv.org/abs/2203.12852" target="_blank" class="event-row">
            <span class="event-tag phy">PHY</span>
            <span class="event-title">Performance of the ATLAS Track Reconstruction Algorithms</span>
            <span class="event-venue">Eur. Phys. J. C, 2022</span>
          </a>
          <a href="https://arxiv.org/abs/2103.06995" target="_blank" class="event-row">
            <span class="event-tag trk">TRK</span>
            <span class="event-title">Exa.TrkX: Graph Neural Networks for Particle Track Reconstruction</span>
            <span class="event-venue">CHEP 2021</span>
          </a>
          <a href="https://arxiv.org/abs/2007.00149" target="_blank" class="event-row">
            <span class="event-tag ml">ML</span>
            <span class="event-title">Track Seeding and Labelling with Embedded-space Graph Neural Networks</span>
            <span class="event-venue">EPJ Web Conf., 2021</span>
          </a>
        </div>
      </div>
    </section>

    <section class="content-section luminosity-report">
      <div class="section-inner">
        <h2 class="section-label">Luminosity Report</h2>
        <p class="section-desc">Integrated luminosity of research output</p>
        <div class="lumi-grid">
          <div class="lumi-card">
            <div class="lumi-value">1,276+</div>
            <div class="lumi-label">Citations</div>
            <div class="lumi-sub">Total integrated luminosity</div>
          </div>
          <div class="lumi-card">
            <div class="lumi-value">42</div>
            <div class="lumi-label">Publications</div>
            <div class="lumi-sub">Reconstructed event count</div>
          </div>
          <div class="lumi-card">
            <div class="lumi-value">8</div>
            <div class="lumi-label">h-index</div>
            <div class="lumi-sub">Signal significance</div>
          </div>
          <div class="lumi-card">
            <div class="lumi-value">3</div>
            <div class="lumi-label">Runtime Environments</div>
            <div class="lumi-sub">Dublin / Berkeley / Copenhagen</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const canvasContainer = ref(null)

// Three.js state
let renderer = null
let scene = null
let camera = null
let animationId = null
let clock = null
let particleGroups = []
let detectorGroup = null
let nextCollisionTime = 0

// Particle trail colors
const PARTICLE_COLORS = [
  new THREE.Color(0x4a9eff), // blue
  new THREE.Color(0xf5a623), // gold
  new THREE.Color(0xf87171), // red
  new THREE.Color(0x4ade80), // green
  new THREE.Color(0xa78bfa), // purple
]

// ---- Create a single particle track (helix in B-field) ----
function createParticleTrack(origin) {
  const color = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)]
  const charge = Math.random() > 0.5 ? 1 : -1
  const pT = 0.3 + Math.random() * 1.8 // transverse momentum (controls helix radius)
  const pZ = (Math.random() - 0.5) * 2.0 // longitudinal momentum
  const phi = Math.random() * Math.PI * 2 // initial azimuthal angle

  // Helix parameters
  const radius = pT * 0.8 // helix radius
  const pitch = pZ * 0.3 // z advance per radian
  const direction = charge // clockwise or counterclockwise
  const totalAngle = 4 * Math.PI + Math.random() * 4 * Math.PI // how far the helix goes
  const segments = Math.floor(totalAngle * 12)

  // Build the helix path
  const points = []
  for (let i = 0; i <= segments; i++) {
    const t = (i / segments) * totalAngle
    const x = origin.x + radius * (Math.cos(phi + direction * t) - Math.cos(phi))
    const y = origin.y + radius * (Math.sin(phi + direction * t) - Math.sin(phi))
    const z = origin.z + pitch * t
    points.push(new THREE.Vector3(x, y, z))
  }

  // Create a glowing line
  const geometry = new THREE.BufferGeometry().setFromPoints(points)

  // Opacity gradient along the trail
  const alphas = new Float32Array(points.length)
  for (let i = 0; i < points.length; i++) {
    const progress = i / (points.length - 1)
    // Fade in quickly at start, fade out gradually at end
    alphas[i] = progress < 0.05 ? progress / 0.05 : 1.0 - Math.pow(progress, 2)
  }
  geometry.setAttribute('alpha', new THREE.BufferAttribute(alphas, 1))

  const material = new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: color },
      uOpacity: { value: 1.0 },
      uTime: { value: 0.0 },
      uDuration: { value: 1.0 },
    },
    vertexShader: `
      attribute float alpha;
      varying float vAlpha;
      void main() {
        vAlpha = alpha;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 uColor;
      uniform float uOpacity;
      varying float vAlpha;
      void main() {
        gl_FragColor = vec4(uColor, vAlpha * uOpacity);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  })

  const line = new THREE.Line(geometry, material)

  // Create a glowing "head" particle
  const headGeom = new THREE.SphereGeometry(0.04, 8, 8)
  const headMat = new THREE.MeshBasicMaterial({
    color: color,
    transparent: true,
    opacity: 0.9,
    blending: THREE.AdditiveBlending,
  })
  const head = new THREE.Mesh(headGeom, headMat)
  head.position.copy(points[0])

  return {
    line,
    head,
    points,
    currentIndex: 0,
    color,
    material,
    headMat,
    birthTime: clock.getElapsedTime(),
    animDuration: 1.5 + Math.random() * 1.5, // seconds to draw the trail
    fadeStart: null,
    fadeDuration: 3.0 + Math.random() * 2.0, // seconds to fade out after drawn
    alive: true,
  }
}

// ---- Create a collision event ----
function createCollisionEvent() {
  const origin = new THREE.Vector3(
    (Math.random() - 0.5) * 0.15,
    (Math.random() - 0.5) * 0.15,
    (Math.random() - 0.5) * 0.15
  )
  const numTracks = 8 + Math.floor(Math.random() * 10)
  const group = {
    tracks: [],
    flashMesh: null,
  }

  for (let i = 0; i < numTracks; i++) {
    const track = createParticleTrack(origin)
    scene.add(track.line)
    scene.add(track.head)
    group.tracks.push(track)
  }

  // Collision flash
  const flashGeom = new THREE.SphereGeometry(0.15, 16, 16)
  const flashMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
  })
  const flash = new THREE.Mesh(flashGeom, flashMat)
  flash.position.copy(origin)
  scene.add(flash)
  group.flashMesh = flash
  group.flashBirth = clock.getElapsedTime()

  particleGroups.push(group)
}

// ---- Build the detector wireframe ----
function buildDetector() {
  detectorGroup = new THREE.Group()

  // Inner barrel (pixel detector)
  const innerBarrel = new THREE.CylinderGeometry(1.2, 1.2, 4.0, 24, 1, true)
  const innerMat = new THREE.MeshBasicMaterial({
    color: 0x4a9eff,
    wireframe: true,
    transparent: true,
    opacity: 0.06,
  })
  const innerMesh = new THREE.Mesh(innerBarrel, innerMat)
  innerMesh.rotation.x = Math.PI / 2
  detectorGroup.add(innerMesh)

  // Outer barrel (strip detector)
  const outerBarrel = new THREE.CylinderGeometry(2.5, 2.5, 6.0, 32, 1, true)
  const outerMat = new THREE.MeshBasicMaterial({
    color: 0xf5a623,
    wireframe: true,
    transparent: true,
    opacity: 0.04,
  })
  const outerMesh = new THREE.Mesh(outerBarrel, outerMat)
  outerMesh.rotation.x = Math.PI / 2
  detectorGroup.add(outerMesh)

  // Calorimeter barrel
  const caloBarrel = new THREE.CylinderGeometry(4.0, 4.0, 8.0, 48, 1, true)
  const caloMat = new THREE.MeshBasicMaterial({
    color: 0x4ade80,
    wireframe: true,
    transparent: true,
    opacity: 0.025,
  })
  const caloMesh = new THREE.Mesh(caloBarrel, caloMat)
  caloMesh.rotation.x = Math.PI / 2
  detectorGroup.add(caloMesh)

  // End caps (subtle rings)
  for (const zSign of [-1, 1]) {
    const endCapGeom = new THREE.RingGeometry(0.3, 2.5, 32)
    const endCapMat = new THREE.MeshBasicMaterial({
      color: 0xa78bfa,
      transparent: true,
      opacity: 0.04,
      side: THREE.DoubleSide,
    })
    const endCap = new THREE.Mesh(endCapGeom, endCapMat)
    endCap.position.z = zSign * 3.0
    detectorGroup.add(endCap)
  }

  scene.add(detectorGroup)
}

// ---- Build background stars ----
function buildStarfield() {
  const count = 1500
  const positions = new Float32Array(count * 3)
  const sizes = new Float32Array(count)
  for (let i = 0; i < count; i++) {
    // Distribute on a large sphere
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    const r = 30 + Math.random() * 40
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    positions[i * 3 + 2] = r * Math.cos(phi)
    sizes[i] = 0.3 + Math.random() * 1.2
  }

  const starGeom = new THREE.BufferGeometry()
  starGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  starGeom.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

  const starMat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
    },
    vertexShader: `
      attribute float size;
      varying float vSize;
      void main() {
        vSize = size;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (200.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      uniform float uTime;
      varying float vSize;
      void main() {
        float d = length(gl_PointCoord - vec2(0.5));
        if (d > 0.5) discard;
        float alpha = smoothstep(0.5, 0.0, d) * 0.5;
        gl_FragColor = vec4(0.7, 0.8, 1.0, alpha);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  })

  const starPoints = new THREE.Points(starGeom, starMat)
  scene.add(starPoints)
  return starPoints
}

// ---- Animation update ----
function updateParticles() {
  const now = clock.getElapsedTime()

  for (let g = particleGroups.length - 1; g >= 0; g--) {
    const group = particleGroups[g]
    let allDead = true

    // Update flash
    if (group.flashMesh) {
      const flashAge = now - group.flashBirth
      if (flashAge < 0.5) {
        group.flashMesh.material.opacity = 0.8 * (1.0 - flashAge / 0.5)
        group.flashMesh.scale.setScalar(1.0 + flashAge * 6.0)
      } else {
        scene.remove(group.flashMesh)
        group.flashMesh.geometry.dispose()
        group.flashMesh.material.dispose()
        group.flashMesh = null
      }
    }

    for (let t = group.tracks.length - 1; t >= 0; t--) {
      const track = group.tracks[t]
      if (!track.alive) continue
      allDead = false

      const age = now - track.birthTime
      const drawProgress = Math.min(1.0, age / track.animDuration)

      // Progressive drawing: show points up to drawProgress
      const showCount = Math.floor(drawProgress * track.points.length)
      if (showCount > track.currentIndex) {
        track.currentIndex = showCount
        // Update the draw range
        track.line.geometry.setDrawRange(0, showCount)
        // Move head to current position
        if (showCount < track.points.length) {
          track.head.position.copy(track.points[showCount])
          track.head.visible = true
        }
      }

      // Start fading after fully drawn
      if (drawProgress >= 1.0 && track.fadeStart === null) {
        track.fadeStart = now
        track.head.visible = false
      }

      if (track.fadeStart !== null) {
        const fadeProgress = (now - track.fadeStart) / track.fadeDuration
        if (fadeProgress >= 1.0) {
          // Remove from scene
          scene.remove(track.line)
          scene.remove(track.head)
          track.line.geometry.dispose()
          track.line.material.dispose()
          track.head.geometry.dispose()
          track.head.material.dispose()
          track.alive = false
        } else {
          track.material.uniforms.uOpacity.value = 1.0 - fadeProgress
        }
      }
    }

    if (allDead && !group.flashMesh) {
      particleGroups.splice(g, 1)
    }
  }
}

// ---- Handle click for new collision ----
function handleClick() {
  createCollisionEvent()
}

// ---- Resize handler ----
function handleResize() {
  if (!renderer || !camera || !canvasContainer.value) return
  const w = canvasContainer.value.clientWidth
  const h = canvasContainer.value.clientHeight
  renderer.setSize(w, h)
  camera.aspect = w / h
  camera.updateProjectionMatrix()
}

// ---- Init ----
onMounted(() => {
  if (!canvasContainer.value) return

  const w = canvasContainer.value.clientWidth
  const h = canvasContainer.value.clientHeight

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
  renderer.setSize(w, h)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(0x050510, 1)
  canvasContainer.value.appendChild(renderer.domElement)

  // Scene
  scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2(0x050510, 0.025)

  // Camera
  camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 200)
  camera.position.set(5, 3, 5)
  camera.lookAt(0, 0, 0)

  // Clock
  clock = new THREE.Clock()

  // Build scene elements
  buildDetector()
  buildStarfield()

  // Initial collision
  createCollisionEvent()
  nextCollisionTime = clock.getElapsedTime() + 2.5 + Math.random() * 1.5

  // Animation loop
  function animate() {
    animationId = requestAnimationFrame(animate)
    const elapsed = clock.getElapsedTime()

    // Auto-collision events
    if (elapsed > nextCollisionTime) {
      createCollisionEvent()
      nextCollisionTime = elapsed + 2.0 + Math.random() * 2.0
    }

    // Update particles
    updateParticles()

    // Slow camera orbit
    const orbitRadius = 6.5
    const orbitSpeed = 0.08
    camera.position.x = orbitRadius * Math.cos(elapsed * orbitSpeed)
    camera.position.z = orbitRadius * Math.sin(elapsed * orbitSpeed)
    camera.position.y = 2.5 + Math.sin(elapsed * orbitSpeed * 0.5) * 1.0
    camera.lookAt(0, 0, 0)

    // Slowly rotate detector
    if (detectorGroup) {
      detectorGroup.rotation.z = elapsed * 0.02
    }

    renderer.render(scene, camera)
  }

  animate()

  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  if (animationId) cancelAnimationFrame(animationId)

  // Dispose all remaining particle groups
  for (const group of particleGroups) {
    for (const track of group.tracks) {
      if (track.alive) {
        scene.remove(track.line)
        scene.remove(track.head)
        track.line.geometry.dispose()
        track.line.material.dispose()
        track.head.geometry.dispose()
        track.head.material.dispose()
      }
    }
    if (group.flashMesh) {
      scene.remove(group.flashMesh)
      group.flashMesh.geometry.dispose()
      group.flashMesh.material.dispose()
    }
  }
  particleGroups = []

  if (renderer) {
    renderer.dispose()
    if (canvasContainer.value && renderer.domElement.parentNode === canvasContainer.value) {
      canvasContainer.value.removeChild(renderer.domElement)
    }
  }
})
</script>

<style scoped>
/* ============================
   Root Container
   ============================ */
.proposal-v6 {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #e0e6ed;
  background: #050510;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
}

/* ============================
   Three.js Scene
   ============================ */
.scene-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
}

.scene-container canvas {
  display: block;
  width: 100% !important;
  height: 100% !important;
}

/* ============================
   Hero Overlay
   ============================ */
.hero-overlay {
  position: relative;
  z-index: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.hero-panel {
  text-align: center;
  padding: 40px 48px;
  background: rgba(5, 5, 16, 0.55);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  pointer-events: auto;
  max-width: 560px;
  width: 90%;
}

.hero-version {
  font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;
  font-size: 0.82rem;
  color: #4a9eff;
  letter-spacing: 0.06em;
  margin: 0 0 12px 0;
  opacity: 0.9;
}

.hero-name {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 10px 0;
  background: linear-gradient(135deg, #ffffff 0%, #a0c4ff 50%, #4a9eff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
}

.hero-role {
  font-size: 1.05rem;
  color: #c0c8d8;
  margin: 0 0 4px 0;
  font-weight: 400;
}

.hero-role-secondary {
  font-size: 0.92rem;
  color: #7a8699;
  margin: 0 0 20px 0;
  font-weight: 400;
}

.hero-hint {
  font-size: 0.75rem;
  color: #4e5a6b;
  margin: 0 0 24px 0;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  letter-spacing: 0.04em;
}

.hero-actions {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 11px 26px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: linear-gradient(135deg, #4a9eff, #2563eb);
  color: #ffffff;
  box-shadow: 0 0 20px rgba(74, 158, 255, 0.2);
}

.btn-primary:hover {
  box-shadow: 0 0 30px rgba(74, 158, 255, 0.4);
  transform: translateY(-1px);
}

.btn-outline {
  background: rgba(255, 255, 255, 0.05);
  color: #a0b4cc;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #e0e6ed;
  transform: translateY(-1px);
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 36px;
  pointer-events: none;
  animation: float 2.5s ease-in-out infinite;
}

.scroll-chevron {
  width: 22px;
  height: 22px;
  border-right: 2px solid rgba(255, 255, 255, 0.2);
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  transform: rotate(45deg);
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
}

/* ============================
   Content Sections
   ============================ */
.content-section {
  position: relative;
  z-index: 1;
  padding: 80px 24px;
  background: #050510;
  border-top: 1px solid rgba(255, 255, 255, 0.04);
}

.section-inner {
  max-width: 1000px;
  margin: 0 auto;
}

.section-label {
  font-size: clamp(1.5rem, 3vw, 2.1rem);
  font-weight: 700;
  margin: 0 0 6px 0;
  color: #e8ecf1;
}

.section-desc {
  font-size: 0.95rem;
  color: #5a6577;
  margin: 0 0 40px 0;
}

/* ============================
   Detector Systems Grid
   ============================ */
.systems-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.system-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 28px 24px;
  transition: border-color 0.3s ease, background 0.3s ease;
}

.system-card:hover {
  border-color: rgba(74, 158, 255, 0.2);
  background: rgba(255, 255, 255, 0.035);
}

.system-icon {
  width: 40px;
  height: 40px;
  margin-bottom: 14px;
  color: var(--accent, #4a9eff);
}

.system-icon svg {
  width: 100%;
  height: 100%;
}

.system-card h3 {
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #d0d8e4;
}

.system-card p {
  font-size: 0.87rem;
  color: #6b7a8d;
  line-height: 1.55;
  margin: 0;
}

/* ============================
   Reconstructed Events
   ============================ */
.events-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.event-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 18px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s ease;
}

.event-row:hover {
  background: rgba(255, 255, 255, 0.045);
}

.event-tag {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.68rem;
  font-weight: 700;
  padding: 3px 9px;
  border-radius: 4px;
  letter-spacing: 0.08em;
  flex-shrink: 0;
  text-transform: uppercase;
}

.event-tag.ml {
  background: rgba(74, 158, 255, 0.12);
  color: #4a9eff;
}

.event-tag.gnn {
  background: rgba(74, 222, 128, 0.12);
  color: #4ade80;
}

.event-tag.phy {
  background: rgba(245, 166, 35, 0.12);
  color: #f5a623;
}

.event-tag.trk {
  background: rgba(248, 113, 113, 0.12);
  color: #f87171;
}

.event-title {
  flex: 1;
  font-size: 0.9rem;
  color: #c8d0dc;
  line-height: 1.35;
}

.event-row:hover .event-title {
  color: #e8ecf1;
}

.event-venue {
  font-size: 0.78rem;
  color: #4e5a6b;
  flex-shrink: 0;
  white-space: nowrap;
}

/* ============================
   Luminosity Report
   ============================ */
.lumi-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.lumi-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 28px 20px;
  text-align: center;
  transition: border-color 0.25s ease;
}

.lumi-card:hover {
  border-color: rgba(74, 158, 255, 0.2);
}

.lumi-value {
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 800;
  background: linear-gradient(135deg, #4a9eff, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 4px;
}

.lumi-label {
  font-size: 0.95rem;
  font-weight: 600;
  color: #c0c8d4;
  margin-bottom: 4px;
}

.lumi-sub {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.68rem;
  color: #4e5a6b;
  letter-spacing: 0.04em;
}

/* ============================
   Responsive
   ============================ */
@media (max-width: 768px) {
  .systems-grid {
    grid-template-columns: 1fr;
  }

  .lumi-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .event-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .event-venue {
    align-self: flex-end;
  }

  .hero-panel {
    padding: 28px 24px;
  }

  .content-section {
    padding: 60px 20px;
  }
}

@media (max-width: 480px) {
  .lumi-grid {
    grid-template-columns: 1fr;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
}

/* ============================
   VitePress overrides
   ============================ */
.proposal-v6 :deep(.VPDoc),
.proposal-v6 :deep(.vp-doc) {
  padding: 0 !important;
  max-width: none !important;
}
</style>
