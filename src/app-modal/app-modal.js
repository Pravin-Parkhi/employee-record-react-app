//React imports
import React, { PureComponent } from 'react';

//Material design imports
import TextField from 'react-md/lib/TextFields';
import Dialog from 'react-md/lib/Dialogs';

export default class ModalDialogExamples extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  openDialog = () => {
    this.setState({ visible: true });
  };

  closeDialog = () => {
    this.setState({ visible: false });
  };

  createEmployee = (event) => {
    event.preventDefault();
    let employee = {
      'id': Date.now(),
      'name': this.name.getField().value,
      'designation': this.designation.getField().value
    }
    if (employee && employee.name && employee.designation){
      this.props.createEmployee(employee);
      this.name.getField().value = '';
      this.designation.getField().value = '';
      this.closeDialog();
    }
  }

  render() {
    const { visible } = this.state;
    return (
      <div>
        <Dialog id="speedBoost" visible={visible} title="Add Employee" onHide={this.closeDialog}
          aria-labelledby="speedBoostDescription" modal
          actions={[{
            onClick: this.createEmployee,
            primary: true,
            label: 'Add Employee',
          }, {
            onClick: this.closeDialog,
            primary: true,
            label: 'CLose',
          }]}>
          <div id="speedBoostDescription" className="md-color--secondary-text">
            <form className="md-grid" onSubmit={this.createEmployee.bind(this)}>
              <div className="input-wrapper">
                <TextField id="employeeName" label="Name" className="lg-cell" ref={name => this.name = name}/>
              </div>
              <div className="input-wrapper">
                <TextField id="employeeDesignation" label="Designation" className="lg-cell"
                           ref={designation => this.designation = designation} />
              </div>
            </form>
          </div>
        </Dialog>
      </div>
    );
  }
}