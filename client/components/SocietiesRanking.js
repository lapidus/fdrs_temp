import React from "react"
import { connect } from "react-redux"
import { translate } from "react-i18next"
import niceNum from "../utils/niceNum"

class SocietiesRanking extends React.Component {
  render() {

    const { t } = this.props

    return (
      <ul className="m0 p0">
        {
          this.props.societiesList.reverse().map((society, i) => {
            return (
              <li className="block" key={i} style={{background: i % 2 === 0 ? "rgba(0,0,0,0.05)" : "transparent"}}>
                <button className="relative block btn base-12 pl15 pr4 text-left overflow-hidden text-xs">
                  <div className="overflow-hidden" style={{whiteSpace:"nowrap",textOverflow:"ellipsis"}}>
                    { t("national-societies:" + society.KPI_DON_Code) }
                  </div>
                  <div className="absolute t50 r0 y-center-self text-center color-secondary text-xs" style={{width:"4rem"}}>
                    { niceNum(society[this.props.currentIndicator], null, null, false) }
                  </div>
                </button>
              </li>
            )
          })
        }

      </ul>
    )
  }
}

export default translate(["overview", "national-societies"], { wait: true })(SocietiesRanking)
