const userValidator = require('./../validator/userValidator');

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
        if(!validate.isValid == true){
            res.status(400).json(validate.error);
        }
        else{
            res.status(200).json({
                message: "Everything is OK"
            });
        }
    }
}