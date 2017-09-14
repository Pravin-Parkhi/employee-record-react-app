import EventEmitter  from 'events';
import dispatcher from '../dispatcher';

class EmployeeStore extends EventEmitter {
  constructor() {
    super()
    this.employees = JSON.parse(localStorage.getItem('employeeCollection'))
      ? JSON.parse(localStorage.getItem('employeeCollection')) : []
  }

  getAllEmployees(){
    return this.employees;
  }

  getActiveEmployee(employeeId){
    let employeeCollection = this.getAllEmployees();
    let recordIndex = employeeCollection.findIndex(obj => obj.id == employeeId);
    return employeeCollection[recordIndex];
  }

  createEmployee(employee){
    this.employees.push({
      'id': employee.id,
      'name': employee.name,
      'designation': employee.designation
    })
    localStorage.setItem('employeeCollection', JSON.stringify(this.employees));
    this.emit("change");
  }

  deleteEmployee(index){
    let employeeCollection = this.getAllEmployees();
    if (index > -1){
      employeeCollection.splice(index, 1);
      localStorage.setItem('employeeCollection', JSON.stringify(employeeCollection));
    }
    this.emit("change");
  }

  updateEmployee(employee){
    let activeEmployee = employee;
    let employeeCollection = this.getAllEmployees();
    employeeCollection.forEach(employee => {
      if (employee.id == activeEmployee.id){
        employee.name = activeEmployee.name;
        employee.designation = activeEmployee.designation
      }
    });
    localStorage.setItem('employeeCollection', JSON.stringify(employeeCollection));
    //this.emit("change");
  }

  handleActions(action) {
    switch (action.type) {
      case "CREATE_EMPLOYEE": {
        employeeStore.createEmployee(action.employee);
        break;
      }
      case "DELETE_EMPLOYEE": {
        employeeStore.deleteEmployee(action.index);
        break;
      }
      case "UPDATE_EMPLOYEE": {
        employeeStore.updateEmployee(action.employee);
        break;
      }
    }
  }

}

const employeeStore = new EmployeeStore;

dispatcher.register(employeeStore.handleActions.bind(this));

export default employeeStore;