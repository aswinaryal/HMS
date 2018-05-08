const express = require('express'),
      patientController = require('../controllers/patients'),
      router = express.Router();


//Routes
router.get('/',patientController.getAll);
router.post('/',patientController.store);

module.exports =router;