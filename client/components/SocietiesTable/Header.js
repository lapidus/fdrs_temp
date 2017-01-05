
import React from "react"

const SocietiesTableHeader = ({ currentYear, sortDataset, sortParams, up, down }) => (
  <table className="base-12 text-left mb2">
    <tbody>
      <tr className="shadow-2">
        <th className="p1 base-4 sm-4">{ "National Society name" }</th>
        <th className="p1 base-4 sm-4">{ "Trend" }</th>
        <th className="p1 base-4 sm-4 relative">
          { "Data for" } { currentYear }
          <button className="btn" onClick={ () => sortDataset({ sortBy: "indicator", reverse: !sortParams.reverse }) }>
            <svg width="16px" height="16px" viewBox="0 0 28 28" style={{marginTop:-5}}>
              <polyline  fill="none" stroke="#D0021B" strokeWidth="4" strokeLinecap="square" strokeMiterlimit="10" points={ sortParams.reverse ? up : down } transform="translate(0, 0)" strokeLinejoin="miter"/>
            </svg>
          </button>
        </th>
      </tr>
    </tbody>
  </table>
)

SocietiesTableHeader.defaultProps = {
  up: "24,20 14,10 4,20",
  down: "24,10 14,20 4,10",
}

export default SocietiesTableHeader
