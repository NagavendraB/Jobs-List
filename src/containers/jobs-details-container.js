import {connect} from 'react-redux';
import {JobDetails} from '../components/index';

const mapStateToProps = state => ({
  selectedJob: state.jobsList.selectedJob
});

export default connect(mapStateToProps)(JobDetails);