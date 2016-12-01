import { createSelector } from "reselect"
import filter from "lodash/fp/filter"

const nsIdProp = "KPI_DON_Code"

// selectors
const getSociety = (state, props) =>
  state.appReducer.nationalSocieties.find(s => s.slug === props.params.id)

const getData = state => state.appReducer.timeSeries

// exported selector generators, so they can use props
// and still utilise memoization
export const makeGetSociety = () =>
  createSelector(getSociety, society => society)

export const makeGetSocietyData = () =>
  createSelector (
    [ getData, getSociety ],
    (data, society) => filter(d => d[nsIdProp] === society[nsIdProp], data)
  )
