//React imports
import React, { Component } from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';
import update from 'immutability-helper';

//Stores imports
import * as EmployeeActions from '../../actions/employee-actions';
import EmployeeStore from '../../stores/employee-store';

//Material design imports
import Header from '../../common/header-view/header-view';
import Card from 'react-md/lib/Cards/Card';
import Button from 'react-md/lib/Buttons/Button';
import TextField from 'react-md/lib/TextFields';

class EmployeeDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeEmployee: EmployeeStore.getActiveEmployee(this.props.params.id),
      isEditFormVisible: false,
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDesignationChange = this.handleDesignationChange.bind(this);
  }

  //Method to enable edit employee form
  editEmployee(){
    this.setState({ isEditFormVisible: true });
  }

  //Method to update employee
  updateEmployee(){
    let employee = this.state.activeEmployee;
    EmployeeActions.updateEmployee(employee);
    this.setState({ isEditFormVisible: false });
  }

  //Method to delete employee
  deleteEmployee(){
    let recordIndex = this.getEmployeeRecordIndex();
    EmployeeActions.deleteEmployee(recordIndex);
    this.props.router.push('/');
  }

  //Method to get employee record index from employee collection
  getEmployeeRecordIndex(){
    let employeeId = this.props.params.id;
    let employeeRecords = JSON.parse(localStorage.getItem('employeeCollection'));
    return employeeRecords.findIndex(obj => obj.id == employeeId);
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
                        onClick={()=> this.deleteEmployee()} />
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