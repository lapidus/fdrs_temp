
import React from "react"

class Landing extends React.Component {
  render() {
    return (
      <div>
        <h1>{ "This is the landing page." }</h1>
        <div>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default Landing
