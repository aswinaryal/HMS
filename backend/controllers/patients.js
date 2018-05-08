const Patient = require('../models/patient');

exports.getAll = (req,res,next)=>{
    Patient.find().exec()
    .then(patients =>res.status(200).json(patients))
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
}

exports.store = (req,res,next)=>{
    const patient = new Patient({
        name: req.body.name,
        age:  req.body.age,
        title: req.body.title,
        symptoms:req.body.symptoms
    });
    patient.save().then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));

    res.status(201).json({
        message:'Handling post request',
        createdpatient:patient
    });
}
