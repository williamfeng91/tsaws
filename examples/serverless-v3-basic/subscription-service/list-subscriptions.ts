import { z } from 'zod';

const requestSchema = z.object({
  userId: z.string(),
});

export async function listSubscriptions({
  userId,
}: z.infer<typeof requestSchema>) {
  return [
    {
      id: 'sub1',
      offerId: 'offer1',
      endDate: '2023-12-31T00:00:00.000Z',
    },
    {
      id: 'sub2',
      offerId: 'offer2',
      endDate: '2023-11-11T00:00:00.000Z',
    },
  ];
}
