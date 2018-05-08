import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { fetchPatients } from '../actions/patientActions';
class Patients extends Component {

    componentWillMount(){
        this.props.fetchPatients();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPatient){
            this.props.patients.unshift(nextProps.newPatient);
        }
    }

  render() {
    const patientsList = this.props.patients.map(patient => (
        <li key={patient._id}>
            <p>Name: {patient.name}</p>
            <p>Age: {patient.age}</p>
            <p>Title: {patient.title}</p>
            <p>Symptoms: {patient.symptoms}</p>
        </li>
    ));
    return (
      <div>
        <h3>Patients List</h3>
        <ul>
            {patientsList}
        </ul>
        
      </div>
    )
  }
}
Patients.propTypes = {
    fetchPatients: PropTypes.func.isRequired,
    patients: PropTypes.array.isRequired,
    newPatient:PropTypes.object
}

const mapStateToProps = state => ({
    patients: state.patients.items,
    newPatient: state.patients.item
});

export default connect(mapStateToProps, {fetchPatients})(Patients);