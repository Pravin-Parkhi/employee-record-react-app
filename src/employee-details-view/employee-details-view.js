//React imports
import React, { Component } from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';
import update from 'immutability-helper';

//Material design imports
import Header from '../common/header-view/header-view';
import Card from 'react-md/lib/Cards/Card';
import Button from 'react-md/lib/Buttons/Button';
import TextField from 'react-md/lib/TextFields';

class EmployeeDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeEmployee: this.getEmployeeRecord(),
      isEditFormVisible: false,
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDesignationChange = this.handleDesignationChange.bind(this);
  }

  getEmployeeRecord(){
    let employeeId = this.props.params.id;
    let employeeCollection = JSON.parse(localStorage.getItem('employeeCollection'));
    let recordIndex = employeeCollection.findIndex(obj => obj.id == employeeId);
    return employeeCollection[recordIndex];
  }

  getEmployeeRecordIndex(){
    let employeeId = this.props.params.id;
    let employeeRecords = JSON.parse(localStorage.getItem('employeeCollection'));
    return employeeRecords.findIndex(obj => obj.id == employeeId);
  }

  editEmployee(){
    this.setState({ isEditFormVisible: true });
  }

  updateEmployee(){
    let activeEmployee = this.state.activeEmployee;
    let employeeCollection = JSON.parse(localStorage.getItem('employeeCollection'));
    employeeCollection.forEach(employee => {
      if (employee.id == activeEmployee.id){
        employee.name = activeEmployee.name;
        employee.designation = activeEmployee.designation
      }
    });
    localStorage.setItem('employeeCollection', JSON.stringify(employeeCollection));
    this.setState({ isEditFormVisible: false });
  }

  deleteEmployee(){
    let recordIndex = this.getEmployeeRecordIndex();
    let employeeCollection = JSON.parse(localStorage.getItem('employeeCollection'))
    if (recordIndex > -1){
      employeeCollection.splice(recordIndex, 1);
    }
    localStorage.setItem('employeeCollection', JSON.stringify(employeeCollection));
    this.props.router.push('/')
  }

  handleNameChange(value){
    let newActiveEmployee = Object.assign({}, this.state.activeEmployee, {name:value});
    this.setState({activeEmployee:newActiveEmployee});
  }

  handleDesignationChange(value){
    let newActiveEmployee = Object.assign({}, this.state.activeEmployee, {designation:value});
    this.setState({activeEmployee:newActiveEmployee});
  }

  render(){
    const isEditFormVisible = this.state.isEditFormVisible;
    return (
      <div className="">
        <Header></Header>
        <div id="details-wrapper">
          <Link to={"/"}>
            <Button floating secondary iconClassName="fa fa-arrow-left"></Button>
          </Link>
          <Card className="md-cell md-cell--6 details-card">
            <div className="employee-img"></div>
            <div className="employee-info-wrapper">
              <div className="employee-name-wrapper">
                { isEditFormVisible ? (
                  <TextField id="employee-name" value={this.state.activeEmployee.name} className="lg-cell"
                             onChange={this.handleNameChange} />
                ) : (
                  <div className="employee-name">{this.state.activeEmployee.name}</div>
                )}
              </div>
              <div className="employee-designation-wrapper">
                { isEditFormVisible ? (
                  <TextField id="employee-designation" value={this.state.activeEmployee.designation} className="lg-cell"
                             onChange={this.handleDesignationChange} />
                ) : (
                  <div className="employee-designation">{this.state.activeEmployee.designation}</div>
                )}
              </div>
              <div className="btn-wrapper">
                <Button raised secondary label="Delete" className="right-spacer"
                        onClick={()=> this.deleteEmployee(this.state.activeEmployee.id)} />
                { isEditFormVisible ? (
                  <Button raised primary label="Save" onClick={()=> this.updateEmployee()} />
                ) : (
                  <Button raised primary label="Edit" onClick={()=> this.editEmployee()} />
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default withRouter(EmployeeDetail);