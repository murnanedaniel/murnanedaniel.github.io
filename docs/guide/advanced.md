# Advanced Usage

This guide covers advanced features and patterns for power users.

## Custom Task Processors

### Creating Custom Processors

Create specialized task processors for complex workflows:

```typescript
class CustomProcessor implements TaskProcessor {
  async process(task: Task): Promise<Result> {
    // Custom processing logic
    await this.preProcess(task);
    const result = await this.executeTask(task);
    await this.postProcess(result);
    return result;
  }

  private async preProcess(task: Task): Promise<void> {
    // Pre-processing logic
  }

  private async executeTask(task: Task): Promise<Result> {
    // Core execution logic
  }

  private async postProcess(result: Result): Promise<void> {
    // Post-processing logic
  }
}
```

### Registering Custom Processors

```typescript
const instance = new Daniel();
instance.registerProcessor('custom', new CustomProcessor());

// Use custom processor
await instance.createTask({
  type: 'custom',
  data: { /* task data */ }
});
```

## Middleware System

### Creating Middleware

```typescript
interface Middleware {
  pre?(task: Task): Promise<Task>;
  post?(result: Result): Promise<Result>;
  error?(error: Error): Promise<void>;
}

class LoggingMiddleware implements Middleware {
  async pre(task: Task): Promise<Task> {
    console.log(`Processing task: ${task.id}`);
    return task;
  }

  async post(result: Result): Promise<Result> {
    console.log(`Task completed: ${result.taskId}`);
    return result;
  }

  async error(error: Error): Promise<void> {
    console.error(`Task failed: ${error.message}`);
  }
}
```

### Using Middleware

```typescript
const instance = new Daniel();
instance.use(new LoggingMiddleware());
instance.use(new MetricsMiddleware());
instance.use(new ValidationMiddleware());
```

## Advanced Event Patterns

### Event Filtering

```typescript
instance.on('task.completed', 
  { priority: 'high' }, 
  async (task) => {
    // Handle only high-priority task completions
  }
);
```

### Event Aggregation

```typescript
const aggregator = new EventAggregator();
aggregator.group('task.completed')
  .by('type')
  .window(TimeWindow.MINUTE)
  .count()
  .threshold(100)
  .onThreshold(async (group, count) => {
    // Handle high task completion rate
  });
```

## Custom Resource Management

### Resource Pool Configuration

```typescript
const customPool = new ResourcePool({
  name: 'compute',
  min: 5,
  max: 20,
  createResource: async () => {
    // Custom resource creation
  },
  validateResource: async (resource) => {
    // Custom validation
  },
  destroyResource: async (resource) => {
    // Custom cleanup
  }
});

instance.registerResourcePool(customPool);
```

### Resource Borrowing

```typescript
await instance.withResource('compute', async (resource) => {
  // Use resource
  await resource.process(data);
  // Resource automatically returned to pool
});
```

## Advanced Scheduling

### Custom Scheduling Strategies

```typescript
class PriorityScheduler implements Scheduler {
  async schedule(tasks: Task[]): Promise<void> {
    const sorted = this.prioritize(tasks);
    for (const task of sorted) {
      await this.executeTask(task);
    }
  }

  private prioritize(tasks: Task[]): Task[] {
    return tasks.sort((a, b) => {
      // Custom prioritization logic
    });
  }
}

instance.setScheduler(new PriorityScheduler());
```

### Batch Processing with Dependencies

```typescript
const batch = new TaskBatch()
  .add('task1', { /* config */ })
  .add('task2', { /* config */ })
  .dependsOn('task2', 'task1')
  .onComplete((results) => {
    // Handle batch completion
  });

await instance.executeBatch(batch);
```

## Performance Optimization

### Custom Caching Strategies

```typescript
class LRUCache implements CacheStrategy {
  async get(key: string): Promise<any> {
    // LRU cache implementation
  }

  async set(key: string, value: any): Promise<void> {
    // LRU cache implementation
  }
}

instance.setCacheStrategy(new LRUCache());
```

### Memory Management

```typescript
instance.setMemoryPolicy({
  maxHeapSize: '2GB',
  gcThreshold: 0.8,
  onMemoryPressure: async () => {
    // Handle memory pressure
  }
});
```

## Advanced Error Handling

### Custom Error Recovery

```typescript
class CustomRecoveryStrategy implements RecoveryStrategy {
  async recover(error: Error, context: Context): Promise<void> {
    switch (error.code) {
      case 'RESOURCE_EXHAUSTED':
        await this.handleResourceExhaustion(context);
        break;
      case 'RATE_LIMITED':
        await this.handleRateLimit(context);
        break;
      default:
        throw error;
    }
  }
}

instance.setRecoveryStrategy(new CustomRecoveryStrategy());
```

### Circuit Breaker Pattern

```typescript
const breaker = new CircuitBreaker({
  failureThreshold: 5,
  resetTimeout: 60000,
  onOpen: () => {
    // Handle circuit open
  },
  onClose: () => {
    // Handle circuit close
  }
});

instance.useCircuitBreaker(breaker);
```

## Monitoring and Telemetry

### Custom Metrics Collection

```typescript
class CustomMetricsCollector implements MetricsCollector {
  async collect(metrics: Metric[]): Promise<void> {
    // Custom metrics collection logic
  }
}

instance.setMetricsCollector(new CustomMetricsCollector());
```

### Advanced Logging

```typescript
instance.setLogger({
  level: 'debug',
  format: 'json',
  destination: new CloudWatchDestination(),
  correlationId: true,
  sampling: {
    rate: 0.1,
    rules: [
      { pattern: 'error.*', rate: 1.0 }
    ]
  }
}); 