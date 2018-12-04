/**
 * Scenario Planning for User Stories
 * 
 * as a ROLE
 * I WANT to do something in the system
 * SO THAT I can achieve some goal / value
 * 
 * GIVEN
 *  AND
 *  AND
 * WHEN
 *  AND
 *  AND
 * THEN
 *  AND
 *  AND
 */


const helpers = require('./day2');

describe('Helpers Library', () => {
    describe('areSameLength function', () => {
        it('given 2 strs equal in length, returns true', () => {
            const result = helpers.areSameLength('str1', 'str2');
            expect(result).toBe(true);
        })
    
        it('given 2 strs unequal in length, returns false', () => {
            const result = helpers.areSameLength('hello', 'gobbledygook');
            expect(result).toBe(false);
        })

        it('should return null when any of the arguments are not of type strings', () => {
            expect(helpers.areSameLength('1', 1)).toBe(null);
            expect(helpers.areSameLength([], 'a')).toBe(null);
            expect(helpers.areSameLength('1', {})).toBe(null);
        })

        it('should return undefined when any of the arguments are falsy', () => {
            expect(helpers.areSameLength()).toBe(undefined);
            expect(helpers.areSameLength('a')).toBe(undefined);
            expect(helpers.areSameLength('1', null)).toBe(undefined);
            expect(helpers.areSameLength('1', NaN)).toBe(undefined);
        })


        it('the type of NaN should be number', () => {
            expect(typeof NaN).toBe('number');
        })
    })
})