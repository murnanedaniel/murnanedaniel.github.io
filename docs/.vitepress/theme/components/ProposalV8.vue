<template>
  <div class="su-page" ref="pageRef">
    <!-- Sticky Nav -->
    <nav class="su-nav" :class="{ 'su-nav-scrolled': scrolled }">
      <div class="su-nav-inner">
        <div class="su-nav-logo">daniel<span>.ai</span></div>
        <div class="su-nav-links">
          <a href="#features">Product</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
          <a href="#testimonials">Blog</a>
          <button class="su-btn su-btn-cta-nav">Book a Demo</button>
        </div>
        <button class="su-mobile-menu" @click="mobileOpen = !mobileOpen">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div class="su-mobile-dropdown" v-if="mobileOpen">
        <a href="#features" @click="mobileOpen = false">Product</a>
        <a href="#pricing" @click="mobileOpen = false">Pricing</a>
        <a href="#about" @click="mobileOpen = false">About</a>
        <a href="#testimonials" @click="mobileOpen = false">Blog</a>
        <button class="su-btn su-btn-cta-nav" @click="mobileOpen = false">Book a Demo</button>
      </div>
    </nav>

    <!-- Hero -->
    <section class="su-hero">
      <div class="su-hero-bg"></div>
      <div class="su-hero-content">
        <div class="su-hero-badge">NEW: v2024.3 just shipped &mdash; NeurIPS ML4PS accepted</div>
        <h1 class="su-hero-title">The Future of Research<br>is <span class="su-hero-gradient-text">Human</span></h1>
        <p class="su-hero-subtitle">Daniel Murnane is the world's leading human integration platform for high energy physics and machine learning research.</p>
        <div class="su-hero-ctas">
          <button class="su-btn su-btn-primary">Start Free Trial</button>
          <button class="su-btn su-btn-secondary">Watch Demo <span class="su-play">&#9654;</span></button>
        </div>
        <div class="su-hero-social-proof">
          <p>Trusted by 3,000+ scientists at</p>
          <div class="su-logo-row">
            <span class="su-partner-logo">CERN</span>
            <span class="su-partner-logo">Berkeley Lab</span>
            <span class="su-partner-logo">NBI Copenhagen</span>
            <span class="su-partner-logo">ATLAS</span>
          </div>
        </div>
      </div>
      <div class="su-hero-glow"></div>
    </section>

    <!-- Metrics -->
    <section class="su-metrics" id="about">
      <div class="su-metrics-inner">
        <div class="su-metric" v-for="m in metrics" :key="m.label">
          <div class="su-metric-value" ref="metricRefs">
            <span class="su-counter" :data-target="m.value">{{ m.displayed }}</span>{{ m.suffix }}
          </div>
          <div class="su-metric-label">{{ m.label }}</div>
          <div class="su-metric-sublabel">{{ m.sublabel }}</div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="su-features" id="features">
      <div class="su-features-header">
        <span class="su-overline">CAPABILITIES</span>
        <h2 class="su-section-title">Everything you need to accelerate discovery</h2>
        <p class="su-section-subtitle">A fully integrated research platform, built for the demands of modern high energy physics.</p>
      </div>

      <div class="su-feature-row">
        <div class="su-feature-text">
          <span class="su-feature-badge">CORE ENGINE</span>
          <h3>Graph Neural Network Processing Engine</h3>
          <p>Purpose-built GNN architecture that transforms raw detector hits into reconstructed particle tracks with unprecedented accuracy. Processes over 100,000 space points per event in milliseconds.</p>
          <ul>
            <li>Edge classification with 99.1% efficiency</li>
            <li>Scales linearly with detector occupancy</li>
            <li>GPU-accelerated inference pipeline</li>
          </ul>
        </div>
        <div class="su-feature-visual">
          <div class="su-code-window">
            <div class="su-code-header">
              <span class="su-dot su-dot-red"></span>
              <span class="su-dot su-dot-yellow"></span>
              <span class="su-dot su-dot-green"></span>
              <span class="su-code-title">gnn_pipeline.py</span>
            </div>
            <pre class="su-code-body"><code><span class="su-kw">from</span> daniel_murnane <span class="su-kw">import</span> GNNPipeline

pipeline = GNNPipeline(
    <span class="su-str">detector</span>=<span class="su-val">"ATLAS_ITk"</span>,
    <span class="su-str">model</span>=<span class="su-val">"interaction_network"</span>,
    <span class="su-str">precision</span>=<span class="su-val">"float16"</span>
)

tracks = pipeline.reconstruct(event)
<span class="su-cm"># 99.1% efficiency, 42ms inference</span></code></pre>
          </div>
        </div>
      </div>

      <div class="su-feature-row su-feature-row-reverse">
        <div class="su-feature-text">
          <span class="su-feature-badge su-feature-badge-green">3x FASTER</span>
          <h3>Real-Time Particle Tracking</h3>
          <p>Third-generation tracking algorithm delivers 3x speedup over previous implementations while maintaining physics performance. Production-ready for HL-LHC data rates.</p>
          <ul>
            <li>Handles 200 simultaneous proton-proton collisions</li>
            <li>Integrated with ATLAS Athena framework</li>
            <li>Validated on full Monte Carlo simulation</li>
          </ul>
        </div>
        <div class="su-feature-visual">
          <div class="su-perf-card">
            <div class="su-perf-header">Performance Benchmark</div>
            <div class="su-perf-bars">
              <div class="su-perf-bar-row">
                <span class="su-perf-bar-label">Previous (v2022)</span>
                <div class="su-perf-bar-track">
                  <div class="su-perf-bar-fill su-perf-bar-old" style="width: 33%;"></div>
                </div>
                <span class="su-perf-bar-value">126ms</span>
              </div>
              <div class="su-perf-bar-row">
                <span class="su-perf-bar-label">daniel.ai (v2024)</span>
                <div class="su-perf-bar-track">
                  <div class="su-perf-bar-fill su-perf-bar-new" style="width: 100%;"></div>
                </div>
                <span class="su-perf-bar-value su-perf-bar-value-highlight">42ms</span>
              </div>
            </div>
            <div class="su-perf-footer">Measured on NVIDIA A100 | Batch size 128</div>
          </div>
        </div>
      </div>

      <div class="su-feature-row">
        <div class="su-feature-text">
          <span class="su-feature-badge su-feature-badge-purple">ENTERPRISE</span>
          <h3>Enterprise Collaboration Management</h3>
          <p>Battle-tested in the world's largest physics experiment. Seamlessly coordinates with 3,000+ ATLAS scientists across 42 countries. Built-in conflict resolution and merge strategies for competing physics analyses.</p>
          <ul>
            <li>Manages cross-timezone research workflows</li>
            <li>Automated paper review and approval pipeline</li>
            <li>Role-based access: convener, analyzer, reviewer</li>
          </ul>
        </div>
        <div class="su-feature-visual">
          <div class="su-collab-card">
            <div class="su-collab-header">
              <span class="su-collab-status"></span>
              ATLAS Collaboration &mdash; Active
            </div>
            <div class="su-collab-stats">
              <div><strong>3,000+</strong><br><small>Scientists</small></div>
              <div><strong>42</strong><br><small>Countries</small></div>
              <div><strong>182</strong><br><small>Institutions</small></div>
              <div><strong>24/7</strong><br><small>Uptime</small></div>
            </div>
            <div class="su-collab-activity">
              <div class="su-activity-dot"></div>
              <span>12 analyses in review</span>
            </div>
            <div class="su-collab-activity">
              <div class="su-activity-dot su-activity-dot-green"></div>
              <span>3 papers approved this week</span>
            </div>
            <div class="su-collab-activity">
              <div class="su-activity-dot su-activity-dot-blue"></div>
              <span>New ML sub-group meeting tomorrow</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="su-testimonials" id="testimonials">
      <div class="su-testimonials-inner">
        <span class="su-overline">TESTIMONIALS</span>
        <h2 class="su-section-title">Loved by researchers worldwide</h2>
        <div class="su-testimonial-grid">
          <div class="su-testimonial-card" v-for="t in testimonials" :key="t.name">
            <div class="su-testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p class="su-testimonial-quote">"{{ t.quote }}"</p>
            <div class="su-testimonial-author">
              <div class="su-testimonial-avatar" :style="{ background: t.color }">{{ t.initials }}</div>
              <div>
                <div class="su-testimonial-name">{{ t.name }}</div>
                <div class="su-testimonial-role">{{ t.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section class="su-pricing" id="pricing">
      <div class="su-pricing-inner">
        <span class="su-overline">PRICING</span>
        <h2 class="su-section-title">Simple, transparent pricing</h2>
        <p class="su-section-subtitle">No hidden fees. No vendor lock-in. Open source at heart.</p>
        <div class="su-pricing-grid">
          <!-- Lite -->
          <div class="su-pricing-card">
            <div class="su-pricing-tier">Daniel Lite</div>
            <div class="su-pricing-price">
              <span class="su-pricing-amount">Free</span>
            </div>
            <p class="su-pricing-desc">For casual research encounters</p>
            <ul class="su-pricing-features">
              <li>Email support (48h response)</li>
              <li>Read-only API access</li>
              <li>Conference hallway chats</li>
              <li>Access to public repositories</li>
              <li>Community Slack channel</li>
            </ul>
            <button class="su-btn su-btn-outline">Get Started</button>
          </div>
          <!-- Pro -->
          <div class="su-pricing-card su-pricing-card-featured">
            <div class="su-pricing-popular">Most Popular</div>
            <div class="su-pricing-tier">Daniel Pro</div>
            <div class="su-pricing-price">
              <span class="su-pricing-amount">$0</span>
              <span class="su-pricing-period">/mo</span>
            </div>
            <p class="su-pricing-tagline">Open Source!</p>
            <p class="su-pricing-desc">Full research collaboration experience</p>
            <ul class="su-pricing-features">
              <li>Full API access</li>
              <li>Code review &amp; pair programming</li>
              <li>Research collaboration</li>
              <li>Priority scheduling</li>
              <li>Conference presentation support</li>
              <li>Paper co-authorship</li>
              <li>Whiteboard sessions included</li>
            </ul>
            <button class="su-btn su-btn-primary-pricing">Start Free Trial</button>
          </div>
          <!-- Enterprise -->
          <div class="su-pricing-card">
            <div class="su-pricing-tier">Daniel Enterprise</div>
            <div class="su-pricing-price">
              <span class="su-pricing-amount-small">Contact Sales</span>
            </div>
            <p class="su-pricing-desc">For large-scale physics collaborations</p>
            <ul class="su-pricing-features">
              <li>Dedicated instance</li>
              <li>Custom ML pipelines</li>
              <li>On-site deployment</li>
              <li>24/7 availability*</li>
              <li>SLA guarantees</li>
              <li>Custom integration support</li>
              <li>Executive research briefings</li>
            </ul>
            <button class="su-btn su-btn-outline">Contact Sales</button>
            <p class="su-pricing-asterisk">*availability subject to caffeine levels and timezone</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="su-cta">
      <div class="su-cta-inner">
        <h2>Ready to integrate?</h2>
        <p>Get started in seconds with a single command.</p>
        <div class="su-cta-code">
          <span class="su-cta-prompt">$</span>
          <span class="su-cta-cmd">npm install @daniel-murnane/core</span>
          <button class="su-cta-copy" @click="copyInstall">{{ copied ? 'Copied!' : 'Copy' }}</button>
        </div>
        <button class="su-btn su-btn-primary su-btn-large">Get Started for Free</button>
        <p class="su-cta-subtext">Free forever. No credit card required. Probably.</p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="su-footer">
      <div class="su-footer-inner">
        <div class="su-footer-grid">
          <div class="su-footer-col su-footer-brand">
            <div class="su-footer-logo">daniel<span>.ai</span></div>
            <p>The world's leading human integration platform for physics research.</p>
            <div class="su-footer-social">
              <a href="#" title="GitHub">GH</a>
              <a href="#" title="ORCID">ORCID</a>
              <a href="#" title="LinkedIn">LI</a>
            </div>
          </div>
          <div class="su-footer-col">
            <h4>Product</h4>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Changelog</a>
            <a href="#">Roadmap</a>
          </div>
          <div class="su-footer-col">
            <h4>Research</h4>
            <a href="#">Publications</a>
            <a href="#">ATLAS</a>
            <a href="#">GNN4ITk</a>
            <a href="#">Exa.TrkX</a>
          </div>
          <div class="su-footer-col">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>
          <div class="su-footer-col">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
            <a href="#">GDPR</a>
          </div>
        </div>
        <div class="su-footer-bottom">
          <p>&copy; 2024 Daniel Murnane. All rights reserved. Built with caffeine and gradient descent.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileOpen = ref(false)
const copied = ref(false)
const pageRef = ref(null)

const metrics = reactive([
  { value: 1276, displayed: '0', suffix: '+', label: 'Citations', sublabel: 'and counting' },
  { value: 42, displayed: '0', suffix: '', label: 'Publications Shipped', sublabel: 'peer-reviewed releases' },
  { value: 99.9, displayed: '0', suffix: '%', label: 'Uptime', sublabel: 'excluding scheduled maintenance (since 1990)' },
  { value: 8, displayed: '0', suffix: '', label: 'h-index Score', sublabel: 'Scopus verified' }
])

const testimonials = ref([
  {
    quote: "Daniel's API is incredibly well-documented. 10/10 would collaborate again.",
    name: 'Anonymous Collaborator',
    role: 'CERN',
    initials: 'AC',
    color: 'linear-gradient(135deg, #667eea, #764ba2)'
  },
  {
    quote: "We've seen a 340% increase in citations since integrating daniel-murnane/core into our analysis pipeline.",
    name: 'Research Group Lead',
    role: 'Berkeley Lab',
    initials: 'RL',
    color: 'linear-gradient(135deg, #f093fb, #f5576c)'
  },
  {
    quote: "The coffee-level configuration parameter alone was worth the upgrade. Game-changing latency improvements above 3 cups.",
    name: 'Early Adopter',
    role: 'Copenhagen, Denmark',
    initials: 'EA',
    color: 'linear-gradient(135deg, #4facfe, #00f2fe)'
  }
])

let scrollHandler = null
let observer = null
let metricsAnimated = false

function handleScroll() {
  scrolled.value = window.scrollY > 10
}

function animateCounters() {
  if (metricsAnimated) return
  metricsAnimated = true

  metrics.forEach((metric) => {
    const duration = 2000
    const startTime = performance.now()
    const isFloat = !Number.isInteger(metric.value)

    function tick(now) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = metric.value * eased

      if (isFloat) {
        metric.displayed = current.toFixed(1)
      } else {
        metric.displayed = Math.floor(current).toLocaleString()
      }

      if (progress < 1) {
        requestAnimationFrame(tick)
      } else {
        if (isFloat) {
          metric.displayed = metric.value.toFixed(1)
        } else {
          metric.displayed = metric.value.toLocaleString()
        }
      }
    }

    requestAnimationFrame(tick)
  })
}

function copyInstall() {
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    navigator.clipboard.writeText('npm install @daniel-murnane/core')
  }
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}

onMounted(() => {
  scrollHandler = handleScroll
  window.addEventListener('scroll', scrollHandler, { passive: true })

  // Intersection Observer for counter animation
  const metricsSection = pageRef.value?.querySelector('.su-metrics')
  if (metricsSection && typeof IntersectionObserver !== 'undefined') {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters()
        }
      })
    }, { threshold: 0.3 })
    observer.observe(metricsSection)
  }

  // Fade-in observer for features, testimonials, pricing
  if (typeof IntersectionObserver !== 'undefined') {
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('su-visible')
        }
      })
    }, { threshold: 0.1 })

    pageRef.value?.querySelectorAll('.su-feature-row, .su-testimonial-card, .su-pricing-card').forEach((el) => {
      fadeObserver.observe(el)
    })
  }
})

onUnmounted(() => {
  if (scrollHandler) {
    window.removeEventListener('scroll', scrollHandler)
  }
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
/* Reset VitePress */
.su-page {
  font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', system-ui, sans-serif;
  color: #1a1a2e;
  background: #ffffff;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-top: -24px;
  overflow-x: hidden;
}

.su-page *,
.su-page *::before,
.su-page *::after {
  box-sizing: border-box;
}

.su-page a {
  text-decoration: none;
  color: inherit;
}

.su-page ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.su-page h1, .su-page h2, .su-page h3, .su-page h4 {
  margin: 0;
  line-height: 1.2;
}

.su-page p {
  margin: 0;
}

/* Nav */
.su-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
}

.su-nav-scrolled {
  border-bottom-color: rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.04);
}

.su-nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.su-nav-logo {
  font-size: 22px;
  font-weight: 800;
  color: #1a1a2e;
  letter-spacing: -0.5px;
}

.su-nav-logo span {
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.su-nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.su-nav-links a {
  font-size: 15px;
  font-weight: 500;
  color: #555;
  transition: color 0.2s;
}

.su-nav-links a:hover {
  color: #1a1a2e;
}

.su-mobile-menu {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.su-mobile-menu span {
  display: block;
  width: 24px;
  height: 2px;
  background: #1a1a2e;
  border-radius: 2px;
}

.su-mobile-dropdown {
  display: none;
  flex-direction: column;
  padding: 16px 32px 24px;
  gap: 16px;
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.su-mobile-dropdown a {
  font-size: 16px;
  font-weight: 500;
  color: #555;
}

/* Buttons */
.su-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
}

.su-btn-cta-nav {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 8px 20px;
  font-size: 14px;
  border-radius: 6px;
}

.su-btn-cta-nav:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.su-btn-primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 14px 32px;
  font-size: 16px;
  border-radius: 10px;
}

.su-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
}

.su-btn-secondary {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  padding: 14px 32px;
  font-size: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  backdrop-filter: blur(4px);
}

.su-btn-secondary:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

.su-btn-outline {
  background: transparent;
  color: #667eea;
  padding: 12px 28px;
  font-size: 15px;
  border: 2px solid #667eea;
  border-radius: 8px;
  width: 100%;
}

.su-btn-outline:hover {
  background: #667eea;
  color: white;
}

.su-btn-primary-pricing {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 12px 28px;
  font-size: 15px;
  border-radius: 8px;
  width: 100%;
}

.su-btn-primary-pricing:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.su-btn-large {
  padding: 16px 40px;
  font-size: 18px;
}

.su-play {
  font-size: 12px;
}

/* Hero */
.su-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 120px 32px 80px;
}

.su-hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
  z-index: 0;
}

.su-hero-bg::before {
  content: '';
  position: absolute;
  top: 20%;
  left: 10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  animation: su-float 8s ease-in-out infinite;
}

.su-hero-bg::after {
  content: '';
  position: absolute;
  bottom: 10%;
  right: 10%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(118, 75, 162, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  animation: su-float 8s ease-in-out infinite 4s;
}

@keyframes su-float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(30px, -30px) scale(1.05); }
}

.su-hero-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 60%);
  pointer-events: none;
  z-index: 0;
}

.su-hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
}

.su-hero-badge {
  display: inline-block;
  padding: 6px 16px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 32px;
  backdrop-filter: blur(4px);
}

.su-hero-title {
  font-size: 72px;
  font-weight: 800;
  color: white;
  letter-spacing: -2px;
  margin-bottom: 24px;
  line-height: 1.05;
}

.su-hero-gradient-text {
  background: linear-gradient(135deg, #667eea, #f093fb, #f5576c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.su-hero-subtitle {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.75);
  max-width: 600px;
  margin: 0 auto 40px;
  line-height: 1.6;
}

.su-hero-ctas {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 60px;
  flex-wrap: wrap;
}

.su-hero-social-proof {
  padding-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.su-hero-social-proof p {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 600;
  margin-bottom: 20px;
}

.su-logo-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.su-partner-logo {
  font-size: 18px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.3);
  letter-spacing: 2px;
  text-transform: uppercase;
}

/* Metrics */
.su-metrics {
  padding: 80px 32px;
  background: #fafbfc;
}

.su-metrics-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

.su-metric {
  text-align: center;
}

.su-metric-value {
  font-size: 56px;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -1px;
}

.su-metric-label {
  font-size: 16px;
  font-weight: 700;
  color: #1a1a2e;
  margin-top: 4px;
}

.su-metric-sublabel {
  font-size: 13px;
  color: #888;
  margin-top: 2px;
}

/* Section utils */
.su-overline {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  color: #667eea;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 12px;
}

.su-section-title {
  font-size: 40px;
  font-weight: 800;
  color: #1a1a2e;
  letter-spacing: -1px;
  margin-bottom: 16px;
}

.su-section-subtitle {
  font-size: 18px;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

/* Features */
.su-features {
  padding: 100px 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.su-features-header {
  text-align: center;
  margin-bottom: 80px;
}

.su-feature-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 80px;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.su-feature-row.su-visible {
  opacity: 1;
  transform: translateY(0);
}

.su-feature-row-reverse {
  direction: rtl;
}

.su-feature-row-reverse > * {
  direction: ltr;
}

.su-feature-badge {
  display: inline-block;
  padding: 4px 12px;
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
}

.su-feature-badge-green {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

.su-feature-badge-purple {
  background: rgba(118, 75, 162, 0.1);
  color: #764ba2;
}

.su-feature-text h3 {
  font-size: 28px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 16px;
}

.su-feature-text p {
  font-size: 16px;
  color: #555;
  line-height: 1.7;
  margin-bottom: 20px;
}

.su-feature-text ul {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.su-feature-text li {
  font-size: 15px;
  color: #444;
  padding-left: 24px;
  position: relative;
}

.su-feature-text li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 7px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  opacity: 0.2;
}

.su-feature-text li::after {
  content: '\2713';
  position: absolute;
  left: 3px;
  top: 0;
  font-size: 12px;
  font-weight: 700;
  color: #667eea;
}

/* Code Window */
.su-code-window {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
  border: 1px solid #e2e8f0;
}

.su-code-header {
  background: #1e1e1e;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.su-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.su-dot-red { background: #ff5f57; }
.su-dot-yellow { background: #febc2e; }
.su-dot-green { background: #28c840; }

.su-code-title {
  color: #888;
  font-size: 12px;
  margin-left: 8px;
}

.su-code-body {
  background: #1e1e1e;
  padding: 20px;
  margin: 0;
  overflow-x: auto;
}

.su-code-body code {
  font-family: 'SF Mono', 'Fira Code', 'Fira Mono', Menlo, Consolas, monospace;
  font-size: 14px;
  line-height: 1.7;
  color: #d4d4d4;
}

.su-kw { color: #c586c0; }
.su-str { color: #9cdcfe; }
.su-val { color: #ce9178; }
.su-cm { color: #6a9955; }

/* Performance Card */
.su-perf-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
}

.su-perf-header {
  padding: 16px 20px;
  font-weight: 700;
  font-size: 15px;
  color: #1a1a2e;
  border-bottom: 1px solid #f0f0f0;
}

.su-perf-bars {
  padding: 24px 20px;
}

.su-perf-bar-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.su-perf-bar-row:last-child {
  margin-bottom: 0;
}

.su-perf-bar-label {
  font-size: 13px;
  color: #666;
  min-width: 130px;
}

.su-perf-bar-track {
  flex: 1;
  height: 24px;
  background: #f5f5f5;
  border-radius: 6px;
  overflow: hidden;
}

.su-perf-bar-fill {
  height: 100%;
  border-radius: 6px;
  transition: width 1s ease;
}

.su-perf-bar-old {
  background: #d1d5db;
}

.su-perf-bar-new {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.su-perf-bar-value {
  font-size: 14px;
  font-weight: 700;
  min-width: 50px;
  text-align: right;
  color: #666;
}

.su-perf-bar-value-highlight {
  color: #667eea;
}

.su-perf-footer {
  padding: 12px 20px;
  border-top: 1px solid #f0f0f0;
  font-size: 12px;
  color: #999;
}

/* Collaboration Card */
.su-collab-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  padding: 24px;
}

.su-collab-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 15px;
  color: #1a1a2e;
  margin-bottom: 20px;
}

.su-collab-status {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #10b981;
  display: inline-block;
  animation: su-pulse 2s ease-in-out infinite;
}

@keyframes su-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.su-collab-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  text-align: center;
  padding: 16px 0;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 16px;
}

.su-collab-stats strong {
  font-size: 24px;
  color: #1a1a2e;
}

.su-collab-stats small {
  font-size: 12px;
  color: #888;
}

.su-collab-activity {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  font-size: 14px;
  color: #555;
}

.su-activity-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #f59e0b;
  flex-shrink: 0;
}

.su-activity-dot-green {
  background: #10b981;
}

.su-activity-dot-blue {
  background: #667eea;
}

/* Testimonials */
.su-testimonials {
  padding: 100px 32px;
  background: #fafbfc;
}

.su-testimonials-inner {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.su-testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 48px;
}

.su-testimonial-card {
  background: white;
  border-radius: 12px;
  padding: 32px;
  text-align: left;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  border: 1px solid #f0f0f0;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.su-testimonial-card.su-visible {
  opacity: 1;
  transform: translateY(0);
}

.su-testimonial-stars {
  color: #f59e0b;
  font-size: 18px;
  margin-bottom: 16px;
  letter-spacing: 2px;
}

.su-testimonial-quote {
  font-size: 15px;
  color: #444;
  line-height: 1.7;
  margin-bottom: 24px;
  font-style: italic;
}

.su-testimonial-author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.su-testimonial-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  font-weight: 700;
  flex-shrink: 0;
}

.su-testimonial-name {
  font-weight: 600;
  font-size: 14px;
  color: #1a1a2e;
}

.su-testimonial-role {
  font-size: 13px;
  color: #888;
}

/* Pricing */
.su-pricing {
  padding: 100px 32px;
}

.su-pricing-inner {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}

.su-pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 48px;
  align-items: start;
}

.su-pricing-card {
  background: white;
  border-radius: 16px;
  padding: 40px 32px;
  text-align: center;
  border: 1px solid #e5e7eb;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.su-pricing-card.su-visible {
  opacity: 1;
  transform: translateY(0);
}

.su-pricing-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
}

.su-pricing-card.su-visible:hover {
  transform: translateY(-4px);
}

.su-pricing-card-featured {
  border: 2px solid #667eea;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.15);
}

.su-pricing-card-featured.su-visible:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 48px rgba(102, 126, 234, 0.2);
}

.su-pricing-popular {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 4px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.su-pricing-tier {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 16px;
}

.su-pricing-price {
  margin-bottom: 8px;
}

.su-pricing-amount {
  font-size: 48px;
  font-weight: 800;
  color: #1a1a2e;
  letter-spacing: -1px;
}

.su-pricing-amount-small {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a2e;
}

.su-pricing-period {
  font-size: 16px;
  color: #888;
  font-weight: 500;
}

.su-pricing-tagline {
  color: #667eea;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 4px;
}

.su-pricing-desc {
  color: #888;
  font-size: 14px;
  margin-bottom: 24px;
}

.su-pricing-features {
  text-align: left;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.su-pricing-features li {
  font-size: 14px;
  color: #555;
  padding-left: 28px;
  position: relative;
}

.su-pricing-features li::before {
  content: '\2713';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: 700;
  font-size: 14px;
}

.su-pricing-asterisk {
  font-size: 11px;
  color: #aaa;
  margin-top: 12px;
  font-style: italic;
}

/* CTA */
.su-cta {
  padding: 100px 32px;
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
  text-align: center;
}

.su-cta-inner {
  max-width: 700px;
  margin: 0 auto;
}

.su-cta h2 {
  font-size: 44px;
  font-weight: 800;
  color: white;
  margin-bottom: 16px;
  letter-spacing: -1px;
}

.su-cta p {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 32px;
}

.su-cta-code {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  padding: 12px 16px;
  margin-bottom: 32px;
  font-family: 'SF Mono', 'Fira Code', Menlo, Consolas, monospace;
}

.su-cta-prompt {
  color: #10b981;
  font-weight: 700;
}

.su-cta-cmd {
  color: rgba(255, 255, 255, 0.9);
  font-size: 15px;
}

.su-cta-copy {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.7);
  padding: 4px 10px;
  font-size: 12px;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s;
}

.su-cta-copy:hover {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.su-cta-subtext {
  font-size: 13px !important;
  color: rgba(255, 255, 255, 0.4) !important;
  margin-top: 16px !important;
}

/* Footer */
.su-footer {
  background: #0f0c29;
  padding: 64px 32px 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.su-footer-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.su-footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 48px;
}

.su-footer-logo {
  font-size: 20px;
  font-weight: 800;
  color: white;
  margin-bottom: 12px;
}

.su-footer-logo span {
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.su-footer-brand p {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
  line-height: 1.6;
  margin-bottom: 16px;
}

.su-footer-social {
  display: flex;
  gap: 12px;
}

.su-footer-social a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.5);
  font-size: 11px;
  font-weight: 700;
  transition: all 0.2s;
}

.su-footer-social a:hover {
  background: rgba(255, 255, 255, 0.15);
  color: white;
}

.su-footer-col h4 {
  font-size: 13px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
}

.su-footer-col a {
  display: block;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
  padding: 4px 0;
  transition: color 0.2s;
}

.su-footer-col a:hover {
  color: rgba(255, 255, 255, 0.8);
}

.su-footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 24px;
}

.su-footer-bottom p {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.3);
  text-align: center;
}

/* Responsive */
@media (max-width: 1024px) {
  .su-hero-title {
    font-size: 48px;
  }

  .su-feature-row,
  .su-feature-row-reverse {
    grid-template-columns: 1fr;
    gap: 32px;
    direction: ltr;
  }

  .su-testimonial-grid {
    grid-template-columns: 1fr;
  }

  .su-pricing-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  .su-footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  .su-metrics-inner {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  .su-metric-value {
    font-size: 44px;
  }
}

@media (max-width: 768px) {
  .su-nav-links {
    display: none;
  }

  .su-mobile-menu {
    display: flex;
  }

  .su-mobile-dropdown {
    display: flex;
  }

  .su-hero-title {
    font-size: 36px;
    letter-spacing: -1px;
  }

  .su-hero-subtitle {
    font-size: 16px;
  }

  .su-hero {
    padding: 100px 20px 60px;
  }

  .su-section-title {
    font-size: 28px;
  }

  .su-cta h2 {
    font-size: 30px;
  }

  .su-cta-code {
    flex-wrap: wrap;
    justify-content: center;
  }

  .su-logo-row {
    gap: 20px;
  }

  .su-partner-logo {
    font-size: 14px;
  }

  .su-footer-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .su-collab-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .su-hero-title {
    font-size: 28px;
  }

  .su-metrics-inner {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }

  .su-metric-value {
    font-size: 36px;
  }

  .su-hero-ctas {
    flex-direction: column;
    align-items: center;
  }
}
</style>
