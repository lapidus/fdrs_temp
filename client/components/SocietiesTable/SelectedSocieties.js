
import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router"
import niceNum from "../../utils/niceNum"
import { VictoryLine, VictoryScatter } from "victory"
import SocietyRow from "./SocietyRow"

const SelectedSocieties = ({
  nationalSocieties,
  selectedSocieties,
  societiesBlacklist,
  groupedTimeSeries,
  currentIndicator,
  currentYear,
  handleUnselectSociety
}) => (
  <div>
    {
      selectedSocieties.length > 0 ? (
        <div className="clearfix relative my2">
          <hr />
          <div className="absolute t0 l0 y-center-self px1 bg-white color-primary small strong">
            { "Selected National Societies" }
          </div>
        </div>
      ) : (
        null
      )
    }

    {
      selectedSocieties.length > 0 ? (
        <table className="base-12 text-left shadow-2">
          <tbody>
            {
              selectedSocieties.map((NS, i) => {
                return (
                  <SocietyRow
                    nationalSociety={NS}
                    key={i}
                    rowKey={i}
                    groupedTimeSeries={groupedTimeSeries}
                    currentIndicator={currentIndicator}
                    currentYear={currentYear}
                    societiesBlacklist={societiesBlacklist}
                  />
                )
              })
            }

            { /*
              selectedSocieties.map((ns, i) => {
                return (
                  <tr key={ i } className="relative">
                    <td className="p1 sm-4">
                      <Link to={`/societies/${ns.slug}`}>
                        { ns.label }
                      </Link>
                    </td>
                    <td className="p1 sm-4">{ "Trendline" }</td>
                    <td className="p1 sm-4">
                        {(() => {
                          var latestData = groupedTimeSeries[currentYear]
                                               .filter(obj => obj.KPI_DON_Code === ns.value)
                          var latestNumber = latestData.length > 0 ? latestData[0][currentIndicator.id] : "N/A"
                          return (
                            <div className="relative">
                              <span>{ latestNumber }</span>
                              <div onClick={(e) => handleUnselectSociety(ns, e)} className="btn absolute r0 t50 y-center-self bg-primary">x</div>
                            </div>
                          )
                        })()}
                    </td>
                  </tr>
                )
              })
            */ }
          </tbody>
        </table>
      ) : (
        ""
      )
    }

  </div>
)

const mapStateToProps = state => ({
  nationalSocieties: state.appReducer.nationalSocieties
})

export default connect(mapStateToProps)(SelectedSocieties)
