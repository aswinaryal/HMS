import React, { Component } from 'react';
import './App.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom';

import Patients from './components/Patients';
import PatientForm from './components/PatientForm';

import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
 
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h2 className="AppTitle">Health Management System</h2><hr />
          <PatientForm /><hr />
          <Patients />
          <hr />
          {/* <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Patients} />
              <Route path='/patient/:id' component={Patient} /> 

            </Switch>
          </BrowserRouter> */}
        
        </div>
      </Provider>
    );
  }
}

export default App;
