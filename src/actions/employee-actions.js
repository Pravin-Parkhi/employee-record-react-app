import dispatcher from "../dispatcher";

export function createEmployee(employee) {
  dispatcher.dispatch({
    type: "CREATE_EMPLOYEE",
    employee
  });
}

export function deleteEmployee(index) {
  dispatcher.dispatch({
    type: "DELETE_EMPLOYEE",
    index
  });
}

export function updateEmployee(employee) {
  dispatcher.dispatch({
    type: "UPDATE_EMPLOYEE",
    employee
  })
}