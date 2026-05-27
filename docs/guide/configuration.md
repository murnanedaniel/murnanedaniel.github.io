# Configuration

## Research Modules

<!-- DANIEL: This page maps your research interests to "configurable modules."
     Each research area is a module that can be enabled/configured.
     Write descriptions of each area in the API-docs voice. -->

The library ships with several research modules that can be activated and configured independently:

```typescript
import { Daniel } from '@daniel-murnane/core';

const daniel = new Daniel({
  modules: {
    graphNeuralNetworks: { enabled: true, priority: 'high' },
    particleTracking: { enabled: true, detector: 'ATLAS' },
    mlForPhysics: { enabled: true },
    openScience: { enabled: true }
  }
});
```

## Module: Graph Neural Networks

<!-- DANIEL: Describe your GNN research — GNN4ITk, track reconstruction, etc. -->

```typescript
{
  graphNeuralNetworks: {
    architecture: 'interaction-network',
    application: 'charged-particle-tracking',
    scale: 'HL-LHC',       // High-Luminosity LHC
    performance: 'production-ready'
  }
}
```

**Description:** <!-- Your description of the GNN work here -->

**Key outputs:** <!-- List papers, software, results -->

## Module: ATLAS Tracking & Reconstruction

<!-- DANIEL: Your work on the ATLAS detector, track reconstruction, trigger -->

```typescript
{
  particleTracking: {
    detector: 'ATLAS',
    subsystem: 'inner-tracker',
    phase: 'HL-LHC-upgrade',
    role: 'ML-co-convener'
  }
}
```

**Description:** <!-- Your tracking/reconstruction work -->

## Module: Physics-Informed Machine Learning

<!-- DANIEL: Broader ML-for-physics work — geometric deep learning, equivariant networks, etc. -->

```typescript
{
  mlForPhysics: {
    approach: 'physics-informed',
    techniques: ['geometric-deep-learning', 'equivariant-networks', 'graph-networks'],
    domain: 'high-energy-physics'
  }
}
```

**Description:** <!-- Your ML philosophy and approach -->

## Module: Open Science & Community

<!-- DANIEL: Open source contributions, community work, IRIS-HEP, HSF, etc. -->

```typescript
{
  openScience: {
    contributions: ['iris-hep', 'hsf', 'atlas-software'],
    philosophy: 'reproducible-research',
    tools: ['pytorch', 'pytorch-geometric', 'acts']
  }
}
```

**Description:** <!-- Your open science work -->

## Runtime Configuration

These settings can be adjusted dynamically:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `coffeeLevel` | string | `'high'` | Required caffeine threshold for operation |
| `timezone` | string | `'Europe/Copenhagen'` | Current deployment timezone |
| `mode` | string | `'research'` | Active operating mode |
| `maxConcurrency` | number | `3` | Maximum simultaneous research threads |
| `deepFocusEnabled` | boolean | `true` | Enable uninterruptible focus blocks |
