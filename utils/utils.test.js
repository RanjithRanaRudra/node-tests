
const utils = require('./utils');
const expect = require('expect');
//  createSpy, spyOn, isSpy

describe('Utils', () => {
    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33,11);
            expect(res).toBe(44).toBeA('number');
        });
        it('should async add two numbers', (done) => {
            utils.asyncAdd(4, 3, (sum)=> {
                expect(sum).toBe(7).toBeA('number');
                done();
            });
        });
    });
    describe('#square', () => {
        it('should square a number', () => {
            var res = utils.square(25);
            expect(res).toBe(625).toBeA('number');
        });
        it('should async square a number', (done) => {
            utils.asyncSquare(25, (square) => {
                expect(square).toBe(625).toBeA('number');
                done();
            });
        });
    });
    
    // toNotBe, toInclude, toExclude, toEqual, tonotEqual
    
    it('should include firstName and lastName', ()=> {
        var user = {
            location: 'philadelphia',
            age: 25
        };
        var res = utils.setName(user, 'Itikala SriSasanka');
        expect(res.firstName).toBe('Itikala').toBeA('string');
        expect(res.lastName).toBe('SriSasanka').toBeA('string');
    
        expect(res).toInclude({
            firstName: 'Itikala',
            lastName: 'SriSasanka'
        });
    });
});

