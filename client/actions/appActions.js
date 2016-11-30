import Promise from "promise-polyfill"
import { csv } from "d3"
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
          console.log("Failed at fetching national societies")
          reject(err)
        }
        else {
          console.log("Received National Societies")
          dispatch(receiveTimeSeries(res))
          resolve()
        }
      })
    })
  }
}
