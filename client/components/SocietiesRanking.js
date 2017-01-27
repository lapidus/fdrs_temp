
import React from "react"
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
                <button className="relative block btn base-12 pl15 pr4 text-left overflow-hidden text-xs" onClick={ (e) => this.props.onSocietyClick(e, society, this.props.currentIndicator) }>
                  <div className="overflow-hidden" style={{whiteSpace:"nowrap",textOverflow:"ellipsis"}}>
                    <svg width="16px" height="16px" viewBox="0 0 16 16" style={{marginRight:"0.5rem"}}>
                      {
                        this.props.selectedSocieties.indexOf(society.KPI_DON_Code) !== -1 ? (
                          <g>
                            <polygon fill="#444444" points="5.6,9.6 2.4,6.4 0,8.8 5.6,14.4 16,4 13.6,1.6 " />
                          </g>
                        ) : null
                      }
                    </svg>
                    { t(`national-societies:${society.KPI_DON_Code}`) }
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

SocietiesRanking.propTypes = {
  currentIndicator: React.PropTypes.string,
  societiesList: React.PropTypes.array,
  nationalSocieties: React.PropTypes.array,
  selectedSocieties: React.PropTypes.array,
  onSocietyClick: React.PropTypes.func,
  t: React.PropTypes.func.isRequired,
}

export default translate([ "national-societies" ], { wait: true })(SocietiesRanking)
