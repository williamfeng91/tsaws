import { z } from 'zod';
import { createInvoker } from '@tsaws/lambda';
import type { SubscriptionService } from '../subscription-service';

const requestSchema = z.object({
  userId: z.string(),
});

const subscriptionService = createInvoker<SubscriptionService>();

export async function getUserDetails({
  userId,
}: z.infer<typeof requestSchema>) {
  const [userProfile, subscriptions] = await Promise.all([
    getUserProfileFromDB(userId),
    subscriptionService.listSubscriptions.invokeSync({
      userId,
    }),
  ]);

  return {
    ...userProfile,
    subscriptions,
  };
}

async function getUserProfileFromDB(userId: string) {
  return {
    id: userId,
    name: 'John Doe',
  };
}
