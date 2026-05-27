# Advanced Examples

Worked case studies from real production deployments. Each example illustrates a non-trivial use of the library in a research setting.

## Case Study 1: GNN4ITk &mdash; Production GNN Tracking for ATLAS

The `gnn4itk` project is the production graph-neural-network track reconstruction pipeline being prepared for the ATLAS Inner Tracker upgrade.

```typescript
const project = await daniel.collaborate({
  topic: 'gnn4itk',
  duration: 'open-ended',
  intensity: 'primary',
  outputs: ['paper', 'code'],
  institutions: ['CERN', 'LBNL', 'NBI', 'IRFU', 'CPPM']
});
```

**Problem.** The High-Luminosity LHC will produce events with ~150,000 detector hits per crossing at ~40 MHz. Classical combinatorial tracking does not scale.

**Approach.** End-to-end graph neural network pipeline: build a graph from spacepoints, classify edges as on-track vs. off-track, segment-connect into track candidates, and pass to downstream physics reconstruction.

**Result.** Physics performance matches or exceeds the CKF baseline at substantially lower computational cost on accelerators. Documented in *Physics Performance of the ATLAS GNN4ITk Track Reconstruction Chain*, EPJ Web of Conferences 295, 03030 (2024).

---

## Case Study 2: Exa.TrkX &mdash; Scalable GNN Tracking

The Exa.TrkX project was a multi-experiment R&amp;D effort led from Lawrence Berkeley National Lab during the `v2.x` (postdoc) era.

```typescript
const project = await daniel.collaborate({
  topic: 'exa-trkx',
  duration: 'open-ended',
  intensity: 'primary',
  outputs: ['paper', 'code', 'talk'],
  institutions: ['LBNL', 'Fermilab', 'ORNL', 'University collaborators']
});
```

**Problem.** Prove that GNN-based tracking can run at the throughput required by an LHC trigger system, not just in offline analysis.

**Approach.** Modular pipeline (`exa-trkx`) implementing graph construction, edge classification, and track building on heterogeneous compute (GPU + CPU). Targeted at the ATLAS, CMS, and DUNE detectors.

**Result.** The pipeline became the basis for the ATLAS production effort (`gnn4itk`) and informed adjacent efforts in CMS and DUNE.

---

## Case Study 3: Influencer Loss for End-to-end Tracking

Single-author CHEP 2024 contribution exploring a novel loss function for geometric representation learning.

```typescript
const work = await daniel.think({
  domain: 'ml',
  complexity: 8,
  description: 'design a loss function for embedding particle tracks such that ' +
               'topologically distinct trajectories are far apart in latent space'
});
```

**Approach.** A contrastive-style objective where each track has a single "influencer" point whose embedding pulls other hits on the same track in. Avoids the failure modes of standard contrastive losses on long, sparse sequences.

**Result.** Documented in *Influencer Loss: End-to-end Geometric Representation Learning for Track Reconstruction*, EPJ Web of Conferences 295, 09016 (2024).

---

## Case Study 4: A Language Model for Particle Tracking

```typescript
const project = await daniel.think({
  domain: 'ml',
  complexity: 9,
  description: 'tokenize detector hits, train a transformer, generate tracks'
});
```

**Hypothesis.** Particle tracking has a sequential structure (hits along a trajectory) that a transformer can model directly &mdash; bypassing the graph construction step entirely.

**Status.** Preprint at `arXiv:2402.10239`. Early results competitive with GNN approaches on simple geometries; the harder question is what this looks like at HL-LHC scale.

---

## Case Study 5: CommonTRK Benchmark

```typescript
const benchmark = await daniel.collaborate({
  topic: 'commontrk',
  duration: 'open-ended',
  intensity: 'engaged',
  outputs: ['code', 'paper'],
});
```

A community benchmark suite for charged-particle tracking. Designed to make it easy to evaluate new algorithms against a shared set of detector geometries, event topologies, and physics metrics.

**Why it matters.** Tracking research has historically been hard to reproduce across experiments because the geometries differ. CommonTRK strips that variable.

---

## Common Patterns

A few patterns recur across these case studies and are worth calling out explicitly:

1. **Start with physics constraints.** Every successful pipeline above respects detector geometry, momentum conservation, or topology &mdash; either by construction (equivariant) or as an inductive bias.
2. **Optimize for evaluation, not training.** The bottleneck in production HEP ML is almost always inference throughput on the trigger compute farm, not training time.
3. **Run the classical baseline in parallel.** Every project that survived contact with a real experiment had a side-by-side comparison with the classical algorithm at every step. Skip this and the result is unfundable.
