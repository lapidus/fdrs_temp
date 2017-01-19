import React from "react"
import { translate } from "react-i18next"

import NextChapter from "../../utils/NextChapter"
import numberFormatter from "../../utils/numberFormatter"
import HeadlineDivider from "../../components/HeadlineDivider"
import LineChart from "../../components/charts/LineChart"
import { Tabs, TabPanel } from "../../components/Tabs"
import SideNavigation from "../../components/Report/SideNavigation"
import StaffComposition from "../../components/Report/StaffComposition"
import StaffGenderDistribution from "../../components/Report/StaffGenderDistribution"
import StackedBarChart from "../../components/charts/StackedBarChart"
// import WorldMap from "../../components/charts/WorldMap"

class Chapter1 extends React.Component {
  componentDidMount() {
    console.log("Mounted Who we are")
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { language } = nextContext.i18n
    return !!nextContext.i18n.store.data[language]["report-who-we-are"]
  }

  bubbleCallback(response) {
    const officeReference = {
      regionalOffice: { radius: 10, key: "regionalOffice" },
      countryClusterOffice: { radius: 6, key: "countryClusterOffice" },
      countryOffice: { radius: 4, key: "countryOffice" },
      subCountryOffice: { radius: 4, key: "others" },
      liaisonOffice: { radius: 4, key: "others" },
      EbolaTreatmentCentre: { radius: 4, key: "others" },
      globalLogisticsService: { radius: 4, key: "others" },
    }

    return response.map(item => ({
      name: `${item.type || ""} ${item.region || ""}\n${item.city || ""}${item.country ? ", " + item.country : ""}`,
      latitude: item.latitude,
      longitude: item.longitude,
      radius: officeReference[item.typeKey].radius,
      fillKey: officeReference[item.typeKey].key,
    }))
  }

  bubblePopupTemplate(geo, data) {
    const sliced = data.name.split("\n")
    return `
      <div class="map-tooltip">
        <strong>${sliced[0][0].toUpperCase() + sliced[0].slice(1)}</strong>
        <hr />
        <div class="pt1">
          <span class="small">${sliced[1]}</span>
        </div>
      </div>
    `
  }

  render() {
    const { t } = this.props
    const { i18n } = this.context
    const { language } = i18n
    const chapter = i18n.store.data[language]["report-who-we-are"]
    const [ section0, section1 ] = chapter.sections

    return (
      <div>

        <div className="clearfix bg-primary">
          <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
            <p className="text-base m0">{ "Everyone counts" }</p>
            <h2 className="text-md sm-text-lg md-text-xl light m0 lh-small">{chapter.title}</h2>
          </div>
        </div>

        <div
            className="clearfix bg-dark overflow-hidden"
            style={{
              backgroundImage: "url(/img/chapters/chapter-1.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center 20%",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            }}
          >
          <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py4 md-py6">
            <p className="text-base sm-text-sm md-text-md">{ chapter.intro }</p>
            <hr />
          </div>
        </div>

        <div className="relative clearfix body-text">
          <SideNavigation title={ chapter.title } sections={ chapter.sections } sectionReferences={["scroll-target-section0","scroll-target-section1"]}/>

          <div className="clearfix" id="scroll-target-section0">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <p className="text-sm color-primary m0">{ chapter.title }</p>
              <h3 className="text-md sm-text-lg mt0 light">{ section0.title }</h3>
              <HeadlineDivider />
            </div>
          </div>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3">
              <p>{ section0.blocks[0] }</p>
            </div>
          </div>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3">
              <ul className="py05">
                {section0.blocks[1].map((item, i) => {
                  return (
                    <li key={ i } className="pl1 py05">
                      { item }
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <LineChart
                title={section0.blocks[2].title}
                caption={section0.blocks[2].caption}
                height={240}
                padding={{
                  top: 30,
                  bottom: 50,
                  left: 60,
                  right: 60
                }}
                domain={{
                  x: [new Date(1865,1,1), new Date(2020,1,1)],
                  y: [0,200]
                }}
                axisLabels={{
                  x: section0.blocks[2].axisLabels.x,
                  y: section0.blocks[2].axisLabels.y
                }}
                labels={section0.blocks[2].labels}
                dataset={[section0.blocks[2].dataset.map((item, i) => {
                  return {
                    x: new Date(item.year, 1, 1),
                    y: Number(item.members)
                  }
                })]}
              />
            </div>
          </div>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3">
              <p>{section0.blocks[3]}</p>
              <p>{section0.blocks[4]}</p>
              <p>{section0.blocks[5]}</p>
            </div>
          </div>

          {/* <div className="clearfix">
            <div className="col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-7 lg-offset-2 py2">
              <WorldMap
                title={section0.blocks[6].title}
                caption={section0.blocks[6].caption}
                bubbleSource={section0.blocks[6].dataset}
                bubbleCallback={this.bubbleCallback}
                bubblePopupTemplate={this.bubblePopupTemplate}
                />
            </div>
          </div> */}

          <div className="clearfix" id="scroll-target-section1">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <p className="text-sm color-primary m0">{chapter.title}</p>
              <h3 className="text-md sm-text-lg mt0 light">{section1.title}</h3>

              <HeadlineDivider />
              <p>{section1.blocks[0]}</p>
            </div>
          </div>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-7 lg-offset-2 pt2">
              <StaffComposition title={section1.blocks[1].title} translations={section1.blocks[1].translations}/>
            </div>

            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 pb2">
              <hr />
              <StaffGenderDistribution translations={section1.blocks[1].translations}/>
              <p className="small">{section1.blocks[1].caption}</p>
            </div>

            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3">
              <p>{section1.blocks[2]}</p>
            </div>
          </div>

          <div className="clearfix">
            <div className="col px1 xs-6 sm-px0 sm-4 sm-offset-2 md-4 md-offset-3 lg-3 lg-offset-3 pt1">
              <p>{section1.blocks[3]}</p>
            </div>
            <div className="col px1 xs-6 sm-4 md-4 lg-3 pt1">
              <h4 className="title strong m0">{section1.blocks[4].title}</h4>
              <svg width="100%" height="360px" viewBox="0 0 360 360">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g fontFamily="Roboto-Bold, Roboto">

                    <path d="M224.358336,83.2002487 C223.722933,83.2002487 223.132916,83.2002487 222.516424,83.1624271 L222.516424,79.4218696 C223.136698,79.4218696 223.730497,79.4596913 224.362118,79.4596913 C230.701021,79.4596913 241.42723,78.6654374 245.209391,76.2032504 L245.209391,79.3046226 C245.209391,80.7078045 236.998319,83.2002487 224.358336,83.2002487 Z M197.932376,86.9824099 C185.311304,86.9824099 177.777238,84.4899657 177.130489,83.2418525 L177.130489,81.3507719 C182.338525,82.7501715 189.176672,83.2002487 194.150214,83.2002487 L196.041295,83.2002487 L196.041295,83.2418525 C204.369614,83.2418525 214.12759,82.3719554 218.749391,79.5353345 L218.756955,83.0527444 C218.091295,84.4899657 210.561012,86.9824099 197.932376,86.9824099 Z M211.192633,90.6170669 C210.526973,92.0542882 202.99669,94.5467324 190.368053,94.5467324 C177.746981,94.5467324 170.212916,92.0542882 169.566166,90.806175 L169.566166,87.3265866 C174.80446,89.5542796 184.921741,90.7267496 193.567762,90.7267496 C193.75687,90.7267496 192.259134,90.7267496 192.259134,90.7267496 L192.259134,90.688928 C196.041295,90.7683533 195.82193,90.7683533 196.998182,90.7683533 C200.840858,90.7683533 206.264477,90.4998199 210.719863,89.705566 L211.192633,90.6170669 Z M173.348328,82.1412436 L173.348328,83.2418525 C173.348328,83.8053945 173.533654,84.3386792 173.805969,84.826578 C171.767384,84.3008576 170.311252,83.8053945 169.74771,83.4271784 C170.258302,83.0867839 171.370257,82.5988851 173.348328,82.1412436 Z M165.784005,61.1124271 C170.95422,63.5708319 180.254554,64.3310463 186.551852,64.3310463 C192.886973,64.3310463 202.251604,63.5367925 207.402907,61.0746055 L207.410472,64.0625129 C207.338611,64.1381561 207.270532,64.2516209 207.217581,64.3650858 C206.026201,65.7644854 198.677461,68.0753859 186.585892,68.0753859 C173.96482,68.0753859 166.430755,65.5791595 165.784005,64.3310463 L165.784005,61.1124271 Z M186.551852,52.9845626 C199.176707,52.9845626 206.70699,55.4770069 207.380214,56.6116552 C206.70699,58.014837 199.176707,60.5488851 186.551852,60.5488851 C174.085849,60.5488851 166.612298,58.0866981 165.784005,56.9520497 L165.784005,56.8423671 C166.612298,55.4013636 174.085849,52.9845626 186.551852,52.9845626 Z M224.373465,10 C236.998319,10 244.528602,12.4924443 245.201827,13.6270926 C244.528602,15.0302744 236.998319,17.5643225 224.373465,17.5643225 C211.907461,17.5643225 204.433911,15.1021355 203.605617,13.9674871 L203.605617,13.8578045 C204.433911,12.416801 211.907461,10 224.373465,10 Z M221.434726,75.5981046 C221.415815,73.9717753 220.77663,72.5723756 218.734262,71.4377273 L218.734262,68.0337822 L218.692659,68.0337822 C218.692659,67.9959605 218.67753,67.9581389 218.673748,67.9240995 C220.818233,68.0337822 222.853036,68.1132075 224.365901,68.1132075 C230.701021,68.1132075 241.42723,67.3189537 245.209391,64.8567667 L245.209391,71.5890137 C245.209391,71.6646569 245.19048,71.7062607 245.19048,71.7403002 C244.521038,73.143482 236.994537,75.67753 224.369683,75.67753 C223.738062,75.67753 223.136698,75.6359262 222.516424,75.6359262 L222.516424,75.5981046 L221.434726,75.5981046 Z M209.687333,67.2017067 C210.950575,67.3529931 212.523954,67.5042796 214.241055,67.6177444 C214.589014,67.8446741 214.812161,68.0337822 214.887804,68.0337822 C213.930918,69.4710034 206.457367,71.853765 194.116175,71.853765 C193.068516,71.853765 192.115412,71.7781218 191.135832,71.7403002 C198.106355,71.362084 206.37416,70.117753 209.687333,67.2017067 Z M210.950575,55.6661149 C215.451346,56.4603688 220.477839,56.7667238 224.369683,56.7667238 C230.701021,56.7667238 241.42723,55.97247 245.209391,53.510283 L245.209391,60.2803516 C245.209391,60.3181732 245.19048,60.359777 245.19048,60.3938165 C244.521038,61.7969983 236.994537,64.3310463 224.369683,64.3310463 C221.067856,64.3310463 215.012616,63.949048 211.16994,63.5708319 L211.16994,56.6872985 L211.124554,56.6872985 C211.11699,56.3469039 211.064039,56.0065094 210.950575,55.6661149 Z M224.369683,45.4202401 C230.701021,45.4202401 241.42723,44.6259863 245.209391,42.1637993 L245.209391,48.9338679 C245.209391,48.9716895 245.194262,49.0132933 245.194262,49.0473328 C244.52482,50.4505146 236.994537,52.9845626 224.373465,52.9845626 C211.843165,52.9845626 204.346921,50.484554 203.605617,49.2364408 L203.605617,42.2016209 C208.775832,44.6600257 218.072384,45.4202401 224.369683,45.4202401 Z M245.209391,37.6252058 C245.209391,37.6668096 245.198045,37.6668096 245.198045,37.7008491 C244.528602,39.1040309 236.998319,41.6380789 224.373465,41.6380789 C211.843165,41.6380789 204.346921,39.1380703 203.605617,37.8899571 L203.605617,30.8551372 C208.775832,33.313542 218.076166,34.0737564 224.373465,34.0737564 C230.704803,34.0737564 241.42723,33.2795026 245.209391,30.8173156 L245.209391,37.6252058 Z M245.209391,26.1706604 C245.209391,26.2122642 245.198045,26.2122642 245.198045,26.2463036 C244.528602,27.6494854 236.998319,30.1835334 224.373465,30.1835334 C211.843165,30.1835334 204.346921,27.6835249 203.605617,26.4354117 L203.605617,19.4005918 C208.775832,21.8589966 218.076166,22.619211 224.373465,22.619211 C230.704803,22.619211 241.42723,21.8249571 245.209391,19.3627702 L245.209391,26.1706604 Z M271.464374,44.3636364 C284.089228,44.3636364 291.619511,46.8560806 292.292736,47.990729 C291.619511,49.3939108 284.089228,51.9279588 271.464374,51.9279588 C258.99837,51.9279588 251.52482,49.4657719 250.696527,48.3311235 L250.696527,48.2214408 C251.52482,46.7804374 258.99837,44.3636364 271.464374,44.3636364 Z M271.460592,79.7838765 C277.79193,79.7838765 288.518139,78.9896226 292.3003,76.5274357 L292.3003,83.2975043 C292.3003,83.3353259 292.285172,83.3769297 292.285172,83.4109691 C291.615729,84.8141509 284.085446,87.348199 271.464374,87.348199 C258.934074,87.348199 251.43783,84.8481904 250.696527,83.6000772 L250.696527,76.5652573 C255.866741,79.0236621 265.163293,79.7838765 271.460592,79.7838765 Z M292.3003,71.9888422 C292.3003,72.030446 292.288954,72.030446 292.288954,72.0644854 C291.619511,73.4676672 284.089228,76.0017153 271.464374,76.0017153 C258.934074,76.0017153 251.43783,73.5017067 250.696527,72.2535935 L250.696527,65.2187736 C255.866741,67.6771784 265.167075,68.4373928 271.464374,68.4373928 C277.795712,68.4373928 288.518139,67.6431389 292.3003,65.180952 L292.3003,71.9888422 Z M292.3003,60.5342967 C292.3003,60.5759005 292.288954,60.5759005 292.288954,60.60994 C291.619511,62.0131218 284.089228,64.5471698 271.464374,64.5471698 C258.934074,64.5471698 251.43783,62.0471612 250.696527,60.799048 L250.696527,53.7642281 C255.866741,56.2226329 265.167075,56.9828473 271.464374,56.9828473 C277.795712,56.9828473 288.518139,56.1885935 292.3003,53.7264065 L292.3003,60.5342967 Z M173.348328,73.1056604 C178.518542,75.5981046 187.818877,75.6359262 194.116175,75.6359262 C200.451295,75.6359262 209.815926,74.8832762 214.96723,72.4210892 L214.974794,75.4846398 C214.309134,76.9256432 206.778851,79.4218696 194.150214,79.4218696 C181.529142,79.4218696 173.995077,76.9256432 173.348328,75.67753 L173.348328,73.1056604 Z" fill="#F1F0EF"></path>

                    <text fontSize="16" fontWeight="bold" fill="#786A65">
                      <tspan x="10" y="71.3532504">{section1.blocks[4].translations.nationalSocieties}</tspan>
                    </text>
                    <g transform="translate(10, 99.353250)">
                      <text fontSize="34" fontWeight="normal" fill="#786A65">
                        <tspan x="223" y="32">30.8Bn</tspan>
                      </text>
                      <text fontSize="13" fontWeight="bold" letterSpacing="1" fill="#EE3224">
                        <tspan x="0" y="14">{section1.blocks[4].translations.income}</tspan>
                      </text>
                      <text opacity="0.5" fontSize="16" fontWeight="bold" fill="#786A65">
                        <tspan x="188" y="32">CHF</tspan>
                      </text>
                      <text fontSize="34" fontWeight="normal" fill="#786A65">
                        <tspan x="213" y="80">30.4Bn</tspan>
                      </text>
                      <text fontSize="13" fontWeight="bold" letterSpacing="1" fill="#EE3224">
                        <tspan x="0" y="63">{section1.blocks[4].translations.expenses}</tspan>
                      </text>
                      <text opacity="0.5" fontSize="16" fontWeight="bold" fill="#786A65">
                        <tspan x="178" y="80">CHF</tspan>
                      </text>
                      <rect fill="#786A65" x="0" y="21" width="180" height="10"></rect>
                      <rect fill="#786A65" opacity="0.6" x="0" y="70" width="170" height="10"></rect>
                    </g>
                    <text fontSize="16" fontWeight="bold" fill="#786A65">
                      <tspan x="10" y="224.35325">{section1.blocks[4].translations.ifrcSecretariat}</tspan>
                    </text>
                    <g transform="translate(10, 252.353250)">
                      <text fontSize="34" fontWeight="normal" fill="#786A65">
                        <tspan x="183" y="32">345.5M</tspan>
                      </text>
                      <text fontSize="13" fontWeight="bold" letterSpacing="1" fill="#EE3224">
                        <tspan x="0" y="14">{section1.blocks[4].translations.income}</tspan>
                      </text>
                      <text opacity="0.5" fontSize="16" fontWeight="bold" fill="#786A65">
                        <tspan x="148" y="32">CHF</tspan>
                      </text>
                      <text fontSize="34" fontWeight="normal" fill="#786A65">
                        <tspan x="195" y="80">365.3M</tspan>
                      </text>
                      <text fontSize="13" fontWeight="bold" letterSpacing="1" fill="#EE3224">
                        <tspan x="0" y="63">{section1.blocks[4].translations.expenses}</tspan>
                      </text>
                      <text opacity="0.5" fontSize="16" fontWeight="bold" fill="#786A65">
                        <tspan x="160" y="80">CHF</tspan>
                      </text>
                      <rect fill="#786A65" x="0" y="21" width="140" height="10"></rect>
                      <rect fill="#786A65" opacity="0.6" x="0" y="70" width="152" height="10"></rect>
                    </g>
                  </g>
                </g>
              </svg>
            </div>

            </div>

          <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3">
            <p>{section1.blocks[5]}</p>

            <h4 className="title strong">{section1.blocks[6].title}</h4>

            <Tabs active={0}>
              <TabPanel title={section1.blocks[6].tabs[0].name}>
                <div>
                  <StackedBarChart
                    caption={section1.blocks[6].tabs[0].caption}
                    height={360}
                    width={480}
                    padding={{
                      top: 60,
                      bottom: 30,
                      left: 30,
                      right: 100
                    }}
                    labels={
                      section1.blocks[6].tabs[0].dataset.map((item, i) => {
                        // return `${item.name} — ${numberFormatter.addCommas(item.first + item.second + item.rest)}`
                        const sum = Number(item.first) + Number(item.second) + Number(item.rest)
                        return { text: item.name, number: numberFormatter.addCommas(Math.round(sum)) }
                      })
                    }
                    data={[
                      section1.blocks[6].tabs[0].dataset.map((item, i) => {
                        return { x: item.index, y: Number(item.first), name: item.names[0] }
                      }),
                      section1.blocks[6].tabs[0].dataset.map((item, i) => {
                        return { x: item.index, y: Number(item.second), name: item.names[1] }
                      }),
                      section1.blocks[6].tabs[0].dataset.map((item, i) => {
                        return { x: item.index, y: Number(item.rest) }
                      })
                    ]}
                    />
                  </div>
              </TabPanel>
              <TabPanel title={section1.blocks[6].tabs[1].name}>
                <div>
                  <StackedBarChart
                    caption={section1.blocks[6].tabs[1].caption}
                    height={360}
                    width={480}
                    padding={{
                      top: 60,
                      bottom: 30,
                      left: 30,
                      right: 100
                    }}
                    labels={
                      section1.blocks[6].tabs[1].dataset.map((item, i) => {
                        // return `${item.name} (${numberFormatter.addCommas(item.first + item.second + item.rest)})`
                        const sum = Number(item.first) + Number(item.second) + Number(item.rest)
                        return { text: item.name, number: numberFormatter.addCommas(Math.round(sum)) }
                      })
                    }
                    data={[
                      section1.blocks[6].tabs[1].dataset.map((item, i) => {
                        return { x: item.index, y: Number(item.first), name: item.names[0] }
                      }),
                      section1.blocks[6].tabs[1].dataset.map((item, i) => {
                        return { x: item.index, y: Number(item.second), name: item.names[1] }
                      }),
                      section1.blocks[6].tabs[1].dataset.map((item, i) => {
                        return { x: item.index, y: Number(item.rest) }
                      })
                    ]}
                    />
                  </div>
              </TabPanel>
              <TabPanel title={section1.blocks[6].tabs[2].name}>
                <div>
                  <StackedBarChart
                    caption={section1.blocks[6].tabs[2].caption}
                    height={360}
                    width={480}
                    padding={{
                      top: 60,
                      bottom: 30,
                      left: 30,
                      right: 100
                    }}
                    labels={
                      section1.blocks[6].tabs[2].dataset.map((item, i) => {
                        // return `${item.name} (${numberFormatter.addCommas(item.first + item.second + item.rest)})`
                        return { text: item.name, number: numberFormatter.addCommas(Math.round(Number(item.first) + Number(item.second) + Number(item.rest))) }
                      })
                    }
                    data={[
                      section1.blocks[6].tabs[2].dataset.map((item, i) => {
                        return { x: item.index, y: Number(item.first), name: item.names[0] }
                      }),
                      section1.blocks[6].tabs[2].dataset.map((item, i) => {
                        return { x: item.index, y: Number(item.second), name: item.names[1] }
                      }),
                      section1.blocks[6].tabs[2].dataset.map((item, i) => {
                        return { x: item.index, y: Number(item.rest) }
                      })
                    ]}
                    />
                  </div>
              </TabPanel>
            </Tabs>

            <p>{section1.blocks[7]}</p>

            <h4 className="title strong">{section1.blocks[8].title}</h4>

            <Tabs active={0}>
              <TabPanel title={section1.blocks[8].tabs[0].name}>
                <div>
                  <StackedBarChart
                    caption={section1.blocks[8].caption}
                    height={360}
                    width={480}
                    padding={{
                      top: 60,
                      bottom: 30,
                      left: 30,
                      right: 120
                    }}
                    labels={
                      section1.blocks[8].tabs[0].dataset.map((item, i) => {
                        // return `${item.name} (${numberFormatter.addCommas(Math.round(item.first + item.second + item.rest))})`
                        return { text: item.name, number: numberFormatter.addCommas(Math.round(Number(item.first) + Number(item.second) + Number(item.rest))) }
                      })
                    }
                    data={[
                      section1.blocks[8].tabs[0].dataset.map((item, i) => {
                        return { x: Number(item.index), y: Number(item.first), name: item.names[0] }
                      }),
                      section1.blocks[8].tabs[0].dataset.map((item, i) => {
                        return { x: Number(item.index), y: Number(item.second), name: item.names[1] }
                      }),
                      section1.blocks[8].tabs[0].dataset.map((item, i) => {
                        return { x: Number(item.index), y: Number(item.rest) }
                      })
                    ]}
                    />
                  </div>
              </TabPanel>
              <TabPanel title={section1.blocks[8].tabs[1].name}>
                <div>
                  <StackedBarChart
                    caption={section1.blocks[8].caption}
                    height={360}
                    width={480}
                    padding={{
                      top: 60,
                      bottom: 30,
                      left: 30,
                      right: 120
                    }}
                    labels={
                      section1.blocks[8].tabs[1].dataset.map((item, i) => {
                        // return `${item.name} (${numberFormatter.addCommas(Math.round(item.first + item.second + item.rest))})`
                        const sum = Number(item.first) + Number(item.second) + Number(item.rest)
                        return { text: item.name, number: numberFormatter.addCommas(Math.round(sum)) }
                      })
                    }
                    data={[
                      section1.blocks[8].tabs[1].dataset.map((item, i) => {
                        return { x: Number(item.index), y: Number(item.first), name: item.names[0] }
                      }),
                      section1.blocks[8].tabs[1].dataset.map((item, i) => {
                        return { x: Number(item.index), y: Number(item.second), name: item.names[1] }
                      }),
                      section1.blocks[8].tabs[1].dataset.map((item, i) => {
                        return { x: Number(item.index), y: Number(item.rest) }
                      })
                    ]}
                    />
                  </div>
              </TabPanel>
            </Tabs>

            <p>{section1.blocks[9]}</p>
            <p>{section1.blocks[10]}</p>

            <h4 className="title strong">{section1.blocks[11].title}</h4>

            <Tabs active={0}>
              <TabPanel title={section1.blocks[11].tabs[0].name}>
                <table className="base-12">
                  <thead>
                    <tr className="small bg-dark">
                      {section1.blocks[11].tabs[0].headers.map((item, i) => {
                        return (<th key={i} className="p05">{item}</th>)
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {section1.blocks[11].tabs[0].dataset.map((item, i) => {
                      return (
                        <tr key={i}>
                          <td className="p05 text-center">{item.rank}</td>
                          <td className="p05">{item.donor}</td>
                          <td className="p05">{item.total}</td>
                          <td className="p05 text-center">{item.percent}%</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
                <p className="small">{section1.blocks[11].tabs[0].caption}</p>
              </TabPanel>
              <TabPanel title={section1.blocks[11].tabs[1].name}>
                <table className="base-12">
                  <thead>
                    <tr className="small bg-dark">
                      {section1.blocks[11].tabs[1].headers.map((item, i) => {
                        return (<th key={i} className="p05">{item}</th>)
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {section1.blocks[11].tabs[1].dataset.map((item, i) => {
                      return (
                        <tr key={i}>
                          <td className="p05 text-center">{item.rank}</td>
                          <td className="p05">{item.nationalSociety}</td>
                          <td className="p05">{item.total}</td>
                          <td className="p05 text-center">{item.percent}%</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
                <p className="small">{section1.blocks[11].tabs[1].caption}</p>
              </TabPanel>
            </Tabs>

          </div>
        </div>

        <NextChapter nextChapter={chapter.nextChapter} />
      </div>
    )
  }
}

Chapter1.contextTypes = {
  i18n: React.PropTypes.object.isRequired,
}

export default translate([ "report-who-we-are" ], { wait: true })(Chapter1)
