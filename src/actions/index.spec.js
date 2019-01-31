import * as actions from './index';

const defaultPayloadForApi = {
  url: '/jobs/',
  method: 'GET',
  data: null,
  accessToken: null,
  onSuccess:  () => {},
  onFailure: () => {},
  label: 'FETCH_JOBS_LIST',
  headersOverride: null
};

describe('job list actions', () => {
  it('storeJobs should create STORE_JOBS action', () => {
    expect(actions.storeJobs(['job1', 'job2'])).toEqual({
      type: 'STORE_JOBS',
      jobs: ['job1', 'job2']
    })
  })

  it('selectedJob should create SELECTED_JOB action', () => {
    expect(actions.selectedJob('Selected Job')).toEqual({
      type: 'SELECTED_JOB',
      selectedJob: 'Selected Job'
    })
  })

  it('fetchJobs should create API action', () => {
    expect(JSON.stringify(actions.fetchJobs(defaultPayloadForApi))).toEqual(JSON.stringify({
      type: 'API',
      payload: defaultPayloadForApi
    }))
  })
})