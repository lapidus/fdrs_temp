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
  fetchLanguage,
} from "./actions/appActions"

require("promise-polyfill")

const store = configureStore()
window.store = store
const history = browserHistory
let firstLoad = true

function beforeTransitionHandler(location, callback) {
  console.log("Before transition")
  // Check language
  const urlArray = location.pathname.split("/")
  const currentLanguage = store.getState().appReducer.language
  const newLanguage = urlArray[1]
  let languageFetchingPromise

  if (i18n.language !== newLanguage) i18n.changeLanguage(newLanguage || "en")

  // Switch language if necessary
  // newLanguage: /fr /es /ar    currentLanguage: en fr es ar
  if (newLanguage.length === 2) {
    if (newLanguage !== currentLanguage) {
      languageFetchingPromise = store.dispatch(fetchLanguage(newLanguage))
    }
    else {
      languageFetchingPromise = null
    }
  }
  // newLanguage: /              currentLanguage: en
  else if (currentLanguage === "en") {
    languageFetchingPromise = firstLoad ?
                              store.dispatch(fetchLanguage("en")) :
                              null
  }
  // newLanguage: /              currentLanguage: en fr es ar
  else {
    languageFetchingPromise = store.dispatch(fetchLanguage("en"))
  }

  // Load necessary data
  if (languageFetchingPromise) {
    languageFetchingPromise
      .then(() => {
        match({ routes, location }, (error, redirectLocation, renderProps) => {
          store.dispatch(startMainLoad())
          const dataFetchingPromise = fetchNeededData(
            store.dispatch,
            renderProps.components,
            renderProps.params,
            renderProps
          )
          dataFetchingPromise
            .then(() => {
              store.dispatch(endMainLoad())
              setTimeout(() => {
                window.scroll(0,0)
                callback()
              }, 300)
            })
            .catch(err => console.log(err.statusCode))
        })
      })
      .catch(err => console.log(err.statusCode))
  }
  else {
    match({ routes, location }, (error, redirectLocation, renderProps) => {
      store.dispatch(startMainLoad())
      const dataFetchingPromise = fetchNeededData(
        store.dispatch,
        renderProps.components,
        renderProps.params,
        renderProps
      )
      dataFetchingPromise
        .then(() => {
          store.dispatch(endMainLoad())
          setTimeout(() => {
            window.scroll(0,0)
            callback()
          }, 300)
        })
        .catch(err => console.log(err.statusCode))
    })
  }
}

history.listenBefore(beforeTransitionHandler)
history.listen(() => store.dispatch(closeNav()))

document.addEventListener("DOMContentLoaded", () => {
  // Check for data to be loaded on first load of the app...
  beforeTransitionHandler(window.location, () => {
    firstLoad = false
    console.log("Pre render")
    ReactDOM.render(
      <I18nextProvider i18n={ i18n }>
        <Provider store={ store }>
          <Router history={ history } routes={ routes } />
        </Provider>
      </I18nextProvider>,
      document.getElementById("app"))
  })
})
