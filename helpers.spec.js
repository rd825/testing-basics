// 1. pre-test: summarize what your fx does
// 2. pre-test: write function signature (I/Os)
// 3. Get Red: write test, fails
// 4. Get Green: write fix, passes
// 5. Refactor: (optional), make it better, keep green

const {reverseString} = require('./helpers');

describe('Jest', () => {
    test('Jest runs', () => {
        // Arrange: set up the world
        // Act: execute the code
        // Assert: check that it works
    })    
})

describe('Reverse String', () => {
  beforeEach(() => {
      console.log('running');
  })

  test('returns a string', () => {
      const input = 'rahul';
      const result = reverseString(input);

      expect(typeof result === 'string').toBeTruthy();
  })

  test('throws error for non-string', () => {
    expect(() => reverseString(['hello'])).toThrow();
  })
  

  test('reverses', () => {
      // Arrange: set up the world
      const input = 'murder'
      const expected = 'redrum'
      
      // Act: execute the code
      const result = reverseString(input)
      
      // Assert: check that it works
      expect(result).toBe(expected);
  })
})



test('uses matchers correctly', () => {
    expect(2+2).toBe(4);
    const obj1 = {name: 'Jasmine', school: {name: 'Lambda'}};
    const obj2 = {name: 'Jasmine', school: {name: 'Lambda'}};
    expect(obj1).toEqual(obj2);
})

// toBe checks for same reference
// toEqual checks for (deep) equality

// test is more used in TDD
// it is more used in BDD
// not enough difference to worry about