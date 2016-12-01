import React from "react"
import { connect } from "react-redux"

import {
  makeGetIndicatorData,
} from "../../selectors"

class Map extends React.Component {
  render() {
    const { data, indicator } = this.props

    return (
      <div className="py4 pl2" style={{ clear: "left" }}>
        <h2>{ indicator.description }</h2>
        <pre>{ JSON.stringify(data, null, 2) }</pre>
      </div>
    )
  }
}

Map.propTypes = {
  indicator: React.PropTypes.object.isRequired,
  data: React.PropTypes.array,
}

Map.contextTypes = {
  i18n: React.PropTypes.object.isRequired,
}

const makeMapStateToProps = () => {
  const getIndicatorData = makeGetIndicatorData()
  return (state, props) => ({
    data: getIndicatorData(state, props),
  })
}

export default connect(makeMapStateToProps)(Map)
