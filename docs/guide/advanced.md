# Advanced Usage

<!-- DANIEL: This is your "Current Projects" page.
     Each project is an "advanced pattern" or "custom processor."
     Describe what you're actively working on right now. -->

This guide covers advanced features and active development branches.

## Active Development Branches

### GNN4ITk — Graph Neural Networks for ATLAS Inner Tracking

<!-- DANIEL: Your main project. Describe it in the API-docs voice. -->

```typescript
const gnn4itk = daniel.createProject({
  name: 'GNN4ITk',
  status: 'production-candidate',
  collaboration: 'ATLAS',
  description: 'Graph neural network pipeline for HL-LHC track reconstruction',
  scale: {
    input: '150k spacepoints per event',
    output: 'reconstructed particle tracks',
    performance: '...'  // fill in your metrics
  }
});
```

**What it does:** <!-- 2-3 paragraphs about GNN4ITk -->

**Current status:** <!-- Where is it now? What's next? -->

### ChATLAS

<!-- DANIEL: Fill in what ChATLAS stands for / does -->

```typescript
const chatlas = daniel.createProject({
  name: 'ChATLAS',
  status: '...',
  description: '...'
});
```

**What it does:** <!-- Describe ChATLAS -->

### PLM

<!-- DANIEL: Fill in what PLM stands for / does -->

```typescript
const plm = daniel.createProject({
  name: 'PLM',
  status: '...',
  description: '...'
});
```

**What it does:** <!-- Describe PLM -->

## Other Active Modules

<!-- DANIEL: Add any other projects you're working on. Each gets a code block + description. -->

### Project Name

```typescript
const project = daniel.createProject({
  name: '...',
  status: '...',
  description: '...'
});
```

## Experimental Features

<!-- DANIEL: Anything you're exploring but hasn't become a full project yet.
     Early-stage ideas, side projects, "what if" explorations. -->

::: warning Experimental
These features are in active development and may change without notice.
:::

- **Feature 1**: <!-- description -->
- **Feature 2**: <!-- description -->

## Integration with External Systems

<!-- DANIEL: Collaborations with other groups, cross-experiment work, etc. -->

The library integrates with several external systems:

| System | Integration Level | Description |
|--------|------------------|-------------|
| ATLAS | Production | Core deployment environment |
| IRIS-HEP | Active | <!-- describe --> |
| <!-- other --> | <!-- level --> | <!-- describe --> |
