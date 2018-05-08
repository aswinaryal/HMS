const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      patientRoutes = require('./routes/patients'),
      mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());//to extract json

mongoose.connect('mongodb://localhost:27017/hms').then(res => console.log(res));

//Handling CORS issues
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if(req.method ==='OPTIONS'){
        res.header('Access-Control-Allow-Methods','POST,GET');
            return res.status(200).json({});
    }
    next();
});

app.use('/patients',patientRoutes);


//Handling Routes-Error
app.use((req,res,next) => {
    const error = new Error('Resource Not Found');
    error.status= 404;
    next(error);
});

app.use((error,req,res,next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});


module.exports = app;