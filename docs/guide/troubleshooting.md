# Troubleshooting

<!-- DANIEL: This is your "FAQ" page, reframed as troubleshooting/error codes.
     Common questions people ask you, reframed as "errors" with "solutions."
     This is a great place for personality and humor. -->

This guide helps diagnose and resolve common issues encountered when interacting with the library.

## Common Error Codes

### `COFFEE_LEVEL_LOW`

**Symptom:** Slow response times, reduced output quality, increased typo rate.

**Solution:**
```typescript
// Check current levels
const status = await daniel.getCoffeeLevel();
// => { level: 'critically-low', nextRefill: '10:30 CET' }

// Resolution: wait for automatic refill cycle, or provide external coffee
await daniel.refuel({ type: 'flat-white', origin: 'specialty' });
```

### `CONTEXT_SWITCH_ERROR`

**Symptom:** Confused responses after rapid topic changes.

**Solution:** Allow a minimum 15-minute buffer between unrelated tasks. The library performs best with extended single-topic sessions.

### `TIMEZONE_MISMATCH`

**Symptom:** Meeting scheduled at 3 AM CET.

**Solution:**
```typescript
// Always check timezone before scheduling
console.log(daniel.timezone); // => 'Europe/Copenhagen'
// Note: The library was compiled in Australia but is deployed in Denmark.
// It still occasionally emits timestamps in AEST during periods of homesickness.
```

## Frequently Encountered Issues

### "What exactly do you research?"

<!-- DANIEL: Your elevator pitch, framed as a troubleshooting answer -->

**Error:** `RESEARCH_DESCRIPTION_UNDERFLOW` — Insufficient context provided.

**Resolution:** <!-- Write your 2-3 sentence elevator pitch here -->

### "What's a Graph Neural Network?"

**Error:** `PREREQUISITE_MISSING` — Concept not found in caller's knowledge base.

**Resolution:** <!-- Your go-to explanation of GNNs for non-experts -->

### "How is ML used in particle physics?"

**Error:** `DOMAIN_BRIDGE_REQUIRED` — Cross-domain translation needed.

**Resolution:** <!-- Your bridge explanation for CS people who don't know physics, or physicists who don't know ML -->

### "Are you available for [talk/seminar/workshop]?"

**Status:** Generally `AVAILABLE` — check current capacity:

```typescript
const availability = await daniel.checkAvailability({
  type: 'talk',
  format: ['in-person', 'remote', 'hybrid'],
  topics: ['GNNs', 'tracking', 'ML-for-physics', 'open-science']
});
```

<!-- DANIEL: Add your actual policy on giving talks -->

### "Can I join your group / collaborate?"

<!-- DANIEL: How do people get involved? What are you looking for? -->

**Resolution:** See the [Contributing Guide](./contributing) for collaboration protocols.

## Debug Mode

If unexpected behavior persists, enable verbose logging:

```typescript
const daniel = new Daniel({
  debug: true,
  logLevel: 'verbose',
  // Warning: may produce excessive output about particle physics
});
```

<!-- DANIEL: Add more FAQ items as they come to mind. The format is flexible —
     anything can be an "error code" with a "solution." -->
