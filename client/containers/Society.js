import React from "react"

class Society extends React.Component {

  render() {
    const { id } = this.props.params
    return (
      <div className="py4 pl2">
        <h1>{ "Society profile page" }</h1>
        <div>{ `Society id: ${id}` }</div>
      </div>
    )
  }
}

Society.propTypes = {
  params: React.PropTypes.object.isRequired,
}

Society.contextTypes = {
  i18n: React.PropTypes.object.isRequired,
}

export default Society
