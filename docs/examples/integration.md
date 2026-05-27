# Integration Examples

How to integrate `@daniel-murnane/core` into your team or institution. This is a practical guide &mdash; if you're considering a collaboration, a hire, or just want to know what working together looks like.

## Integration Patterns

There are four supported integration patterns, in increasing order of commitment.

### 1. Async / Email Integration

The lowest-overhead pattern. One-shot questions, paper feedback, light advice. Best-effort response, typically &lt; 48h.

```typescript
const reply = await daniel.email({
  topic: 'question about GNN tracking',
  expectedReply: 'best-effort',
  urgency: 'low'
});
```

### 2. Scoped Engagement

Short-form, bounded-duration interaction. Examples: a code review, a one-day deep-dive on a problem, a guest lecture.

```typescript
const engagement = await daniel.schedule({
  type: 'research-discussion',
  duration: '1h',
  topic: 'evaluating-your-tracking-pipeline'
});
```

### 3. Sustained Collaboration

Multi-month research partnership with co-authored outputs. See [`collaborate()`](/api/advanced#collaborate-options-collaborationoptions-promise-collaboration).

```typescript
const collab = await daniel.collaborate({
  topic: 'your-detector-or-problem-here',
  duration: '6m',
  intensity: 'engaged',
  outputs: ['paper', 'code']
});
```

### 4. Embedded Integration

Joint affiliation / extended visit. Highest commitment, longest setup time. Best for institutions with overlapping long-term research agendas.

```typescript
const visit = await daniel.requestVisit({
  duration: '1m – 6m',
  institutions: ['your-institution'],
  fundingNotes: 'usually requires advance grant alignment'
});
```

## Onboarding

For any integration above pattern 2, expect:

```typescript
const onboarding = [
  'shared whiteboard session (60-90 min): scoping the problem',
  'shared repo and a doc with the agreed-upon scope',
  'a regular sync cadence (typically weekly or biweekly)',
  'optional: institutional paperwork (NDA, IP, affiliation)',
];
```

## Communication Channels

```typescript
const channels = {
  email: 'preferred for async, decisions, paper threads',
  slack: 'preferred for live debugging, quick questions',
  zoom: 'preferred for scoping, design, status syncs',
  whiteboard: 'preferred for everything else',
};
```

## Common Pitfalls

A few things that, historically, have broken integrations:

- **Underspecified scope.** "Help us with our ML" is not a scope. "Help us debug why our GNN tracking pipeline has 30% efficiency drops near the beam pipe" is.
- **Mismatched timezones with sync expectations.** UTC+2 (Copenhagen) vs UTC-8 (West Coast) is workable async; daily standups are not.
- **No data access.** Engagements that depend on private detector data need a path to access (or a public proxy) before the kickoff meeting, not after.
- **Hidden institutional constraints.** If your institution requires three months of IP negotiation, surface that on day 1, not day 60.

## Reference Integrations

Past or current integrations across these patterns:

| Pattern | Example |
|---------|---------|
| Scoped | Guest lectures, tutorials, conference reviews |
| Sustained | GNN4ITk (CERN/ATLAS), Exa.TrkX (Berkeley Lab + collaborators) |
| Embedded | DDSA Fellowship at NBI; prior LBNL postdoc |

## Getting Started

For new integrations, start with a scoped engagement to validate fit before escalating. See [Contributing](/guide/contributing) for the protocol, or contact directly via the email on [Publications](/publications).
