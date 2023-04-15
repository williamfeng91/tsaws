import type { IntrinsicFunctionGetAtt } from '../shared-types/functions';
import type { Resource } from '../types';
import type { ResourceAttributeMap } from '../types/resource-attributes';

export function GetAtt<
  TResources extends Record<
    string,
    {
      Type: Resource['Type'];
    }
  >,
  TResourceName extends keyof TResources & string,
>(
  resources: TResources,
  resourceName: TResourceName,
  attributeName: ResourceAttributeMap[(typeof resources)[typeof resourceName]['Type']],
) {
  return {
    'Fn::GetAtt': [resourceName, attributeName],
  } satisfies IntrinsicFunctionGetAtt;
}
