import { ArrayEntityDict, MutableArrayEntityDict } from '../../../typings';

/**
 * O(n) implementation of groupBy
 */
export const groupArrayBy = <K extends keyof T, T extends Record<K, T[K]>>(
  key: K,
  items: ReadonlyArray<T>
) => {
  const result = { entities: {}, ids: [] } as MutableArrayEntityDict<T, T[K]>;

  for (let i = 0; i < items.length; i++) {
    if (result.entities[items[i][key]]) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      result.entities[items[i][key]]!.push(items[i]);
    } else {
      result.entities[items[i][key]] = [items[i]];
      result.ids.push(items[i][key]);
    }
  }

  return result as unknown as ArrayEntityDict<T, T[K]>;
};
