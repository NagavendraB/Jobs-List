import React from 'react';
import {Provider} from 'react-redux';

import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import purple from '@material-ui/core/colors/purple';
import {withStyles} from '@material-ui/core/styles';
import store from './store';

const styles = () => ({
  app: {
    primary: purple,
    textAlign: 'center'
  },
});

const App = ({children, classes}) => {
  return (
    <Provider store={store}>
      <div className={classes.app}>
        <CssBaseline />
        <Typography variant='h5' gutterBottom>Jobs List</Typography>
        {children}
      </div>
    </Provider>
  );
};

export default withStyles(styles)(App);