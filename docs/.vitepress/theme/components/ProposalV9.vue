<template>
  <div class="vscode-container">
    <!-- Title Bar -->
    <div class="titlebar">
      <div class="titlebar-left">
        <div class="window-controls">
          <span class="dot dot-red"></span>
          <span class="dot dot-yellow"></span>
          <span class="dot dot-green"></span>
        </div>
      </div>
      <div class="titlebar-center">
        <span class="titlebar-text">daniel-murnane &mdash; Visual Studio Code</span>
      </div>
      <div class="titlebar-right"></div>
    </div>

    <!-- Main Layout -->
    <div class="main-layout">
      <!-- Activity Bar -->
      <div class="activity-bar">
        <div
          v-for="(item, i) in activityItems"
          :key="i"
          class="activity-icon"
          :class="{ active: activeActivity === i }"
          :title="item.label"
          @click="activeActivity = i; sidebarOpen = true"
        >
          <svg v-if="item.icon === 'explorer'" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z"/>
          </svg>
          <svg v-else-if="item.icon === 'search'" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M15.25 0a8.25 8.25 0 0 0-6.18 13.72L1 21.79l1.42 1.42 8.07-8.07A8.25 8.25 0 1 0 15.25 0zm0 15a6.75 6.75 0 1 1 0-13.5 6.75 6.75 0 0 1 0 13.5z"/>
          </svg>
          <svg v-else-if="item.icon === 'git'" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.559a3.737 3.737 0 1 0-1.494 0v8.882a3.737 3.737 0 1 0 1.824.318 2.988 2.988 0 0 1 2.659-1.665h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.833zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.524a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.98a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z"/>
          </svg>
          <svg v-else-if="item.icon === 'extensions'" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M13.5 1.5L15 0h7.5L24 1.5V9l-1.5 1.5H15L13.5 9V1.5zm1.5 0V9h7.5V1.5H15zM0 15l1.5-1.5H9L10.5 15v7.5L9 24H1.5L0 22.5V15zm1.5 0v7.5H9V15H1.5zm0-13.5L0 3v7.5L1.5 12H9l1.5-1.5V3L9 1.5H1.5zm0 1.5H9v7.5H1.5V3zm14.652 7.776l-1.414-1.414L17.1 7l-2.362-2.362 1.414-1.414 2.362 2.362 2.362-2.362 1.414 1.414L19.928 7l2.362 2.362-1.414 1.414L18.514 8.414l-2.362 2.362z"/>
          </svg>
          <svg v-else-if="item.icon === 'settings'" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2z"/>
          </svg>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="sidebar" :class="{ collapsed: !sidebarOpen }">
        <div class="sidebar-header">
          <span class="sidebar-title">EXPLORER</span>
          <button class="sidebar-toggle" @click="sidebarOpen = !sidebarOpen" title="Toggle sidebar">
            <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
              <path d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"/>
            </svg>
          </button>
        </div>
        <div class="file-tree">
          <!-- Root -->
          <div class="tree-item folder open" @click="toggleFolder('root')">
            <span class="tree-arrow">{{ folders.root ? '\u25BC' : '\u25B6' }}</span>
            <span class="folder-name">DANIEL-MURNANE</span>
          </div>
          <template v-if="folders.root">
            <!-- src -->
            <div class="tree-item folder open indent-1" @click="toggleFolder('src')">
              <span class="tree-arrow">{{ folders.src ? '\u25BC' : '\u25B6' }}</span>
              <span class="folder-icon">&#128193;</span>
              <span class="folder-name">src/</span>
            </div>
            <template v-if="folders.src">
              <!-- research -->
              <div class="tree-item folder indent-2" @click="toggleFolder('research')">
                <span class="tree-arrow">{{ folders.research ? '\u25BC' : '\u25B6' }}</span>
                <span class="folder-icon">&#128193;</span>
                <span class="folder-name">research/</span>
              </div>
              <template v-if="folders.research">
                <div
                  v-for="file in researchFiles"
                  :key="file.id"
                  class="tree-item file indent-3"
                  :class="{ active: activeFile === file.id }"
                  @click="openFile(file.id)"
                >
                  <span class="file-icon ts-icon">TS</span>
                  <span class="file-name">{{ file.name }}</span>
                </div>
              </template>
              <!-- experience -->
              <div class="tree-item folder indent-2" @click="toggleFolder('experience')">
                <span class="tree-arrow">{{ folders.experience ? '\u25BC' : '\u25B6' }}</span>
                <span class="folder-icon">&#128193;</span>
                <span class="folder-name">experience/</span>
              </div>
              <template v-if="folders.experience">
                <div
                  v-for="file in experienceFiles"
                  :key="file.id"
                  class="tree-item file indent-3"
                  :class="{ active: activeFile === file.id }"
                  @click="openFile(file.id)"
                >
                  <span class="file-icon ts-icon">TS</span>
                  <span class="file-name">{{ file.name }}</span>
                </div>
              </template>
              <!-- skills -->
              <div class="tree-item folder indent-2" @click="toggleFolder('skills')">
                <span class="tree-arrow">{{ folders.skills ? '\u25BC' : '\u25B6' }}</span>
                <span class="folder-icon">&#128193;</span>
                <span class="folder-name">skills/</span>
              </div>
              <template v-if="folders.skills">
                <div
                  v-for="file in skillsFiles"
                  :key="file.id"
                  class="tree-item file indent-3"
                  :class="{ active: activeFile === file.id }"
                  @click="openFile(file.id)"
                >
                  <span class="file-icon ts-icon">TS</span>
                  <span class="file-name">{{ file.name }}</span>
                </div>
              </template>
              <!-- config/index at src level -->
              <div
                class="tree-item file indent-2"
                :class="{ active: activeFile === 'config' }"
                @click="openFile('config')"
              >
                <span class="file-icon ts-icon">TS</span>
                <span class="file-name">config.ts</span>
              </div>
              <div
                class="tree-item file indent-2"
                :class="{ active: activeFile === 'index' }"
                @click="openFile('index')"
              >
                <span class="file-icon ts-icon">TS</span>
                <span class="file-name">index.ts</span>
              </div>
            </template>
            <!-- tests -->
            <div class="tree-item folder indent-1">
              <span class="tree-arrow">&#9654;</span>
              <span class="folder-icon">&#128193;</span>
              <span class="folder-name">tests/</span>
            </div>
            <!-- publications -->
            <div class="tree-item folder indent-1">
              <span class="tree-arrow">&#9654;</span>
              <span class="folder-icon">&#128193;</span>
              <span class="folder-name">publications/</span>
            </div>
            <!-- root files -->
            <div class="tree-item file indent-1">
              <span class="file-icon json-icon">{}</span>
              <span class="file-name">package.json</span>
            </div>
            <div class="tree-item file indent-1">
              <span class="file-icon md-icon">M</span>
              <span class="file-name">README.md</span>
            </div>
          </template>
        </div>
      </div>

      <!-- Editor + Terminal -->
      <div class="editor-terminal-wrapper">
        <!-- Editor Area -->
        <div class="editor-area">
          <!-- Tab Bar -->
          <div class="tab-bar">
            <div
              v-for="tab in openTabs"
              :key="tab.id"
              class="tab"
              :class="{ active: activeFile === tab.id }"
              @click="activeFile = tab.id"
            >
              <span class="tab-icon ts-icon">TS</span>
              <span class="tab-name">{{ tab.name }}</span>
              <span class="tab-close" @click.stop="closeTab(tab.id)">&times;</span>
            </div>
          </div>

          <!-- Editor Content -->
          <div class="editor-content" ref="editorContent">
            <div class="editor-lines">
              <div
                v-for="(line, i) in currentFileLines"
                :key="i"
                class="editor-line"
                :class="{ 'current-line': i === currentLineIndex }"
              >
                <span class="line-number">{{ i + 1 }}</span>
                <span class="line-content" v-html="highlightSyntax(line)"></span>
              </div>
            </div>
          </div>
        </div>

        <!-- Terminal Panel -->
        <div class="terminal-panel">
          <div class="terminal-header">
            <div class="terminal-tabs">
              <span class="terminal-tab active">TERMINAL</span>
              <span class="terminal-tab">PROBLEMS</span>
              <span class="terminal-tab">OUTPUT</span>
            </div>
            <div class="terminal-actions">
              <span class="terminal-action" title="Maximize">&#9633;</span>
              <span class="terminal-action" title="Close">&times;</span>
            </div>
          </div>
          <div class="terminal-content">
            <div class="terminal-line prompt">
              <span class="terminal-prompt">&gt;</span>
              <span class="terminal-text">daniel-murnane@3.0.0 build</span>
            </div>
            <div class="terminal-line prompt">
              <span class="terminal-prompt">&gt;</span>
              <span class="terminal-text">tsc &amp;&amp; vite build</span>
            </div>
            <div class="terminal-line">&nbsp;</div>
            <div class="terminal-line success">
              <span class="check">&#10003;</span> Published: "Physics Language Model for Particle Tracking" (2024)
            </div>
            <div class="terminal-line success">
              <span class="check">&#10003;</span> Published: "GNN4ITk Track Reconstruction Chain" (2024)
            </div>
            <div class="terminal-line success">
              <span class="check">&#10003;</span> Published: "Equivariant GNNs for Tracking" (2023)
            </div>
            <div class="terminal-line success">
              <span class="check">&#10003;</span> Published: "Graph Structure from Point Clouds" (2023)
            </div>
            <div class="terminal-line success">
              <span class="check">&#10003;</span> 42 modules compiled successfully
            </div>
            <div class="terminal-line success">
              <span class="check">&#10003;</span> Build complete in 34y (1990-2024)
            </div>
            <div class="terminal-line">&nbsp;</div>
            <div class="terminal-line cursor-line">
              <span class="terminal-caret">&#9646;</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Status Bar -->
    <div class="statusbar">
      <div class="statusbar-left">
        <span class="statusbar-item branch">
          <svg viewBox="0 0 16 16" fill="currentColor" width="14" height="14">
            <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
          </svg>
          main
        </span>
        <span class="statusbar-item sync">
          <svg viewBox="0 0 16 16" fill="currentColor" width="14" height="14">
            <path d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2zm0 11A5 5 0 1 1 8 3a5 5 0 0 1 0 10z"/>
            <path d="M8 5v3.5l2.5 1.5.5-.87L9 7.87V5H8z"/>
          </svg>
          &#10003;
        </span>
        <span class="statusbar-item errors">0 &#9888; 0</span>
      </div>
      <div class="statusbar-right">
        <span class="statusbar-item">TypeScript</span>
        <span class="statusbar-item">UTF-8</span>
        <span class="statusbar-item">LF</span>
        <span class="statusbar-item">Ln {{ currentLineIndex + 1 }}, Col 1</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'

const sidebarOpen = ref(true)
const activeActivity = ref(0)
const activeFile = ref('index')
const currentLineIndex = ref(0)
const editorContent = ref(null)

const folders = reactive({
  root: true,
  src: true,
  research: true,
  experience: false,
  skills: false,
})

const activityItems = [
  { icon: 'explorer', label: 'Explorer' },
  { icon: 'search', label: 'Search' },
  { icon: 'git', label: 'Source Control' },
  { icon: 'extensions', label: 'Extensions' },
  { icon: 'settings', label: 'Settings' },
]

const researchFiles = [
  { id: 'gnn4itk', name: 'gnn4itk.ts' },
  { id: 'physics-lm', name: 'physics-lm.ts' },
  { id: 'equivariant', name: 'equivariant-networks.ts' },
  { id: 'tracking', name: 'particle-tracking.ts' },
]

const experienceFiles = [
  { id: 'nbi', name: 'nbi-copenhagen.ts' },
  { id: 'berkeley', name: 'berkeley-lab.ts' },
  { id: 'atlas', name: 'atlas-cern.ts' },
  { id: 'adelaide', name: 'adelaide-phd.ts' },
]

const skillsFiles = [
  { id: 'pytorch', name: 'pytorch.ts' },
  { id: 'python', name: 'python.ts' },
  { id: 'deep-learning', name: 'deep-learning.ts' },
  { id: 'hpc', name: 'hpc.ts' },
]

const fileContents = {
  index: [
    '/**',
    ' * @daniel-murnane/core',
    ' * High-performance human integration library',
    ' * @version 3.0.0',
    ' * @license MIT',
    ' */',
    '',
    'interface DanielMurnane {',
    '  name: "Daniel Murnane";',
    '  title: "DDSA Postdoctoral Fellow";',
    '  institution: "Niels Bohr Institute, University of Copenhagen";',
    '  roles: ["ML Co-convener, ATLAS Collaboration", "Research Affiliate, Berkeley Lab"];',
    '',
    '  research: {',
    '    primary: "Graph Neural Networks for Particle Physics";',
    '    areas: ["Particle Tracking", "Equivariant Networks", "Physics Language Models"];',
    '    collaboration: "ATLAS Experiment, CERN";',
    '  };',
    '',
    '  metrics: {',
    '    publications: 42;',
    '    citations: 1276;',
    '    hIndex: 8;',
    '    coffeesConsumed: number; // overflow',
    '  };',
    '',
    '  education: {',
    '    phd: { field: "Particle & Astrophysics", institution: "University of Adelaide", year: 2019 };',
    '    bsc: { field: "High Performance Computational Physics", institution: "University of Adelaide", year: 2014 };',
    '  };',
    '}',
    '',
    'export const daniel = new Daniel({',
    '  mode: "research",',
    '  coffeeLevel: "high",',
    '  timezone: "Europe/Copenhagen",',
    '});',
    '',
    '// Ready to collaborate',
    'daniel.listen({ port: 42 });',
  ],
  'gnn4itk': [
    '/**',
    ' * GNN4ITk - Graph Neural Network pipeline for ATLAS Inner Tracker',
    ' * @module research/gnn4itk',
    ' */',
    '',
    'import { GNN, TrackingPipeline } from "@atlas/tracking";',
    'import { MetricLearning, EdgeClassifier } from "@ml/models";',
    '',
    'export class GNN4ITkPipeline extends TrackingPipeline {',
    '  private graphBuilder: MetricLearning;',
    '  private edgeClassifier: EdgeClassifier;',
    '  private trackBuilder: ConnectedComponents;',
    '',
    '  constructor(config: PipelineConfig) {',
    '    super(config);',
    '    this.graphBuilder = new MetricLearning({',
    '      embeddingDim: 512,',
    '      layers: [1024, 1024, 512],',
    '    });',
    '  }',
    '',
    '  async reconstruct(hits: SpacePoint[]): Promise<Track[]> {',
    '    const graph = await this.graphBuilder.buildGraph(hits);',
    '    const edges = await this.edgeClassifier.classify(graph);',
    '    return this.trackBuilder.extract(edges);',
    '  }',
    '',
    '  // Status: DEPLOYED in ATLAS production pipeline',
    '  // Performance: 96.5% efficiency, <1% fake rate',
    '}',
  ],
  'physics-lm': [
    '/**',
    ' * Physics Language Model for Particle Tracking',
    ' * @module research/physics-lm',
    ' * @status ACTIVE',
    ' */',
    '',
    'import { TransformerDecoder } from "@ml/transformers";',
    'import { TrackToken, DetectorVocabulary } from "./tokenizer";',
    '',
    'export class PhysicsLanguageModel {',
    '  private decoder: TransformerDecoder;',
    '  private vocabulary: DetectorVocabulary;',
    '',
    '  /**',
    '   * A novel approach: treat particle tracking as',
    '   * sequence generation. Each track is a "sentence"',
    '   * of detector hits, and we predict the next hit.',
    '   */',
    '  constructor() {',
    '    this.decoder = new TransformerDecoder({',
    '      vocabSize: 300_000, // detector modules',
    '      layers: 12,',
    '      heads: 8,',
    '      embedDim: 768,',
    '    });',
    '  }',
    '',
    '  async generateTrack(seed: TrackToken[]): Promise<Track> {',
    '    return this.decoder.generate(seed, {',
    '      maxLength: 20, // max detector layers',
    '      temperature: 0.1, // physics is deterministic-ish',
    '    });',
    '  }',
    '}',
  ],
  'equivariant': [
    '/**',
    ' * Equivariant Graph Neural Networks',
    ' * @module research/equivariant-networks',
    ' * @published 2023',
    ' */',
    '',
    'import { E3nn, SO3 } from "@geometric/equivariant";',
    '',
    '/**',
    ' * Physics doesn\'t change when you rotate the detector.',
    ' * Equivariant networks respect this symmetry by design,',
    ' * leading to better generalization with less data.',
    ' */',
    'export class EquivariantTracker {',
    '  private layers: EquivariantLayer[];',
    '',
    '  constructor(symmetryGroup: SO3) {',
    '    this.layers = [',
    '      new EquivariantConv(symmetryGroup, { l_max: 2 }),',
    '      new EquivariantConv(symmetryGroup, { l_max: 2 }),',
    '      new InvariantReadout(),',
    '    ];',
    '  }',
    '',
    '  forward(graph: GeometricGraph): EdgeScores {',
    '    let x = graph.nodeFeatures;',
    '    for (const layer of this.layers) {',
    '      x = layer.forward(x, graph.edgeIndex, graph.edgeAttr);',
    '    }',
    '    return this.readout(x);',
    '  }',
    '}',
  ],
  'tracking': [
    '/**',
    ' * Particle Tracking - Core Module',
    ' * @module research/particle-tracking',
    ' */',
    '',
    'import { Detector, SpacePoint, Track } from "@atlas/core";',
    '',
    '/**',
    ' * The fundamental challenge: billions of detector hits,',
    ' * ~10,000 particles per collision, reconstruct every track.',
    ' * Classical algorithms scale as O(n^3). We do O(n).',
    ' */',
    'export interface TrackingConfig {',
    '  detector: "ITk" | "HL-LHC";',
    '  pileup: number; // ~200 at HL-LHC',
    '  minPt: number;  // GeV',
    '  etaRange: [number, number];',
    '}',
    '',
    'export class TrackReconstructor {',
    '  private config: TrackingConfig;',
    '',
    '  async reconstruct(event: CollisionEvent): Promise<Track[]> {',
    '    const hits = event.spacepoints;',
    '    const graph = await this.buildGraph(hits);',
    '    const classified = await this.classifyEdges(graph);',
    '    return this.extractTracks(classified);',
    '  }',
    '',
    '  // Handles 200 pileup interactions per bunch crossing',
    '  // ~100,000 spacepoints per event',
    '}',
  ],
  'nbi': [
    '/**',
    ' * Niels Bohr Institute, University of Copenhagen',
    ' * @module experience/nbi-copenhagen',
    ' * @since 2024',
    ' * @status CURRENT',
    ' */',
    '',
    'export class NBICopenhagen implements Position {',
    '  title = "DDSA Postdoctoral Fellow";',
    '  institution = "Niels Bohr Institute";',
    '  location = "Copenhagen, Denmark";',
    '  startDate = new Date("2024-01-01");',
    '',
    '  responsibilities = [',
    '    "Leading ML research for ATLAS tracking",',
    '    "Developing Physics Language Models",',
    '    "Co-convening ATLAS ML Forum",',
    '    "Mentoring PhD students",',
    '  ];',
    '',
    '  funding = "Danish Data Science Academy Fellowship";',
    '}',
  ],
  'berkeley': [
    '/**',
    ' * Lawrence Berkeley National Laboratory',
    ' * @module experience/berkeley-lab',
    ' * @period 2019-2024',
    ' */',
    '',
    'export class BerkeleyLab implements Position {',
    '  title = "Postdoctoral Researcher";',
    '  institution = "Lawrence Berkeley National Laboratory";',
    '  location = "Berkeley, California";',
    '  period = { start: 2019, end: 2024 };',
    '',
    '  achievements = [',
    '    "Led GNN4ITk pipeline development",',
    '    "Published 30+ papers",',
    '    "Built Exa.TrkX tracking pipeline",',
    '    "Collaborated with NERSC HPC center",',
    '  ];',
    '',
    '  // Still affiliated as Research Affiliate',
    '  status = "AFFILIATE";',
    '}',
  ],
  'atlas': [
    '/**',
    ' * ATLAS Experiment, CERN',
    ' * @module experience/atlas-cern',
    ' * @since 2015',
    ' */',
    '',
    'export class ATLASCollaboration {',
    '  experiment = "ATLAS";',
    '  facility = "Large Hadron Collider, CERN";',
    '  members = 5500; // physicists worldwide',
    '',
    '  roles = [',
    '    { title: "ML Co-convener", period: "2023-present" },',
    '    { title: "Tracking ML Contact", period: "2021-2023" },',
    '    { title: "PhD Student", period: "2015-2019" },',
    '  ];',
    '',
    '  // The ATLAS detector is 46m long, 25m high',
    '  // and weighs about 7,000 tonnes',
    '}',
  ],
  'adelaide': [
    '/**',
    ' * University of Adelaide',
    ' * @module experience/adelaide-phd',
    ' * @period 2014-2019',
    ' */',
    '',
    'export class AdelaidePhD implements Degree {',
    '  type = "PhD" as const;',
    '  field = "Particle & Astrophysics";',
    '  institution = "University of Adelaide";',
    '  location = "Adelaide, Australia";',
    '  year = 2019;',
    '',
    '  thesis = {',
    '    title: "Searches for Dark Matter with ATLAS",',
    '    advisor: "Prof. Paul Jackson",',
    '  };',
    '',
    '  alsoDid = {',
    '    bsc: {',
    '      field: "High Performance Computational Physics",',
    '      year: 2014,',
    '    },',
    '  };',
    '}',
  ],
  'pytorch': [
    '/**',
    ' * PyTorch - Primary ML Framework',
    ' * @module skills/pytorch',
    ' * @proficiency EXPERT',
    ' */',
    '',
    'export const pytorch: Skill = {',
    '  name: "PyTorch",',
    '  level: "Expert",',
    '  yearsOfExperience: 7,',
    '  usedFor: [',
    '    "Graph Neural Networks (PyG)",',
    '    "Custom training loops",',
    '    "Distributed training",',
    '    "Model optimization",',
    '  ],',
    '  relatedTools: ["PyTorch Geometric", "Lightning", "TorchScript"],',
    '};',
  ],
  'python': [
    '/**',
    ' * Python - Primary Language',
    ' * @module skills/python',
    ' * @proficiency EXPERT',
    ' */',
    '',
    'export const python: Skill = {',
    '  name: "Python",',
    '  level: "Expert",',
    '  yearsOfExperience: 10,',
    '  usedFor: [',
    '    "Scientific computing",',
    '    "ML pipeline development",',
    '    "Data analysis & visualization",',
    '    "Package development",',
    '  ],',
    '  ecosystem: ["NumPy", "SciPy", "Matplotlib", "Pandas"],',
    '};',
  ],
  'deep-learning': [
    '/**',
    ' * Deep Learning - Core Competency',
    ' * @module skills/deep-learning',
    ' * @proficiency EXPERT',
    ' */',
    '',
    'export const deepLearning: Skill = {',
    '  name: "Deep Learning",',
    '  level: "Expert",',
    '  specializations: [',
    '    "Graph Neural Networks",',
    '    "Transformers / Language Models",',
    '    "Equivariant Neural Networks",',
    '    "Geometric Deep Learning",',
    '  ],',
    '  applications: [',
    '    "Particle track reconstruction",',
    '    "Jet classification",',
    '    "Anomaly detection",',
    '  ],',
    '};',
  ],
  'hpc': [
    '/**',
    ' * High Performance Computing',
    ' * @module skills/hpc',
    ' * @proficiency ADVANCED',
    ' */',
    '',
    'export const hpc: Skill = {',
    '  name: "High Performance Computing",',
    '  level: "Advanced",',
    '  systems: [',
    '    "NERSC (Perlmutter)",',
    '    "CERN LXPLUS / HTCondor",',
    '    "GPU clusters (A100, V100)",',
    '  ],',
    '  skills: [',
    '    "Distributed training",',
    '    "Multi-GPU scaling",',
    '    "Job scheduling (SLURM)",',
    '    "Containerization (Docker/Singularity)",',
    '  ],',
    '};',
  ],
  'config': [
    '/**',
    ' * Configuration',
    ' * @module config',
    ' */',
    '',
    'export const config = {',
    '  name: "Daniel Murnane",',
    '  version: "3.0.0",',
    '  environment: "production",',
    '  timezone: "Europe/Copenhagen",',
    '',
    '  contact: {',
    '    email: "daniel.murnane@nbi.ku.dk",',
    '    github: "github.com/murnanedaniel",',
    '    scholar: "scholar.google.com/...",',
    '    inspirehep: "inspirehep.net/authors/...",',
    '  },',
    '',
    '  preferences: {',
    '    editor: "VS Code",',
    '    terminal: "zsh",',
    '    coffee: "flat white",',
    '    debugger: "print statements", // don\'t judge',
    '  },',
    '};',
  ],
}

const openTabs = ref([
  { id: 'index', name: 'index.ts' },
])

function toggleFolder(name) {
  folders[name] = !folders[name]
}

function openFile(id) {
  activeFile.value = id
  currentLineIndex.value = 0
  if (!openTabs.value.find(t => t.id === id)) {
    const allFiles = [
      ...researchFiles,
      ...experienceFiles,
      ...skillsFiles,
      { id: 'index', name: 'index.ts' },
      { id: 'config', name: 'config.ts' },
    ]
    const file = allFiles.find(f => f.id === id)
    if (file) {
      openTabs.value.push({ id: file.id, name: file.name })
    }
  }
}

function closeTab(id) {
  const idx = openTabs.value.findIndex(t => t.id === id)
  if (idx > -1) {
    openTabs.value.splice(idx, 1)
    if (activeFile.value === id) {
      activeFile.value = openTabs.value.length > 0
        ? openTabs.value[Math.max(0, idx - 1)].id
        : 'index'
    }
  }
}

const currentFileLines = computed(() => {
  return fileContents[activeFile.value] || ['// File not found']
})

function highlightSyntax(line) {
  if (!line) return '&nbsp;'

  // Escape HTML
  let hl = line
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  // Multi-line comment lines
  if (/^\s*(\*\/|\*|\/\*\*)/.test(hl)) {
    return `<span class="syn-comment">${hl}</span>`
  }

  // Single-line comment
  const commentMatch = hl.match(/^(.*?)(\/\/.*)$/)
  if (commentMatch) {
    const before = commentMatch[1]
    const comment = commentMatch[2]
    hl = highlightCode(before) + `<span class="syn-comment">${comment}</span>`
    return hl
  }

  return highlightCode(hl)
}

function highlightCode(code) {
  // Strings (double-quoted)
  code = code.replace(/"([^"]*?)"/g, '<span class="syn-string">"$1"</span>')
  // Strings (single-quoted)
  code = code.replace(/'([^']*?)'/g, '<span class="syn-string">\'$1\'</span>')

  // Numbers
  code = code.replace(/\b(\d[\d_]*)\b/g, '<span class="syn-number">$1</span>')

  // Keywords
  const keywords = ['import', 'export', 'const', 'let', 'var', 'class', 'interface', 'type',
    'function', 'return', 'new', 'extends', 'implements', 'async', 'await',
    'for', 'of', 'if', 'else', 'from', 'private', 'public', 'readonly', 'as']
  for (const kw of keywords) {
    const re = new RegExp(`\\b(${kw})\\b`, 'g')
    code = code.replace(re, '<span class="syn-keyword">$1</span>')
  }

  // Types
  const types = ['string', 'number', 'boolean', 'void', 'Promise', 'Track', 'SpacePoint',
    'DanielMurnane', 'Daniel', 'PipelineConfig', 'CollisionEvent', 'GNN',
    'TrackingPipeline', 'MetricLearning', 'EdgeClassifier', 'ConnectedComponents',
    'TrackingConfig', 'TransformerDecoder', 'TrackToken', 'DetectorVocabulary',
    'EquivariantLayer', 'GeometricGraph', 'EdgeScores', 'SO3',
    'Position', 'Degree', 'Skill', 'Date',
    'PhysicsLanguageModel', 'GNN4ITkPipeline', 'EquivariantTracker',
    'TrackReconstructor', 'NBICopenhagen', 'BerkeleyLab',
    'ATLASCollaboration', 'AdelaidePhD',
    'EquivariantConv', 'InvariantReadout']
  for (const t of types) {
    const re = new RegExp(`\\b(${t})\\b`, 'g')
    code = code.replace(re, '<span class="syn-type">$1</span>')
  }

  return code
}

// Handle mobile sidebar
function handleResize() {
  if (window.innerWidth < 768) {
    sidebarOpen.value = false
  }
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
/* Reset VitePress styles for full-page takeover */
.vscode-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 13px;
  color: #cccccc;
  background: #1e1e1e;
  overflow: hidden;
}

/* Title Bar */
.titlebar {
  display: flex;
  align-items: center;
  height: 30px;
  background: #323233;
  -webkit-app-region: drag;
  flex-shrink: 0;
}
.titlebar-left {
  width: 78px;
  display: flex;
  align-items: center;
  padding-left: 12px;
}
.window-controls {
  display: flex;
  gap: 8px;
}
.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.dot-red { background: #ff5f57; }
.dot-yellow { background: #febc2e; }
.dot-green { background: #28c840; }
.titlebar-center {
  flex: 1;
  text-align: center;
}
.titlebar-text {
  font-size: 12px;
  color: #999;
}
.titlebar-right {
  width: 78px;
}

/* Main Layout */
.main-layout {
  display: flex;
  flex: 1;
  overflow: hidden;
}

/* Activity Bar */
.activity-bar {
  width: 48px;
  background: #333333;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4px;
  flex-shrink: 0;
}
.activity-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #858585;
  cursor: pointer;
  border-left: 2px solid transparent;
  transition: color 0.15s;
}
.activity-icon:hover {
  color: #ffffff;
}
.activity-icon.active {
  color: #ffffff;
  border-left-color: #ffffff;
}
.activity-icon svg {
  width: 24px;
  height: 24px;
}

/* Sidebar */
.sidebar {
  width: 250px;
  background: #252526;
  border-right: 1px solid #1e1e1e;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex-shrink: 0;
  transition: width 0.2s ease;
}
.sidebar.collapsed {
  width: 0;
  border-right: none;
}
.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 35px;
  flex-shrink: 0;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #bbbbbb;
}
.sidebar-toggle {
  background: none;
  border: none;
  color: #bbbbbb;
  cursor: pointer;
  padding: 2px;
}
.sidebar-toggle:hover {
  color: #ffffff;
}

/* File Tree */
.file-tree {
  flex: 1;
  overflow-y: auto;
  padding: 4px 0;
}
.tree-item {
  display: flex;
  align-items: center;
  height: 22px;
  padding: 0 8px;
  cursor: pointer;
  white-space: nowrap;
  font-size: 13px;
  user-select: none;
}
.tree-item:hover {
  background: #2a2d2e;
}
.tree-item.active {
  background: #37373d;
}
.tree-arrow {
  width: 16px;
  font-size: 10px;
  text-align: center;
  flex-shrink: 0;
  color: #cccccc;
}
.folder-icon {
  margin: 0 4px 0 2px;
  font-size: 14px;
  flex-shrink: 0;
}
.folder-name {
  color: #cccccc;
  font-weight: 600;
  font-size: 11px;
}
.tree-item.folder .folder-name {
  text-transform: none;
  font-weight: 400;
  font-size: 13px;
  color: #cccccc;
}
.tree-item.folder.open > .folder-name {
  color: #cccccc;
}
.indent-1 { padding-left: 16px; }
.indent-2 { padding-left: 32px; }
.indent-3 { padding-left: 48px; }

.file-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  margin-right: 4px;
  font-size: 9px;
  font-weight: 700;
  border-radius: 2px;
  flex-shrink: 0;
}
.ts-icon {
  background: #3178c6;
  color: #ffffff;
}
.json-icon {
  background: #cbcb41;
  color: #333;
  font-size: 10px;
}
.md-icon {
  background: #519aba;
  color: #ffffff;
}
.file-name {
  color: #cccccc;
}

/* Editor + Terminal Wrapper */
.editor-terminal-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Editor Area */
.editor-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Tab Bar */
.tab-bar {
  display: flex;
  height: 35px;
  background: #252526;
  border-bottom: 1px solid #1e1e1e;
  flex-shrink: 0;
  overflow-x: auto;
}
.tab {
  display: flex;
  align-items: center;
  padding: 0 12px;
  height: 35px;
  background: #2d2d2d;
  border-right: 1px solid #252526;
  cursor: pointer;
  font-size: 13px;
  color: #969696;
  white-space: nowrap;
  min-width: 0;
}
.tab.active {
  background: #1e1e1e;
  color: #ffffff;
  border-bottom: 1px solid #1e1e1e;
}
.tab-icon {
  margin-right: 6px;
  font-size: 8px;
  padding: 1px 3px;
  border-radius: 2px;
}
.tab-name {
  margin-right: 8px;
}
.tab-close {
  font-size: 16px;
  color: #969696;
  opacity: 0;
  transition: opacity 0.1s;
}
.tab:hover .tab-close {
  opacity: 1;
}
.tab-close:hover {
  color: #ffffff;
}

/* Editor Content */
.editor-content {
  flex: 1;
  overflow: auto;
  background: #1e1e1e;
  padding: 4px 0;
}
.editor-lines {
  min-width: fit-content;
}
.editor-line {
  display: flex;
  height: 19px;
  line-height: 19px;
  font-family: Consolas, 'Courier New', monospace;
  font-size: 14px;
}
.editor-line.current-line {
  background: #282828;
}
.line-number {
  width: 50px;
  text-align: right;
  padding-right: 16px;
  color: #858585;
  flex-shrink: 0;
  user-select: none;
  font-size: 14px;
}
.line-content {
  white-space: pre;
  padding-right: 20px;
}

/* Syntax Highlighting */
:deep(.syn-keyword) { color: #569CD6; }
:deep(.syn-string) { color: #CE9178; }
:deep(.syn-type) { color: #4EC9B0; }
:deep(.syn-comment) { color: #6A9955; }
:deep(.syn-number) { color: #B5CEA8; }

/* Terminal Panel */
.terminal-panel {
  height: 200px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #414141;
  flex-shrink: 0;
}
.terminal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 35px;
  background: #252526;
  padding: 0 8px;
  flex-shrink: 0;
}
.terminal-tabs {
  display: flex;
  gap: 0;
}
.terminal-tab {
  padding: 0 12px;
  height: 35px;
  line-height: 35px;
  font-size: 11px;
  text-transform: uppercase;
  color: #969696;
  cursor: pointer;
  border-bottom: 1px solid transparent;
}
.terminal-tab.active {
  color: #cccccc;
  border-bottom-color: #cccccc;
}
.terminal-actions {
  display: flex;
  gap: 8px;
}
.terminal-action {
  color: #cccccc;
  cursor: pointer;
  font-size: 16px;
}
.terminal-content {
  flex: 1;
  background: #1e1e1e;
  padding: 8px 16px;
  font-family: Consolas, 'Courier New', monospace;
  font-size: 13px;
  overflow-y: auto;
}
.terminal-line {
  line-height: 20px;
  white-space: nowrap;
}
.terminal-line.prompt {
  color: #cccccc;
}
.terminal-prompt {
  color: #6A9955;
  margin-right: 8px;
}
.terminal-text {
  color: #cccccc;
}
.terminal-line.success {
  color: #4EC9B0;
}
.terminal-line.success .check {
  color: #6A9955;
  margin-right: 4px;
}
.terminal-caret {
  color: #cccccc;
  animation: blink 1s step-end infinite;
}
@keyframes blink {
  50% { opacity: 0; }
}
.cursor-line {
  color: #cccccc;
}

/* Status Bar */
.statusbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 22px;
  background: #007ACC;
  color: #ffffff;
  font-size: 12px;
  padding: 0 8px;
  flex-shrink: 0;
}
.statusbar-left,
.statusbar-right {
  display: flex;
  align-items: center;
  gap: 2px;
}
.statusbar-item {
  padding: 0 6px;
  height: 22px;
  line-height: 22px;
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
}
.statusbar-item:hover {
  background: rgba(255, 255, 255, 0.12);
}
.statusbar-item svg {
  width: 14px;
  height: 14px;
}

/* Responsive */
@media (max-width: 768px) {
  .sidebar {
    position: absolute;
    left: 48px;
    top: 30px;
    bottom: 22px;
    z-index: 10;
    width: 250px;
  }
  .sidebar.collapsed {
    width: 0;
  }
  .activity-bar {
    width: 40px;
  }
  .activity-icon {
    width: 40px;
    height: 40px;
  }
  .activity-icon svg {
    width: 20px;
    height: 20px;
  }
  .terminal-panel {
    height: 150px;
  }
  .editor-line {
    font-size: 12px;
  }
  .line-number {
    width: 36px;
    padding-right: 8px;
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .activity-bar {
    width: 36px;
  }
  .activity-icon {
    width: 36px;
    height: 36px;
  }
  .titlebar-text {
    font-size: 10px;
  }
  .statusbar-right .statusbar-item:not(:last-child) {
    display: none;
  }
}
</style>
