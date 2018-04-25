const utils=require('./utils');

it('should add two numbers',()=>{
    const result=utils.add(30,60);
    if(result!==90){
        throw new Error(`Expected 90, but got ${result}`);
    }
})
it('should square a number',()=>{
    const result=utils.square(2);
    if(result!==4){
        throw new Error(`Expected 4, but got ${result}`);
    }
})