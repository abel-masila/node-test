const express= require('express');

const app= express();

app.get('/',(req,res)=>{
res.send({ error:'Page Not Found', name: 'Todo App v1.0'});
});
app.get('/users',(req,res)=>{
    res.send([{
        name:"Abel",
        age:25
    },{
        name:"Andie",
        age:21
    }]);
});

app.listen(3000);

module.exports.app=app;