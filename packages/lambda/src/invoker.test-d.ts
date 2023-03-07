import { createInvoker } from './invoker';

describe('createInvoker', () => {
  test('should have correct types', () => {
    expectTypeOf(createInvoker).toBeFunction();
    expectTypeOf(
      createInvoker<{
        listSubscriptions: (event: {
          userId: string;
        }) => Promise<{ id: string }[]>;
      }>()
    ).toEqualTypeOf<{
      listSubscriptions: {
        invokeSync: (event: { userId: string }) => Promise<{ id: string }[]>;
        invokeAsync: (event: { userId: string }) => Promise<void>;
      };
    }>();
  });
});
