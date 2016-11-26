import React from "react"
import { translate } from "react-i18next"

import NextChapter from "../../../utils/NextChapter"
import BreadCrumbs from "../../../components/Breadcrumbs"
import HeadlineDivider from "../../../components/HeadlineDivider"
import SideNavigation from "../../../components/Report/SideNavigation"

class Chapter2 extends React.Component {
  componentDidMount() {
    console.log("Mounted What we do")
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.context.i18n.language !== nextContext.i18n.language
  }

  render() {
    const { t } = this.props
    const { i18n } = this.context
    const { language } = i18n
    const chapter = i18n.store.data[language]["report-what-we-do"]
    const [ section0, section1 ] = chapter.sections

    return (
      <div>
        <div className="clearfix bg-primary-dark">
          <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py1">
            <BreadCrumbs chapter={ chapter } language={ language } />
          </div>
        </div>

        <div className="clearfix bg-primary pt1">
          <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3">
            <h2 className="display-2">{chapter.title}</h2>
          </div>
        </div>

        <div className="clearfix bg-dark chapter-banner" style={{backgroundImage:"url(/img/chapters/chapter-2.jpg)",backgroundSize: "cover",backgroundPosition:"center 40%",backgroundRepeat: "no-repeat"}}>
          <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3">
            <p className="lead">{chapter.intro}</p>
            <hr />
          </div>
        </div>

        <div className="clearfix body-text" style={{position:"relative"}}>

          <SideNavigation title={chapter.title} sections={chapter.sections} sectionReferences={["scroll-target-section0", "scroll-target-section1"]}/>

          <div className="clearfix" id="scroll-target-section0">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <p><strong>{section0.blocks[0]}</strong></p>
              <ol>
                {section0.blocks[1].map((item, i) => {
                  return (<li key={i}>{item}</li>)
                })}
              </ol>
              <p><strong>{section0.blocks[2]}</strong></p>
              <ol>
                {section0.blocks[3].map((item, i) => {
                  return (<li key={i}>{item}</li>)
                })}
              </ol>
              <p>{section0.blocks[4]}</p>
              <a href={section0.blocks[5]} target="_blank">
                <button className="btn bg-primary p1">{section0.blocks[6]}</button>
              </a>
            </div>
          </div>

          <div className="clearfix" style={{position:"relative"}} id="scroll-target-section1">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <p className="small strong color-primary caps">{chapter.title}</p>
              <h3 className="headline">{section1.title}</h3>
              <HeadlineDivider />
              <p>{section1.blocks[0]}</p>
            </div>
          </div>

        </div>

        <div className="center pb3" style={{position:"relative"}}>
          <img src="/img/chapters/2/flickr.jpg" style={{opacity:0.3}}/>
          <div className="vertical-center" style={{position:"absolute",width:"100%"}}>
            <a className="btn bg-primary p1" href="https://www.flickr.com/photos/ifrc/albums" target="_blank">{section1.blocks[1]}</a>
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
