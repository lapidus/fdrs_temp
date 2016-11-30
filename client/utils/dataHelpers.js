import filter from "lodash/fp/filter"

export const nsFilter = id => filter(d => d.KPI_DON_Code === id)
export const dataByNS = (id, data) => nsFilter(id)(data)
