import reducer from './index';
import * as types from '../utils/constants';

describe('Jobs list reducer', () => {
  it('should handle initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      'jobsList': {
        items: [],
        selectedJob: {},
        isFetchingData: false
      }
    })
  })

  it('should handle API_START', () => {
    const action = { type: types.API_START, payload: 'FETCH_JOBS_LIST' };
    expect(reducer([], action)).toEqual(
      {
        'jobsList': {
          items: [],
          selectedJob: {},
          isFetchingData: true
        }
      }
    )
  })

  it('should handle API_END', () => {
    const action = { type: types.API_END, payload: 'FETCH_JOBS_LIST' };
    expect(reducer([], action)).toEqual(
      {
        'jobsList': {
          items: [],
          selectedJob: {},
          isFetchingData: false
        }
      }
    )
  })

  it('should handle STORE_JOBS', () => {
    expect(
      reducer([], {
        type: types.STORE_JOBS,
        jobs: ['List of jobs will goes here..']
      })
    ).toEqual(
      {
        'jobsList': {
          items: ['List of jobs will goes here..'],
          selectedJob: {},
          isFetchingData: false
        }
      }
    )

    expect(
      reducer(
        [
          {
            'jobsList': {
              items: ['Run tests'],
              selectedJob: {},
              isFetchingData: false
            }
          }
        ],
        {
          type: types.STORE_JOBS,
          jobs: ['Jobs List']
        }
      )
    ).toEqual({
      'jobsList': {
        items: ['Jobs List'],
        selectedJob: {},
        isFetchingData: false
      }
    })
  })

  it('should handle SELECTED_JOB', () => {
    expect(
      reducer([], {
        type: types.SELECTED_JOB,
        selectedJob: 'User selected Job'
      })
    ).toEqual(
      {
        'jobsList': {
          items: [],
          selectedJob: 'User selected Job',
          isFetchingData: false
        }
      }
    )
  })
})
