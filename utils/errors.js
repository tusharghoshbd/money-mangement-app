module.exports ={
    serverError : (res, error)=>{
        return res.status(500).json({
            message: "Server error occured"
        });
    },
    resourceError : (res, message)=>{
        return res.status(400).json({
            message
        });
    }
}