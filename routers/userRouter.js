const router = require("express").Router();

//Registration route
//localhost:4000/api/users/register
router.post('/register', (req, res)=>{


})

//login route
//localhost:4000/api/users/login
router.get('/login', (req, res)=>{

    console.log("loging");
    res.json({
        message: "loging"
    })
})


module.exports = router;