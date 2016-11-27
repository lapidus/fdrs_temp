import App from "../containers/App"

import { report } from "./config"

// error log for faild dynamic loading
const errorLoading = err => console.error("Dynamic page loading failed", err)

// helper module loader for dynamic loader
const loadRoute = cb => module => cb(null, module.default)

// an array of routes for the /report
// based on the config
const reportChildRoutes = Object.keys(report.routes).map(routeKey => ({
  path: report.routes[routeKey].slug,
  getComponent(location, cb) {
    System.import(`../containers/Report/${routeKey.charAt(0).toUpperCase() + routeKey.slice(1)}`)
      .then(loadRoute(cb))
      .catch(errorLoading)
  },
}))

// helper to create language prefixed routes
const langPrefixedRoutes = lang => ({
  path: lang,
  indexRoute: {
    getComponent(location, cb) {
      System.import("../containers/Home").then(loadRoute(cb)).catch(errorLoading)
    },
  },
  childRoutes: childRoutes,
})

// our main child routes, extracted to reuse in the language prefixed routes
const childRoutes = [
  {
    path: "societies",
    getComponent(location, cb) {
      System.import("../containers/Societies").then(loadRoute(cb)).catch(errorLoading)
    },
  }, {
    path: "societies/:id",
    getComponent(location, cb) {
      System.import("../containers/Society").then(loadRoute(cb)).catch(errorLoading)
    },
  }, {
    path: "report",
    getComponent(location, cb) {
      System.import("../containers/Report").then(loadRoute(cb)).catch(errorLoading)
    },
    indexRoute: {
      getComponent(location, cb) {
        System.import("../containers/Report/Home").then(loadRoute(cb)).catch(errorLoading)
      },
    },
    childRoutes: reportChildRoutes,
  },
]

// main routes config
const routes = {
  component: App,
  childRoutes: [ {
    path: "/",
    getComponent(location, cb) {
      System.import("../containers/Home").then(loadRoute(cb)).catch(errorLoading)
    },
  } ],
}

// add main child routes, default ("en" skipped in the url)
routes.childRoutes = routes.childRoutes.concat(childRoutes)
// and language prefixed
routes.childRoutes.push(
  langPrefixedRoutes("fr"),
  langPrefixedRoutes("es"),
)

export default routes