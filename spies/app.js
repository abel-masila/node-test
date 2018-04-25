const db= require('./db');

module.exports.handleSignup=(email,password)=>{
    //check if the email already exists
    db.saveUser({email,password});
    //send the welcome message to user
}