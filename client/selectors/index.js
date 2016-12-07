import { createSelector } from "reselect"
import filter from "lodash/fp/filter"
import find from "lodash/fp/find"
import map from "lodash/fp/map"

const nsIdProp = "KPI_DON_Code"
const isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n)
const emptyFilter = (id, data) => filter(d => isNumeric(d[id]), data)

// selectors
const getSociety = (state, props) =>
  find(s => s.slug === props.params.id, state.appReducer.nationalSocieties)

const getDocuments = state => state.appReducer.documents

const getData = state => state.appReducer.timeSeries

const getIndicatorData = (state, { indicator }) =>
  map(d => ({
    [nsIdProp]: d[nsIdProp],
    value: +d[indicator.id],
    year: +d.KPI_Year,
  }), emptyFilter(indicator.id, state.appReducer.timeSeries))

// exported selector generators, so they can use props
// and still utilise memoization
export const makeGetSociety = () =>
  createSelector(getSociety, society => society)

export const makeGetSocietyData = () =>
  createSelector(
    [ getData, getSociety ],
    (data, society) => filter(d => d[nsIdProp] === society[nsIdProp], data)
  )

export const makeGetSocietyDocuments = () =>
  createSelector(
    [ getDocuments, getSociety ],
    (documents, society) => {
      // Some NS e.g. Antigua and Barbuda seem to not have an iso_2 code.
      return society.iso_2 !== "#N/A" ? find(d => d.code === society.iso_2, documents).documents : []
    }

  )

export const makeGetIndicatorData = () =>
  createSelector(getIndicatorData, data => data)
