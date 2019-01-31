import {
  STORE_JOBS, 
  SELECTED_JOB, 
  FETCH_JOBS_LIST
} from '../utils/constants';
import {apiAction} from '../utils';

export const storeJobs = jobs => ({
  type: STORE_JOBS,
  jobs
});

export const selectedJob = selectedJob => ({
  type: SELECTED_JOB,
  selectedJob
});

export const fetchJobs = () => (
   apiAction({
    url: '/jobs/',
    onSuccess: storeJobs,
    onFailure: console.log('Error occured loading articles'),
    label: FETCH_JOBS_LIST
  })
);