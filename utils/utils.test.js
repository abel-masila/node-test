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
        expect(result).toBe(4).toBeA('number')
    })
    it("should expect some values",()=>{
        expect(12).toNotBe(11)
    })
    it('should async add two numbers',(done)=>{
        utils.asyncAdd(3,4,(sum)=>{
            expect(sum).toBe(7).toBeA('number');
            done();
        })
    })
    it('should async square a number',(done)=>{
        utils.asyncSquare(3, (square)=>{
            expect(square).toBe(9).toBeA('number');
            done();
        })
    })
})
