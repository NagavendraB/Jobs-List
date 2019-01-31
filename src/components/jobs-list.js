import React from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import {JobsListItem} from './index';

const styles = theme => ({
  jobsList: {
    width: '100%',
    maxWidth: 360,
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
  },
});

const JobsList = ({jobs, classes, onClick}) => {
  return (
    <Grid container direction='column' alignItems='center' justify='center'>
      <Grid className={classes.jobsList} item xs={3}>
        <List>{jobs && jobs.map((item, index) => <JobsListItem key={index} item={item} onClick={onClick} />)}</List> 
      </Grid>
    </Grid> 
  );
};

export default withStyles(styles)(JobsList);

JobsList.propTypes = {
  jobs: PropTypes.array,
  classes: PropTypes.object,
  onClick: PropTypes.func
};