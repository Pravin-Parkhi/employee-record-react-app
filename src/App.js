/*React imports*/
import React, { Component } from 'react';

/*Material design imports*/
import Button from 'react-md/lib/Buttons/Button';

/*Custom component imports*/
import ModalDialogExamples from './app-modal/app-modal';
import EmployeeList from './employee-grid-view/employee-grid-view';

import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      employeeCollection: JSON.parse(localStorage.getItem('employeeCollection'))
        ? JSON.parse(localStorage.getItem('employeeCollection')) : []
    }
  }

  addEmployee(employee){
    this.state.employeeCollection.push({
      'id': employee.id,
      'name': employee.name,
      'designation': employee.designation
    })
    localStorage.setItem('employeeCollection', JSON.stringify(this.state.employeeCollection));
    this.setState(
      {employeeCollection: this.state.employeeCollection}
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header"></div>
        <div className="App-body">
          <div className="button-wrapper">
            <Button raised secondary label="Add Employee" onClick={()=> this.refs.modalComponent.openDialog()} />
          </div>
          <div className="content-wrapper">
            <EmployeeList employees={this.state.employeeCollection}></EmployeeList>
          </div>
        </div>
        <ModalDialogExamples ref="modalComponent" createEmployee={this.addEmployee.bind(this)} />
      </div>
    );
  }
}


export default App;
