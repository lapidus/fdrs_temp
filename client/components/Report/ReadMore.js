import React from "react"
import { translate } from "react-i18next"

import HeadlineDivider from "../HeadlineDivider"
import Icon from "../Icon"

const ReadMore = ({ t }) => {
  const downloadLinks = [ "en", "fr", "es", "ar" ].map((lang, i) =>
    <li key={ lang }>
      <a
        className="btn py1"
        href={ `/downloads/Everyone_counts_2013_${lang}.pdf` }
        target="_blank"
        rel="noopener noreferrer"
      >
        { t(`report-common:home.downloadReportSection.buttons.${i}`) }
        &nbsp;
        {/* <Icon name="goto" /> */}
      </a>
    </li>
  )

  return (
    <div className="bg-primary pb2 px1">
      <div className="clearfix pt3 px1 sm-px0">
        <div className="col sm-3 sm-offset-2">
          <p className="text-sm m0">
            { t("report-common:home.downloadReportSection.preTitle") }
          </p>
          <h2 className="text-md sm-text-lg mt0 light">
            { t("report-common:home.downloadReportSection.title") }
          </h2>
          <HeadlineDivider />
          <br />
          <br />
        </div>
      </div>
      <div className="clearfix pb3 mxn1 text-center sm-text-left">
        <div className="col sm-5 sm-offset-1 md-4 md-offset-2 px1 mb2">
          <img src="/img/cover.png" alt="report-cover" style={{ width: "100%" }}/>
        </div>
        <div className="col sm-5 md-4 px1">
          <p className="lead">{ t("report-common:home.downloadReportSection.body") }</p>
          <ul>
            { downloadLinks }
          </ul>
        </div>
      </div>
    </div>
  )
}

ReadMore.propTypes = {
  t: React.PropTypes.func.isRequired,
}

export default translate()(ReadMore)
