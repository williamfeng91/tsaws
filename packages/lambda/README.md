<div align="center">
  <h1>@tsaws/lambda</h1>
  <h3>Typesafe lambda invocations. Inspired by tRPC.</h3>
</div>

<br />

## Features

- Typesafety and autocompletion as if you are calling a local function.
- No code generation.
- No runtime overhead.
- Works with any framework of your choice (Serverless, Pulumi, etc.)

## Get Started

### In the callee

1. Simply export the types of the handlers.

   ```diff
   // Your lambda handlers imported
   import { listSubscriptions } from './listSubscriptionsHandler';
   // or defined in the same file
   export async function terminateSubscription(event) {}

   + const handlers = {
   +   listSubscriptions,
   +   terminateSubscription,
   + };
   + export type SubscriptionService = typeof handlers;
   ```

### In the caller

1. ```sh
   npm install --save @tsaws/lambda
   ```

1. ```typescript
   import { createInvoker } from '@tsaws/lambda';
   // Import the types defined in the callee. If they are in the same git repo, you can
   // just import from a relative path. Otherwise you might need to export it as an npm
   // package.
   // Note that this DOES NOT import any code, only the types.
   import type { SubscriptionService } from '@my-org/subscription-service';

   const subscriptionService = createInvoker<SubscriptionService>();

   export async function handler({ userId }) {
     const subscriptions =
       await subscriptionService.listSubscriptions.invokeSync({
         userId,
       });

     return {
       subscriptions,
     };
   }
   ```

1. Pass the callee lambda ARNs as environment variables to the caller. For example with Serverless,
   ```yaml
   functions:
     caller:
       handler: index.handler
       environment:
         # The name comes from uppercasing the method name "listSubscriptions"
         # exported in subscription-service/index.ts and prefixed with "TSAWS_FN_".
         # If you don't want to use this convention, you can also pass the ARNs
         # in the `createInvoker` call.
         TSAWS_FN_LISTSUBSCRIPTIONS: 'subscription-service-${sls:stage}-listSubscriptionsFn'
         TSAWS_FN_TERMINATESUBSCRIPTION: 'subscription-service-${sls:stage}-terminateSubscriptionFn'
   ```
