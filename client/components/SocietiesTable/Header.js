
import React from "react"

const SocietiesTableHeader = ({ currentYear }) => (
  <table className="base-12 text-left mb2">
    <tbody>
      <tr className="shadow-2">
        <th className="p1 sm-4">{ "National Society name" }</th>
        <th className="p1 sm-4">{ "Trend" }</th>
        <th className="p1 sm-4">{ "Data for" } { currentYear }</th>
      </tr>
    </tbody>
  </table>
)

export default SocietiesTableHeader
