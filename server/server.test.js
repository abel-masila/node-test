const request=require('supertest');
 const app= require('./server').app;

 const expect=require('expect');

 it("should return hello world response",(done)=>{
     request(app)
        .get('/')
        .expect((res)=>{
            expect(res.body).toEqual({
                error:'Page Not Found',
                name:'Todo App v1.0'
            })
        })
        .end(done);
 });
 it("should return users object",(done)=>{
     request(app)
        .get('/users')
        .expect(200)
        .expect((res)=>{
            expect(res.body).toEqual([
                {
                    name:'Abel',
                    age:25
                },
                {
                    name:"Andie",
                    age:21
                }
            ])
        })
        .end(done)
 });