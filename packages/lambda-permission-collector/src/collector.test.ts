import fs from 'fs/promises';
import path from 'path';

import { collect } from './collector';

describe('aws-sdk v2', () => {
  test('should collect permissions from a single module', async () => {
    const code = await fs.readFile(
      path.join(__dirname, '../__fixtures__/aws-sdk-v2/simple-s3.ts'),
      'utf-8'
    );

    const permissions = await collect(code);
    expect(permissions).toMatchInlineSnapshot('Object {}');
  });
});
