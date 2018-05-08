import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createPatient} from '../actions/patientActions';

class PatientForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            age:'',
            title:'',
            symptoms:''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e){
        e.preventDefault();
        const patient = {
            name: this.state.name,
            age: this.state.age,
            title: this.state.title,
            symptoms: this.state.symptoms
        };
        
        this.props.createPatient(patient);

    }

  render() {
    return (
      <div>
        <h3>Add Patient</h3>
        <form onSubmit={this.onSubmit}>
            <div>
                <label>Name: </label><br />
                <input type="text" name="name" value={this.state.name} onChange={this.onChange} />
            </div>
            <div>
                <label>Age: </label><br />
                <input type="text" name="age" value={this.state.age} onChange={this.onChange} />
            </div>
            <div>
                <label>Title: </label><br />
                <input type="text" name="title" value={this.state.title} onChange={this.onChange} />
            </div>
            <div>
                <label>Symptoms: </label><br />
                <input type="text" name="symptoms" value={this.state.symptoms} onChange={this.onChange} />
            </div>
            <br />
            <button type="submit">Submit </button>
        </form>
      </div>
    )
  }
}

PatientForm.propTypes={
    createPatient: PropTypes.func.isRequired
};

export default connect(null,{ createPatient })(PatientForm);