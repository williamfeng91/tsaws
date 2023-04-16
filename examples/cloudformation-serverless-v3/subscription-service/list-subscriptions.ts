import { z } from 'zod';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, QueryCommand } from '@aws-sdk/lib-dynamodb';
import assert = require('node:assert');

const { SUBSCRIPTIONS_TABLE_NAME, SUBSCRIPTIONS_TABLE_USER_INDEX } =
  process.env;
assert(SUBSCRIPTIONS_TABLE_NAME, 'Missing SUBSCRIPTIONS_TABLE_NAME');
assert(
  SUBSCRIPTIONS_TABLE_USER_INDEX,
  'Missing SUBSCRIPTIONS_TABLE_USER_INDEX',
);

const requestSchema = z.object({
  userId: z.string(),
});

const docClient = DynamoDBDocumentClient.from(new DynamoDBClient({}));

export async function listSubscriptions(event: unknown) {
  const validationResult = requestSchema.safeParse(event);
  if (!validationResult.success) {
    return {
      success: false,
      error: 'Invalid request payload',
      data: validationResult.error.formErrors,
    };
  }
  const { userId } = validationResult.data;

  const queryOutput = await docClient.send(
    new QueryCommand({
      TableName: SUBSCRIPTIONS_TABLE_NAME,
      IndexName: SUBSCRIPTIONS_TABLE_USER_INDEX,
      KeyConditionExpression: '#userId = :userId',
      ExpressionAttributeNames: {
        '#userId': 'userId',
      },
      ExpressionAttributeValues: {
        ':userId': userId,
      },
    }),
  );
  const subscriptions = queryOutput.Items || [];

  return {
    success: true,
    data: subscriptions,
  };
}
