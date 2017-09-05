// React imports
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

//Custom component imports
import App from './App';
import EmployeeDetail from './employee-details-view/employee-details-view';

//
import registerServiceWorker from './registerServiceWorker';

//Component style
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/employee/:id" component={EmployeeDetail} />
  </Router>,
  document.getElementById('EmployeeRecordWebApp')
)
registerServiceWorker();
