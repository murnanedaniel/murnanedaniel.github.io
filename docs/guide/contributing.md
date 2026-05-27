# Contributing Guide

<!-- DANIEL: This is your "Collaboration Guide" — how to work with you.
     Frame collaboration opportunities as "contributing to the project."
     Include: how to co-author papers, join projects, hire you, collaborate. -->

Thank you for your interest in contributing to `@daniel-murnane/core`! This document outlines how to collaborate, co-author, and integrate with the library.

## Ways to Contribute

### Research Collaboration

```typescript
const collaboration = await daniel.propose({
  type: 'research',
  topic: 'your-idea-here',
  format: 'paper' | 'project' | 'grant',
  timeline: '6-12 months'
});
```

**Open to collaborations involving:**
- <!-- List your collaboration interests -->
- Graph neural networks for scientific applications
- ML for particle physics (especially tracking/reconstruction)
- <!-- More topics -->

**How to propose:** <!-- How should people reach out? -->

### Student Projects

```typescript
const project = await daniel.supervise({
  level: 'masters' | 'phd' | 'bachelor',
  topic: 'negotiable',
  prerequisites: ['python', 'basic-ml', 'curiosity'],
  location: 'Copenhagen'
});
```

<!-- DANIEL: Are you currently supervising? Looking for students? What topics? -->

**Available project areas:**
- <!-- List potential student project topics -->

### Speaking & Workshops

```typescript
const talk = await daniel.book({
  type: 'seminar' | 'workshop' | 'keynote' | 'tutorial',
  topics: [
    'GNNs for particle tracking',
    'ML in ATLAS',
    'physics-informed ML',
    // add your talk topics
  ],
  format: 'in-person' | 'remote' | 'hybrid'
});
```

<!-- DANIEL: Your talk booking policy -->

### Code Contributions

Contributions to open-source projects are always welcome:

| Repository | Description | Contribution Guide |
|-----------|-------------|-------------------|
| <!-- repo 1 --> | <!-- desc --> | <!-- link --> |
| <!-- repo 2 --> | <!-- desc --> | <!-- link --> |

## Contact Protocols

<!-- DANIEL: How should people get in touch? -->

| Purpose | Channel | Expected Response |
|---------|---------|-------------------|
| Research collaboration | <!-- email? --> | <!-- timeframe --> |
| Speaking invitation | <!-- email? --> | <!-- timeframe --> |
| Student inquiry | <!-- email? --> | <!-- timeframe --> |
| Quick question | <!-- twitter/bluesky? --> | <!-- timeframe --> |

## Pull Request Process

<!-- DANIEL: For actual code contributions to your projects -->

1. **Check existing issues** — Someone may already be working on it
2. **Open an issue first** — Let's discuss before you code
3. **Follow the style guide** — Match the existing patterns
4. **Write tests** — If it's not tested, it doesn't work
5. **Be patient** — Review cycles in academia can be... measured in geological time

## License

By contributing, you agree that your contributions will be acknowledged via co-authorship, citation, or acknowledgment as appropriate to the contribution level and academic norms.
