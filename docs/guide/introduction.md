# Introduction

## System Overview

`@daniel-murnane/core` is a research-grade human integration library specializing in particle physics, machine learning, and the surprisingly large intersection of the two. Originally compiled at the **University of Adelaide** (undergraduate, then PhD), the system underwent extensive optimization during a postdoctoral run at **Lawrence Berkeley National Laboratory**, and is currently deployed in production at the **Niels Bohr Institute, University of Copenhagen** as a DDSA Postdoctoral Fellow.

The library is co-author of the GNN4ITk and Exa.TrkX projects, currently serves as ML co-convener for the ATLAS Inner Tracker, and ships with strong opinions about graph representations, equivariant networks, and the use of espresso as a build dependency.

## Architecture

The system is built on a modular architecture with several core subsystems:

- **Physics Engine** &mdash; ATLAS experiment at CERN. Charged particle tracking, trigger systems, detector reconstruction for the High Luminosity LHC.
- **ML Pipeline** &mdash; Graph Neural Networks for particle physics. GNN4ITk (production tracking pipeline for the ATLAS ITk upgrade), Exa.TrkX (scalable GNN tracking), equivariant architectures, and physics language models.
- **Orchestration Layer** &mdash; ML co-convener for the ATLAS ITk collaboration, coordinating ML R&amp;D across a few thousand physicists.
- **Research API** &mdash; Publications, conference talks, supervision, peer review. The public interface; see [`/api`](/api/core).

## Key Features

- **Graph Neural Networks** &mdash; Production-tested architectures for charged particle tracking. Co-developed the first end-to-end GNN tracking pipeline adopted by an LHC experiment.
- **ATLAS Integration** &mdash; Deep expertise in the ATLAS detector, the reconstruction software stack, and the cultural protocols of a 3,000-person collaboration.
- **Physics-Informed ML** &mdash; Models that respect detector geometry, gauge symmetries, and Lorentz invariance. Equivariant networks as a default, not an afterthought.
- **Open Source** &mdash; Contributor to `gnn4itk`, `exa-trkx`, and the CommonTRK benchmark suite. Strong preference for reproducible, community-driven research.
- **Physics Language Models** `beta` &mdash; Exploring LLMs and agentic systems for HEP knowledge retrieval, hypothesis generation, and the increasingly large literature.

## Prerequisites

Before integration, ensure your system meets the following requirements:

- Familiarity with at least one of: particle physics, graph neural networks, or strong coffee
- Willingness to engage in whiteboard discussions that may exceed scheduled duration
- Tolerance for Australian idioms deployed in Northern European contexts
- A working understanding that "production" in physics means "we have to run this for the next decade"

## Current Deployment

| Parameter | Value |
|-----------|-------|
| Location | Niels Bohr Institute, Copenhagen |
| Role | DDSA Postdoctoral Fellow |
| Collaboration | ATLAS, CERN |
| Status | `ACTIVE` |
| Uptime | Since 2024 |
| Previous deployments | Berkeley Lab (2020&ndash;2024), University of Adelaide (PhD, 2015&ndash;2019) |

## Version History

A condensed semantic-versioning summary of the trajectory:

- **v3.x** &mdash; DDSA Fellow, Niels Bohr Institute. Copenhagen era. Equivariant architectures, physics language models, agentic systems for science.
- **v2.x** &mdash; Postdoctoral researcher, Lawrence Berkeley National Lab. Exa.TrkX project lead, first GNN tracking pipelines in production.
- **v1.x** &mdash; PhD, University of Adelaide. Foundation in particle physics and ATLAS, early ML explorations, the discovery that there are no shortcuts.
- **v0.x** &mdash; Undergraduate, University of Adelaide. Physics and mathematics. Pre-release. Many bugs.
