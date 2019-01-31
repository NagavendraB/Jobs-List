import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {JobsList} from '../components';
import {fetchJobs, selectedJob} from '../actions';

class JobsListContainer extends PureComponent {
  static defaultProps  = {
    jobs: [],
    selectedJob: {}
  }

  componentDidMount() {
    this.props.fetchJobs();
  }

  handleClick = (selectedItem) => {
    const {selectedJob, history} = this.props;
    
    selectedJob(selectedItem);
    history.push('/job-details');
  }

  render() {
    const {jobs, isFetchingData} = this.props;

    return (
      <React.Fragment>
        {isFetchingData ? 'Loading . . .' : <JobsList jobs={jobs} onClick={this.handleClick} />}
      </React.Fragment>
    );
  }  
};

const mapStateToProps = state => ({
  jobs: state.jobsList.items,
  isFetchingData: state.jobsList.isFetchingData
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    fetchJobs,
    selectedJob
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(JobsListContainer);

JobsListContainer.propTypes = {
  jobs: PropTypes.array,
  selectedJob: PropTypes.object,
  history: PropTypes.object,
  isFetchingData: PropTypes.boolean
};