const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')



const userRouter = require('./routers/userRouter')


const app = express();
app.use(morgan('dev'));
const corsOptions = {
    origin: ['http://localhost:3000'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
//app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())


app.use('/api/users', userRouter);

app.get('/', (req, res)=>{
    res.json({
        message: "Welcome To Our Application"
    })

})

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
    mongoose.connect('mongodb://localhost:27017/money-mangement-app', {useNewUrlParser: true},()=>{
        console.log("Database is Connected.");
    });
});


