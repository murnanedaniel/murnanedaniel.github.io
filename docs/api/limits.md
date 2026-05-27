# Rate Limits

`@daniel-murnane/core` enforces rate limits and operational constraints to maintain throughput, output quality, and the long-term health of the underlying hardware (i.e. the researcher).

## Request Limits

| Method | Limit | Window |
|--------|-------|--------|
| `schedule()` | 5 meetings | per day |
| `collaborate()` | 2 concurrent (intensity: primary) | open-ended |
| `peerReview()` | 1 review in flight | per week |
| `keynote()` | ~6 invited talks | per year |
| `mentor()` | up to 4 active relationships | concurrent |

Exceeding these bounds raises `RATE_LIMIT_EXCEEDED`. Retries with backoff are honored; the backoff is &ge; 2 weeks.

## Operational Constraints

### Timezone

```typescript
const operational = {
  timezone: 'Europe/Copenhagen',  // UTC+1 winter, UTC+2 summer
  workingHours: '09:00 – 18:00 CET',
  asyncFriendly: true,             // email is fine outside hours
  syncOutsideHours: 'declined'     // calls outside hours raise CONTEXT_SWITCH_ERROR
};
```

### Sleep Window

A hard requirement, not a preference.

```typescript
function isAvailable(time: Date): boolean {
  const hour = time.getHours();
  if (hour >= 23 || hour < 7) {
    throw new Error('MAINTENANCE_MODE');
  }
  return true;
}
```

### Focus Mode

When operating in focus mode (deep work on a paper, model debugging, or proposal writing), most calls are deferred to the next non-focused window. Calls marked `priority: 'high'` are evaluated against an in-flight cost function.

```typescript
interface FocusState {
  active: boolean;
  currentTask: 'paper' | 'proposal' | 'code' | 'review';
  interruptThreshold: 'high-priority-only';
  estimatedExitWindow: Date;
}
```

### Context Switching

Rapid context switching between unrelated research topics carries a non-trivial cost.

```typescript
const switchCost = {
  betweenSimilarTopics: '~5 minutes',
  betweenDistantTopics: '~30 minutes',
  betweenResearchAndAdmin: '~45 minutes (return path uncertain)'
};
```

Batching related requests is strongly recommended.

## Resource Constraints

| Resource | Limit |
|----------|-------|
| Caffeine | self-regulated, &le; 4 espresso-equivalents/day |
| Conference travel | &le; 3 international trips/quarter |
| Open browser tabs | technically unlimited, practically catastrophic |
| Simultaneous papers in draft | 3 (more degrades quality) |

## Error Codes

- `RATE_LIMIT_EXCEEDED` &mdash; quota for the method exceeded
- `MAINTENANCE_MODE` &mdash; outside operating hours
- `CONTEXT_SWITCH_ERROR` &mdash; switching cost too high to honor request
- `COFFEE_LEVEL_LOW` &mdash; transient; retry after 5&ndash;15 minutes
- `FOCUS_MODE_ACTIVE` &mdash; request deferred to next available window
