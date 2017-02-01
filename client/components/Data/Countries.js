
import React from "react"
import { geoPath } from "d3-geo";

const reference = {
  4: "AFG",
  50: "BGD",
  140: "CAF",
  180: "COD",
  231: "ETH",
  368: "IRQ",
  466: "MLI",
  104: "MMR",
  586: "PAK",
  608: "PHL",
  706: "SOM",
  728: "SSD",
  760: "SYR",
  804: "UKR",
  887: "YEM",
}

class Countries extends React.Component {
  shouldComponentUpdate() {
    return false // Prevent this component from updating at all...
  }
  renderCountriesWithEvents() {

  }
  renderCountries() {

  }
  render() {
    console.log("SELECTED COUNTRIES: ", this.props.selectedCountries, this.props.countries)
    return (
      <g>
        {
          this.props.countries.map((country, i) => (
            country.properties.name !== "Antarctica" ? (
              <path
                key={ i }
                d={geoPath().projection(this.props.projection())(country)}
                style={{fill: this.props.selectedCountries ? (reference[country.id] ? "#E2231B" : "#EFEBE9") : "#EFEBE9"}}
                onMouseEnter={(e) => {
                  if(reference[country.id]) {
                    this.props.handleTooltipShow(e, country)
                  }
                }}
                onMouseLeave={this.props.handleTooltipHide}
              />
            ) : null
          ))
        }
      </g>
    )
  }
}

Countries.defaultProps = {
  handleTooltipShow() {
    return
  },
  handleTooltipHide() {
    return
  },
}

Countries.propTypes = {
  countries: React.PropTypes.array,
  selectedCountries: React.PropTypes.object,
}

export default Countries
