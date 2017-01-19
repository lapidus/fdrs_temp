
import React from "react"
import { connect } from "react-redux"
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
  unselectSociety
}) => (
  <div>
    {
      selectedSocieties.length > 0 ? (
        <table className="base-12 text-left shadow-3">
          <tbody>
            {
              selectedSocieties.map((NS, i) => {
                const nationalSociety = currentDataset.filter(o => o.KPI_DON_Code === NS)[0]
                return (
                  <SocietyRow
                    forceUpdate={true}
                    nationalSociety={ nationalSociety }
                    nationalSocieties={ nationalSocieties }
                    key={NS}
                    rowKey={NS}
                    groupedTimeSeries={ groupedTimeSeries }
                    groupedByCode={ groupedByCode }
                    currentDataset={ currentDataset }
                    currentIndicator={ currentIndicator }
                    currentYear={ currentYear }
                    societiesBlacklist={ societiesBlacklist }
                    unselectSociety={ unselectSociety }
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
