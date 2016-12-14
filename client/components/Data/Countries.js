
import React from "react"
import { geoPath } from "d3-geo";

class Countries extends React.Component {
  shouldComponentUpdate() {
    return false // Prevent this component from updating at all...
  }
  render() {
    return (
      <g>
        {
          this.props.countries.map((country, i) => (
            country.properties.name !== "Antarctica" ? (<path key={ i } d={geoPath().projection(this.props.projection())(country)} className="fill-beige" />) : ""
          ))
        }
      </g>
    )
  }
}

Countries.propTypes = {
  countries: React.PropTypes.array
}

export default Countries
