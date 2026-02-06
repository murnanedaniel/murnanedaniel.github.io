# Best Practices

This guide outlines recommended practices for using the library effectively in production environments.

## Architecture

### Instance Management

1. **Singleton Pattern**
   ```typescript
   // DO: Create a single instance for your application
   const instance = new Daniel();
   export default instance;

   // DON'T: Create multiple instances unnecessarily
   function someFunction() {
     const instance = new Daniel(); // Bad practice
   }
   ```

2. **Configuration Management**
   ```typescript
   // DO: Use environment-specific configuration
   const instance = new Daniel({
     environment: process.env.NODE_ENV,
     logLevel: process.env.NODE_ENV === 'production' ? 'info' : 'debug'
   });

   // DON'T: Hardcode configuration
   const instance = new Daniel({
     environment: 'production', // Bad practice
     logLevel: 'debug'         // Bad practice
   });
   ```

## Resource Management

### Memory Usage

1. **Batch Processing**
   ```typescript
   // DO: Process large datasets in batches
   const items = await getLargeDataset();
   for (const batch of chunk(items, 100)) {
     await instance.processBatch(batch);
   }

   // DON'T: Process everything at once
   await instance.processBatch(items); // May cause memory issues
   ```

2. **Resource Cleanup**
   ```typescript
   // DO: Use the withResource pattern
   await instance.withResource('database', async (db) => {
     await db.query(/* ... */);
   }); // Resources automatically cleaned up

   // DON'T: Manually manage resources
   const db = await instance.getResource('database');
   try {
     await db.query(/* ... */);
   } finally {
     await db.release(); // Error-prone
   }
   ```

## Error Handling

### Retry Strategies

1. **Exponential Backoff**
   ```typescript
   // DO: Use exponential backoff for retries
   const task = await instance.createTask({
     retryStrategy: {
       attempts: 3,
       backoff: {
         type: 'exponential',
         initialDelay: 1000
       }
     }
   });

   // DON'T: Use fixed delays
   const task = await instance.createTask({
     retryStrategy: {
       attempts: 3,
       delay: 1000 // Less effective
     }
   });
   ```

2. **Error Classification**
   ```typescript
   // DO: Handle different error types appropriately
   try {
     await instance.processTask(task);
   } catch (error) {
     if (error instanceof RateLimitError) {
       await handleRateLimit(error);
     } else if (error instanceof ValidationError) {
       await handleValidation(error);
     } else {
       throw error; // Rethrow unknown errors
     }
   }

   // DON'T: Catch all errors without discrimination
   try {
     await instance.processTask(task);
   } catch (error) {
     console.error(error); // Bad practice
   }
   ```

## Performance

### Caching

1. **Strategic Caching**
   ```typescript
   // DO: Cache expensive operations
   const result = await instance.withCache('expensive-op', async () => {
     return await performExpensiveOperation();
   }, { ttl: 3600 });

   // DON'T: Cache everything
   const result = await instance.withCache('simple-op', async () => {
     return 1 + 1; // Unnecessary caching
   });
   ```

2. **Cache Invalidation**
   ```typescript
   // DO: Use specific cache invalidation
   await instance.invalidateCache('user:' + userId);

   // DON'T: Clear entire cache
   await instance.clearCache(); // Too broad
   ```

## Monitoring

### Metrics Collection

1. **Custom Metrics**
   ```typescript
   // DO: Track business-relevant metrics
   instance.trackMetric('order_processing_time', timer.elapsed(), {
     customer: order.customerId,
     region: order.region
   });

   // DON'T: Track everything
   instance.trackMetric('function_called', 1); // Too generic
   ```

2. **Health Checks**
   ```typescript
   // DO: Implement meaningful health checks
   instance.addHealthCheck('database', async () => {
     const result = await testDatabaseConnection();
     return {
       status: result.connected ? 'healthy' : 'unhealthy',
       latency: result.latency,
       details: result.metadata
     };
   });

   // DON'T: Use simplistic checks
   instance.addHealthCheck('service', () => true); // Too simple
   ```

## Security

### Authentication

1. **Token Management**
   ```typescript
   // DO: Use secure token handling
   instance.setAuthStrategy(new OAuth2Strategy({
     secure: true,
     tokenRefreshWindow: 300 // Refresh 5 mins before expiry
   }));

   // DON'T: Use basic auth in production
   instance.setAuthStrategy(new BasicAuthStrategy()); // Insecure
   ```

2. **Sensitive Data**
   ```typescript
   // DO: Use secure configuration
   instance.setCredentials({
     type: 'vault',
     path: 'secrets/api-keys'
   });

   // DON'T: Hardcode credentials
   instance.setApiKey('1234567890'); // Never do this
   ```

## Testing

### Test Organization

1. **Test Categories**
   ```typescript
   // DO: Organize tests by category
   describe('Task Processing', () => {
     describe('Validation', () => {
       it('should validate input');
     });
     describe('Processing', () => {
       it('should process valid input');
     });
   });

   // DON'T: Mix concerns
   describe('Tasks', () => {
     it('should do everything'); // Too broad
   });
   ```

2. **Mock Usage**
   ```typescript
   // DO: Use meaningful mocks
   const mockResource = {
     process: jest.fn().mockImplementation(async (data) => {
       // Simulate actual behavior
       return transform(data);
     })
   };

   // DON'T: Use empty mocks
   const mockResource = {
     process: jest.fn() // Too simple
   };
   ```

## Deployment

### Version Management

1. **Dependency Management**
   ```typescript
   // DO: Lock dependency versions
   {
     "dependencies": {
       "@daniel-murnane/core": "^2.1.0"
     }
   }

   // DON'T: Use latest
   {
     "dependencies": {
       "@daniel-murnane/core": "*" // Dangerous
     }
   }
   ```

2. **Feature Flags**
   ```typescript
   // DO: Use feature flags for rollouts
   instance.setFeatureFlags({
     newAlgorithm: process.env.ENABLE_NEW_ALGORITHM === 'true',
     beta: user.isBetaTester
   });

   // DON'T: Use environment checks
   if (process.env.NODE_ENV === 'staging') { // Inflexible
     useNewAlgorithm();
   }
   ``` 