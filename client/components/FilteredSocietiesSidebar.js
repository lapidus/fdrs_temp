
import React from "react"
import { Link } from "react-router"
import ReactIScroll from "react-iscroll"
const iScroll = require("iscroll")
import StickySidebar from "./StickySidebar"
import Textfield from "./Textfield"

import { translate } from "react-i18next"


class FilteredSocietiesSidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filteredSocieties: props.nationalSocieties,
      filterValue: "",
    }
    this.handleSocietiesFiltering = this.handleSocietiesFiltering.bind(this)
    this.handleFilterReset = this.handleFilterReset.bind(this)
  }
  handleSocietiesFiltering(e) {
    e.preventDefault()
    const regex = new RegExp(e.target.value, "i")
    const filteredSocieties = this.props.nationalSocieties.filter((d) => {
      return (d.NSO_DON_name.search(regex) > -1)
    })
    this.setState({
      filteredSocieties: filteredSocieties,
      filterValue: e.target.value,
    })
  }
  handleFilterReset() {
    this.setState({
      filteredSocieties: this.props.nationalSocieties,
      filterValue: "",
    })
  }
  render() {

    const {
      title,
      filterPlaceholder,
      noSocietiesText,
      t
    } = this.props

    const {
      filteredSocieties,
      filterValue
    } = this.state

    return (
      <StickySidebar>
        <div className="pb1">
          <h1 className="title mt0">
            { title }
          </h1>
          <Textfield
            placeholder={ filterPlaceholder }
            onChange={ this.handleSocietiesFiltering }
            value={ filterValue }
          />
        </div>
        <ReactIScroll
          iScroll={ iScroll }
          options={{
            mouseWheel: true,
            scrollbars: true,
            fadeScrollbars: false,
          }}
          onScrollStart={ this.onScrollStart }
        >
          <div className="pr2 pb3">
            { !filteredSocieties.length && noSocietiesText }
            <ul className="my1 mx0 p0">
              {
                filteredSocieties.map((ns, i) =>
                  <li className="block" key={ i }>
                    <Link to={ `/fdrs/societies/${ ns.slug }` } onClick={ this.handleFilterReset } className="block btn">
                      <div className="text-left" style={{ whiteSpace:"normal" }}>
                        { t("national-societites:" + ns.KPI_DON_Code) }
                      </div>
                    </Link>
                  </li>
                )
              }
            </ul>
          </div>
        </ReactIScroll>
      </StickySidebar>
    )
  }
}

FilteredSocietiesSidebar.contextTypes = {
  i18n: React.PropTypes.object.isRequired,
}

FilteredSocietiesSidebar.propTypes = {
  t: React.PropTypes.func.isRequired,
}


export default translate([ "national-societites" ], { wait: true })(FilteredSocietiesSidebar)

