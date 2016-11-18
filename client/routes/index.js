import React from "react"
import { Route, IndexRoute } from "react-router"

import Home from "../containers/Home"

import reportRoutes from "./reportRoutes"
import languageRoutes from "./languageRoutes"

const routes = (
  <Route path="/" component={ require("../containers/App") }>
    <IndexRoute component={ Home } />
    { languageRoutes("fr") }
    { languageRoutes("es") }
    { reportRoutes() }
  </Route>
)

export default routes
