//React imports
import React, {Component} from 'react';
import { Link } from 'react-router';

//Material design imports
import Card from 'react-md/lib/Cards/Card';

class EmployeeCard extends Component {

  constructor(props){
    super(props)
    this.state = {
      employee: this.props.employee
    }
  }

  render(){
    return (
      <Link className="md-cell md-cell--4 no-underline" to={"/employee/"+this.state.employee.id} key={this.state.employee.id}>
        <Card id="employee-card">
          <div className="employee-card-avatar"></div>
          <div className="name-text">{this.state.employee.name}</div>
          <div className="designation-text">{this.state.employee.designation}</div>
        </Card>
      </Link>
    )
  }

}

export default EmployeeCard;