const utils=require('./utils');
const expect=require('expect');

describe('Utils',()=>{
    it('should add two numbers',()=>{
        const result=utils.add(30,60);
        expect(result).toBe(90);
        expect(typeof result).toBe('number');
    })
    it('should square a number',()=>{
        const result=utils.square(2);
        expect(result).toBe(4);
        expect(typeof result).toBe('number');
    })
    it("should expect some values",()=>{
        expect(12).not.toBe(11)
    })
    it('should async add two numbers',(done)=>{
        utils.asyncAdd(3,4,(sum)=>{
            expect(sum).toBe(7);
            expect(typeof sum).toBe('number');
            done();
        })
    })
    it('should async square a number',(done)=>{
        utils.asyncSquare(3, (square)=>{
            expect(square).toBe(9);
            expect(typeof square).toBe('number');
            done();
        })
    })
})
