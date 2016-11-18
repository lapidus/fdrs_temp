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

const ReportRoutes = () =>
  <Route path="report" component={ Report }>
    <IndexRoute component={ Home } />
    <Route path="data" component={ DataView } />
    <Route path="acknowledgements" component={ Acknowledgements } />
    <Route path="who-we-are" component={ Chapter1 } />
    <Route path="what-we-do" component={ Chapter2 } />
    <Route path="living-our-fundamental-principles" component={ Chapter3 } />
    <Route path="strategic-aim-1" component={ Chapter4 } />
    <Route path="strategic-aim-2" component={ Chapter5 } />
    <Route path="strategic-aim-3" component={ Chapter6 } />
    <Route path="enabling-action-1" component={ Chapter7 } />
    <Route path="enabling-action-2" component={ Chapter8 } />
    <Route path="enabling-action-3" component={ Chapter9 } />
  </Route>

export default ReportRoutes
