import assign from "lodash/assign"

import {
  START_LOAD,
  PROGRESS_LOAD,
  END_LOAD,
  TOGGLE_NAV,
  CLOSE_NAV,
  REQUEST_NATIONAL_SOCIETIES,
  RECEIVE_NATIONAL_SOCIETIES,
} from "../actions/appActions"

export default function storyReducer(state = {
  showLoader: false,
  loadProgress: 0,
  language: "en",
  fetchingLanguage: false,
  navOpen: false,
  nationalSocieties: [],
  fetchingNationalSocieties: false,
}, action) {
  switch (action.type) {
  case START_LOAD:
    return assign({}, state, {
      showLoader: true,
    })
  case PROGRESS_LOAD:
    return assign({}, state, {
      loadProgress: action.progress,
    })
  case END_LOAD:
    return assign({}, state, {
      showLoader: false,
    })
  case TOGGLE_NAV:
    document.getElementsByTagName("body")[0].style.overflow = !state.navOpen ? "hidden" : "auto"
    return assign({}, state, {
      navOpen: !state.navOpen,
    })
  case CLOSE_NAV:
    document.getElementsByTagName("body")[0].style.overflow = "auto"
    return assign({}, state, {
      navOpen: false,
    })
  case REQUEST_NATIONAL_SOCIETIES:
    return assign({}, state, {
      fetchingNationalSocieties: true,
    })
  case RECEIVE_NATIONAL_SOCIETIES:
    return assign({}, state, {
      nationalSocieties: action.nationalSocieties,
      fetchingNationalSocieties: false,
    })
  default:
    return state
  }
}
