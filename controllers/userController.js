const userValidator = require('./../validator/userValidator');
const User = require('./../model/User');
const bcrypt = require('bcrypt');

module.exports = {
    login : (req, res) =>{
        let {name, email} = req.body;
        res.json({
            message: "loging "+name +" email "+email
        })
    },

    register: (req, res)=>{

        let {name, email, password, confirmPassword} = req.body;
        let validate = userValidator({name, email, password, confirmPassword})
        console.log(validate)
        if(validate.isValid == false){
            res.status(400).json(validate.error);
        }
        else{
  
            User.findOne({email}).then(user=>{

                if(user){
                    res.status(400).json({
                        message:"User alredy exist."
                    })
                }else{

                    bcrypt.hash(password, 11, (err, hash)=>{
                        if(err){
                            res.status(500).json({
                                message: 'Server error occured'
                            })
                        }
                        else{
                            let user = new User({
                                name,
                                email,
                                password: hash
                            });
                            user.save().then((user)=>{
                                res.status(201).json({
                                    user,
                                    message: 'user saved successfully'
                                })
                            }).catch((error)=>{
                                return res.status(500).json({
                                    message: 'Server error occured'
                                })
                            });
                        }
                    });
                    
                }
                
                    
            }).catch(error=>{
                return res.status(500).json({
                    message: 'Server error occured'
                })
            })
        }
    }
}