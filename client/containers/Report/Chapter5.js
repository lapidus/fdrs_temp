import React from "react"
import { translate } from "react-i18next"

import numberFormatter from "../../utils/numberFormatter"
import HeadlineDivider from "../../components/HeadlineDivider"
import NextChapter from "../../components/../utils/NextChapter"
import SideNavigation from "../../components/Report/SideNavigation"
import SimpleBarChart from "../../components/charts/SimpleBarChart"
import StackedBarChart from "../../components/charts/StackedBarChart"
import LineChart from "../../components/charts/LineChart"
import { Tabs, TabPanel } from "../../components/Tabs"

class Chapter5 extends React.Component {
  componentDidMount() {
    console.log("Mounted Strategic Aim 2")
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { language } = nextContext.i18n
    return !!nextContext.i18n.store.data[language]["report-strategic-aim-2"]
  }

  render() {

    const { t } = this.props
    const { i18n } = this.context
    const { language } = i18n
    const chapter = i18n.store.data[language]["report-strategic-aim-2"]

    const [
      section0,
      section1,
      section2,
      section3,
      section4,
      section5,
    ] = chapter.sections

    return (
      <div>

        <div className="clearfix bg-primary">
          <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
            <p className="text-base m0">{chapter.title}</p>
            <h2 className="text-md sm-text-lg md-text-xl light m0 lh-small">{chapter.subtitle}</h2>
          </div>
        </div>

        <div className="clearfix bg-dark overflow-hidden" style={{backgroundImage:"url(/img/chapters/chapter-5.jpg)",backgroundSize: "cover",backgroundPosition:"center 50%",backgroundRepeat: "no-repeat", backgroundAttachment: "fixed"}}>
          <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py4 md-py6">
            <p className="text-base sm-text-sm md-text-md">{chapter.intro}</p>
            <hr />
          </div>
        </div>

        <div className="clearfix body-text" style={{position:"relative"}}>

          <SideNavigation title={chapter.title} sections={chapter.sections} sectionReferences={["scroll-target-section0","scroll-target-section1","scroll-target-section2","scroll-target-section3","scroll-target-section4","scroll-target-section5"]}/>

          <div className="clearfix" id="scroll-target-section0">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <p className="text-sm color-primary m0">{chapter.title}</p>
              <h3 className="text-md sm-text-lg mt0 light">{section0.title}</h3>
              <HeadlineDivider />
              <p>{section0.blocks[0]}</p>
            </div>
          </div>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-4 sm-offset-2 md-offset-3 lg-3">
              <SimpleBarChart
                title={section0.blocks[1].title}
                caption={section0.blocks[1].caption}
                horizontal={false}
                height={300}
                data={[
                    { y: 160.7, x: new Date(2012,1,1) },
                    { y: 103.4, x: new Date(2013,1,1) },
                ]}
                labels={[
                  "160.7M",
                  "103.4M"
                ]}
                tickValues={[
                    new Date(2012, 1, 1),
                    new Date(2013, 1, 1)
                ]}
                tickFormat={(x) => x.getFullYear()}
                axisLabels={section0.blocks[1].axisLabels}
                />
            </div>
            <div className="col px1 sm-px0 sm-4 md-offset-0 lg-3">
              <p>{section0.blocks[2]}</p>
            </div>
          </div>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3">
              <p>{section0.blocks[3]}</p>
              <StackedBarChart
                title={section0.blocks[4].title}
                caption={section0.blocks[4].caption}
                height={360}
                padding={{
                  top: 60,
                  bottom: 30,
                  left: 30,
                  right: 100
                }}
                labels={
                  section0.blocks[4].dataset.map((item, i) => {
                    // return `${item.name} (${item.first + item.second + item.rest})`
                    return { text: item.name, number: numberFormatter.addCommas(Math.round(item.first + item.second + item.rest)) }
                  })
                }
                data={[
                  section0.blocks[4].dataset.map((item, i) => {
                    return { x: item.index, y: item.first, name: item.names[0] }
                  }),
                  section0.blocks[4].dataset.map((item, i) => {
                    return { x: item.index, y: item.second, name: item.names[1] }
                  }),
                  section0.blocks[4].dataset.map((item, i) => {
                    return { x: item.index, y: item.rest }
                  })
                ]}
                />
              <p>{section0.blocks[5]}</p>
              <LineChart
                title={section0.blocks[6].title}
                caption={section0.blocks[6].caption}
                height={300}
                padding={{
                  top: 30,
                  bottom: 40,
                  left: 60,
                  right: 60
                }}
                domain={{
                  x: [new Date(2009,1,1), new Date(2015,1,1)],
                  y: [0,150]
                }}
                axisLabels={section0.blocks[6].axisLabels}
                labels={section0.blocks[6].lineLabels}
                dataset={[
                  section0.blocks[6].dataset[0].map((item, i) => {
                    return { x: new Date(item.year,1,1), y: item.value}
                  }),
                  section0.blocks[6].dataset[1].map((item, i) => {
                    return { x: new Date(item.year,1,1), y: item.value}
                  })
                ]}
              />
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

          <div className="clearfix" style={{width:"100%",height:"0px",paddingBottom:"50%",overflow:"hidden",backgroundImage:"url(/img/chapters/5/climate-change.jpg)",backgroundSize:"cover",backgroundPosition:"center center",backgroundRepeat:"no-repeat"}}>
            { /* <img src="/img/chapters/5/climate-change.jpg" width="1440" height="auto" /> */ }
          </div>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3">
              <p className="small">{section1.blocks[1].caption}</p>
            </div>
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <p>{section1.blocks[2]}</p>
            </div>
          </div>

          <div className="clearfix" id="scroll-target-section2">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <p className="text-sm color-primary m0">{chapter.title}</p>
              <h3 className="text-md sm-text-lg mt0 light">{section2.title}</h3>
              <HeadlineDivider />
              <p>{section2.blocks[0]}</p>
              <div>
                <h4 className="title strong">{section2.blocks[1].title}</h4>
                <Tabs active={0}>
                  <TabPanel title={section2.blocks[1].tabs[0].name}>
                    <table>
                      <thead>
                        <tr className="small">
                          {section2.blocks[1].tabs[0].headers.map((item, i) => {
                            return (<th key={i}>{item}</th>)
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        {section2.blocks[1].tabs[0].dataset.map((item, i) => {
                          return (
                            <tr key={i} className={item.region === "Global" ? "strong" : ""}>
                              <td>{item.region}</td>
                              <td>{item.percentage1}%</td>
                              <td>{item.percentage2}%</td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </TabPanel>

                  <TabPanel title={section2.blocks[1].tabs[1].name}>
                    <table>
                      <thead>
                        <tr className="small">
                          {section2.blocks[1].tabs[1].headers.map((item, i) => {
                            return (<th key={i}>{item}</th>)
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        {section2.blocks[1].tabs[1].dataset.map((item, i) => {
                          return (
                            <tr key={i}>
                              <td>{item.activity}</td>
                              <td>{item.amount}</td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </TabPanel>
                </Tabs>
                <p className="small">{section2.blocks[1].caption}</p>
              </div>
            </div>
          </div>

          <div className="clearfix" id="scroll-target-section3">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <p className="text-sm color-primary m0">{chapter.title}</p>
              <h3 className="text-md sm-text-lg mt0 light">{section3.title}</h3>
              <HeadlineDivider />
              <p>{section3.blocks[0]}</p>
            </div>

            <div className="clearfix">
              <div className="col px1 sm-px0 sm-6 md-4 md-offset-3 lg-4 lg-offset-2">
                <div className="col sm-10 sm-offset-2 md-12 md-offset-0 sm-pr1">
                  <ul>
                    {section3.blocks[1].map((item, i) => {
                      return <li key={i}>{item}</li>
                    })}
                  </ul>
                  <p>{section3.blocks[2]}</p>
                  <p>{section3.blocks[3]}</p>
                </div>
                <div className="col sm-8 sm-offset-4 md-9 md-offset-3 sm-pr1">
                  <p>{section3.blocks[4]}</p>
                </div>
              </div>

              <div className="col px1 sm-px0 sm-5 md-4 md-offset-0 lg-4">
                <SimpleBarChart
                  title={section3.blocks[5].title}
                  caption={section3.blocks[5].caption}
                  horizontal={true}
                  height={960}
                  domain={{y:[0,100]}}
                  padding={{
                    top: 40,
                    bottom: 40,
                    left: 30,
                    right: 200
                  }}
                  data={section3.blocks[5].dataset}
                  labels={(datum) => datum.y !== 0 ? datum.xName + " [" + String(datum.y) + "%]" : datum.xName}
                  />
              </div>
            </div>

            <div className="clearfix">
              <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
                <p>{section3.blocks[6]}</p>
                <SimpleBarChart
                  noAxisChart={true}
                  padding={{
                    top: 40,
                    bottom: 40,
                    left: 40,
                    right: 40
                  }}
                  title={section3.blocks[7].title}
                  caption={section3.blocks[7].caption}
                  horizontal={false}
                  height={300}
                  data={section3.blocks[7].dataset}
                  labels={(datum) => String(datum.y)}
                  legend={
                    section3.blocks[7].dataset.map((item, i) => {
                      return { color: item.fill, name: item.x }
                    }
                  )}
                  />
              </div>
            </div>
          </div>


          <div className="clearfix" id="scroll-target-section4">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <p className="text-sm color-primary m0">{chapter.title}</p>
              <h3 className="text-md sm-text-lg mt0 light">{section4.title}</h3>
              <HeadlineDivider />
              <p>{section4.blocks[0]}</p>
              <div>
                <StackedBarChart
                  title={section4.blocks[1].title}
                  caption={section4.blocks[1].caption}
                  height={360}
                  padding={{
                    top: 60,
                    bottom: 30,
                    left: 30,
                    right: 100
                  }}
                  labels={
                    section4.blocks[1].dataset.map((item, i) => {
                      // return `${item.name} (${numberFormatter.addCommas(item.first + item.second + item.rest)})`
                      return { text: item.name, number: numberFormatter.addCommas(Math.round(item.first + item.second + item.rest)) }
                    })
                  }
                  data={[
                    section4.blocks[1].dataset.map((item, i) => {
                      return { x: item.index, y: item.first, name: item.names[0] }
                    }),
                    section4.blocks[1].dataset.map((item, i) => {
                      return { x: item.index, y: item.second, name: item.names[1] }
                    }),
                    section4.blocks[1].dataset.map((item, i) => {
                      return { x: item.index, y: item.rest }
                    })
                  ]}
                  />
              </div>
              <p>{section4.blocks[2]}</p>
            </div>
          </div>

          <div className="clearfix" id="scroll-target-section5">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <p className="text-sm color-primary m0">{chapter.title}</p>
              <h3 className="text-md sm-text-lg mt0 light">{section5.title}</h3>
              <HeadlineDivider />
              <p>{section5.blocks[0]}</p>
            </div>
            <div className="col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-7 lg-offset-2 pb2">
              <svg width="100%" height="540px" viewBox="0 0 840 540">
                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <text fontFamily="Roboto-Bold, Roboto" fontSize="45" fontWeight="bold" fill="#0F9EE2">
                          <tspan x="600" y="142">&gt9M</tspan>
                      </text>
                      <text fontFamily="Roboto-Bold, Roboto" fontSize="20" fontWeight="bold" fillOpacity="0.5" fill="#786A65">
                          {section5.blocks[1].translations[0].split("\n").map((item, i) => {
                            return <tspan key={i} x="600" y={188 + (i * 24)}>{item}</tspan>
                          })}
                      </text>
                      <text fontFamily="Roboto-Bold, Roboto" fontSize="24" fontWeight="bold" fillOpacity="0.5" fill="#786A65">
                          <tspan x="122.460" y="291">2015</tspan>
                      </text>
                      <text fontFamily="Roboto-Bold, Roboto" fontSize="24" fontWeight="bold" fillOpacity="0.5" fill="#786A65">
                          {section5.blocks[1].translations[1].split("\n").map((item, i) => {
                            return <tspan key={ i } x="155" y={420 + (i * 30)} textAnchor="middle">{item}</tspan>
                          })}
                      </text>
                      <g transform="translate(234, 7)" fill="#D6D2D0">
                          <path d="M24.464,63.703 C11.249,63.703 0.079,75.565 0.079,89.491 L0.079,153.975 C0.079,155.367 0.602,156.543 1.520,157.530 L9.955,165.925 L10.065,226.966 C10.065,229.741 12.277,231.904 15.003,231.904 L64.386,231.904 C67.122,231.904 69.324,229.741 69.324,226.966 L69.214,165.925 L77.639,157.530 C78.567,156.543 79.091,155.367 79.091,153.975 L79.091,89.491 C79.091,75.565 67.930,63.703 54.706,63.703 L24.464,63.703 Z"></path>
                          <path d="M39.585,60.148 C55.920,60.148 69.214,46.913 69.214,30.518 C69.214,14.222 55.920,0.888 39.585,0.888 C23.249,0.888 9.955,14.222 9.955,30.518 C9.955,46.913 23.249,60.148 39.585,60.148"></path>
                      </g>
                      <g transform="translate(114, 97)" fill="#D6D2D0">
                          <path d="M12.232,31.851 C5.624,31.851 0.039,37.782 0.039,44.745 L0.039,76.987 C0.039,77.683 0.301,78.271 0.760,78.765 L4.977,82.962 L5.032,113.483 C5.032,114.870 6.138,115.952 7.501,115.952 L32.193,115.952 C33.561,115.952 34.662,114.870 34.662,113.483 L34.607,82.962 L38.819,78.765 C39.283,78.271 39.545,77.683 39.545,76.987 L39.545,44.745 C39.545,37.782 33.965,31.851 27.353,31.851 L12.232,31.851 Z"></path>
                          <path d="M19.792,30.074 C27.960,30.074 34.607,23.456 34.607,15.259 C34.607,7.111 27.960,0.444 19.792,0.444 C11.624,0.444 4.977,7.111 4.977,15.259 C4.977,23.456 11.624,30.074 19.792,30.074"></path>
                      </g>
                      <g transform="translate(67, 97)" fill="#D6D2D0">
                          <path d="M9.174,23.888 C4.218,23.888 0.029,28.337 0.029,33.559 L0.029,57.740 C0.029,58.262 0.225,58.703 0.570,59.074 L3.733,62.222 L3.774,85.112 C3.774,86.152 4.604,86.964 5.626,86.964 L24.144,86.964 C25.170,86.964 25.996,86.152 25.996,85.112 L25.955,62.222 L29.114,59.074 C29.462,58.703 29.659,58.262 29.659,57.740 L29.659,33.559 C29.659,28.337 25.474,23.888 20.514,23.888 L9.174,23.888 Z"></path>
                          <path d="M14.844,22.555 C20.970,22.555 25.955,17.592 25.955,11.444 C25.955,5.333 20.970,0.333 14.844,0.333 C8.718,0.333 3.733,5.333 3.733,11.444 C3.733,17.592 8.718,22.555 14.844,22.555"></path>
                      </g>
                      <g transform="translate(101, 114)" fill="#D6D2D0">
                          <path d="M3.058,7.962 C1.406,7.962 0.009,9.445 0.009,11.186 L0.009,19.246 C0.009,19.420 0.075,19.567 0.190,19.691 L1.244,20.740 L1.258,28.370 C1.258,28.717 1.534,28.988 1.875,28.988 L8.048,28.988 C8.390,28.988 8.665,28.717 8.665,28.370 L8.651,20.740 L9.704,19.691 C9.820,19.567 9.886,19.420 9.886,19.246 L9.886,11.186 C9.886,9.445 8.491,7.962 6.838,7.962 L3.058,7.962 Z"></path>
                          <path d="M4.948,7.518 C6.990,7.518 8.651,5.864 8.651,3.814 C8.651,1.777 6.990,0.111 4.948,0.111 C2.906,0.111 1.244,1.777 1.244,3.814 C1.244,5.864 2.906,7.518 4.948,7.518"></path>
                      </g>
                      <g transform="translate(55, 95)" fill="#D6D2D0">
                          <path d="M3.058,7.962 C1.406,7.962 0.009,9.445 0.009,11.186 L0.009,19.246 C0.009,19.420 0.075,19.567 0.190,19.691 L1.244,20.740 L1.258,28.370 C1.258,28.717 1.534,28.988 1.875,28.988 L8.048,28.988 C8.390,28.988 8.665,28.717 8.665,28.370 L8.651,20.740 L9.704,19.691 C9.820,19.567 9.886,19.420 9.886,19.246 L9.886,11.186 C9.886,9.445 8.491,7.962 6.838,7.962 L3.058,7.962 Z"></path>
                          <path d="M4.948,7.518 C6.990,7.518 8.651,5.864 8.651,3.814 C8.651,1.777 6.990,0.111 4.948,0.111 C2.906,0.111 1.244,1.777 1.244,3.814 C1.244,5.864 2.906,7.518 4.948,7.518"></path>
                      </g>
                      <g transform="translate(440, 95)" fill="#D6D2D0">
                          <path d="M3.058,7.962 C1.406,7.962 0.009,9.445 0.009,11.186 L0.009,19.246 C0.009,19.420 0.075,19.567 0.190,19.691 L1.244,20.740 L1.258,28.370 C1.258,28.717 1.534,28.988 1.875,28.988 L8.048,28.988 C8.390,28.988 8.665,28.717 8.665,28.370 L8.651,20.740 L9.704,19.691 C9.820,19.567 9.886,19.420 9.886,19.246 L9.886,11.186 C9.886,9.445 8.491,7.962 6.838,7.962 L3.058,7.962 Z"></path>
                          <path d="M4.948,7.518 C6.990,7.518 8.651,5.864 8.651,3.814 C8.651,1.777 6.990,0.111 4.948,0.111 C2.906,0.111 1.244,1.777 1.244,3.814 C1.244,5.864 2.906,7.518 4.948,7.518"></path>
                      </g>
                      <g transform="translate(2, 109)" fill="#D6D2D0">
                          <path d="M6.116,15.925 C2.812,15.925 0.019,18.891 0.019,22.372 L0.019,38.493 C0.019,38.841 0.150,39.135 0.380,39.382 L2.488,41.481 L2.516,56.741 C2.516,57.435 3.069,57.976 3.750,57.976 L16.096,57.976 C16.780,57.976 17.331,57.435 17.331,56.741 L17.303,41.481 L19.409,39.382 C19.641,39.135 19.772,38.841 19.772,38.493 L19.772,22.372 C19.772,18.891 16.982,15.925 13.676,15.925 L6.116,15.925 Z"></path>
                          <path d="M9.896,15.037 C13.980,15.037 17.303,11.728 17.303,7.629 C17.303,3.555 13.980,0.222 9.896,0.222 C5.812,0.222 2.488,3.555 2.488,7.629 C2.488,11.728 5.812,15.037 9.896,15.037"></path>
                      </g>
                      <g transform="translate(410, 106)" fill="#D6D2D0">
                          <path d="M9.174,23.888 C4.218,23.888 0.029,28.337 0.029,33.559 L0.029,57.740 C0.029,58.262 0.225,58.703 0.570,59.074 L3.733,62.222 L3.774,85.112 C3.774,86.152 4.604,86.964 5.626,86.964 L24.144,86.964 C25.170,86.964 25.996,86.152 25.996,85.112 L25.955,62.222 L29.114,59.074 C29.462,58.703 29.659,58.262 29.659,57.740 L29.659,33.559 C29.659,28.337 25.474,23.888 20.514,23.888 L9.174,23.888 Z"></path>
                          <path d="M14.844,22.555 C20.970,22.555 25.955,17.592 25.955,11.444 C25.955,5.333 20.970,0.333 14.844,0.333 C8.718,0.333 3.733,5.333 3.733,11.444 C3.733,17.592 8.718,22.555 14.844,22.555"></path>
                      </g>
                      <g transform="translate(315, 19)" fill="#D6D2D0">
                          <path d="M89.310,166.624 L81.460,121.126 L81.460,81.044 C81.460,68.734 70.911,57.937 58.884,57.937 L31.785,57.937 C20.130,57.937 10.660,68.300 10.660,81.044 L10.660,120.684 L0.757,167.677 C0.474,169.005 0.810,170.332 1.651,171.394 C2.492,172.376 3.757,172.987 5.094,172.987 L19.510,172.987 L19.510,203.962 C19.510,206.449 21.493,208.387 23.935,208.387 L68.185,208.387 C70.637,208.387 72.610,206.449 72.610,203.962 L72.610,172.987 L85.151,172.987 L85.248,172.987 C87.717,173.076 89.753,171.049 89.753,168.562 C89.753,167.863 89.602,167.235 89.310,166.624"></path>
                          <path d="M45.326,54.751 C59.973,54.751 71.876,42.892 71.876,28.201 C71.876,13.599 59.973,1.651 45.326,1.651 C30.688,1.651 18.776,13.599 18.776,28.201 C18.776,42.892 30.688,54.751 45.326,54.751"></path>
                      </g>
                      <g transform="translate(160, 46)" fill="#D6D2D0">
                          <path d="M69.463,129.596 L63.358,94.209 L63.358,63.034 C63.358,53.460 55.153,45.062 45.799,45.062 L24.722,45.062 C15.656,45.062 8.291,53.122 8.291,63.034 L8.291,93.865 L0.589,130.415 C0.369,131.448 0.630,132.480 1.284,133.306 C1.938,134.070 2.922,134.545 3.962,134.545 L15.175,134.545 L15.175,158.637 C15.175,160.571 16.716,162.079 18.616,162.079 L53.033,162.079 C54.940,162.079 56.475,160.571 56.475,158.637 L56.475,134.545 L66.228,134.545 L66.304,134.545 C68.224,134.614 69.808,133.038 69.808,131.104 C69.808,130.560 69.691,130.071 69.463,129.596"></path>
                          <path d="M35.253,42.584 C46.645,42.584 55.903,33.360 55.903,21.934 C55.903,10.577 46.645,1.284 35.253,1.284 C23.868,1.284 14.603,10.577 14.603,21.934 C14.603,33.360 23.868,42.584 35.253,42.584"></path>
                      </g>
                      <g transform="translate(450, 104)" fill="#D6D2D0">
                          <path d="M29.770,55.541 L27.153,40.375 L27.153,27.014 C27.153,22.911 23.637,19.312 19.628,19.312 L10.595,19.312 C6.710,19.312 3.553,22.766 3.553,27.014 L3.553,40.228 L0.252,55.892 C0.158,56.335 0.270,56.777 0.550,57.131 C0.830,57.458 1.252,57.662 1.698,57.662 L6.503,57.662 L6.503,67.987 C6.503,68.816 7.164,69.462 7.978,69.462 L22.728,69.462 C23.545,69.462 24.203,68.816 24.203,67.987 L24.203,57.662 L28.383,57.662 L28.416,57.662 C29.239,57.692 29.917,57.016 29.917,56.187 C29.917,55.954 29.867,55.745 29.770,55.541"></path>
                          <path d="M15.108,18.250 C19.991,18.250 23.958,14.297 23.958,9.400 C23.958,4.533 19.991,0.550 15.108,0.550 C10.229,0.550 6.258,4.533 6.258,9.400 C6.258,14.297 10.229,18.250 15.108,18.250"></path>
                      </g>
                      <g transform="translate(27, 104)" fill="#D6D2D0">
                          <path d="M29.770,55.541 L27.153,40.375 L27.153,27.014 C27.153,22.911 23.637,19.312 19.628,19.312 L10.595,19.312 C6.710,19.312 3.553,22.766 3.553,27.014 L3.553,40.228 L0.252,55.892 C0.158,56.335 0.270,56.777 0.550,57.131 C0.830,57.458 1.252,57.662 1.698,57.662 L6.503,57.662 L6.503,67.987 C6.503,68.816 7.164,69.462 7.978,69.462 L22.728,69.462 C23.545,69.462 24.203,68.816 24.203,67.987 L24.203,57.662 L28.383,57.662 L28.416,57.662 C29.239,57.692 29.917,57.016 29.917,56.187 C29.917,55.954 29.867,55.745 29.770,55.541"></path>
                          <path d="M15.108,18.250 C19.991,18.250 23.958,14.297 23.958,9.400 C23.958,4.533 19.991,0.550 15.108,0.550 C10.229,0.550 6.258,4.533 6.258,9.400 C6.258,14.297 10.229,18.250 15.108,18.250"></path>
                      </g>
                      <text fontFamily="Roboto-Bold, Roboto" fontSize="72" fontWeight="bold" fill="#0F9EE2">
                          <tspan x="77" y="372">15M</tspan>
                      </text>
                      <path d="M659.062,32.878 C661.687,37.097 663,41.679 663,46.625 C663,50.140 662.314,53.492 660.943,56.679 C659.572,59.867 657.732,62.615 655.423,64.923 C653.115,67.232 650.367,69.072 647.179,70.443 C643.992,71.814 640.640,72.5 637.125,72.5 C633.609,72.5 630.257,71.814 627.070,70.443 C623.882,69.072 621.134,67.232 618.826,64.923 C616.517,62.615 614.677,59.867 613.306,56.679 C611.935,53.492 611.25,50.140 611.25,46.625 C611.25,41.679 612.562,37.097 615.187,32.878 C616.429,30.886 618.790,27.945 622.271,24.054 C625.751,20.164 628.470,17.205 630.427,15.177 C632.384,13.150 633.949,11.550 635.121,10.378 L637.125,8.375 L639.128,10.378 C640.300,11.550 641.865,13.150 643.822,15.177 C645.779,17.205 648.498,20.164 651.978,24.054 C655.459,27.945 657.820,30.886 659.062,32.878 L659.062,32.878 Z M637.125,66.875 C639.867,66.875 642.486,66.341 644.982,65.275 C647.478,64.208 649.634,62.767 651.451,60.951 C653.267,59.134 654.708,56.978 655.775,54.482 C656.841,51.986 657.375,49.367 657.375,46.625 C657.375,42.734 656.343,39.148 654.281,35.867 C652.148,32.468 646.429,25.964 637.125,16.355 C627.820,25.964 622.101,32.468 619.968,35.867 C617.906,39.148 616.875,42.734 616.875,46.625 C616.875,49.367 617.408,51.986 618.474,54.482 C619.541,56.978 620.982,59.134 622.798,60.951 C624.615,62.767 626.771,64.208 629.267,65.275 C631.763,66.341 634.382,66.875 637.125,66.875 L637.125,66.875 Z M623.765,38.222 C625.195,35.949 628.968,31.531 635.085,24.968 L639.164,28.835 C633.421,34.953 629.882,39.078 628.546,41.210 C627.515,42.851 627,44.656 627,46.625 C627,49.484 628.031,51.910 630.093,53.902 L626.156,57.910 C622.968,54.839 621.375,51.078 621.375,46.625 C621.375,43.601 622.171,40.800 623.765,38.222 L623.765,38.222 Z" fill="#0F9EE2"></path>
                      <text fontFamily="Roboto-Bold, Roboto" fontSize="45" fontWeight="bold" fill="#0F9EE2">
                          <tspan x="600" y="383">&gt5M</tspan>
                      </text>
                      <text fontFamily="Roboto-Bold, Roboto" fontSize="20" fontWeight="bold" fillOpacity="0.5" fill="#786A65">
                        {section5.blocks[1].translations[2].split("\n").map((item, i) => {
                          return <tspan key={ i } x="600" y={429 + (i * 24)}>{item}</tspan>
                        })}
                      </text>
                      <path d="M659.062,273.878 C661.687,278.097 663,282.679 663,287.625 C663,291.140 662.314,294.492 660.943,297.679 C659.572,300.867 657.732,303.615 655.423,305.923 C653.115,308.232 650.367,310.072 647.179,311.443 C643.992,312.814 640.640,313.5 637.125,313.5 C633.609,313.5 630.257,312.814 627.070,311.443 C623.882,310.072 621.134,308.232 618.826,305.923 C616.517,303.615 614.677,300.867 613.306,297.679 C611.935,294.492 611.25,291.140 611.25,287.625 C611.25,282.679 612.562,278.097 615.187,273.878 C616.429,271.886 618.790,268.945 622.271,265.054 C625.751,261.164 628.470,258.205 630.427,256.177 C632.384,254.150 633.949,252.550 635.121,251.378 L637.125,249.375 L639.128,251.378 C640.300,252.550 641.865,254.150 643.822,256.177 C645.779,258.205 648.498,261.164 651.978,265.054 C655.459,268.945 657.820,271.886 659.062,273.878 L659.062,273.878 Z M637.125,307.875 C639.867,307.875 642.486,307.341 644.982,306.275 C647.478,305.208 649.634,303.767 651.451,301.951 C653.267,300.134 654.708,297.978 655.775,295.482 C656.841,292.986 657.375,290.367 657.375,287.625 C657.375,283.734 656.343,280.148 654.281,276.867 C652.148,273.468 646.429,266.964 637.125,257.355 C627.820,266.964 622.101,273.468 619.968,276.867 C617.906,280.148 616.875,283.734 616.875,287.625 C616.875,290.367 617.408,292.986 618.474,295.482 C619.541,297.978 620.982,300.134 622.798,301.951 C624.615,303.767 626.771,305.208 629.267,306.275 C631.763,307.341 634.382,307.875 637.125,307.875 L637.125,307.875 Z M623.765,279.222 C625.195,276.949 628.968,272.531 635.085,265.968 L639.164,269.835 C633.421,275.953 629.882,280.078 628.546,282.210 C627.515,283.851 627,285.656 627,287.625 C627,290.484 628.031,292.910 630.093,294.902 L626.156,298.910 C622.968,295.839 621.375,292.078 621.375,287.625 C621.375,284.601 622.171,281.800 623.765,279.222 L623.765,279.222 Z" fill="#0F9EE2"></path>
                  </g>
              </svg>
            </div>

            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              { /* <div>
                <h4 className="title strong">{section5.blocks[1].title}</h4>
                <p className="small">{section5.blocks[1].caption}</p>
              </div> */ }
              <p>{section5.blocks[2]}</p>
            </div>
          </div>

        </div>

        <NextChapter nextChapter={chapter.nextChapter} />
      </div>
    )
  }
}

Chapter5.contextTypes = {
  i18n: React.PropTypes.object.isRequired,
}

export default translate([ "report-strategic-aim-2" ], { wait: true })(Chapter5)
