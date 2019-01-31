import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'left'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: 500,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

const JobDetails = ({ children, selectedJob, classes }) => {
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item xs container direction="column" spacing={16}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                Job Details
              </Typography>
              <Typography gutterBottom>Job Title: {selectedJob.title}</Typography>
              <Typography gutterBottom>Employement Type: {selectedJob.employment_type}</Typography>
              <Typography gutterBottom>Discription: {selectedJob.description}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
  </div>
  );
};

export default withStyles(styles)(JobDetails);