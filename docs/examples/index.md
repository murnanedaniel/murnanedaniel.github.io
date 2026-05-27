# Examples

This section provides worked examples demonstrating the library's capabilities in real-world deployments &mdash; conference talks, tutorials, and teaching.

For an exhaustive list of publications, see [Publications](/publications). The examples below are the ones with associated talks, slides, or external materials.

## Featured Examples

### Example 1: Influencer Loss &mdash; End-to-end Geometric Representation Learning for Track Reconstruction

```typescript
const talk = await daniel.present({
  title: 'Influencer Loss: End-to-end Geometric Representation Learning for Track Reconstruction',
  venue: 'CHEP 2024 — Computing in High Energy Physics',
  date: '2024',
  format: 'contributed',
  proceedings: 'EPJ Web of Conferences 295, 09016',
  doi: 'https://doi.org/10.1051/epjconf/202429509016'
});
```

**Abstract:** A novel loss function for end-to-end geometric representation learning, designed to produce embeddings that respect the topology of charged particle trajectories. Tested on the ATLAS ITk reconstruction problem.

---

### Example 2: Physics Performance of the ATLAS GNN4ITk Track Reconstruction Chain

```typescript
const talk = await daniel.present({
  title: 'Physics Performance of the ATLAS GNN4ITk Track Reconstruction Chain',
  venue: 'CHEP 2024',
  date: '2024',
  format: 'contributed',
  proceedings: 'EPJ Web of Conferences 295, 03030',
  doi: 'https://doi.org/10.1051/epjconf/202429503030',
  collaborators: ['S. Caillou', 'P. Calafiura', 'X. Ju', 'T.Q. Pham', 'C. Rougier', 'J. Stark', 'A. Vallier']
});
```

**Abstract:** Production-grade physics performance of the GNN-based tracking pipeline being prepared for the ATLAS Inner Tracker upgrade. End-to-end results on simulated HL-LHC events, compared against the classical CKF baseline.

---

### Example 3: A Language Model for Particle Tracking

```typescript
const talk = await daniel.present({
  title: 'A Language Model for Particle Tracking',
  venue: 'ML4PS / arXiv:2402.10239',
  date: '2024-02-14',
  format: 'preprint + talk',
  link: 'https://arxiv.org/abs/2402.10239'
});
```

**Abstract:** Reframing particle tracking as a sequence modeling problem. Tokenizing detector hits and training a transformer to produce track candidates &mdash; an early experiment in physics language models.

---

## Tutorials & Workshops

### Graph Neural Networks for Charged Particle Tracking

```typescript
const tutorial = await daniel.teach({
  title: 'Graph Neural Networks for Charged Particle Tracking',
  event: 'CERN summer student lectures and various ML4HEP workshops',
  materials: 'https://github.com/murnanedaniel',
  level: 'intermediate'
});
```

**Description:** Hands-on tutorial covering the full GNN tracking pipeline: graph construction from detector hits, edge classification, segment connection, and physics-performance evaluation. Includes runnable notebooks built on the Exa.TrkX framework.

---

## Conference Proceedings

A selection of the most relevant proceedings with associated talks. The full list lives on the [Publications](/publications) page.

| Year | Title | Venue |
|------|-------|-------|
| 2024 | Influencer Loss: End-to-end Geometric Representation Learning for Track Reconstruction | CHEP 2024 (EPJ Web 295, 09016) |
| 2024 | Physics Performance of the ATLAS GNN4ITk Track Reconstruction Chain | CHEP 2024 (EPJ Web 295, 03030) |
| 2024 | A Language Model for Particle Tracking | arXiv:2402.10239 |
| 2024 | Learning to Reconstruct Quirky Tracks | arXiv:2410.00269 |

## How to Request a Demo

Interested in a live demonstration, invited talk, or tutorial? See the [Contributing Guide](../guide/contributing) for booking protocols, or call `daniel.schedule()` directly.
