
import assign from 'lodash/assign';

import { REQUEST_CHAPTER, RECEIVE_CHAPTER, INVALIDATE_REQUEST } from '../actions/chapterActions';

export default function storyReducer(state = {
  isFetching: false,
  en: {
    chapters: {}
  },
  fr: {
    chapters: {}
  },
  es: {
    chapters: {}
  },
  ar: {
    chapters: {}
  }
}, action) {
  switch(action.type) {
    case REQUEST_CHAPTER:
      return assign({}, state, {
        isFetching: true
      });
    case RECEIVE_CHAPTER:
      var changes = {};
      changes.isFetching = false;
      var chapterAddition = {};
      chapterAddition[action.chapter.slug] = action.chapter
      changes[action.language] = {
        chapters: assign({}, state[action.language].chapters, chapterAddition)
      };
      return assign({}, state, changes);
    case INVALIDATE_REQUEST:
      return assign({}, state, {
        isFetching: false
      });
    default:
      return state
  }
}
