//React imports
import React, { Component } from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';

//Material design imports
import Header from "../header-view/header-view";
import Card from 'react-md/lib/Cards/Card';
import Button from 'react-md/lib/Buttons/Button';
import TextField from 'react-md/lib/TextFields';

class EmployeeDetail extends Component {
  constructor(props){
    super(props)

    //Not sure about this weather this is the way to do this
    let employeeDetails = this.getEmployeeRecord()

    this.state = {
      employeeCollection: JSON.parse(localStorage.getItem('employeeCollection')),
      activeEmployeeRecord: this.getEmployeeRecord(),

      employeeName: employeeDetails.name,
      employeeDesignation: employeeDetails.designation,

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
    this.setState({ isEditFormVisible: false });
    this.state.activeEmployeeRecord.name = this.state.employeeName;
    this.state.activeEmployeeRecord.designation = this.state.employeeDesignation;

    let employeeId = this.props.params.id;
    this.state.employeeCollection.forEach(employee => {
      if (employee.id == employeeId){
        employee.name = this.state.employeeName;
        employee.designation = this.state.employeeDesignation
      }
    })
    localStorage.setItem('employeeCollection', JSON.stringify(this.state.employeeCollection));
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
    this.setState({ employeeName : value});
  }
  handleDesignationChange(value){
    this.setState({ employeeDesignation : value});
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
                  <TextField id="employee-name" value={this.state.employeeName} className="lg-cell"
                             onChange={this.handleNameChange} />
                ) : (
                  <div className="employee-name">{this.state.employeeName}</div>
                )}
              </div>
              <div className="employee-designation-wrapper">
                { isEditFormVisible ? (
                  <TextField id="employee-designation" value={this.state.employeeDesignation} className="lg-cell"
                             onChange={this.handleDesignationChange} />
                ) : (
                  <div className="employee-designation">{this.state.employeeDesignation}</div>
                )}
              </div>
              <div className="btn-wrapper">
                <Button raised secondary label="Delete" className="right-spacer"
                        onClick={()=> this.deleteEmployee(this.state.activeEmployeeRecord.id)} />
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