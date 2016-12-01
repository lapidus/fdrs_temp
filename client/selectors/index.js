import { createSelector } from "reselect"
import filter from "lodash/fp/filter"
import find from "lodash/fp/find"

const nsIdProp = "KPI_DON_Code"

// selectors
const getSociety = (state, props) =>
  state.appReducer.nationalSocieties.find(s => s.slug === props.params.id)

const getData = state => state.appReducer.timeSeries
const getDocuments = state => state.appReducer.documents

// exported selector generators, so they can use props
// and still utilise memoization
export const makeGetSociety = () =>
  createSelector(getSociety, society => society)

export const makeGetSocietyData = () =>
  createSelector (
    [ getData, getSociety ],
    (data, society) => filter(d => d[nsIdProp] === society[nsIdProp], data)
  )

export const makeGetSocietyDocuments = () =>
  createSelector (
    [ getDocuments, getSociety ],
    (documents, society) =>
      find(d => d.code === society.iso_2, documents).documents
  )
