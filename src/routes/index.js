import React from 'react';
 import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import App from '../app';
import JobsListContainer from '../containers/jobs-list-container';
import JobDetails from '../containers/jobs-details-container';

const Root = () => {
  return (
    <Router>
      <App>
        <Switch>
          <Route path='/' component={JobsListContainer} exact />
          <Route path='/job-details' component={JobDetails} />
        </Switch>
      </App>
    </Router>
  );
};

export default Root;