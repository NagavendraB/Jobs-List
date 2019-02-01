import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  jobDetails: {
    flexGrow: 1,
    textAlign: 'left',
    margin: 'auto',
    maxWidth: 500,
  },
  paper: {
    padding: theme.spacing.unit * 2,
  }
});

const JobDetails = ({selectedJob, classes}) => {
  return (
    <div className={classes.jobDetails}>
      <Link to='/'><Typography gutterBottom>Back to List of Jobs</Typography></Link>
      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item xs container direction='column' spacing={16}>
            <Grid item xs>
              <Typography gutterBottom variant='subtitle1'>Job Details</Typography>
              <Typography gutterBottom>Job Title:- {selectedJob.title}</Typography>
              <Typography gutterBottom>Employement Type:- {selectedJob.employment_type}</Typography>
              <Typography gutterBottom>Discription:- {selectedJob.description}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
  </div>
  );
};

export default withStyles(styles)(JobDetails);

JobDetails.propTypes = {
  selectedJob: PropTypes.object,
  classes: PropTypes.object
};
