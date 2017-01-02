
import React from "react"

const SocietiesTableHeader = ({ currentYear, sortDataset, sortParams }) => (
  <table className="base-12 text-left mb2">
    <tbody>
      <tr className="shadow-2">
        <th className="p1 sm-4">{ "National Society name" }</th>
        <th className="p1 sm-4">{ "Trend" }</th>
        <th className="p1 sm-4 relative">
          { "Data for" } { currentYear }
          <button className="btn bg-primary absolute t50 r0 y-center-self" onClick={ () => sortDataset({ sortBy: "indicator", reverse: !sortParams.reverse }) }>
            { "sort" }
          </button>
        </th>
      </tr>
    </tbody>
  </table>
)

export default SocietiesTableHeader
