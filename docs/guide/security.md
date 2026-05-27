# Security Policy

<!-- DANIEL: This is your "Work-Life Balance / Boundaries" page.
     It's a playful "security policy" about your boundaries, availability,
     meeting limits, and self-care practices. Have fun with this one. -->

## Supported Operating Hours

The library operates within defined security boundaries to ensure sustained long-term performance. Exceeding these limits may result in degraded output quality.

| Window | Hours (CET) | Status |
|--------|-------------|--------|
| Deep Work | 09:00 - 12:00 | `FOCUS_MODE` — no interrupts |
| Collaborative | 13:00 - 17:00 | `AVAILABLE` |
| Maintenance | 18:00 - 08:00 | `MAINTENANCE_MODE` |
| Weekend | All day Sat-Sun | `LOW_POWER` |

<!-- DANIEL: Adjust these to your actual preferences and add humor -->

## Rate Limiting

To prevent resource exhaustion, the following rate limits are enforced:

```typescript
instance.setRateLimits({
  meetings: {
    maxPerDay: 4,          // More than this -> cognitive overflow
    maxConsecutive: 2,     // Buffer time required between blocks
    cooldownMinutes: 30    // Minimum gap between meetings
  },
  email: {
    responseTime: '24h',   // Don't expect instant replies
    batchProcessing: true  // Emails processed in batches, not real-time
  },
  slackDMs: {
    responseTime: '4h',    // Faster than email, slower than you'd like
    threads: 'preferred'   // Keep it in the thread
  }
});
```

## Vulnerability Disclosure

<!-- DANIEL: What are your "vulnerabilities"? Weaknesses? Things that crash the system?
     e.g., bad coffee, meetings without agendas, "quick questions" that are actually 2-hour tasks -->

Known vulnerabilities (will not fix):

| Vulnerability | Severity | Mitigation |
|---------------|----------|------------|
| `COFFEE_DEPENDENCY` | Critical | Ensure adequate supply; Danish roasts preferred |
| `MEETING_WITHOUT_AGENDA` | High | Always include an agenda or meeting will be declined |
| `SCOPE_CREEP` | Medium | Define deliverables upfront |
| <!-- add more --> | <!-- --> | <!-- --> |

## Incident Response

If the library becomes unresponsive:

1. Check `coffeeLevel` — replenish if below threshold
2. Verify current `mode` — may be in `DEEP_FOCUS` (do not disturb)
3. Consult the [Troubleshooting Guide](./troubleshooting)
4. If all else fails, try again tomorrow

## Compliance

The library adheres to the following standards:

- **Work-Life Balance Protocol v2.0**: Strict enforcement of off-hours
- **Danish Work Culture Specification**: Leave at 16:30, no guilt
- **Academic Freedom License**: May occasionally disappear into a research rabbit hole

<!-- DANIEL: Add/modify all of the above to match your actual personality and preferences -->
