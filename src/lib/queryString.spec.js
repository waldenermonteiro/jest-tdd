const { queryString, parse } = require('./queryString');
describe('Name of the group', () => {
  it('should create a valid query string when an object is provided ', () => {
    const obj = {
      name: 'Fabio',
      profession: 'developer',
    };
    expect(queryString(obj)).toBe('name=Fabio&profession=developer');
  });

  it('should create a valid query string when an array is passed as value ', () => {
    const obj = {
      name: 'Fabio',
      abilities: ['JS', 'TDD'],
    };
    expect(queryString(obj)).toBe('name=Fabio&abilities=JS,TDD');
  });

  it('should throw an error when an object is passed as value ', () => {
    const obj = {
      name: 'Fabio',
      abilities: { first: 'JS', second: 'TDD' },
    };
    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to object ', () => {
    const qs = 'name=Fabio&profession=developer';
    expect(parse(qs)).toEqual({
      name: 'Fabio',
      profession: 'developer',
    });
  });

  it('should convert a query string of a single key-value ', () => {
    const qs = 'name=Fabio';
    expect(parse(qs)).toEqual({
      name: 'Fabio',
    });
  });

  it('should convert a query string to an object taking care of comma separated value', () => {
    const qs = 'name=Fabio&abilities=JS,TDD';
    expect(parse(qs)).toEqual({
      name: 'Fabio',
      abilities: ['JS', 'TDD'],
    });
  });
});
