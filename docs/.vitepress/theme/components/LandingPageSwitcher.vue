<template>
  <div class="landing-page-switcher">
    <!-- Current proposal -->
    <div class="proposal-container">
      <component :is="currentComponent" :key="currentIndex" />
    </div>

    <!-- Switcher banner -->
    <div class="switcher-banner" :class="{ collapsed: isCollapsed }">
      <button class="collapse-toggle" @click="isCollapsed = !isCollapsed" :title="isCollapsed ? 'Expand skin switcher' : 'Collapse'">
        <span class="toggle-icon">{{ isCollapsed ? '&#9650;' : '&#9660;' }}</span>
      </button>

      <div v-if="!isCollapsed" class="switcher-content">
        <div class="switcher-label">
          <span class="switcher-text">This site has multiple skins. You're viewing:</span>
          <strong class="current-name">{{ proposals[currentIndex].name }}</strong>
        </div>

        <div class="switcher-controls">
          <button class="nav-btn" @click="prev" title="Previous skin">
            <span>&#8592;</span>
          </button>

          <div class="proposal-dots">
            <button
              v-for="(proposal, i) in proposals"
              :key="proposal.id"
              class="dot"
              :class="{ active: i === currentIndex }"
              :title="proposal.name"
              @click="goTo(i)"
            />
          </div>

          <button class="nav-btn" @click="next" title="Next skin">
            <span>&#8594;</span>
          </button>
        </div>
      </div>

      <div v-else class="switcher-collapsed-hint">
        <span>{{ proposals[currentIndex].name }}</span>
        <span class="switcher-collapsed-nav">
          <button class="nav-btn-sm" @click.stop="prev">&#8592;</button>
          <span class="dot-count">{{ currentIndex + 1 }}/{{ proposals.length }}</span>
          <button class="nav-btn-sm" @click.stop="next">&#8594;</button>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, shallowRef, onMounted, defineAsyncComponent } from 'vue'

const proposals = [
  { id: 'v6', name: 'Physics Simulation', component: () => import('./ProposalV6.vue') },
  { id: 'v1', name: 'Particle Collision', component: () => import('./ProposalV1.vue') },
  { id: 'v10', name: 'CERN Control Room', component: () => import('./ProposalV10.vue') },
  { id: 'v3', name: 'Terminal Boot', component: () => import('./ProposalV3.vue') },
  { id: 'v4', name: 'npm Package', component: () => import('./ProposalV4.vue') },
  { id: 'v5', name: 'arXiv Preprint', component: () => import('./ProposalV5.vue') },
  { id: 'v7', name: 'GitHub Profile', component: () => import('./ProposalV7.vue') },
  { id: 'v9', name: 'VS Code IDE', component: () => import('./ProposalV9.vue') },
  { id: 'v2', name: 'Graph Network', component: () => import('./ProposalV2.vue') },
  { id: 'v8', name: 'Startup Parody', component: () => import('./ProposalV8.vue') },
]

const currentIndex = ref(0)
const isCollapsed = ref(false)

const loadedComponents = ref(new Map())

const currentComponent = computed(() => {
  const p = proposals[currentIndex.value]
  if (!loadedComponents.value.has(p.id)) {
    loadedComponents.value.set(p.id, defineAsyncComponent(p.component))
  }
  return loadedComponents.value.get(p.id)
})

function next() {
  currentIndex.value = (currentIndex.value + 1) % proposals.length
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + proposals.length) % proposals.length
}

function goTo(i) {
  currentIndex.value = i
}
</script>

<style scoped>
.landing-page-switcher {
  position: relative;
  min-height: 100vh;
}

.proposal-container {
  width: 100%;
}

.switcher-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(15, 15, 20, 0.92);
  backdrop-filter: blur(12px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #e0e0e0;
  transition: all 0.3s ease;
}

.switcher-banner.collapsed {
  background: rgba(15, 15, 20, 0.8);
}

.collapse-toggle {
  position: absolute;
  top: -28px;
  right: 20px;
  width: 56px;
  height: 28px;
  background: rgba(15, 15, 20, 0.92);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: none;
  border-radius: 8px 8px 0 0;
  color: #888;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  transition: color 0.2s;
}

.collapse-toggle:hover {
  color: #fff;
}

.switcher-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  gap: 16px;
}

.switcher-label {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.switcher-text {
  font-size: 11px;
  color: #888;
  letter-spacing: 0.02em;
}

.current-name {
  font-size: 14px;
  color: #fff;
  font-weight: 600;
}

.switcher-controls {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.nav-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.05);
  color: #ccc;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: all 0.2s;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  border-color: rgba(255, 255, 255, 0.3);
}

.proposal-dots {
  display: flex;
  gap: 8px;
  align-items: center;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  background: transparent;
  cursor: pointer;
  padding: 0;
  transition: all 0.2s;
}

.dot:hover {
  border-color: rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.15);
}

.dot.active {
  background: #646cff;
  border-color: #646cff;
  box-shadow: 0 0 8px rgba(100, 108, 255, 0.5);
}

/* Collapsed state */
.switcher-collapsed-hint {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 24px;
  font-size: 12px;
  color: #888;
}

.switcher-collapsed-nav {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-btn-sm {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: transparent;
  color: #888;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  transition: all 0.2s;
  padding: 0;
}

.nav-btn-sm:hover {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.3);
}

.dot-count {
  font-size: 11px;
  color: #666;
  font-variant-numeric: tabular-nums;
}

@media (max-width: 640px) {
  .switcher-content {
    flex-direction: column;
    padding: 10px 16px;
    gap: 8px;
  }

  .switcher-label {
    align-items: center;
    text-align: center;
  }
}
</style>
