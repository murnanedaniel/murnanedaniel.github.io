# Best Practices

<!-- DANIEL: This is your "Mentoring & Advising" page.
     Frame your mentoring philosophy as "best practices for getting optimal performance
     from the library." What have you learned about working with students, postdocs,
     collaborators? What advice do you give? -->

This guide outlines recommended practices for achieving optimal performance when working with the library.

## Getting Started with the Library

<!-- DANIEL: Advice for new students/collaborators joining your group or working with you -->

### For New Users (Students)

```typescript
// DO: Start with a well-defined problem
const project = await daniel.mentor({
  level: 'student',
  approach: 'guided',
  scope: 'well-defined',
  meetingFrequency: 'weekly'
});

// DON'T: Try to solve everything at once
const project = await daniel.mentor({
  scope: 'boil-the-ocean'  // SCOPE_OVERFLOW error
});
```

**Key principles:**
<!-- DANIEL: What do you tell new students? -->

1. <!-- Principle 1 -->
2. <!-- Principle 2 -->
3. <!-- Principle 3 -->

### For Experienced Users (Collaborators)

```typescript
const collaboration = await daniel.collaborate({
  mode: 'peer-to-peer',
  communication: 'async-first',
  codeReview: true,
  whiteboard: 'on-demand'
});
```

## Research Workflow

<!-- DANIEL: Your recommended research workflow / methodology -->

### The Ideal Pipeline

1. **Start with the physics** — What question are you actually trying to answer?
2. **Literature review** — What has been tried? (Check arXiv, not just Google)
3. **Prototype fast** — Get a minimal version working before optimizing
4. **Measure everything** — If you can't plot it, you don't understand it
5. **Write as you go** — The paper is not something you do "at the end"

<!-- Modify the above to match your actual philosophy -->

### Common Anti-Patterns

```typescript
// Anti-pattern: Premature optimization
const model = new GNN({ layers: 47, features: 2048 });
// Start simple. Add complexity only when the simple version fails.

// Anti-pattern: Training without understanding
model.fit(data);  // "It works!" — but do you know WHY?

// Best practice: Understand, then scale
const baseline = new SimpleModel();
const results = await baseline.evaluate(data);
// Now you have something to compare against.
```

## Communication Protocols

<!-- DANIEL: How do you prefer to communicate? Meeting style? Email vs Slack? -->

| Method | Best For | Response SLA |
|--------|----------|-------------|
| Email | Formal requests, paper drafts | <!-- timeframe --> |
| Slack/Mattermost | Quick questions, links | <!-- timeframe --> |
| In-person | Whiteboarding, debugging, brainstorming | <!-- how to schedule --> |
| Video call | Remote collaboration | <!-- how to schedule --> |

## Supervision Style

<!-- DANIEL: What's your mentoring/supervision philosophy? What can students expect? -->

```typescript
const supervisionConfig = {
  style: 'collaborative',
  meetings: {
    frequency: 'weekly',
    duration: '1h',
    format: 'discussion-not-status-update'
  },
  expectations: {
    independence: 'high',
    communication: 'proactive',
    mistakes: 'encouraged-and-expected'
  }
};
```

## Teaching Philosophy

<!-- DANIEL: Brief section on how you approach teaching -->

<!-- Write about your teaching approach, courses you've taught, what you value in education -->
