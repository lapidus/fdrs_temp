import React from "react"
import { translate } from "react-i18next"

class Home extends React.Component {

  render() {
    const { t } = this.props
    return <div className="py4 pl2">{ t("report-common:site-title") }</div>
  }
}

Home.propTypes = {
  t: React.PropTypes.func.isRequired,
}

Home.contextTypes = {
  i18n: React.PropTypes.object.isRequired,
}

export default translate()(Home)
