
import objectAssign from 'object-assign';

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
      return objectAssign({}, state, {
        isFetching: true
      });
    case RECEIVE_CHAPTER:
      var changes = {};
      changes.isFetching = false;
      var chapterAddition = {};
      chapterAddition[action.chapter.slug] = action.chapter
      changes[action.language] = {
        chapters: objectAssign({}, state[action.language].chapters, chapterAddition)
      };
      return objectAssign({}, state, changes);
    case INVALIDATE_REQUEST:
      return objectAssign({}, state, {
        isFetching: false
      });
    default:
      return state
  }
}
