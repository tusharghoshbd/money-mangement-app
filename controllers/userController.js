const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const userValidator = require('./../validator/userValidator');
const loginValidator = require('./../validator/loginValidator');
const User = require('./../model/User');
const {serverError, resourceError} = require("./../utils/errors");



module.exports = {
    login : (req, res) =>{
        let {password, email} = req.body;
        let validate = loginValidator({password, email});

        if(validate.isValid == false){
           return res.status(400).json(validate.error);
        }
        else{
            User.findOne({email}).then((user)=>{
                if(!user){
                    return resourceError(res, 'User not found');
                }
                bcrypt.compare(password,user.password, (err, result)=>{
                    if(err){
                        return serverError(res, err);
                    }
                    if(result == false){
                        return resourceError(res, 'password does not match');
                    }

                    let token = jwt.sign({
                        _id : user._id,
                        name : user.name,
                        email : user.email
                    }, 'SECRET', {expiresIn:'2h'});

                    return res.status(200).json({
                        message: "Loging Successful",
                        token
                    })

                } ) 
            })
            .catch(error=>serverError(res,error))
        }

    },

    register: (req, res)=>{

        let {name, email, password, confirmPassword} = req.body;
        let validate = userValidator({name, email, password, confirmPassword})
        console.log(validate)
        if(validate.isValid == false){
            return res.status(400).json(validate.error);
        }
        else{
  
            User.findOne({email}).then(user=>{

                if(user){
                    return res.status(200).json({
                        message:"User alredy exist."
                    })
                }else{

                    bcrypt.hash(password, 11, (err, hash)=>{
                        if(err){
                            serverError(res,error)
                        }
                        else{
                            let user = new User({
                                name,
                                email,
                                password: hash
                            });
                            user.save().then((user)=>{
                                return res.status(201).json({
                                    user,
                                    message: 'user saved successfully'
                                })
                            }).catch((error)=>serverError(res,error));
                        }
                    });
                }
            }).catch(error=>serverError(res,error))
        }
    }
}