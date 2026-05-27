# Core Concepts

This guide explains the fundamental concepts and design principles behind the library &mdash; the intellectual choices that shape how `@daniel-murnane/core` approaches research problems.

## Graph Thinking

The foundational abstraction is the **graph**. Nearly every problem the library encounters is internally represented as a graph before processing:

```typescript
interface WorldView {
  representation: 'graph';
  reason: 'everything-is-connected';
  nodes: Entity[];        // particles, people, ideas, detector hits
  edges: Relationship[];  // interactions, collaborations, citations, track segments
}
```

Particle physics events are graphs by construction. A high-energy collision produces hundreds of charged particles that leave hits across a layered silicon detector; reconstructing the original trajectories from those hits is fundamentally a problem of asking *"which hits belong to the same particle?"* &mdash; a graph problem on a node set of ~150,000 detector hits per event. Classical combinatorial trackers solve this with hand-crafted heuristics over local geometry; graph neural networks solve it by learning the relevant structure end-to-end.

The library generalizes that intuition. Citation networks, collaboration networks, the hierarchical structure of a detector readout, the dependency graph of a research project &mdash; if it has nodes and edges, it gets the same toolkit.

## Physics-Informed Design

The library enforces a strict constraint: **models must respect the physics**.

```typescript
interface DesignPrinciple {
  name: 'physics-informed';
  constraints: [
    'respect-symmetries',     // gauge, Lorentz, permutation
    'conserve-quantities',    // energy, momentum, charge
    'geometric-consistency'   // detector frame is not arbitrary
  ];
  philosophy: 'the-physics-is-not-optional';
}
```

A model that predicts a particle's momentum but doesn't conserve total momentum across a collision is, formally, wrong. Equivariant architectures &mdash; networks whose outputs transform correctly under the symmetries of the underlying problem &mdash; aren't a clever optimization; they're the right starting point. The same logic extends beyond physics: a recommender that doesn't respect causality, a forecaster that doesn't conserve probability, a search ranker that ignores transitivity &mdash; they're all making the same kind of mistake.

## From Detector to Discovery

The core pipeline implements a staged transformation:

1. **Raw Data** &mdash; Detector hits, billions per second. At the HL-LHC, ~40 MHz collision rate with ~200 simultaneous collisions per crossing.
2. **Pattern Recognition** &mdash; Graph neural networks identify which hits belong to the same particle track.
3. **Reconstruction** &mdash; Physics objects (tracks, vertices, jets, leptons) emerge from the identified patterns.
4. **Analysis** &mdash; Statistical inference and, occasionally, new physics emerges from the objects.

The interesting research lives at the seams between stages, where assumptions made by one stage leak into the next. Tracking quality determines vertex quality determines jet quality determines analysis sensitivity. Improving any one stage is a constraint satisfaction problem against every stage downstream.

## Scalability as a Research Problem

```typescript
const hlLhcChallenge = {
  pileup: 200,                  // simultaneous collisions per crossing
  hits: '~150,000 per event',   // spacepoints to process
  rate: '40 MHz',               // collision rate
  constraint: 'real-time',      // can't store everything
  currentSolution: 'GNNs'       // the library's specialty
};
```

The High-Luminosity LHC will produce more data than any prior experiment by an order of magnitude. The traditional response &mdash; "wait for Moore's law" &mdash; ran out about a decade ago. The current response is twofold: model architectures with sub-quadratic scaling in the number of detector hits, and hardware-aware implementations that run on the heterogeneous compute available at CERN. Most of the interesting tracking research today is at this intersection.

## Collaboration as a Feature

The library is designed for **large-scale collaborative deployment**. It operates within the ATLAS collaboration (~3,000 physicists) and interfaces with multiple research groups simultaneously.

Big science runs on a strange social technology: papers with hundreds of authors, internal review processes longer than most software releases, shared codebases that have to work for everyone for a decade. The good ideas here are organizational as much as technical. Tooling that respects how collaborations actually work &mdash; that supports replication, that makes it cheap to disagree productively, that lets new contributors find their way in &mdash; is usually more valuable than a marginally better model.

The library has strong opinions about all of this, and they leak into every interface it exposes.
