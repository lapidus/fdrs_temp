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
        <Icon name="goto" />
      </a>
    </li>
  )

  return (
    <div>
      <div className="clearfix bg-primary pb2">
        <div className="clearfix pt3 px1 sm-px0">
          <div className="col sm-3 sm-offset-2">
            <p className="small strong caps m0">
              { t("report-common:home.downloadReportSection.preTitle") }
            </p>
            <h2 className="display-1 mt0">
              { t("report-common:home.downloadReportSection.title") }
            </h2>
            <HeadlineDivider />
            <br />
            <br />
          </div>
        </div>
        <div className="clearfix pb3 px1 sm-px0">
          <div className="col sm-4 sm-offset-2 pr2">
            <img src="/img/cover.png" alt="" />
          </div>
          <div className="col sm-4">
            <p className="lead">{ t("report-common:home.downloadReportSection.body") }</p>
            <ul>
              { downloadLinks }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

ReadMore.propTypes = {
  t: React.PropTypes.func.isRequired,
}

export default translate()(ReadMore)
