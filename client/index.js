import React from "react"
import ReactDOM from "react-dom"
import { Router, match, browserHistory } from "react-router"
import { Provider } from "react-redux"
import { I18nextProvider } from "react-i18next"

import routes from "./routes"
import configureStore from "./configureStore"
import fetchNeededData from "./utils/needsFetcher"
import i18n from "./i18n"
import {
  startMainLoad,
  endMainLoad,
  closeNav,
} from "./actions/appActions"

var ReactGA = require('react-ga');
ReactGA.initialize('UA-91167716-1');

const store = configureStore()
window.store = store
const history = browserHistory

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

function beforeTransitionHandler(location, callback) {
  console.log("Before transition")

  // Check and set new language if needed
  const urlArr = location.pathname.split("/")
  const newLang = urlArr[1] && urlArr[1].length === 2 ? urlArr[1] : "en"
  if (i18n.language !== newLang) i18n.changeLanguage(newLang)

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    store.dispatch(startMainLoad())
    fetchNeededData(store.dispatch, renderProps)
      .then(() => {
        store.dispatch(endMainLoad())
        setTimeout(() => {
          window.scroll(0, 0)
          callback()
        }, 300)
      })
      .catch(console.error)
  })
}

history.listenBefore(beforeTransitionHandler)
history.listen(() => store.dispatch(closeNav()))

document.addEventListener("DOMContentLoaded", () => {
  // Check for data to be loaded on first load of the app...
  beforeTransitionHandler(window.location, () => {
    console.log("Pre render")
    ReactDOM.render(
      <I18nextProvider i18n={ i18n }>
        <Provider store={ store }>
          <Router history={ history } routes={ routes } onUpdate={ logPageView } />
        </Provider>
      </I18nextProvider>,
      document.getElementById("app"))
  })
})
