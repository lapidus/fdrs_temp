import React from "react"
import { Link } from "react-router"

import Icon from "../components/Icon"

import prefixLanguageToRoute from "./prefixLanguageToRoute"

const NextChapter = ({ nextChapter }, { language }) =>
  <div className="clearfix py2 bg-secondary">
    <div className="col sm-6 sm-offset-6 px1">
      <p>{ nextChapter.heading }</p>
      <h2 className="display-1">
        <Link to={ prefixLanguageToRoute(language, `/${nextChapter.slug}`) }>
          { nextChapter.title } <Icon name="goto" width={ 30 } height={ 30 } />
        </Link>
      </h2>
    </div>
  </div>

NextChapter.propTypes = {
  nextChapter: React.PropTypes.object,
}

NextChapter.contextTypes = {
  language: React.PropTypes.string,
}

export default NextChapter
