import Promise from "promise-polyfill"

export default function fetchNeededData(dispatch, components, params, renderProps) {
  const needs = components.reduce((prev, current) => {
    return (current.needs || [])
      // Not sure this is necessary anymore, or perhaps this depends on how the routes
      // are set up. This seems to lead to redundant needs...
      // .concat((current.WrappedComponent ? current.WrappedComponent.needs : []) || [])
      .concat(prev);
  }, []);
  const promises = needs.map((need) => {
    return dispatch(need(params, renderProps.location.pathname));
  });
  console.log(promises);

  return Promise.all(promises);
}
