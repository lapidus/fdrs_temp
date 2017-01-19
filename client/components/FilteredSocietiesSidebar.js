
import React from "react"
import LanguageLink  from "../components/LanguageLink"
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

    const sortedFilteredSocieties = _.sortBy(filteredSocieties, function(d){
      return t("national-societies:" + d.KPI_DON_Code);
    })


    return (
      <StickySidebar>
        <div className="pb1 px1 overflow-hidden">
          <h1 className="text-base md-text-sm mt0 mb1" style={{marginTop:"1.5em"}}>
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
          <div className="pb3">
            { !filteredSocieties.length && noSocietiesText }
            <ul className="my1 mx0 p0">
              {
                sortedFilteredSocieties.map((ns, i) =>
                  <li className="block" key={ i }>
                    <LanguageLink to={ `/fdrs/societies/${ ns.slug }` } onClick={ this.handleFilterReset } className="block btn px1">
                      <div className="text-left" style={{ whiteSpace:"normal" }}>
                        { t("national-societies:" + ns.KPI_DON_Code) }
                      </div>
                    </LanguageLink>
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


export default translate([ "national-societies" ], { wait: true })(FilteredSocietiesSidebar)
