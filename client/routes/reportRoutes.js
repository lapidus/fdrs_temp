import React from "react"
import { Route, IndexRoute } from "react-router"

import Report from "../containers/Report"
import DataView from "../containers/Report/DataView"
import Acknowledgements from "../containers/Report/Acknowledgements"
import Home from "../containers/Report/Home"
import Chapter1 from "../containers/Report/chapters/Chapter1"
import Chapter2 from "../containers/Report/chapters/Chapter2"
import Chapter3 from "../containers/Report/chapters/Chapter3"
import Chapter4 from "../containers/Report/chapters/Chapter4"
import Chapter5 from "../containers/Report/chapters/Chapter5"
import Chapter6 from "../containers/Report/chapters/Chapter6"
import Chapter7 from "../containers/Report/chapters/Chapter7"
import Chapter8 from "../containers/Report/chapters/Chapter8"
import Chapter9 from "../containers/Report/chapters/Chapter9"

import { report } from "./config"

const { routes } = report

function errorLoading(err) {
  console.error("Dynamic page loading failed", err)
}

function loadRoute(cb) {
  return module => cb(null, module.default)
}

// const ReportRoutes = () =>
//   <Route path={ report.slug } component={ Report }>
//     <IndexRoute component={ Home } />
//     <Route path={ routes.data.slug } component={ DataView } />
//     <Route path={ routes.acknowledgements.slug } component={ Acknowledgements } />
//     <Route path={ routes.chapter1.slug } component={ Chapter1 } />
//     <Route path={ routes.chapter2.slug } component={ Chapter2 } />
//     <Route path={ routes.chapter3.slug } component={ Chapter3 } />
//     <Route path={ routes.chapter4.slug } component={ Chapter4 } />
//     <Route path={ routes.chapter5.slug } component={ Chapter5 } />
//     <Route path={ routes.chapter6.slug } component={ Chapter6 } />
//     <Route path={ routes.chapter7.slug } component={ Chapter7 } />
//     <Route path={ routes.chapter8.slug } component={ Chapter8 } />
//     <Route path={ routes.chapter9.slug } component={ Chapter9 } />
//   </Route>

// export default ReportRoutes

export default {
  path: "report",
  getComponent(location, cb) {
    System.import("../containers/Report")
      .then(loadRoute(cb))
      .catch(errorLoading)
  },
  childRoutes: [
    {
      path: "strategic-aim-1",
      getComponent(location, cb) {
        System.import("../containers/Report/chapters/Chapter4")
          .then(loadRoute(cb))
          .catch(errorLoading)
      },
    },
  ],
}
