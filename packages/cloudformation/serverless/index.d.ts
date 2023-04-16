import type { AWS as ServerlessAWS } from '@serverless/typescript';
import type { Resource } from '../types';

type ServerlessResources = NonNullable<
  NonNullable<ServerlessAWS['resources']>['Resources']
>;

export type Resources = ServerlessResources & {
  [resourceName: string]: Resource &
    Exclude<ServerlessResources[string], 'Type' | 'Properties'>;
};

export type AWS = ServerlessAWS & {
  resources?: NonNullable<ServerlessAWS['resources']> & {
    Resources?: Resources;
  };
};
