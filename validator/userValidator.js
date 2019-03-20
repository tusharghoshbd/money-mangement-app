const validator = require('validator');

const validate = (user)=>{

    let error ={};
    if(!user.name){
        error.name = "Please provide your name";
    }

    if(!user.email){
        error.email = "Please provide your email";
    }
    else if(!validator.isEmail(user.email)){
        error.email = "Please provide a valid email";
    }

    if(!user.password){
        error.password = "Please provide a valid password";
    }
    else if(user.password.length < 6  ){
        error.password = "Password must be greater or equal of 6 char";
    }

    if(!user.confirmPassword){
        error.confirmPassword = "Please provide a valid confirmPassword";
    }
    else if(user.password !== user.confirmPassword  ){
        error.confirmPassword = "Password does not match";
    }
    
    return {
        error,
        isValid: Object.keys(error).length == 0
    }

}

module.exports = validate;