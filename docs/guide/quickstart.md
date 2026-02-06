# Quickstart Guide

## Installation

To integrate Daniel into your project, you'll need to establish the appropriate communication channels:

```bash
npm install @daniel-murnane/core
```

## Basic Usage

Initialize a new instance:

```javascript
import { Daniel } from '@daniel-murnane/core';

const daniel = new Daniel({
  coffeeLevel: 'high',
  timezone: 'Australia/Sydney',
  mode: 'research'
});
```

### Simple Example

Here's a basic example of scheduling a meeting:

```javascript
try {
  const meeting = await daniel.schedule({
    type: 'research-discussion',
    duration: '1h',
    topic: 'Graph Neural Networks'
  });

  console.log(`Meeting scheduled: ${meeting.confirmationCode}`);
} catch (error) {
  if (error.code === 'COFFEE_LEVEL_LOW') {
    console.error('Please wait for coffee break before scheduling');
  }
}
```

## Configuration

Key configuration options:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| coffeeLevel | string | 'medium' | Current caffeine status |
| timezone | string | 'UTC' | Operating timezone |
| mode | string | 'auto' | Current work mode |

## Rate Limits

To ensure optimal performance, the following rate limits apply:

- Max 8 meetings per day
- 4 hour cooldown period between major tasks
- Automatic maintenance window during night hours

## Next Steps

- Read the [Configuration Guide](./configuration) for advanced settings
- Check out [Examples](../examples/) for more use cases
- Review [API Documentation](../api/core) for detailed method references 