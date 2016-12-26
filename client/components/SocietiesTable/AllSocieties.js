
import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router"
import niceNum from "../../utils/niceNum"
import { VictoryLine, VictoryScatter } from "victory"
import SocietyRow from "./SocietyRow"

class AllSocieties extends React.Component {
  render() {

    const {
      nationalSocieties,
      selectedSocieties,
      societiesBlacklist,
      groupedTimeSeries,
      currentIndicator,
      currentYear
    } = this.props

    return (
      <div>
        {
          selectedSocieties.length > 0 ? (
            <div className="clearfix relative my2">
              <hr />
              <div className="absolute t0 l0 y-center-self px1 bg-white color-primary small strong">
                { "All National Societies" }
              </div>
            </div>
          ) : (
            null
          )
        }

        <table className="base-12 text-left shadow-2">
          <tbody>
            <tr>
              <td className="p1 sm-4">{ "IFRC (all National Societies)" }</td>
              <td className="p1 sm-4">{ "Trendline" }</td>
              <td className="p1 sm-4">{ "16,031,869" }</td>
            </tr>
            {
              nationalSocieties.map((NS, i) => {
                return societiesBlacklist.indexOf(NS.KPI_DON_Code) == -1 ? (
                  <SocietyRow
                    nationalSociety={ NS }
                    key={ i }
                    rowKey={ i }
                    groupedTimeSeries={ groupedTimeSeries }
                    currentIndicator={ currentIndicator }
                    currentYear={ currentYear }
                    societiesBlacklist={ societiesBlacklist }
                  />
                ) : (
                  null
                )
              })
            }
          </tbody>
        </table>

      </div>
    )
  }
}

// <tr key={ i }></tr>

const mapStateToProps = state => ({
  nationalSocieties: state.appReducer.nationalSocieties
})

export default connect(mapStateToProps)(AllSocieties)
