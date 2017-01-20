import React from "react"
import { translate } from "react-i18next"

import NextChapter from "../../utils/NextChapter"
import HeadlineDivider from "../../components/HeadlineDivider"
import SideNavigation from "../../components/Report/SideNavigation"

class Chapter2 extends React.Component {

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { language } = nextContext.i18n
    return !!nextContext.i18n.store.data[language]["report-what-we-do"]
  }

  render() {
    const { t } = this.props
    const { i18n } = this.context
    const { language } = i18n
    const chapter = i18n.store.data[language]["report-what-we-do"]
    const [ section0, section1 ] = chapter.sections

    return (
      <div>

        <div className="clearfix bg-primary">
          <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
            <p className="text-base m0">{ "Everyone counts" }</p>
            <h2 className="text-md sm-text-lg md-text-xl light m0 lh-small">{chapter.title}</h2>
          </div>
        </div>

        <div className="clearfix bg-dark overflow-hidden" style={{
            backgroundImage:"url(/img/chapters/chapter-2.jpg)",
            backgroundSize: "cover",
            backgroundPosition:"center 40%",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed"
          }}>
          <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py4 md-py6">
            <p className="text-base sm-text-sm md-text-md">{chapter.intro}</p>
            <hr />
          </div>
        </div>

        <div className="px1 pt2 pb3">
          <div className="clearfix mxn1">

            <aside className="relative md-absolute col sm-8 sm-offset-2 md-2 md-offset-0 px1 py1">
              <h1 className="text-base sm-text-sm color-secondary mb0">Chapter overview</h1>
              <ul className="m0 py1">
                <li>
                  <button className="btn base-12 py05 px1 text-left color-secondary">Our network</button>
                </li>
                <li>
                  <button className="btn base-12 py05 px1 text-left color-secondary">Our resources</button>
                </li>
              </ul>
            </aside>

            <div className="clearfix">
              {
                /*
                 * Text
                 *
                 */
              }
              <div className="col sm-8 sm-offset-2 md-5 md-offset-3 px1">
                { "Main text..." }
                <p>
                  <strong>
                    { section0.blocks[0] }
                  </strong>
                </p>
                <ol>
                  {section0.blocks[1].map((item, i) => (
                    <li key={i} className="py05">{item}</li>
                  ))}
                </ol>
                <p>
                  <strong>
                    { section0.blocks[2] }
                  </strong>
                </p>
                <ol>
                  {section0.blocks[3].map((item, i) => (
                    <li key={i} className="py05">{item}</li>
                  ))}
                </ol>
                <p>
                  { section0.blocks[4] }
                </p>
              </div>
            </div>

          </div>
        </div>











        <div className="clearfix body-text" style={{position:"relative"}}>

          {/* <SideNavigation title={chapter.title} sections={chapter.sections} sectionReferences={["scroll-target-section0", "scroll-target-section1"]}/> */}

          <div className="clearfix" id="scroll-target-section0">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <p><strong>{section0.blocks[0]}</strong></p>
              <ol>
                {section0.blocks[1].map((item, i) => {
                  return (<li key={i} className="py05">{item}</li>)
                })}
              </ol>
              <p><strong>{section0.blocks[2]}</strong></p>
              <ol>
                {section0.blocks[3].map((item, i) => {
                  return (<li key={i} className="py05">{item}</li>)
                })}
              </ol>
              <p>{section0.blocks[4]}</p>
              {/* <a href={section0.blocks[5]} target="_blank">
                <button className="btn bg-primary p1">{section0.blocks[6]}</button>
              </a> */}

              <a href={section0.blocks[5]} target="_blank" className="btn btn--raised bg-primary">
                <div className="px1">
                  <span>
                    <svg style={{width:16,height:16,marginTop:-1,marginRight:16}} width="24px" height="24px" viewBox="0 0 24 24">
                      <g transform="translate(0, 0)" style={{stroke:"currentcolor"}}>
                        <line fill="none" strokeWidth="2" strokeMiterlimit="10" x1="12" y1="9" x2="12" y2="22" strokeLinejoin="miter" strokeLinecap="butt"/>
                        <polyline fill="none" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" points="15,19 12,22 9,19 " strokeLinejoin="miter"/>
                        <path fill="none" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M17,16h2c2.209,0,4-1.791,4-4c0-2.197-1.782-4.013-4.025-3.997C18.718,4.093,15.474,1,11.5,1C7.481,1,4.21,4.164,4.018,8.136C2.287,8.575,1,10.132,1,12c0,2.209,1.791,4,4,4h2" strokeLinejoin="miter"/>
                      </g>
                    </svg>
                  </span>
                  {section0.blocks[6]}
                </div>
              </a>
            </div>
          </div>

          <div className="clearfix" style={{position:"relative"}} id="scroll-target-section1">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <p className="text-sm color-primary m0">{chapter.title}</p>
              <h3 className="text-md sm-text-lg mt0 light">{section1.title}</h3>
              <HeadlineDivider />
              <p>{section1.blocks[0]}</p>
            </div>
          </div>

        </div>

        <div className="center pb3" style={{position:"relative"}}>
          <img src="/img/chapters/2/flickr.jpg" style={{opacity:0.3,width:"100%"}}/>
          <div className="absolute base-12 t50 y-venter-self text-center">
            <a className="btn btn--raised bg-primary" href="https://www.flickr.com/photos/ifrc/albums" target="_blank">
              <div className="p1">{section1.blocks[1]}</div>
            </a>
          </div>
        </div>

        <NextChapter nextChapter={chapter.nextChapter} />

      </div>
    )
  }
}

Chapter2.contextTypes = {
  i18n: React.PropTypes.object.isRequired,
}

export default translate([ "report-what-we-do" ], { wait: true })(Chapter2)
