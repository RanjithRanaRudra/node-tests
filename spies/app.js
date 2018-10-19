
const db = require('./db')

var handleSignUp = (email, password) => {
    //check if email already exists
    //save the user to database
    db.saveUser({email, password});
    //Send the welcome mail
};

module.exports = {
    handleSignUp
};