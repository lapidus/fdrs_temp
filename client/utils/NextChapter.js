import React from "react"
import LanguageLink  from "../components/LanguageLink"

import Icon from "../components/Icon"

const NextChapter = ({ nextChapter, slug }, { language }) =>
  <div className="clearfix py2 bg-light">
    <div className="col sm-6 sm-offset-6 px1">
      <p className="text-sm color-primary m0">{ nextChapter.heading }</p>
      <h2 className="text-md sm-text-lg mt0 light">
        <LanguageLink to={ slug ?  slug  : `/fdrs/report/${nextChapter.slug}` }>
          { nextChapter.title }
          {/* <Icon name="goto" width={ 30 } height={ 30 } /> */}
        </LanguageLink>
      </h2>
    </div>
  </div>

NextChapter.propTypes = {
  nextChapter: React.PropTypes.object,
  slug: React.PropTypes.string,
}

NextChapter.contextTypes = {
  language: React.PropTypes.string,
}

export default NextChapter
