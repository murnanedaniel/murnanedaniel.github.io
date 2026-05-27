# Core API Reference

## Class: Daniel

The main class for interacting with Daniel's capabilities.

### Constructor

```typescript
constructor(options: DanielOptions)
```

#### Options

- `coffeeLevel` (string): Current caffeine level ('low' | 'medium' | 'high')
- `timezone` (string): Operating timezone (IANA timezone format)
- `mode` (string): Operating mode ('research' | 'coding' | 'writing' | 'meeting')

### Methods

#### schedule(options: ScheduleOptions): Promise\<Meeting\>

Schedule a meeting or task with Daniel.

```typescript
interface ScheduleOptions {
  type: 'research-discussion' | 'code-review' | 'brainstorm';
  duration: string;  // e.g., '30m', '1h', '2h'
  topic: string;
  priority?: 'low' | 'medium' | 'high';
}

interface Meeting {
  confirmationCode: string;
  startTime: Date;
  endTime: Date;
  status: 'confirmed' | 'pending' | 'cancelled';
}
```

#### async think(problem: Problem): Promise\<Solution\>

Engage Daniel's problem-solving capabilities.

```typescript
interface Problem {
  domain: 'physics' | 'ml' | 'software';
  complexity: number;  // 1-10
  description: string;
}

interface Solution {
  approach: string;
  implementation?: string;
  confidence: number;
}
```

### Events

The Daniel instance emits the following events:

- `coffee-break`: Emitted when a coffee break is needed
- `deep-thought`: Emitted when entering focus mode
- `error`: Emitted when an operation fails

### Error Codes

Common error codes you might encounter:

- `COFFEE_LEVEL_LOW`: Insufficient caffeine levels
- `RATE_LIMIT_EXCEEDED`: Too many requests in time period
- `CONTEXT_SWITCH_ERROR`: Too rapid task switching
- `MAINTENANCE_MODE`: During sleep hours 