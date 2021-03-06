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

// FDRS child routes
const fdrsChildRoutes = [
  {
    path: "data",
    getComponent(location, cb) {
      System.import("../containers/Data").then(loadRoute(cb)).catch(errorLoading)
    },
  }, {
    path: "overview",
    getComponent(location, cb) {
      System.import("../containers/Overview/index").then(loadRoute(cb)).catch(errorLoading)
    },
    childRoutes: [
      {
        path: "map",
        getComponent(location, cb) {
          System.import("../containers/Overview/OverviewMap").then(loadRoute(cb)).catch(errorLoading)
        },
      },
      {
        path: "table",
        getComponent(location, cb) {
          System.import("../containers/Overview/OverviewTable").then(loadRoute(cb)).catch(errorLoading)
        },
      }
    ]
  }, {
    path: "faq",
    getComponent(location, cb) {
      System.import("../containers/FAQ").then(loadRoute(cb)).catch(errorLoading)
    },
  }, {
    path: "about",
    getComponent(location, cb) {
      System.import("../containers/About").then(loadRoute(cb)).catch(errorLoading)
    },
  }, {
    path: "data-download",
    getComponent(location, cb) {
      System.import("../containers/DataDownload").then(loadRoute(cb)).catch(errorLoading)
    },
  }, {
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
    path: "societies_pdf/:id",
    getComponent(location, cb) {
      System.import("../containers/SocietyPDF").then(loadRoute(cb)).catch(errorLoading)
    },
  },{
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

const fdrsRoutes = [
  {
    path: "fdrs",
    getComponent(location, cb) {
      System.import("../containers/FDRS").then(loadRoute(cb)).catch(errorLoading)
    },
    indexRoute: {
      getComponent(location, cb) {
        System.import("../containers/Home").then(loadRoute(cb)).catch(errorLoading)
      }
    },
    childRoutes: fdrsChildRoutes
  }
]

const routes = {
  component: App,
  childRoutes: [
    {
      path: "/",
      getComponent(location, cb) {
        System.import("../containers/Landing").then(loadRoute(cb)).catch(errorLoading)
      },
    }
  ]
}

// add main child routes, default ("en" skipped in the url)
routes.childRoutes = routes.childRoutes.concat(fdrsRoutes)

// helper to create language prefixed routes
const langPrefixedRoutes = lang => ({
  path: lang,
  indexRoute: {
    getComponent(location, cb) {
      System.import("../containers/Landing").then(loadRoute(cb)).catch(errorLoading)
    },
  },
  childRoutes: fdrsRoutes,
})

routes.childRoutes.push(
  langPrefixedRoutes("fr"),
  langPrefixedRoutes("es"),
  langPrefixedRoutes("ar"),
)

export default routes
