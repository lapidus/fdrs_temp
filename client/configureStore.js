
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const logger = (store) => (next) => {
  return (action) => {
    if(console.group) console.group(action.type);
    else console.log(`\n\n${action.type}\n—————————`);

    console.log('%c prev state', 'color: grey', store.getState());
    console.log('%c action', 'color: blue', action);
    const returnValue = next(action);
    console.log('%c next state', 'color: green', store.getState());

    if(console.group) console.groupEnd(action.type);
    else console.log(`—————————\n\n\n`);

    return returnValue;
  }
};

export default function configureStore(initialState) {
  // If there is an initialState derived from the window.__INITIAL_STATE__ object
  // merge it in with the reducers
  // return createStore(combineReducers(reducers), initialState);

  // If there is middleware to be considered, use this function to apply the middleware
  // to the redux store.
  // const store = applyMiddleware(:middlewarename)(createStore)(combineReducers(reducers), initialState);

  // Simplest configuration
  // return createStore(combineReducers(reducers));
  // return applyMiddleware(thunk)(createStore)(combineReducers(reducers));
  return createStore(combineReducers(reducers), applyMiddleware(logger, thunk));
}
