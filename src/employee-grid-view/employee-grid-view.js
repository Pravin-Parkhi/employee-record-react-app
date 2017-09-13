//React imports
import React, {Component} from 'react';

//Material design imports
import EmployeeCard from '../common/employe-card/employee-card';

class EmployeeList extends Component{
  constructor(props){
    super(props)
    this.state = {
      employees: this.props.employees
    }
  }

  render() {
    let employeeArray = [];
    for (let index in this.state.employees) {
      employeeArray.push(
        <EmployeeCard employee={this.state.employees[index]}  key={index}/>
      );
    }
    return (
      <div className="md-grid">
        {employeeArray}
      </div>
    )
  }
}

export default EmployeeList;