const { queryString } = require('./queryString')
describe('Name of the group', () => {
    it('should create a valid query string when an object is ', () => {

        const obj = {
            name: 'Fabio',
            profession: 'developer'
        }
        expect(queryString(obj)).toBe('name=Fabio&profession=developer')
        
    });
})