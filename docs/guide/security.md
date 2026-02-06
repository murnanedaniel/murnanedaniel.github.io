# Security Policy

## Supported Versions

Only the latest major version receives security updates. Minor versions receive updates for 6 months after release.

| Version | Supported          |
| ------- | ------------------ |
| 2.1.x   | :white_check_mark: |
| 2.0.x   | :white_check_mark: |
| 1.2.x   | :x:                |
| < 1.2   | :x:                |

## Reporting a Vulnerability

We take security vulnerabilities seriously. Please follow these steps to report a vulnerability:

1. **DO NOT** open a public issue on GitHub
2. Email security@daniel-core.dev with:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Affected versions

We will acknowledge receipt within 24 hours and provide a detailed response within 72 hours.

## Security Best Practices

### Authentication

1. **API Key Management**
   ```typescript
   // DO: Use environment variables
   const instance = new Daniel({
     apiKey: process.env.DANIEL_API_KEY
   });

   // DON'T: Hardcode credentials
   const instance = new Daniel({
     apiKey: 'secret-key-123' // NEVER do this
   });
   ```

2. **Token Rotation**
   ```typescript
   // Implement regular token rotation
   instance.setTokenRotation({
     interval: '7d',
     overlap: '1h'
   });
   ```

### Data Protection

1. **Sensitive Data Handling**
   ```typescript
   // Use built-in encryption for sensitive data
   instance.setSensitiveFields(['ssn', 'creditCard']);
   ```

2. **Data Sanitization**
   ```typescript
   // Always sanitize input
   instance.use(new InputSanitizer());
   ```

### Network Security

1. **TLS Configuration**
   ```typescript
   instance.setTlsConfig({
     minVersion: 'TLSv1.2',
     ciphers: ['TLS_AES_128_GCM_SHA256'],
     verifyPeer: true
   });
   ```

2. **Request Signing**
   ```typescript
   instance.setRequestSigning({
     algorithm: 'sha256',
     includeHeaders: ['date', 'host'],
     expiry: '15m'
   });
   ```

## Security Features

### Rate Limiting

```typescript
instance.setRateLimits({
  global: {
    maxRequests: 1000,
    windowMs: 60000
  },
  perIp: {
    maxRequests: 100,
    windowMs: 60000
  },
  perToken: {
    maxRequests: 500,
    windowMs: 60000
  }
});
```

### Input Validation

```typescript
instance.setValidationRules({
  input: {
    maxSize: '1mb',
    allowedTypes: ['application/json'],
    sanitize: true
  },
  fields: {
    email: 'email',
    phone: 'phone',
    url: 'url'
  }
});
```

### Audit Logging

```typescript
instance.setAuditLogging({
  enabled: true,
  events: ['auth', 'data-access', 'config-change'],
  retention: '90d',
  destination: 's3://audit-logs'
});
```

## Compliance

### Data Privacy

1. **GDPR Compliance**
   ```typescript
   instance.setPrivacySettings({
     dataRetention: '30d',
     userConsent: true,
     rightToErasure: true
   });
   ```

2. **Data Encryption**
   ```typescript
   instance.setEncryption({
     atRest: {
       algorithm: 'AES-256-GCM',
       keyRotation: '90d'
     },
     inTransit: {
       tls: true,
       minVersion: 'TLSv1.2'
     }
   });
   ```

### Access Control

1. **Role-Based Access**
   ```typescript
   instance.setRbacPolicy({
     roles: {
       admin: ['read', 'write', 'delete'],
       user: ['read', 'write'],
       guest: ['read']
     },
     default: 'guest'
   });
   ```

2. **IP Restrictions**
   ```typescript
   instance.setIpRestrictions({
     allowlist: ['10.0.0.0/8'],
     denylist: ['192.168.1.0/24'],
     defaultPolicy: 'deny'
   });
   ```

## Incident Response

### Detection

```typescript
instance.setSecurityMonitoring({
  alerts: {
    bruteForce: {
      threshold: 5,
      window: '5m',
      action: 'block'
    },
    unusualActivity: {
      enabled: true,
      sensitivity: 'high'
    }
  }
});
```

### Response

1. **Automatic Blocking**
   ```typescript
   instance.setBlockingRules({
    conditions: [
      { type: 'rate-limit-exceeded', duration: '1h' },
      { type: 'invalid-auth', attempts: 5, duration: '24h' }
    ]
   });
   ```

2. **Notifications**
   ```typescript
   instance.setSecurityNotifications({
    channels: ['email', 'slack'],
    severity: ['high', 'critical'],
    recipients: ['security-team@company.com']
   });
   ```

## Regular Updates

Keep your dependencies up to date:
```bash
# Check for security updates
npm audit

# Update dependencies
npm update @daniel-murnane/core
```

## Security Checklist

- [ ] Enable TLS for all connections
- [ ] Configure proper authentication
- [ ] Set up rate limiting
- [ ] Enable audit logging
- [ ] Configure input validation
- [ ] Set up monitoring and alerts
- [ ] Review security policies regularly
- [ ] Keep dependencies updated
- [ ] Train team on security practices
- [ ] Document incident response procedures 