# Contributing Guide

Thank you for your interest in contributing to this project! This document provides guidelines and instructions for contributing.

## Code of Conduct

This project adheres to the Contributor Covenant Code of Conduct. By participating, you are expected to uphold this code.

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/daniel-core.git
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Setup

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)
- TypeScript (v4.5 or higher)

### Environment Setup

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Configure your development environment variables

### Running Tests

```bash
# Run all tests
npm test

# Run specific test suite
npm test -- --grep "API Tests"

# Run with coverage
npm run test:coverage
```

## Pull Request Process

1. **Branch Naming**
   - Feature: `feature/description`
   - Bug fix: `fix/description`
   - Documentation: `docs/description`
   - Performance: `perf/description`

2. **Commit Messages**
   Follow conventional commits specification:
   ```
   feat: add new scheduling algorithm
   fix: resolve race condition in task queue
   docs: update API documentation
   perf: optimize batch processing
   ```

3. **Before Submitting**
   - Update documentation
   - Add/update tests
   - Run the test suite
   - Update the changelog
   - Ensure CI passes

4. **Pull Request Template**
   ```markdown
   ## Description
   Brief description of changes

   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Breaking change
   - [ ] Documentation update

   ## Testing
   Description of testing done

   ## Checklist
   - [ ] Tests added/updated
   - [ ] Documentation updated
   - [ ] Changelog updated
   ```

## Style Guide

### Code Style

- Use TypeScript for all new code
- Follow the existing code style
- Use ESLint and Prettier configurations provided
- Maximum line length: 100 characters

### TypeScript Guidelines

```typescript
// Use explicit types
function processTask(task: Task): Promise<Result> {
  // ...
}

// Use interfaces for complex objects
interface TaskOptions {
  priority: Priority;
  deadline: Date;
  tags?: string[];
}

// Use enums for fixed values
enum Priority {
  Low = 'low',
  Medium = 'medium',
  High = 'high'
}
```

### Documentation Style

- Use JSDoc for all public APIs
- Include examples for non-obvious functionality
- Keep explanations clear and concise

```typescript
/**
 * Processes a batch of tasks concurrently
 * @param tasks - Array of tasks to process
 * @param options - Processing options
 * @returns Promise resolving to processed results
 * @throws {RateLimitError} When rate limit is exceeded
 */
async function processBatch(
  tasks: Task[],
  options: BatchOptions
): Promise<Result[]> {
  // ...
}
```

## Testing Guidelines

1. **Unit Tests**
   - One test file per source file
   - Use descriptive test names
   - Follow AAA pattern (Arrange, Act, Assert)

2. **Integration Tests**
   - Test real-world scenarios
   - Use mock data when appropriate
   - Clean up after tests

3. **Performance Tests**
   - Include benchmarks for critical paths
   - Test with realistic data volumes

## Release Process

1. **Version Bump**
   ```bash
   npm version [patch|minor|major]
   ```

2. **Changelog Update**
   - Add all notable changes
   - Group by type (Added, Changed, Fixed)
   - Include migration notes if needed

3. **Release Checklist**
   - [ ] All tests passing
   - [ ] Documentation updated
   - [ ] Changelog updated
   - [ ] Version bumped
   - [ ] Git tag created
   - [ ] npm package published

## Getting Help

- Open an issue for bugs
- Discussions for questions
- Pull requests for code changes

## License

By contributing, you agree that your contributions will be licensed under the project's MIT License. 