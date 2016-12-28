import React from "react"
import { translate } from "react-i18next"

import NextChapter from "../../utils/NextChapter"
import BreadCrumbs from "../../components/Report/Breadcrumbs"
import HeadlineDivider from "../../components/HeadlineDivider"
import SideNavigation from "../../components/Report/SideNavigation"
import SimpleBarChart from "../../components/charts/SimpleBarChart"
import DonutChart from "../../components/charts/DonutChart"
import ScatterChart from "../../components/charts/ScatterChart"

class Chapter7 extends React.Component {
  componentDidMount() {
    console.log("Mounted Enabling Action 1")
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { language } = nextContext.i18n
    return !!nextContext.i18n.store.data[language]["report-enabling-action-1"]
  }

  render() {
    const { t, scatterChartDimensions } = this.props
    const { i18n } = this.context
    const { language } = i18n
    const chapter = i18n.store.data[language]["report-enabling-action-1"]

    const [
      section0,
      section1,
      section2,
      section3,
    ] = chapter.sections

    return (
      <div>
        {/* <div className="clearfix bg-primary-dark">
          <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py1">
            <BreadCrumbs chapter={chapter} language={language}/>
          </div>
        </div> */}

        <div className="clearfix bg-primary pt1">
          <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3">
            <h2 className="display-2">{chapter.title}</h2>
            <p className="title">{chapter.subtitle}</p>
          </div>
        </div>

        <div className="clearfix bg-dark chapter-banner" style={{backgroundImage:"url(/img/chapters/chapter-7.jpg)",backgroundSize:"cover",backgroundPosition:"center 50%",backgroundRepeat:"no-repeat"}}>
          <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3">
            <p className="lead">{chapter.intro}</p>
            <hr />
          </div>
        </div>

        <div className="clearfix body-text" style={{position:"relative"}}>

          <SideNavigation title={chapter.title} sections={chapter.sections} sectionReferences={["scroll-target-section0","scroll-target-section1","scroll-target-section2","scroll-target-section3"]}/>

          <div className="clearfix" id="scroll-target-section0">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <p>{section0.blocks[0]}</p>
              <div>
                <h4 className="title strong">{section0.blocks[1].title}</h4>
                <img src={section0.blocks[1].src} />
                <p className="small">{section0.blocks[1].caption}</p>
              </div>
              <p>{section0.blocks[2]}</p>
              <p>{section0.blocks[3]}</p>
            </div>
          </div>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-6 lg-offset-2">
              <h4 className="title strong">{section0.blocks[4].title}</h4>
              <table>
                <thead>
                  <tr className="small">
                    <th style={{width:"16%"}}>&nbsp;</th>
                    <th style={{width:"42%"}}>{section0.blocks[4].headings[0]}</th>
                    <th style={{width:"42%"}}>{section0.blocks[4].headings[1]}</th>
                  </tr>
                </thead>
                <tbody>
                  {section0.blocks[4].dataset.map((item, i) => {
                    return item.length === 1 ? (
                      <tr key={ i }>
                        <td className="p0">&nbsp;</td>
                        <td colSpan="2" className="center p0 py1">
                          <hr/>
                          <div className="py1">{item[0]}</div>
                          <hr />
                        </td>
                      </tr>
                    ) : (
                      <tr key={i}>
                        <td>{item[0]}</td>
                        <td>{item[1]}</td>
                        <td>{item[2]}</td>
                      </tr>
                    )
                  })}
                  <tr><td colSpan="3">&nbsp;</td></tr>
                </tbody>
              </table>
              <p className="small">{section0.blocks[4].caption}</p>
            </div>
          </div>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <p>{section0.blocks[5]}</p>
            </div>
          </div>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-7 lg-offset-2 pb2">
              <ScatterChart
                title={ section0.blocks[6].title }
                caption={ section0.blocks[6].caption }
                width={ scatterChartDimensions.width }
                height={ scatterChartDimensions.height }
                padding={ scatterChartDimensions.padding }
                dataset={ section0.blocks[6].dataset }
                legend={ section0.blocks[6].legend }
              />
            </div>
          </div>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <p>{section0.blocks[7]}</p>
            </div>
          </div>

          <div className="clearfix" id="scroll-target-section1">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <p className="small strong color-primary caps">{chapter.title}</p>
              <h3 className="headline">{section1.title}</h3>
              <HeadlineDivider />
              <p>{section1.blocks[0]}</p>
            </div>
          </div>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-4 lg-offset-2 sm-pr1">
              <p>{section1.blocks[1]}</p>
            </div>
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-4 lg-offset-0">
              <img src="/img/chapters/7/bridging-the-technical-divide.jpg" width="100%" height="auto"/>
              <p className="small">{section1.blocks[2].caption}</p>
            </div>
          </div>

          <div className="clearfix" id="scroll-target-section2">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <p className="small strong color-primary caps">{chapter.title}</p>
              <h3 className="headline">{section2.title}</h3>
              <HeadlineDivider />
              <p>{section2.blocks[0]}</p>
            </div>
          </div>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-4 md-offset-3 lg-4 lg-offset-3 sm-pr1">
              <p>{section2.blocks[1]}</p>
              <p>{section2.blocks[2]}</p>
              <p>{section2.blocks[3]}</p>
            </div>
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-4 md-offset-0 lg-3">
                <div className="bg-secondary p2">
                  <p className="small strong color-primary caps mb0">Case Study</p>
                  <h4 className="title strong mt0">{section2.blocks[4].title}</h4>
                  <p style={{fontSize:"16px"}}>{section2.blocks[4].content}</p>
                </div>
            </div>
          </div>

          <div className="clearfix" id="scroll-target-section3">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <p className="small strong color-primary caps">{chapter.title}</p>
              <h3 className="headline">{section3.title}</h3>
              <HeadlineDivider />
              <p>{section3.blocks[0]}</p>
            </div>
          </div>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <div>
                <h4 className="title strong">{section3.blocks[1].title}</h4>
                <div className="clearfix">
                  <div className="col sm-6 center px1">
                    <DonutChart
                      maxSize={300}
                      dataset={section3.blocks[1].dataset[0]}/>
                    <p className="display-1 color-primary">50%</p>
                    <p className="small">{section3.blocks[1].captions[0]}</p>
                  </div>
                  <div className="col sm-6 center px1">
                    <DonutChart
                      maxSize={300}
                      dataset={section3.blocks[1].dataset[1]}/>
                    <p className="display-1 color-primary">18%</p>
                    <p className="small">{section3.blocks[1].captions[1]}</p>
                  </div>
                </div>
                { /* <p className="small">{section3.blocks[1].caption}</p> */ }
              </div>

              <p>{section3.blocks[2]}</p>

              <div>
                <SimpleBarChart
                  title={section3.blocks[3].title}
                  caption={section3.blocks[3].caption}
                  horizontal={true}
                  height={420}
                  padding={{
                    top: 40,
                    bottom: 40,
                    left: 30,
                    right: 120
                  }}
                  data={[
                    { y: 0, x: section3.blocks[3].dataset[0].name },
                    { y: 116, x: String(section3.blocks[3].dataset[0].number) },
                    { y: 0, x: section3.blocks[3].dataset[1].name },
                    { y: 89, x: String(section3.blocks[3].dataset[1].number) },
                    { y: 0, x: section3.blocks[3].dataset[2].name },
                    { y: 69, x: String(section3.blocks[3].dataset[2].number) },
                    { y: 0, x: section3.blocks[3].dataset[3].name },
                    { y: 108, x: String(section3.blocks[3].dataset[3].number) },
                    { y: 0, x: section3.blocks[3].dataset[4].name },
                    { y: 76, x: String(section3.blocks[3].dataset[4].number) },
                    { y: 0, x: section3.blocks[3].dataset[5].name },
                    { y: 110, x: String(section3.blocks[3].dataset[5].number) },
                    { y: 0, x: section3.blocks[3].dataset[6].name },
                    { y: 92, x: String(section3.blocks[3].dataset[6].number) }
                  ]}
                  labels={(datum) => datum.xName}
                  />
              </div>

              <p>{section3.blocks[4]}</p>

            </div>
          </div>

        </div>

        <NextChapter nextChapter={chapter.nextChapter} />
      </div>
    )
  }
}

Chapter7.defaultProps = {
  scatterChartDimensions: {
    width: 840,
    height: 560,
    padding: {
      top: 30,
      bottom: 100,
      left: 120,
      right: 30,
    },
  },
}

Chapter7.contextTypes = {
  i18n: React.PropTypes.object.isRequired,
}

export default translate([ "report-enabling-action-1" ], { wait: true })(Chapter7)
