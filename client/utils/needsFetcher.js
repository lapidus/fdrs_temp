import Promise from "promise-polyfill"

const fetchNeededData = (dispatch, { components, params, location }) =>
  Promise.all(
    components.reduce((p, c) =>
        (c && c.needs ? c.needs : []).concat(p)
    , [])
    .map(n => dispatch(n(params, location.pathname)))
  )

export default fetchNeededData