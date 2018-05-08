import { FETCH_PATIENTS, NEW_PATIENT } from './types';


export const fetchPatients= () => dispatch => {
        fetch('/patients')
        .then(res => res.json())
        .then(patients => dispatch({
            type: FETCH_PATIENTS,
            payload: patients
        })
    );
};

export const createPatient= (patientData) => dispatch => {
    
    fetch('/patients',{
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body:JSON.stringify(patientData)
        })
        .then(res => res.json())
        .then(patient =>dispatch({
            type:NEW_PATIENT,
            payload: patient
        })
    );
};
