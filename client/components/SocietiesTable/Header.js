
import React from "react"
import { translate } from "react-i18next"

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
      <table className="base-12 text-left">
        <tbody>
          <tr className="">
            <th className="p1 base-4 sm-4">{ t("overview:tableHeaders")[0] }</th>
            <th className="p1 base-4 sm-4">{ t("overview:tableHeaders")[1] }</th>
            <th className="p1 base-4 sm-4 relative">
              { t("overview:tableHeaders")[2] } { currentYear }

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

export default translate("overview", { wait: true })(SocietiesTableHeader)
