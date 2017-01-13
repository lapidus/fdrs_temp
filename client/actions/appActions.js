import { csv, json } from "d3"
import kebabCase from "lodash/kebabCase"
import map from "lodash/fp/map"

export const START_LOAD = "START_LOAD"
export const PROGRESS_LOAD = "PROGRESS_LOAD"
export const END_LOAD = "END_LOAD"

export const TOGGLE_NAV = "TOGGLE_NAV"
export const CLOSE_NAV = "CLOSE_NAV"

export const REQUEST_NATIONAL_SOCIETIES = "REQUEST_NATIONAL_SOCIETIES"
export const RECEIVE_NATIONAL_SOCIETIES = "RECEIVE_NATIONAL_SOCIETIES"

export const REQUEST_TIME_SERIES = "REQUEST_TIME_SERIES"
export const RECEIVE_TIME_SERIES = "RECEIVE_TIME_SERIES"

export const REQUEST_TIME_SERIES_META = "REQUEST_TIME_SERIES_META"
export const RECEIVE_TIME_SERIES_META = "RECEIVE_TIME_SERIES_META"

export const REQUEST_DOCUMENTS = "REQUEST_DOCUMENTS"
export const RECEIVE_DOCUMENTS = "RECEIVE_DOCUMENTS"

export const REQUEST_COUNTRIES = "REQUEST_COUNTRIES"
export const RECEIVE_COUNTRIES = "RECEIVE_COUNTRIES"

export const SHOW_TOOLTIP = "SHOW_TOOLTIP"
export const HIDE_TOOLTIP = "HIDE_TOOLTIP"

export const SET_INDICATOR = "SET_INDICATOR"

export const SELECT_SOCIETY = "SELECT_SOCIETY"
export const UNSELECT_SOCIETY = "UNSELECT_SOCIETY"
export const CLEAR_SOCIETIES = "CLEAR_SOCIETIES"

let counter

const startLoad = () => ({ type: START_LOAD })
const endLoad = () => ({ type: END_LOAD })

const progressLoad = progress => ({
  type: PROGRESS_LOAD,
  progress: progress,
})

export function startMainLoad() {
  return (dispatch, getState) => {
    dispatch(startLoad())
    dispatch(progressLoad(0))

    counter = setInterval(() => {
      const store = getState()
      const lastProgress = store.appReducer.loadProgress
      dispatch(progressLoad(lastProgress + ((75 - lastProgress) / 4)))
    }, 300)
  }
}

export function endMainLoad() {
  console.log("Ending main load")
  return dispatch => {
    clearInterval(counter)
    counter = undefined
    dispatch(progressLoad(100))
    setTimeout(() => {
      dispatch(endLoad())
      dispatch(progressLoad(0))
    }, 500)
  }
}

export const toggleNav = () => ({ type: TOGGLE_NAV })
export const closeNav = () => ({ type: CLOSE_NAV })

export const showTooltip = (content, evt) => {
  console.log("Event is here: ", evt)
  const targetDimensions = evt.target.getBoundingClientRect()
  return {
    type: SHOW_TOOLTIP,
    content: content,
    position: {
      top: targetDimensions.top,
      left: targetDimensions.left + targetDimensions.width,
    }
  }
}
export const hideTooltip = () => ({ type: HIDE_TOOLTIP })

const parseNationalSocieties = map(s => {
  s.slug = kebabCase(s.NSO_DON_name)
  return s
})

export const requestNationalSocieties = () => ({
  type: REQUEST_NATIONAL_SOCIETIES,
})

export const receiveNationalSocieties = nationalSocieties => ({
  type: RECEIVE_NATIONAL_SOCIETIES,
  nationalSocieties,
})

export function fetchNationalSocieties() {
  console.log("FETCHING NATIONAL SOCIEITES")
  return (dispatch, getState) => {
    const store = getState().appReducer

    if (store.nationalSocieties.length)
      return dispatch(receiveNationalSocieties(store.nationalSocieties))

    dispatch(requestNationalSocieties())
    return new Promise((resolve, reject) => {
      csv("/api/meta/national_societies.csv", (err, res) => {
        if (err) {
          console.log("Failed at fetching national societies")
          reject(err)
        }
        else {
          console.log("Received National Societies")
          dispatch(receiveNationalSocieties(parseNationalSocieties(res)))
          resolve()
        }
      })
    })
  }
}

export const requestTimeSeries = () => ({
  type: REQUEST_TIME_SERIES,
})

export const receiveTimeSeries = timeSeries => ({
  type: RECEIVE_TIME_SERIES,
  timeSeries,
})

export function fetchTimeSeries() {
  console.log("FETCHING TIME SERIES")
  return (dispatch, getState) => {
    const store = getState().appReducer

    if (store.timeSeries.length)
      return dispatch(receiveTimeSeries(store.timeSeries))

    dispatch(requestTimeSeries())
    return new Promise((resolve, reject) => {
      csv("/api/indicators/time_series.csv", (err, res) => {
        if (err) {
          console.log("Failed at fetching documents")
          reject(err)
        }
        else {
          console.log("RECEIVED TIME SERIES", res)
          dispatch(receiveTimeSeries(res))
          resolve()
        }
      })
    })
  }
}

export const requestDocuments = () => ({
  type: REQUEST_DOCUMENTS,
})

export const receiveDocuments = documents => ({
  type: RECEIVE_DOCUMENTS,
  documents,
})

export function fetchDocuments() {
  console.log("FETCHING DOCUMENTS")
  return (dispatch, getState) => {
    const store = getState().appReducer

    if (store.documents.length)
      return dispatch(receiveDocuments(store.documents))

    dispatch(requestDocuments())
    return new Promise((resolve, reject) => {
      json("/api/documents/documents.json", (err, res) => {
        if (err) {
          console.log("Failed at fetching documents")
          reject(err)
        }
        else {
          console.log("RECEIVED DOCUMENTS")
          dispatch(receiveDocuments(res))
          resolve()
        }
      })
    })
  }
}

export const requestTimeSeriesMeta = () => ({
  type: REQUEST_TIME_SERIES_META,
})

export const receiveTimeSeriesMeta = timeSeriesMeta => ({
  type: RECEIVE_TIME_SERIES_META,
  timeSeriesMeta,
})

export function fetchTimeSeriesMeta() {
  console.log("FETCHING TIME_SERIES_META")
  return (dispatch, getState) => {
    const { timeSeriesMeta } = getState().appReducer

    if (timeSeriesMeta.length)
      return dispatch(receiveTimeSeriesMeta(timeSeriesMeta))

    dispatch(requestTimeSeriesMeta())
    return new Promise((resolve, reject) => {
      csv("/api/meta/time_series_meta.csv", (err, res) => {
        if (err) {
          console.log("Failed at fetching timeSeriesMeta")
          reject(err)
        }
        else {
          console.log("RECEIVED TIME_SERIES_META")
          dispatch(receiveTimeSeriesMeta(res))
          resolve()
        }
      })
    })
  }
}




export const requestCountries = () => ({
  type: REQUEST_COUNTRIES,
})

export const receiveCountries = countryPaths => ({
  type: RECEIVE_COUNTRIES,
  countryPaths,
})

export function fetchCountries() {
  console.log("FETCHING COUNTRY PATHS")
  return (dispatch, getState) => {
    const { countryPaths } = getState().appReducer

    if (countryPaths)
      return dispatch(receiveCountries(countryPaths))

    dispatch(requestCountries())
    return new Promise((resolve, reject) => {
      json("/api/report/world-topo.json", (err, countryPaths) => {
        if (err) {
          console.log("Failed at fetching country paths")
          reject(err)
        }
        else {
          console.log("RECEIVED COUNTRY PATHS")
          dispatch(receiveCountries(countryPaths))
          resolve()
        }
      })
    })
  }
}

export const setIndicator = indicator => ({
  type: SET_INDICATOR,
  indicator,
})

export const selectSociety = societyID => ({
  type: SELECT_SOCIETY,
  societyID
})

export const unselectSociety = societyID => ({
  type: UNSELECT_SOCIETY,
  societyID
})

export const clearSocieties = () => ({
  type: CLEAR_SOCIETIES
})
