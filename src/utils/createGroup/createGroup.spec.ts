import { createGroup } from './createGroup';

const listGroup = [
  { name: 'Dan', age: 5 },
  { name: 'Puppy', age: 5 },
  { name: 'Woofer', age: 22 },
  { name: 'Dan', age: 20 },
];

describe('createGroup', () => {
  it('one', () => {
    const byAge = createGroup('age');
    expect(byAge(listGroup)).toEqual({
      entities: {
        '20': [
          {
            age: 20,
            name: 'Dan',
          },
        ],
        '22': [
          {
            age: 22,
            name: 'Woofer',
          },
        ],
        '5': [
          {
            age: 5,
            name: 'Dan',
          },
          {
            age: 5,
            name: 'Puppy',
          },
        ],
      },
      ids: [5, 22, 20],
    });
  });

  it('two', () => {
    const byName = createGroup('name');
    expect(byName(listGroup)).toEqual({
      entities: {
        Dan: [
          {
            age: 5,
            name: 'Dan',
          },
          {
            age: 20,
            name: 'Dan',
          },
        ],
        Puppy: [
          {
            age: 5,
            name: 'Puppy',
          },
        ],
        Woofer: [
          {
            age: 22,
            name: 'Woofer',
          },
        ],
      },
      ids: ['Dan', 'Puppy', 'Woofer'],
    });
  });
});
