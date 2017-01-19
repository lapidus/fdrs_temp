
import React from "react"
import LanguageLink  from "../components/LanguageLink"
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
                <a href="downloads/FDRS_DATASET.csv" className="px1">
                  <span>
                    <svg style={{width:16,height:16,marginTop:-1,marginRight:16}} width="24px" height="24px" viewBox="0 0 24 24">
                      <g transform="translate(0, 0)" style={{stroke:"currentcolor"}}>
                        <line fill="none" strokeWidth="2" strokeMiterlimit="10" x1="12" y1="9" x2="12" y2="22" strokeLinejoin="miter" strokeLinecap="butt"/>
                        <polyline fill="none" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" points="15,19 12,22 9,19 " strokeLinejoin="miter"/>
                        <path fill="none" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M17,16h2c2.209,0,4-1.791,4-4c0-2.197-1.782-4.013-4.025-3.997C18.718,4.093,15.474,1,11.5,1C7.481,1,4.21,4.164,4.018,8.136C2.287,8.575,1,10.132,1,12c0,2.209,1.791,4,4,4h2" strokeLinejoin="miter"/>
                      </g>
                    </svg>
                  </span>
                  { "DOWNLOAD CSV FILE" }
                </a>
              </button><br /><br />
              <button className="btn bg-primary">
                <a href="downloads/FDRS_DATASET.csv" className="px1">
                  <span>
                    <svg style={{width:16,height:16,marginTop:-1,marginRight:16}} width="24px" height="24px" viewBox="0 0 24 24">
                      <g transform="translate(0, 0)" style={{stroke:"currentcolor"}}>
                        <line fill="none" strokeWidth="2" strokeMiterlimit="10" x1="12" y1="9" x2="12" y2="22" strokeLinejoin="miter" strokeLinecap="butt"/>
                        <polyline fill="none" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" points="15,19 12,22 9,19 " strokeLinejoin="miter"/>
                        <path fill="none" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M17,16h2c2.209,0,4-1.791,4-4c0-2.197-1.782-4.013-4.025-3.997C18.718,4.093,15.474,1,11.5,1C7.481,1,4.21,4.164,4.018,8.136C2.287,8.575,1,10.132,1,12c0,2.209,1.791,4,4,4h2" strokeLinejoin="miter"/>
                      </g>
                    </svg>
                  </span>
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
              <LanguageLink to="/fdrs" className="btn btn--raised bg-primary">
                <span className="block py05 px1">{ "Login as data collector" }</span>
              </LanguageLink>
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
