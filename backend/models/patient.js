const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{ 
        type: Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    symptoms:{
        type:[],
        required:true
    }
});

module.exports = mongoose.model('Patient',patientSchema);