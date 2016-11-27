import React from "react"

class Societies extends React.Component {
  render() {
    return (
      <div className="py4 pl2">
        <h1>{ "Societies index page" }</h1>
      </div>
    )
  }
}

Societies.contextTypes = {
  i18n: React.PropTypes.object.isRequired,
}

export default Societies
