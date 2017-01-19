import React from "react"
import { translate } from "react-i18next"

import NextChapter from "../../utils/NextChapter"
import BreadCrumbs from "../../components/Report/Breadcrumbs"
import HeadlineDivider from "../../components/HeadlineDivider"
import SideNavigation from "../../components/Report/SideNavigation"
import LineChart from "../../components/charts/LineChart"
import WorldMap from "../../components/charts/WorldMap"

class Chapter8 extends React.Component {
  componentDidMount() {
    console.log("Mounted Enabling Action 2")
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { language } = nextContext.i18n
    return !!nextContext.i18n.store.data[language]["report-enabling-action-2"]
  }

  bubbleCallback(response) {
    return [
      {
        name: "Peru",
        latitude: -9.189967,
        longitude: -75.015152,
        radius: 6,
        fillKey: "bubbleFill"
      },
      {
        name: "Jamaica",
        latitude: 18.109581,
        longitude: -77.297508,
        radius: 6,
        fillKey: "bubbleFill"
      },
      {
        name: "Austria",
        latitude: 47.516231,
        longitude: 14.550072,
        radius: 6,
        fillKey: "bubbleFill"
      },
      {
        name: "Indonesia",
        latitude: -6.208763,
        longitude: 106.845599,
        radius: 6,
        fillKey: "bubbleFill"
      },
    ]
  }
  render() {
    const { t } = this.props
    const { i18n } = this.context
    const { language } = i18n
    const chapter = i18n.store.data[language]["report-enabling-action-2"]

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

        <div className="clearfix bg-primary">
          <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
            <p className="text-base m0">{chapter.title}</p>
            <h2 className="text-md sm-text-lg md-text-xl light m0 lh-small">{chapter.subtitle}</h2>
          </div>
        </div>

        <div className="clearfix bg-dark chapter-banner" style={{backgroundImage:"url(/img/chapters/chapter-8.jpg)",backgroundSize:"cover",backgroundPosition:"center 50%",backgroundRepeat:"no-repeat"}}>
          <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py4 md-py6">
            <p className="text-base sm-text-sm md-text-md">{chapter.intro}</p>
            <hr />
          </div>
        </div>

        <div className="clearfix body-text" style={{position:"relative"}}>

          {/* <SideNavigation title={chapter.title} sections={chapter.sections} sectionReferences={["scroll-target-section0","scroll-target-section1","scroll-target-section2","scroll-target-section3"]}/> */}

          <div className="clearfix" id="scroll-target-section0">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <p>{section0.blocks[0]}</p>
              <ul>
                {section0.blocks[1].map((item, i) => {
                  return <li key={i}>{item}</li>
                })}
              </ul>
              <p>{section0.blocks[2]}</p>
            </div>
          </div>

          <div className="clearfix" id="scroll-target-section1">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <p className="text-sm color-primary m0">{chapter.title}</p>
              <h3 className="text-md sm-text-lg mt0 light">{section1.title}</h3>
              <HeadlineDivider />
              <p>{section1.blocks[0]}</p>
            </div>
          </div>

          <div className="clearfix" id="scroll-target-section2">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <p className="text-sm color-primary m0">{chapter.title}</p>
              <h3 className="text-md sm-text-lg mt0 light">{section2.title}</h3>
              <HeadlineDivider />
              <p>{section2.blocks[0]}</p>
            </div>
          </div>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-7 lg-offset-2 pb2">
              <WorldMap
                title={section2.blocks[1].title}
                caption={section2.blocks[1].caption}
                bubbleSource={false}
                bubbleCallback={this.bubbleCallback}
                />
              <div className="clearfix">
                {section2.blocks[1].items.map((item, i) => {
                  return (
                    <div key={i} className="col md-6 lg-3 pr2">
                      <p className="subhead strong">{item.country}</p>
                      <p className="small">{item.text}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <p>{section2.blocks[2]}</p>
            </div>
          </div>


          <div className="clearfix" id="scroll-target-section3">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <p className="text-sm color-primary m0">{chapter.title}</p>
              <h3 className="text-md sm-text-lg mt0 light">{section3.title}</h3>
              <HeadlineDivider />
              <p>{section3.blocks[0]}</p>
            </div>
          </div>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-4 lg-offset-2 pb2">
              <LineChart
                title={section3.blocks[1].title}
                caption={section3.blocks[1].caption}
                height={480}
                padding={{
                  top: 30,
                  bottom: 40,
                  left: 80,
                  right: 60
                }}
                domain={{
                  x: [new Date(2009,1,1), new Date(2015,1,1)],
                  y: [0,25000000]
                }}
                axisLabels={section3.blocks[1].axisLabels}
                dataset={[[
                  {x: new Date(2010,1,1), y: 7444228},
                  {x: new Date(2011,1,1), y: 8561015},
                  {x: new Date(2012,1,1), y: 8590604},
                  {x: new Date(2013,1,1), y: 9766893},
                  {x: new Date(2014,1,1), y: 8884783}
                ],[
                  {x: new Date(2010,1,1), y: 1507782},
                  {x: new Date(2011,1,1), y: 2422085},
                  {x: new Date(2012,1,1), y: 2653814},
                  {x: new Date(2013,1,1), y: 4020726},
                  {x: new Date(2014,1,1), y: 2938558}
                ],[
                  {x: new Date(2013,1,1), y: 12998671},
                  {x: new Date(2014,1,1), y: 23268122}
                ],[
                  {x: new Date(2013,1,1), y: 4779438},
                  {x: new Date(2014,1,1), y: 11612597}
                ],[
                  {x: new Date(2010,1,1), y: 498454},
                  {x: new Date(2011,1,1), y: 522033},
                  {x: new Date(2012,1,1), y: 448753},
                  {x: new Date(2013,1,1), y: 464628},
                  {x: new Date(2014,1,1), y: 539588}
                ],[
                  {x: new Date(2013,1,1), y: 145000},
                  {x: new Date(2014,1,1), y: 310000}
                ]]}
                labels={section3.blocks[1].lineLabels}
              />
            </div>
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-4 lg-offset-0 pb2">
              <p>{section3.blocks[2]}</p>
            </div>
          </div>

        </div>

        <NextChapter nextChapter={chapter.nextChapter} />
      </div>
    )
  }
}

Chapter8.contextTypes = {
  i18n: React.PropTypes.object.isRequired,
}

export default translate([ "report-enabling-action-2" ], { wait: true })(Chapter8)
