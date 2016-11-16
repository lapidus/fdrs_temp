
import objectAssign from 'object-assign';

import { START_LOAD, PROGRESS_LOAD, END_LOAD, TOGGLE_NAV, CLOSE_NAV, REQUEST_LANGUAGE, RECEIVE_LANGUAGE, REQUEST_NATIONAL_SOCIETIES, RECEIVE_NATIONAL_SOCIETIES } from '../actions/appActions';

export default function storyReducer(state = {
  showLoader: false,
  loadProgress: 0,
  language: 'en',
  fetchingLanguage: false,
  navOpen: false,
  nationalSocieties: [],
  fetchingNationalSocieties: false,
  en: {},
  fr: {},
  es: {},
  ar: {}
}, action) {
  switch(action.type) {
    case START_LOAD:
      return objectAssign({}, state, {
        showLoader: true
      });
    case PROGRESS_LOAD:
      return objectAssign({}, state, {
        loadProgress: action.progress
      });
    case END_LOAD:
      return objectAssign({}, state, {
        showLoader: false
      });
    case TOGGLE_NAV:
      document.getElementsByTagName('body')[0].style.overflow = !state.navOpen ? 'hidden' : 'auto';
      return objectAssign({}, state, {
        navOpen: !state.navOpen
      });
    case CLOSE_NAV:
      document.getElementsByTagName('body')[0].style.overflow = 'auto';
      return objectAssign({}, state, {
        navOpen: false
      });
    case REQUEST_LANGUAGE:
      return objectAssign({}, state, {
        fetchingLanguage: true
      });
    case RECEIVE_LANGUAGE:
      console.log('The language data received is: ', action.languageData);
      var changes = {
        fetchingLanguage: false,
        language: String(action.lang)
      };
      console.log('Adding changes ', action.languageData);
      changes[action.lang] = action.languageData;
      console.log('The changed item looks like this: ', changes);
      return objectAssign({}, state, changes);
    case REQUEST_NATIONAL_SOCIETIES:
      return objectAssign({}, state, {
        fetchingNationalSocieties: true
      });
    case RECEIVE_NATIONAL_SOCIETIES:
      return objectAssign({}, state, {
        nationalSocieties: action.nationalSocieties,
        fetchingNationalSocieties: false
      });
    default:
      return state
  }
}
