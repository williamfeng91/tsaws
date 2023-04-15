import { IntrinsicFunction } from './functions';

export type Value<T> = T | IntrinsicFunction;
export type List<T> = T[] | IntrinsicFunction;
