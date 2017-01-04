
import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router"
import niceNum from "../../utils/niceNum"
import { VictoryLine, VictoryScatter } from "victory"
import SocietyRow from "./SocietyRow"

const SelectedSocieties = ({
  selectedSocieties,
  societiesBlacklist,
  groupedTimeSeries,
  groupedByCode,
  currentIndicator,
  currentYear,
  currentDataset,
  nationalSocieties,
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
                const nationalSociety = currentDataset.filter(o => o.KPI_DON_Code === NS.KPI_DON_Code)[0]
                return (
                  <SocietyRow
                    nationalSociety={ nationalSociety }
                    nationalSocieties={ nationalSocieties }
                    key={NS.KPI_DON_Code}
                    rowKey={NS.KPI_DON_Code}
                    groupedTimeSeries={ groupedTimeSeries }
                    groupedByCode={ groupedByCode }
                    currentDataset={ currentDataset }
                    currentIndicator={ currentIndicator }
                    currentYear={ currentYear }
                    societiesBlacklist={ societiesBlacklist }
                  />
                )
              })
            }
          </tbody>
        </table>
      ) : (
        null
      )
    }
  </div>
)

export default SelectedSocieties
