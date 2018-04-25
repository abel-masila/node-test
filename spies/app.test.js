const expect=require('expect');
const rewire=require('rewire');

const app=rewire('./app');

describe("App",()=>{
    const db={
        saveUser: expect.createSpy()
    };
    app.__set__('db',db);

    it('should the spy correctly',()=>{
        const spy =expect.createSpy();
        spy("Andrew",25);
        expect(spy).toHaveBeenCalledWith("Andrew",25);
    });
    it('should call saveUser with user object',()=>{
        const email="abel@gmail.com";
        const password='12356';
        app.handleSignup(email,password);
        expect(db.saveUser).toHaveBeenCalledWith({email,password})
    })
});