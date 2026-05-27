# Advanced API

Higher-order methods for longer-term integrations. These return `Promise` types with substantially longer settlement windows than the core API.

## Methods

### collaborate(options: CollaborationOptions): Promise\<Collaboration\>

Initiate a long-term research collaboration. Unlike `schedule()`, which is bounded by a single meeting, `collaborate()` opens a persistent channel with shared state, recurring sync points, and a non-trivial commitment window.

```typescript
interface CollaborationOptions {
  topic: string;
  duration: '3m' | '6m' | '12m' | 'open-ended';
  intensity: 'background' | 'engaged' | 'primary';
  outputs: ('paper' | 'code' | 'talk' | 'workshop')[];
  institutions?: string[];
}

interface Collaboration {
  id: string;
  startDate: Date;
  cadence: 'weekly' | 'biweekly' | 'monthly';
  sharedRepo?: string;
  status: 'active' | 'paused' | 'shipped';
}
```

**Notes.** Collaborations with `intensity: 'primary'` are subject to capacity constraints; see [Rate Limits](/api/limits). Cross-institutional partnerships may require IP, data-sharing, or affiliation paperwork &mdash; resolve with `daniel.scheduleAdminMeeting()` (not documented).

---

### mentor(options: MentoringOptions): Promise\<MentoringRelationship\>

Open a structured mentoring relationship. Available for graduate students, early-career researchers, and engineers transitioning into ML-for-science.

```typescript
interface MentoringOptions {
  level: 'undergrad' | 'masters' | 'phd' | 'postdoc' | 'industry';
  topic: string;
  cadence: 'weekly' | 'biweekly' | 'monthly';
  duration: string;
}
```

**Returns** a relationship object that emits `progress`, `stuck`, and `breakthrough` events.

---

### peerReview(submission: Submission): Promise\<Review\>

Provide peer review on a manuscript, grant proposal, or thesis. SLA-bound; rejects with `RATE_LIMIT_EXCEEDED` if the current review queue exceeds capacity.

```typescript
interface Submission {
  type: 'paper' | 'grant' | 'thesis' | 'workshop';
  venue?: string;
  deadline: Date;
  conflictOfInterest?: boolean;
}

interface Review {
  recommendation: 'accept' | 'minor' | 'major' | 'reject';
  comments: string;
  signed: boolean;  // default false
}
```

---

### keynote(event: Event): Promise\<Talk\>

Request an invited talk, keynote, or tutorial. Subject to travel logistics and topical fit; see [Examples](/examples/) for past talks.

```typescript
const talk = await daniel.keynote({
  event: 'CHEP 2025',
  topic: 'graph-neural-networks-for-tracking',
  duration: '45m',
  format: 'in-person' | 'remote' | 'hybrid'
});
```

## Error Codes

- `CAPACITY_EXCEEDED` &mdash; concurrent commitments at maximum
- `TOPIC_OUT_OF_SCOPE` &mdash; falls outside current research focus; consider [Contact](/guide/contributing) for routing
- `CONFLICT_OF_INTEREST` &mdash; declared during `peerReview()`; review re-routed
