import assign from "lodash/assign"

import {
  START_LOAD,
  PROGRESS_LOAD,
  END_LOAD,
  TOGGLE_NAV,
  CLOSE_NAV,
  REQUEST_NATIONAL_SOCIETIES,
  RECEIVE_NATIONAL_SOCIETIES,
  REQUEST_TIME_SERIES,
  RECEIVE_TIME_SERIES,
  REQUEST_TIME_SERIES_META,
  RECEIVE_TIME_SERIES_META,
  REQUEST_DOCUMENTS,
  RECEIVE_DOCUMENTS,
  REQUEST_COUNTRIES,
  RECEIVE_COUNTRIES,
  SHOW_TOOLTIP,
  HIDE_TOOLTIP,
  SET_INDICATOR,
  SELECT_SOCIETY,
  UNSELECT_SOCIETY,
  CLEAR_SOCIETIES,
  SWITCH_YEAR,
} from "../actions/appActions"

export default function storyReducer(state = {
  showLoader: false,
  loadProgress: 0,
  navOpen: false,
  nationalSocieties: [],
  fetchingNationalSocieties: false,
  timeSeries: [],
  fetchingTimeSeries: false,
  timeSeriesMeta: [],
  fetchingTimeSeriesMeta: false,
  documents: [],
  fetchingDocuments: false,
  tooltipVisible: false,
  tooltipContent: {},
  tooltipPosition: {
    top: 0,
    left: 0,
  },
  fetchingCountries: false,
  countryPaths: null,
  currentIndicator: "KPI_noPeopleVolunteering",
  selectedSocieties: [],
  currentYear: 2015,
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
    document.body.style.overflow = !state.navOpen ? "hidden" : "auto"
    return assign({}, state, {
      navOpen: !state.navOpen,
    })
  case CLOSE_NAV:
    document.body.style.overflow = "auto"
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
  case REQUEST_TIME_SERIES:
    return assign({}, state, {
      fetchingTimeSeries: true,
    })
  case RECEIVE_TIME_SERIES:
    return assign({}, state, {
      timeSeries: action.timeSeries,
      fetchingTimeSeries: false,
    })
  case REQUEST_TIME_SERIES_META:
    return assign({}, state, {
      fetchingTimeSeriesMeta: true,
    })
  case RECEIVE_TIME_SERIES_META:
    return assign({}, state, {
      timeSeriesMeta: action.timeSeriesMeta,
      fetchingTimeSeriesMeta: false,
    })
  case REQUEST_DOCUMENTS:
    return assign({}, state, {
      fetchingDocuments: true,
    })
  case RECEIVE_DOCUMENTS:
    return assign({}, state, {
      documents: action.documents,
      fetchingDocuments: false,
    })
  case REQUEST_COUNTRIES:
    return assign({}, state, {
      fetchingCountries: true,
    })
  case RECEIVE_COUNTRIES:
    return assign({}, state, {
      countryPaths: action.countryPaths,
      fetchingCountries: false,
    })
  case SHOW_TOOLTIP:
    return assign({}, state, {
      tooltipVisible: true,
      tooltipContent: action.content,
      tooltipPosition: action.position,
    })
  case HIDE_TOOLTIP:
    return assign({}, state, {
      tooltipVisible: false,
    })
  case SET_INDICATOR:
    return assign({}, state, {
      currentIndicator: action.indicator
    })
  case SELECT_SOCIETY:
    return assign({}, state, {
      selectedSocieties: state.selectedSocieties.concat([action.societyID])
    })
  case UNSELECT_SOCIETY:
    const societyIndex = state.selectedSocieties.indexOf(action.societyID)
    const newSocieties = state.selectedSocieties
                              .slice(0, societyIndex)
                              .concat(state.selectedSocieties
                                           .slice(societyIndex + 1))
    return assign({}, state, {
      selectedSocieties: newSocieties
    })
  case CLEAR_SOCIETIES:
    return assign({}, state, {
      selectedSocieties: []
    })
  case SWITCH_YEAR:
    return assign({}, state, {
      currentYear: action.year
    })
  default:
    return state
  }
}
