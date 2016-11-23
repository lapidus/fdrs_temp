
import assign from 'lodash/assign';

import { CHANGE_DATASET, REQUEST_DATASETS, RECEIVE_DATASETS, INVALIDATE_REQUEST } from '../actions/storyActions';

export default function storyReducer(state = {
  currentDataset: 0,
  isFetching: false,
  datasets: []
}, action) {
  switch(action.type) {
    case CHANGE_DATASET:
      return assign({}, state, {
        currentDataset: action.newDataset
      });
    case REQUEST_DATASETS:
      return assign({}, state, {
        isFetching: true
      });
    case RECEIVE_DATASETS:
      return assign({}, state, {
        isFetching: false,
        datasets: action.datasets
      });
    case INVALIDATE_REQUEST:
      return assign({}, state, {
        isFetching: false
      });
    default:
      return state
  }
}
