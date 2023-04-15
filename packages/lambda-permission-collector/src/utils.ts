export function impossible(value: never): never {
  throw new Error(`Impossible value ${value}`);
}
