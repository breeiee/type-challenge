type Last<T extends any[]> = T extends [...any, infer R] ? R : T;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Last<[2]>, 2>>,
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>
];
