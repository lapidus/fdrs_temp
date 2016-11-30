import React from "react"
import { connect } from "react-redux"

import {
  fetchNationalSocieties,
  fetchTimeSeries,
} from "../actions/appActions"

class DataView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="py4 pl2">
        { "DataView" }
      </div>
    )
  }
}

DataView.propTypes = {
  nationalSocieties: React.PropTypes.array,
  timeSeries: React.PropTypes.array,
}

DataView.contextTypes = {
  i18n: React.PropTypes.object.isRequired,
}

DataView.needs = [ fetchNationalSocieties, fetchTimeSeries ]

const mapStateToProps = ({ appReducer }) => ({
  nationalSocieties: appReducer.nationalSocieties,
  timeSeries: appReducer.timeSeries,
})

export default connect(mapStateToProps)(DataView)
