
import React from "react"
import { translate } from "react-i18next"
import Select from "react-select"
import { connect } from "react-redux"

import { switchYear } from "../../actions/appActions"

class SocietiesTableHeader extends React.Component {
  render() {

    const {
      t,
      currentYear,
      sortDataset,
      sortParams,
      up,
      down } = this.props

    return (
      <table className="base-12 text-left bg-secondary mb2">
        {/* <table className="base-12 text-left"> */}
        {/* <table className="base-12 text-left bg-secondary mb2">
          <tbody>
            <tr className="shadow-3">
              <th className="p1 base-4">{ t("overview:tableHeaders")[0] }</th>
              <th className="p1 base-4">{ t("overview:tableHeaders")[1] }</th>
              <th className="p1 base-4 relative"> */}
        <tbody className="shadow-3">
          <tr>
            <th className="p1 base-4 sm-4">{ t("overview:tableHeaders")[0] }</th>
            <th className="p1 base-4 sm-4">{ t("overview:tableHeaders")[1] }</th>
            <th className="p1 base-4 sm-4 relative">
              { t("overview:tableHeaders")[2] }
              <span className="inline-block align-middle select-no-underline" style={{width:"100px",color:"inherit"}}>
                <Select
                  searchable={ false }
                  clearable={ false }
                  name="year-selector"
                  value={ currentYear }
                  options={[
                    { value: 2010, label: "2010" },
                    { value: 2011, label: "2011" },
                    { value: 2012, label: "2012" },
                    { value: 2013, label: "2013" },
                    { value: 2014, label: "2014" },
                    { value: 2015, label: "2015" },
                    { value: 2016, label: "2016" },
                  ]}
                  onChange={(d) => {
                    this.props.switchYear(d.value)
                  }}
                />
              </span>
            </th>
          </tr>
        </tbody>
      </table>
    )
  }
}

// const SocietiesTableHeader = ({ currentYear, sortDataset, sortParams, up, down }) => (
//   <table className="base-12 text-left mb2">
//     <tbody>
//       <tr className="shadow-2">
//         <th className="p1 base-4 sm-4">{ headers[0] }</th>
//         <th className="p1 base-4 sm-4">{ headers[1] }</th>
//         <th className="p1 base-4 sm-4 relative">
//           { headers[2] } { currentYear }
//           <button className="btn" onClick={ () => sortDataset({ sortBy: "indicator", reverse: !sortParams.reverse }) }>
//             <svg width="16px" height="16px" viewBox="0 0 28 28" style={{marginTop:-5}}>
//               <polyline  fill="none" stroke="#D0021B" strokeWidth="4" strokeLinecap="square" strokeMiterlimit="10" points={ sortParams.reverse ? up : down } transform="translate(0, 0)" strokeLinejoin="miter"/>
//             </svg>
//           </button>
//         </th>
//       </tr>
//     </tbody>
//   </table>
// )

SocietiesTableHeader.defaultProps = {
  up: "24,20 14,10 4,20",
  down: "24,10 14,20 4,10",
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  switchYear: (year) => dispatch(switchYear(year))
})

export default translate("overview", { wait: true })(connect(mapStateToProps,mapDispatchToProps)(SocietiesTableHeader))
