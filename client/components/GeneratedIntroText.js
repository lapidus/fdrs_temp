import { translate } from "react-i18next"
import React from "react"
import niceNum from "../utils/niceNum"

class GeneratedIntroText extends React.Component {
  render() {

    const {
      society,
      admissionDate,
      latestData,
      earliestData,
      translationText,
      t
    } = this.props

    const latestTotal = latestData.KPI_noPeopleVolunteering
    const earliestTotal = earliestData.KPI_noPeopleVolunteering

    const latestMale = latestData.KPI_noPeopleVolunteeringM
    const latestFemale = latestData.KPI_noPeopleVolunteeringF

    const latestYear = latestData.KPI_Year
    const earliestYear = earliestData.KPI_Year

    const admissionString =  t("national-societies:" + society.KPI_DON_Code) + ` ${translationText[0]} ${admissionDate}.`
    const volunteerString = latestTotal ? `${translationText[1]} ${latestYear}${translationText[2]} ${niceNum(latestTotal, 0, null, true)} ${translationText[3]}` : ""
    const comparisonString = earliestTotal ? ` (${translationText[4]} ${niceNum(earliestTotal, 0, null, true)} ${translationText[5]} ${earliestYear})` : ""
    const genderString = latestMale && latestFemale ? `${translationText[6]} ${Math.round(100 / latestTotal * latestMale)}% ${translationText[7]} ${Math.round(100 / latestTotal * latestFemale)}% ${translationText[8]}` : ""

    const part2 = volunteerString ? ` ${volunteerString}${comparisonString}${genderString}.` : ""

    return <span>{ admissionString }{ part2 }</span>
  }
}

export default translate([ "national-societies" ], { wait: true })(GeneratedIntroText)
