import { listSubscriptions } from './list-subscriptions';

const handlers = {
  listSubscriptions,
};

export type SubscriptionService = typeof handlers;
