# Examples

This section provides examples of common use cases and patterns when working with the library.

## Basic Examples

### Simple Task Creation

```typescript
import { Daniel } from '@daniel-murnane/core';

const instance = new Daniel();

async function createBasicTask() {
  const task = await instance.createTask({
    title: 'Review Pull Request',
    priority: 'high',
    deadline: '2024-04-25T15:00:00Z'
  });

  console.log(`Task created with ID: ${task.id}`);
}
```

### Handling Multiple Tasks

```typescript
async function handleMultipleTasks() {
  const tasks = await instance.batchCreate([
    {
      title: 'Code Review',
      priority: 'high',
      estimatedDuration: '1h'
    },
    {
      title: 'Documentation Update',
      priority: 'medium',
      estimatedDuration: '2h'
    }
  ]);

  console.log(`Created ${tasks.length} tasks`);
}
```

## Advanced Examples

### Using Event Handlers

```typescript
instance.on('task.completed', (task) => {
  console.log(`Task ${task.id} completed`);
});

instance.on('error', (error) => {
  console.error('An error occurred:', error);
});

// Start a task with event monitoring
await instance.createTask({
  title: 'Long-running task',
  onProgress: (progress) => {
    console.log(`Progress: ${progress}%`);
  }
});
```

### Implementing Retry Logic

```typescript
const task = await instance.createTask({
  title: 'Sensitive Operation',
  retryStrategy: {
    attempts: 3,
    backoff: {
      type: 'exponential',
      initialDelay: 1000
    }
  }
});
```

### Custom Rate Limiting

```typescript
const customLimiter = new RateLimiter({
  windowMs: 60000,  // 1 minute
  maxRequests: 5
});

const instance = new Daniel({
  rateLimiter: customLimiter
});

// This will respect the custom rate limits
await instance.processBatch(items);
```

## Integration Examples

### Express.js Integration

```typescript
import express from 'express';
import { Daniel } from '@daniel-murnane/core';

const app = express();
const daniel = new Daniel();

app.post('/tasks', async (req, res) => {
  try {
    const task = await daniel.createTask(req.body);
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

### React Integration

```typescript
import { useState, useEffect } from 'react';
import { Daniel } from '@daniel-murnane/core';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const daniel = new Daniel();

  useEffect(() => {
    const loadTasks = async () => {
      const tasks = await daniel.listTasks();
      setTasks(tasks);
    };

    loadTasks();
  }, []);

  return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  );
}
```

## Best Practices

### Error Handling

```typescript
try {
  await instance.createTask({
    title: 'Important Task'
  });
} catch (error) {
  if (error.code === 'RATE_LIMIT_EXCEEDED') {
    // Wait and retry
    await delay(1000);
    return retry();
  }
  
  if (error.code === 'INVALID_INPUT') {
    // Handle validation errors
    console.error('Validation failed:', error.details);
  }
  
  // Handle other errors
  throw error;
}
```

### Resource Cleanup

```typescript
const instance = new Daniel();

// Ensure proper cleanup
process.on('SIGTERM', async () => {
  await instance.shutdown();
  process.exit(0);
});
```

## Performance Tips

### Batch Operations

```typescript
// Instead of multiple individual calls
const batchResults = await instance.batchProcess([
  { type: 'task1' },
  { type: 'task2' },
  { type: 'task3' }
], {
  concurrency: 3
});
```

### Caching Results

```typescript
const instance = new Daniel({
  cache: {
    enabled: true,
    ttl: 3600  // 1 hour
  }
});

// Results will be cached
const result = await instance.getFrequentlyAccessedData();
``` 