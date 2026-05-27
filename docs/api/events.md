# Events

`@daniel-murnane/core` is an `EventEmitter`. Subscribe to lifecycle events to receive updates without polling.

## Subscribing

```typescript
import { daniel } from '@daniel-murnane/core';

daniel.on('paper.published', (event) => {
  console.log(`New publication: ${event.title}`);
});

daniel.on('talk.given', (event) => {
  console.log(`Talk at ${event.venue}: ${event.title}`);
});
```

## Event Catalog

### `paper.published`

Emitted when a new paper or preprint is published.

```typescript
interface PaperPublishedEvent {
  title: string;
  venue: string;
  doi: string;
  arxiv?: string;
  date: Date;
  authors: string[];
  type: 'preprint' | 'proceedings' | 'journal';
}
```

### `talk.given`

Emitted on completion of an invited or contributed talk.

```typescript
interface TalkGivenEvent {
  title: string;
  venue: string;
  format: 'invited' | 'contributed' | 'plenary' | 'tutorial';
  date: Date;
  slides?: string;
  recording?: string;
}
```

### `collaboration.started` / `collaboration.ended`

Emitted at the boundaries of a long-term research collaboration. See [`collaborate()`](/api/advanced#collaborate-options-collaborationoptions-promise-collaboration).

```typescript
interface CollaborationEvent {
  id: string;
  topic: string;
  institutions: string[];
  duration: string;
}
```

### `coffee-break`

Emitted periodically. Useful for synchronizing async requests with high-throughput response windows.

```typescript
interface CoffeeBreakEvent {
  duration: string;        // typically '5m' to '15m'
  acceptsCalls: boolean;
  acceptsHallwayConversation: true;
}
```

### `deep-thought`

Emitted when entering focus mode. Subscribers should expect reduced responsiveness on synchronous channels until the corresponding `focus.ended` event.

### `error`

Emitted on operation failures. Payload includes one of the error codes documented in [Rate Limits](/api/limits) or [Core API](/api/core).

## Webhook Integration

A subset of events can be delivered via webhook for asynchronous integration.

```typescript
daniel.webhooks.register({
  url: 'https://your-service.example.com/daniel-hooks',
  events: ['paper.published', 'talk.given'],
  secret: process.env.DANIEL_HOOK_SECRET
});
```

Webhook delivery is best-effort; subscribers should be idempotent.

## Event Ordering

Events are emitted in causal order within a session but no global ordering is guaranteed across sessions (sleep events reset the local clock). Subscribers that care about ordering should sort by `event.date`.
