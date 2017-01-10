
import React from "react"
import { Link } from "react-router"
import Breadcrumbs from "../components/Breadcrumbs"

import { translate } from "react-i18next"

class Download extends React.Component {
  render() {
    const { t } = this.props
    const { language } = this.context.i18n
    return (
      <section>
        <Breadcrumbs links={[
          { name: "Home", path: "/fdrs" },
          { name: "Data download", path: "/fdrs/download" },
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

        <div className="px1 py4 bg-secondary">
          <div className="clearfix mxn1">
            <div className="col sm-10 sm-offset-1 px1">
              <h2 className="headline sm-display-1 light mt0">{ "For data collectors" }</h2>
              <p className="lead">{ "To get started with the data collection for your National Society, please log in." }</p>
              <Link to="/fdrs" className="btn btn--raised bg-primary">
                <span className="block py05 px1">{ "Login as data collector" }</span>
              </Link>
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
