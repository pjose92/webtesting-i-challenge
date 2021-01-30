const { succeed, repair, fail, get } = require('./enhancer.js');
// test away!
describe('enhancing system', () => {
    describe('repair()', () => {
        it('should restore durability to 100', () => {
            const item = {
                durability: 0
            }
            const item2 = {
                durability: 10
            }
            expect(repair(item).durability).toBe(100)
            expect(repair(item2).durability).toBe(100)       
        });
    });
    describe('succeed()', () => {
        it('should increase enhancement by 1 up to 20, durability is unchanged', () => {
            const item = {
                enhancement: 15
            }
            const item2 = {
                enhancement: 20
            }
            expect(succeed(item).enhancement).toBe(16)
            expect(succeed(item2).enhancement).toBe(20)
        });
    });
    describe('fail()', () => {
        it('should decrease durability and enhancement', () => {
            const item = {
                enhancement: 14,
                durability: 80
            }
            const item2 = {
                enhancement: 15,
                durability: 20
            }
            const item3 = {
                enhancement: 19
            }
            expect(fail(item).durability).toBe(75)
            expect(fail(item2).durability).toBe(10)
            expect(fail(item3).enhancement).toBe(18)
        });
    }); 
});