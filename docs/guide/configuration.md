# Configuration Guide

## Global Configuration

The global configuration can be set during initialization or updated at runtime:

```typescript
import { Daniel } from '@daniel-murnane/core';

const instance = new Daniel({
  environment: 'production',
  logLevel: 'info',
  maxConcurrency: 5,
  timeout: 30000
});
```

## Configuration Options

### Core Settings

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `environment` | string | 'development' | Runtime environment ('development', 'staging', 'production') |
| `logLevel` | string | 'info' | Logging level ('debug', 'info', 'warn', 'error') |
| `maxConcurrency` | number | 3 | Maximum concurrent operations |
| `timeout` | number | 30000 | Global timeout in milliseconds |

### Advanced Settings

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `retryStrategy` | object | see below | Configuration for automatic retries |
| `caching` | object | see below | Cache configuration |
| `monitoring` | object | see below | Monitoring settings |
| `rateLimit` | object | see below | Rate limiting configuration |

## Retry Strategy

Configure automatic retry behavior for failed operations:

```typescript
{
  retryStrategy: {
    attempts: 3,
    backoff: {
      type: 'exponential',
      initialDelay: 1000,
      maxDelay: 10000
    },
    retryableErrors: ['RATE_LIMIT_EXCEEDED', 'TEMPORARY_FAILURE']
  }
}
```

## Caching

Configure response caching:

```typescript
{
  caching: {
    enabled: true,
    ttl: 3600,
    maxSize: 1000,
    invalidation: {
      automatic: true,
      events: ['UPDATE', 'DELETE']
    }
  }
}
```

## Monitoring

Configure monitoring and metrics:

```typescript
{
  monitoring: {
    enabled: true,
    metrics: ['latency', 'throughput', 'errors'],
    exporters: ['prometheus'],
    interval: 60
  }
}
```

## Rate Limiting

Configure rate limiting behavior:

```typescript
{
  rateLimit: {
    enabled: true,
    windowMs: 60000,
    maxRequests: 100,
    strategy: 'token-bucket'
  }
}
```

## Environment Variables

The following environment variables can be used to override configuration:

| Variable | Description |
|----------|-------------|
| `DANIEL_ENV` | Runtime environment |
| `DANIEL_LOG_LEVEL` | Logging level |
| `DANIEL_MAX_CONCURRENCY` | Maximum concurrent operations |
| `DANIEL_TIMEOUT` | Global timeout |

## Configuration File

You can also provide configuration via a `daniel.config.js` file in your project root:

```javascript
module.exports = {
  environment: 'production',
  logLevel: 'info',
  maxConcurrency: 5,
  // ... other options
};
```

## Best Practices

1. **Environment-Specific Configuration**
   - Use different configurations for development and production
   - Never commit sensitive values to version control

2. **Rate Limiting**
   - Always enable rate limiting in production
   - Set conservative limits initially

3. **Monitoring**
   - Enable monitoring in production
   - Configure appropriate alerting thresholds

4. **Caching**
   - Enable caching for frequently accessed data
   - Configure appropriate TTL values 