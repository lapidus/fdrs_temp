
import React from "react"
import Breadcrumbs from "../components/Breadcrumbs"

import { translate } from "react-i18next"


class Download extends React.Component {
  render() {
    const { t } = this.props
    const { language } = this.context.i18n
    return (
      <section>
        <Breadcrumbs links={[
          { name: "Home", path: "/" },
          { name: "Data download", path: "/download" },
        ]}/>
        <div className="px1">
          <div className="clearfix mxn1">
            <header className="col sm-6 sm-offset-3 px1 pt1">
              <h1 className="display-1 md-display-2 m0 light">{ t("data-download:title") } </h1>
            </header>
          </div>

          <div className="clearfix mxn1 pb4">
            <div className="col sm-6 sm-offset-3 px1 pt1">
              <p className="lead">{ t("data-download:intro") }</p>
              <button className="btn bg-primary">
                <a href="downloads/FDRS_DATASET.csv">
                  { "DOWNLOAD CSV FILE" }
                </a>
              </button><br /><br />
              <button className="btn bg-primary">
                <a href="downloads/FDRS_DATASET.csv">
                  { "DOWNLOAD EXCEL FILE" }
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}


Download.propTypes = {
  t: React.PropTypes.func.isRequired,
}

Download.contextTypes = {
  i18n: React.PropTypes.object,
}

export default translate("data-download")(Download)
