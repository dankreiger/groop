# groop

Normalize an array of objects by a property.

Both lists and single objects can be normalized.

## Usage

```ts
import { createArrayGroup } from '@dankreiger/groop';

const listGroup = [
  { name: 'Dan', age: 5 },
  { name: 'Puppy', age: 5 },
  { name: 'Woofer', age: 22 },
  { name: 'Dan', age: 20 },
];

const byAge = createArrayGroup('age');

byAge(listGroup);
/**
 *  {
 *    entities: {
 *      '20': [
 *        {
 *          age: 20,
 *          name: 'Dan',
 *        },
 *      ],
 *      '22': [
 *        {
 *          age: 22,
 *          name: 'Woofer',
 *        },
 *      ],
 *      '5': [
 *        {
 *          age: 5,
 *          name: 'Dan',
 *        },
 *        {
 *          age: 5,
 *          name: 'Puppy',
 *        },
 *      ],
 *    },
 *    ids: [5, 22, 20],
 *  }
 */

const byName = createArrayGroup('name');

byName(listGroup);

/**
 * {
 *   entities: {
 *     Dan: [
 *       { name: 'Dan', age: 5 },
 *       { name: 'Dan', age: 20 }
 *     ],
 *     Puppy: [ { name: 'Puppy', age: 5 } ],
 *     Woofer: [ { name: 'Woofer', age: 22 } ]
 *   },
 *   ids: [ 'Dan', 'Puppy', 'Woofer' ]
 *  }
 */
```

```ts
import { createGroup } from '@dankreiger/groop';

const singleGroup = { name: 'Dan', age: 5 };

const byAge = createGroup('age');

byAge(singleGroup);

/**
 * {
 *   entities: {
 *     '5': { name: 'Dan', age: 5 }
 *   },
 *   ids: [5]
 * }
 */

const byName = createGroup('name');

byName(singleGroup);

/**
 * {
 *   entities: {
 *     Dan: { name: 'Dan', age: 5 }
 *   },
 *   ids: ['Dan']
 * }
 */
```
