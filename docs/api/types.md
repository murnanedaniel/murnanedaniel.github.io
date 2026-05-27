# Types

TypeScript type signatures for the public API. Importing from `@daniel-murnane/core` includes all of these.

## Core Types

### Researcher

The top-level type. Singleton; only one instance is exported.

```typescript
interface Researcher {
  name: 'Daniel Murnane';
  orcid: '0000-0003-4046-4822';
  affiliation: Affiliation;
  expertise: ExpertiseArea[];
  status: 'available' | 'focus' | 'travel' | 'offline';

  // see /api/core
  schedule(opts: ScheduleOptions): Promise<Meeting>;
  think(problem: Problem): Promise<Solution>;

  // see /api/advanced
  collaborate(opts: CollaborationOptions): Promise<Collaboration>;
  mentor(opts: MentoringOptions): Promise<MentoringRelationship>;
  peerReview(submission: Submission): Promise<Review>;
  keynote(event: Event): Promise<Talk>;
}
```

### Affiliation

```typescript
interface Affiliation {
  institution: 'Niels Bohr Institute, University of Copenhagen';
  department: 'Particle Physics & High Energy Astrophysics';
  group: 'ATLAS';
  role: 'DDSA Postdoctoral Fellow';
  city: 'Copenhagen';
  country: 'Denmark';
}
```

### ExpertiseArea

```typescript
type ExpertiseArea =
  | 'graph-neural-networks'
  | 'particle-tracking'
  | 'equivariant-architectures'
  | 'atlas-experiment'
  | 'physics-language-models'
  | 'machine-learning-for-science'
  | 'agentic-systems';
```

## Domain Types

### Collaborator

```typescript
interface Collaborator {
  name: string;
  institution: string;
  role: 'PI' | 'postdoc' | 'student' | 'engineer';
  contactProtocol: 'email' | 'slack' | 'zoom' | 'whiteboard';
  timezone: string;
}
```

### Publication

```typescript
interface Publication {
  title: string;
  authors: string[];
  date: string;          // ISO 8601
  doi: string;
  arxiv?: string;
  venue: string;
  type: 'preprint' | 'article' | 'proceedings';
  citedByCount: number;
}
```

The full publication list is queryable; see [Publications](/publications).

### Project

```typescript
interface Project {
  name: string;          // e.g. 'gnn4itk', 'exa-trkx', 'physics-lm'
  repo?: string;
  status: 'r&d' | 'production' | 'maintained' | 'archived';
  collaborators: Collaborator[];
  stage: 'design' | 'prototype' | 'integration' | 'production';
}
```

### Talk

```typescript
interface Talk {
  title: string;
  venue: string;
  date: Date;
  format: 'invited' | 'contributed' | 'plenary' | 'tutorial';
  slides?: string;
  recording?: string;
  abstract?: string;
}
```

### Review

Returned by `peerReview()`.

```typescript
interface Review {
  recommendation: 'accept' | 'minor' | 'major' | 'reject';
  comments: string;
  signed: boolean;
  confidence: 1 | 2 | 3 | 4 | 5;
}
```

## Type Guards

Runtime guards exported alongside the type definitions.

```typescript
import { isPublication, isCollaborator } from '@daniel-murnane/core/guards';

if (isPublication(x)) {
  console.log(x.doi);
}
```

## Generics

Several methods accept a generic `T extends ResearchTopic` parameter. The set of valid topics is determined by `ExpertiseArea`; out-of-domain values raise `TOPIC_OUT_OF_SCOPE` (see [Rate Limits](/api/limits)).
