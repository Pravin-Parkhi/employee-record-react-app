/*React imports*/
import React, { Component } from 'react';

/*Material design imports*/
import Button from 'react-md/lib/Buttons/Button';

/*Custom component imports*/
import Header from './common/header-view/header-view';
import ModalDialogExamples from './common/app-modal/app-modal';
import EmployeeList from './pages/employee-grid-view/employee-grid-view';

/*Stores imports*/
import * as EmployeeActions from './actions/employee-actions';
import EmployeeStore from './stores/employee-store';

import './App.css';

class App extends Component {

  constructor(){
    super()
    this.getEmployees = this.getEmployees.bind(this);
    this.state = {
      employeeCollection: EmployeeStore.getAllEmployees()
    }
  }

  componentDidMount(){
    EmployeeStore.on("change", this.getEmployees);
  }

  componentWillUnmount(){
    EmployeeStore.removeListener("change", this.getEmployees);
  }

  getEmployees(){
    this.setState({
      employeeCollection: EmployeeStore.getAllEmployees()
    })
  }

  addEmployee(employee){
    EmployeeActions.createEmployee(employee);
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
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
