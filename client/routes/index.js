import React from "react"
import { Route, IndexRoute } from "react-router"

import App from "../containers/App"

import { report } from "./config"

// import reportRoutes from "./reportRoutes"
// import languageRoutes from "./languageRoutes"

// const routes = (
//   <Route path="/" component={ App }>
//     <IndexRoute component={ Home } />
//     { languageRoutes("fr") }
//     { languageRoutes("es") }
//     { reportRoutes() }
//   </Route>
// )

// export default routes

function errorLoading(err) {
  console.error("Dynamic page loading failed", err)
}

function loadRoute(cb) {
  return module => cb(null, module.default)
}

const reportChildRoutes = Object.keys(report.routes).map(routeKey => ({
  path: report.routes[routeKey].slug,
  getComponent(location, cb) {
    System.import(`../containers/Report/${routeKey}`)
      .then(loadRoute(cb))
      .catch(errorLoading)
  },
}))

export default {
  component: App,
  childRoutes: [

    // *****************************
    // Main paths, language prefixed
    // *****************************
    {
      path: "/",
      getComponent(location, cb) {
        System.import("../containers/Home").then(loadRoute(cb)).catch(errorLoading)
      },
    },

    // *****************************
    // Report paths
    // *****************************
    {
      path: "report",
      getComponent(location, cb) {
        System.import("../containers/Report").then(loadRoute(cb)).catch(errorLoading)
      },
      childRoutes: reportChildRoutes,
    },

    // *****************************
    // French paths
    // *****************************
    {
      path: "fr",
      getComponent(location, cb) {
        System.import("./LanguageRoute").then(loadRoute(cb)).catch(errorLoading)
      },
      childRoutes: [
        {
          path: "report",
          getComponent(location, cb) {
            System.import("../containers/Report").then(loadRoute(cb)).catch(errorLoading)
          },
          childRoutes: reportChildRoutes,
        },
      ],
    },
  ],
}
