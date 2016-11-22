import Promise from "promise-polyfill"
import request from 'superagent';

export const CHANGE_DATASET = 'CHANGE_DATASET';
export const REQUEST_DATASETS = 'REQUEST_DATASETS';
export const RECEIVE_DATASETS = 'RECEIVE_DATASETS';
export const INVALIDATE_REQUEST = 'INVALIDATE_REQUEST';

export function changeDataset(id) {
  return {
    type: CHANGE_DATASET,
    newDataset: id
  };
}

function requestDatasets() {
  return {
    type: REQUEST_DATASETS
  };
}

function receiveDatasets(datasets) {
  return {
    type: RECEIVE_DATASETS,
    datasets: datasets
  };
}

function invalidateRequest() {
  return {
    type: INVALIDATE_REQUEST
  };
}

export function fetchDatasets(params) {
  return (dispatch, getState) => {
    if(shouldFetchDatasets(getState())) {
      dispatch(requestDatasets());
      console.log('Sending request');
      var promise = new Promise((resolve, reject) => {
        request
          .get('http://localhost:3000/api/en/chapter-1.json')
          .end((err, res) => {
            console.log('Finished request');
            if(err) {
              dispatch(invalidateRequest());
              reject(err);
            }
            else {
              console.log('Got data', res);
              dispatch(receiveDatasets(res));
              resolve(res);
            }
          });
      });

      return promise;
    }
  };
}

function shouldFetchDatasets(state) {
  return state.storyReducer.isFetching ? false : state.storyReducer.datasets.length === 0;
}
