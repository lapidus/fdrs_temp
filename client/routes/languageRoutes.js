import React from "react"
import { Route, IndexRoute } from "react-router"

import Home from "../containers/Home"

import reportRoutes from "./reportRoutes"
import LanguageRoute from "./LanguageRoute"

const LanguageRoutes = (lang) =>
  <Route path={ lang } component={ LanguageRoute }>
    <IndexRoute component={ Home } />
    { reportRoutes() }
  </Route>

export default LanguageRoutes
