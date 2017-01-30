import React from "react"
import { translate } from "react-i18next"

import NextChapter from "../../utils/NextChapter"
import BreadCrumbs from "../../components/Report/Breadcrumbs"

const principleReference = [
  "humanity",
  "impartiality",
  "neutrality",
  "independence",
  "voluntary-service",
  "unity",
  "universality",
]

class Chapter3 extends React.Component {
  componentDidMount() {
    console.log("Mounted Living our fundamental principles")
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { language } = nextContext.i18n
    return !!nextContext.i18n.store.data[language]["report-living-our-fundamental-principles"]
  }

  render() {

    const { t } = this.props
    const { i18n } = this.context
    const { language } = i18n
    const chapter = i18n.store.data[language]["report-living-our-fundamental-principles"]
    const [ section0 ] = chapter.sections

    return (
      <div>

        <div className="clearfix bg-primary">
          <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
            <p className="text-base m0">{ "Everyone counts" }</p>
            <h2 className="text-md sm-text-lg md-text-xl light m0 lh-small">{chapter.title}</h2>
          </div>
        </div>

        <div className="clearfix bg-dark overflow-hidden" style={{backgroundImage:"url(/img/chapters/chapter-3.jpg)",backgroundSize: "cover",backgroundPosition:"center 40%",backgroundRepeat: "no-repeat", backgroundAttachment: "fixed"}}>
          <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py4 md-py6">
            <p className="text-base sm-text-sm md-text-md">{chapter.intro}</p>
            <hr />
          </div>
        </div>

        <div className="clearfix bg-secondary body-text py2">
          <div className="col sm-10 sm-offset-1 text-center">
            {chapter.general[0].map((principle, j) => {
              return (
                <span key={j} className="px2 pt1 pb2" style={{display:"inline-block"}}>
                  <img src={`/img/chapters/3/${principleReference[j]}.svg`} /><br />
                  { principle }
                </span>
              )
            })}
          </div>
          <div className="col sm-8 sm-offset-2 lg-5 lg-offset-3 py1">
            <p className="text-base sm-text-sm md-text-md">{ chapter.general[1] }</p>
          </div>
        </div>


        <div className="relative clearfix body-text pb4">

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 pt2">
              <p>{section0.blocks[0]}</p>
            </div>
          </div>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-3 lg-offset-4 pt2">
              <svg width="100%" height="480px" viewBox="0 0 480 480" version="1.1">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g>
                    <circle cx="240" cy="240" r="210" fill="none" stroke="#F1F0EF" strokeWidth="4"></circle>
                    <circle cx="240" cy="240" r="150" fill="none" stroke="#F1F0EF" strokeWidth="4"></circle>
                    <g transform="translate(0, 62)" fontSize="20" fontFamily="Roboto-Bold, Roboto, sans-serif" fill="#786A65" fontWeight="700">
                      {section0.blocks[1].items.map((item, i) => {
                        var xReferences = [240,360,390,340,150,90,120]
                        var yReferences = [19,106,198,290,290,198,106]

                        return (
                          <text key={i}>
                            {item.split("\n").map((subItem, j) => <tspan key={j} x={xReferences[i]} y={yReferences[i] + (j * 22)} textAnchor="middle">{subItem}</tspan> )}
                          </text>
                        )
                      })}
                    </g>
                    <text fontFamily="Roboto-Bold, Roboto" fontSize="16" fontWeight="700" letterSpacing="1" fill="#EE3224">
                      { /* section0.blocks[1].name.split("\n").map((item, i) => <tspan textAnchor="middle" className="caps" key={i} x="240" y={237 + (i * 15)}>{item}</tspan>) */ }
                    </text>
                  </g>
                </g>
              </svg>
            </div>
          </div>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 pt2">
              <p>{section0.blocks[2]}</p>
            </div>
          </div>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-3 lg-offset-4 pt2">
              <svg width="100%" height="480px" viewBox="0 0 480 480" version="1.1">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g>
                    <circle cx="240" cy="240" r="210" fill="none" stroke="#F1F0EF" strokeWidth="4"></circle>
                    <circle cx="240" cy="240" r="150" fill="none" stroke="#F1F0EF" strokeWidth="4"></circle>
                    <g transform="translate(0, 62)" fontSize="20" fontFamily="Roboto-Bold, Roboto, sans-serif" fill="#786A65" fontWeight="700">
                      {section0.blocks[4].items.map((item, i) => {
                        var xReferences = [240,360,390,340,150,90,120]
                        var yReferences = [19,106,198,290,290,198,106]

                        return (
                          <text key={i}>
                            {item.split("\n").map((subItem, j) => <tspan key={j} x={xReferences[i]} y={yReferences[i] + (j * 22)} textAnchor="middle">{subItem}</tspan> )}
                          </text>
                        )
                      })}
                    </g>
                    <text fontFamily="Roboto-Bold, Roboto" fontSize="16" fontWeight="700" letterSpacing="1" fill="#EE3224">
                      { /* section0.blocks[4].name.split("\n").map((item, i) => <tspan textAnchor="middle" className="caps" key={i} x="240" y={237 + (i * 15)}>{item}</tspan>) */ }
                    </text>
                  </g>
                </g>
              </svg>
            </div>
          </div>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 pt2">
              <p>{section0.blocks[3]}</p>
              <a href="#" target="_blank" className="btn btn--raised bg-primary px1">
                <svg style={{width:16,height:16,marginTop:-1,marginRight:16}} width="24px" height="24px" viewBox="0 0 24 24">
                  <g transform="translate(0, 0)" style={{stroke:"currentcolor"}}>
                    <line fill="none" strokeWidth="2" strokeMiterlimit="10" x1="12" y1="9" x2="12" y2="22" strokeLinejoin="miter" strokeLinecap="butt"/>
                    <polyline fill="none" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" points="15,19 12,22 9,19 " strokeLinejoin="miter"/>
                    <path fill="none" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M17,16h2c2.209,0,4-1.791,4-4c0-2.197-1.782-4.013-4.025-3.997C18.718,4.093,15.474,1,11.5,1C7.481,1,4.21,4.164,4.018,8.136C2.287,8.575,1,10.132,1,12c0,2.209,1.791,4,4,4h2" strokeLinejoin="miter"/>
                  </g>
                </svg>
                { section0.blocks[5] }
              </a>
            </div>
          </div>

        </div>

        <NextChapter nextChapter={chapter.nextChapter} />

      </div>
    )
  }
}

Chapter3.contextTypes = {
  i18n: React.PropTypes.object.isRequired,
}

export default translate([ "report-living-our-fundamental-principles" ], { wait: true })(Chapter3)
