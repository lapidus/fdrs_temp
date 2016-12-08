import React from "react"
import { translate } from "react-i18next"

import NextChapter from "../../utils/NextChapter"
import BreadCrumbs from "../../components/Report/Breadcrumbs"
import HeadlineDivider from "../../components/HeadlineDivider"
import DonutChart from "../../components/charts/DonutChart"
import SideNavigation from "../../components/Report/SideNavigation"

class Chapter6 extends React.Component {
  componentDidMount() {
    console.log("Mounted Strategic Aim 3")
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { language } = nextContext.i18n
    return !!nextContext.i18n.store.data[language]["report-strategic-aim-3"]
  }

  render() {
    const { t } = this.props
    const { i18n } = this.context
    const { language } = i18n
    const chapter = i18n.store.data[language]["report-strategic-aim-3"]

    const [
      section0,
      section1,
      section2,
      section3,
      section4,
    ] = chapter.sections

    return (
      <div>
        <div className="clearfix bg-primary-dark">
          <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py1">
            <BreadCrumbs chapter={chapter} language={language}/>
          </div>
        </div>

        <div className="clearfix bg-primary pt1">
          <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3">
            <h2 className="display-2">{chapter.title}</h2>
            <p className="title">{chapter.subtitle}</p>
          </div>
        </div>

        <div className="clearfix bg-dark chapter-banner" style={{backgroundImage:"url(/img/chapters/chapter-6.jpg)",backgroundSize:"cover",backgroundPosition:"center 50%",backgroundRepeat:"no-repeat"}}>
          <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3">
            <p className="lead">{chapter.intro}</p>
            <hr />
          </div>
        </div>

        <div className="clearfix body-text" style={{position:"relative"}}>

          <SideNavigation title={chapter.title} sections={chapter.sections} sectionReferences={["scroll-target-section0","scroll-target-section1","scroll-target-section2","scroll-target-section3","scroll-target-section4"]}/>

          <div className="clearfix" id="scroll-target-section0">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <p>{section0.blocks[0]}</p>
              <ul>
                {section0.blocks[1].map((item, i) => {
                  return <li key={i}>{item}</li>
                })}
              </ul>
            </div>
          </div>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-7 lg-offset-2 pb2">
              <h4 className="title strong">{section0.blocks[2].title}</h4>

              <svg width="100%" height="560px" viewBox="0 0 1000 560">
                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fontFamily="Roboto">
                      <g transform="translate(820, 10)">
                          <path d="M60,120 C93.137,120 120,93.137 120,60 C120,26.862 93.137,0 60,0 C26.862,0 0,26.862 0,60 C0,93.137 26.862,120 60,120 Z" fill="#D8D8D8"></path>
                          <g transform="translate(41.116, 75.580) rotate(-345) translate(-41.116, -75.580) translate(32.616, 72.080)" fill="#786A65">
                              <path d="M14.005,2.833 L8.672,2.833 C8.488,2.833 8.338,2.686 8.338,2.5 C8.338,2.32 8.488,2.166 8.672,2.166 L14.005,2.166 C14.19,2.166 14.338,2.32 14.338,2.5 C14.338,2.686 14.19,2.833 14.005,2.833 L14.005,2.833 Z M7.338,6.166 L2.672,6.166 C1.569,6.166 0.672,5.273 0.672,4.166 L0.672,3.5 C0.672,2.400 1.569,1.5 2.672,1.5 L7.338,1.5 L7.338,6.166 L7.338,6.166 Z M13.338,0.833 L2.672,0.833 C1.202,0.833 0.005,2.033 0.005,3.5 L0.005,4.166 C0.005,5.64 1.202,6.833 2.672,6.833 L13.338,6.833 C14.809,6.833 16.005,5.64 16.005,4.166 L16.005,3.5 C16.005,2.033 14.809,0.833 13.338,0.833 L13.338,0.833 Z"></path>
                          </g>
                          <g transform="translate(52.5, 84.5) rotate(-30) translate(-52.5, -84.5) translate(44, 81)" fill="#786A65">
                              <path d="M14.005,2.833 L8.672,2.833 C8.488,2.833 8.338,2.686 8.338,2.5 C8.338,2.32 8.488,2.166 8.672,2.166 L14.005,2.166 C14.19,2.166 14.338,2.32 14.338,2.5 C14.338,2.686 14.19,2.833 14.005,2.833 L14.005,2.833 Z M7.338,6.166 L2.672,6.166 C1.569,6.166 0.672,5.273 0.672,4.166 L0.672,3.5 C0.672,2.400 1.569,1.5 2.672,1.5 L7.338,1.5 L7.338,6.166 L7.338,6.166 Z M13.338,0.833 L2.672,0.833 C1.202,0.833 0.005,2.033 0.005,3.5 L0.005,4.166 C0.005,5.64 1.202,6.833 2.672,6.833 L13.338,6.833 C14.809,6.833 16.005,5.64 16.005,4.166 L16.005,3.5 C16.005,2.033 14.809,0.833 13.338,0.833 L13.338,0.833 Z"></path>
                          </g>
                          <g transform="translate(41.5, 45) rotate(-15) translate(-41.5, -45) translate(23, 36)">
                              <path d="M35.016,17.5 L1.016,17.5 C0.464,17.5 0.016,17.062 0.016,16.5 L0.016,10.5 C0.016,9.962 0.464,9.5 1.016,9.5 L35.016,9.5 C35.57,9.5 36.016,9.962 36.016,10.5 L36.016,16.5 C36.016,17.062 35.57,17.5 35.016,17.5 L35.016,17.5 Z M2.931,2.102 C2.659,1.613 2.824,0.995 3.299,0.731 C3.781,0.444 4.392,0.607 4.665,1.097 C5.392,2.346 4.587,3.890 3.876,5.252 C3.591,5.799 3.109,6.724 3.135,7.021 C3.414,7.489 3.231,8.061 2.750,8.348 C2.525,8.472 2.264,8.487 2.024,8.423 C1.758,8.352 1.515,8.183 1.368,7.935 C0.770,6.886 1.415,5.651 2.103,4.321 C2.400,3.761 3.109,2.398 2.931,2.102 L2.931,2.102 Z M6.931,2.102 C6.659,1.613 6.824,0.995 7.299,0.731 C7.781,0.444 8.392,0.607 8.665,1.097 C9.392,2.346 8.587,3.890 7.876,5.252 C7.591,5.799 7.109,6.724 7.135,7.021 C7.414,7.489 7.231,8.061 6.750,8.348 C6.525,8.472 6.264,8.487 6.024,8.423 C5.758,8.352 5.515,8.183 5.368,7.935 C4.770,6.886 5.415,5.651 6.103,4.321 C6.400,3.761 7.109,2.398 6.931,2.102 L6.931,2.102 Z" fill="#786A65"></path>
                              <polygon fill="#D8D8D8" points="2.016 11.5 26.016 11.5 26.016 15.5 2.016 15.5"></polygon>
                              <polygon fill="#786A65" points="28.016 11.5 34.016 11.5 34.016 15.5 28.016 15.5"></polygon>
                          </g>
                          <g transform="translate(70, 27)" fill="#786A65">
                              <path d="M19.412,60.35 L2.12,60.35 C1.432,60.35 0.872,59.8 0.87,59.125 L0.78,26 C0.775,24.525 1.372,23.052 2.42,22.025 C3.47,20.975 4.92,20.35 6.4,20.35 L7.017,20.35 L7.017,7.85 L5.767,7.85 C5.075,7.85 4.517,7.3 4.517,6.6 L4.517,1.6 C4.517,0.925 5.075,0.35 5.767,0.35 L15.767,0.35 C16.457,0.35 17.017,0.925 17.017,1.6 L17.017,6.6 C17.017,7.3 16.457,7.85 15.767,7.85 L14.517,7.85 L14.517,20.35 L15.135,20.35 C16.615,20.35 18.065,20.975 19.112,22.025 C20.162,23.052 20.76,24.525 20.755,26 L20.662,59.125 C20.66,59.8 20.102,60.35 19.412,60.35"></path>
                          </g>
                      </g>
                      <g transform="translate(660, 10)">
                          <path d="M60,120 C93.137,120 120,93.137 120,60 C120,26.862 93.137,0 60,0 C26.862,0 0,26.862 0,60 C0,93.137 26.862,120 60,120 Z" fill="#D8D8D8"></path>
                          <g transform="translate(35, 11)" fill="#786A65">
                              <path d="M11.024,34.5 C4.958,34.5 0.024,29.56 0.024,23.5 C0.024,17.52 4.832,12.64 10.79,12.522 C12.97,5.42 19.53,0.522 27.026,0.522 C36.398,0.522 44.024,8.14 44.024,17.52 C44.024,17.702 44.016,17.88 44.006,18.06 C46.5,19.72 48.024,22.52 48.024,25.5 C48.024,30.46 43.986,34.5 39.024,34.5 L11.024,34.5 Z"></path>
                          </g>
                          <g transform="translate(51, 59)" fill="#786A65">
                              <path d="M9.016,14.538 C12.876,14.538 16.016,11.396 16.016,7.538 C16.016,3.678 12.876,0.538 9.016,0.538 C5.156,0.538 2.016,3.678 2.016,7.538 C2.016,11.396 5.156,14.538 9.016,14.538"></path>
                              <path d="M13.996,16.506 L4.04,16.506 C1.82,16.506 0.016,18.24 0.02,20.446 L2.088,48.506 L8.016,48.506 L8.016,36.506 C8.016,35.954 8.464,35.506 9.016,35.506 C9.57,35.506 10.016,35.954 10.016,36.506 L10.016,48.506 L15.946,48.506 L18.016,20.374 C18.016,18.24 16.212,16.506 13.996,16.506"></path>
                          </g>
                          <path d="M41.552,59 L41.552,61.990 C41.552,62.548 41.111,63 40.559,63 L39.878,63 C39.330,63 39.131,62.630 39.438,62.171 L41.552,59 Z" fill="#786A65"></path>
                          <path d="M40.552,51 L40.552,53.990 C40.552,54.548 40.111,55 39.559,55 L38.878,55 C38.330,55 38.131,54.630 38.438,54.171 L40.552,51 Z" fill="#786A65"></path>
                          <path d="M49.552,48 L49.552,50.990 C49.552,51.548 49.111,52 48.559,52 L47.878,52 C47.330,52 47.131,51.630 47.438,51.171 L49.552,48 Z" fill="#786A65"></path>
                          <path d="M53.552,54 L53.552,56.990 C53.552,57.548 53.111,58 52.559,58 L51.878,58 C51.330,58 51.131,57.630 51.438,57.171 L53.552,54 Z" fill="#786A65"></path>
                          <path d="M59.552,49 L59.552,51.990 C59.552,52.548 59.111,53 58.559,53 L57.878,53 C57.330,53 57.131,52.630 57.438,52.171 L59.552,49 Z" fill="#786A65"></path>
                          <path d="M73.552,49 L73.552,51.990 C73.552,52.548 73.111,53 72.559,53 L71.878,53 C71.330,53 71.131,52.630 71.438,52.171 L73.552,49 Z" fill="#786A65"></path>
                          <path d="M65.552,53 L65.552,55.990 C65.552,56.548 65.111,57 64.559,57 L63.878,57 C63.330,57 63.131,56.630 63.438,56.171 L65.552,53 Z" fill="#786A65"></path>
                          <path d="M75.552,62 L75.552,64.990 C75.552,65.548 75.111,66 74.559,66 L73.878,66 C73.330,66 73.131,65.630 73.438,65.171 L75.552,62 Z" fill="#786A65"></path>
                          <path d="M76.552,71 L76.552,73.990 C76.552,74.548 76.111,75 75.559,75 L74.878,75 C74.330,75 74.131,74.630 74.438,74.171 L76.552,71 Z" fill="#786A65"></path>
                          <path d="M71.552,57 L71.552,59.990 C71.552,60.548 71.111,61 70.559,61 L69.878,61 C69.330,61 69.131,60.630 69.438,60.171 L71.552,57 Z" fill="#786A65"></path>
                          <path d="M78.552,52 L78.552,54.990 C78.552,55.548 78.111,56 77.559,56 L76.878,56 C76.330,56 76.131,55.630 76.438,55.171 L78.552,52 Z" fill="#786A65"></path>
                          <path d="M47.552,65 L47.552,67.990 C47.552,68.548 47.111,69 46.559,69 L45.878,69 C45.330,69 45.131,68.630 45.438,68.171 L47.552,65 Z" fill="#786A65"></path>
                          <path d="M40.552,70 L40.552,72.990 C40.552,73.548 40.111,74 39.559,74 L38.878,74 C38.330,74 38.131,73.630 38.438,73.171 L40.552,70 Z" fill="#786A65"></path>
                      </g>
                      <g transform="translate(20, 10)">
                          <circle fill="#D8D8D8" cx="60" cy="60" r="60"></circle>
                          <g transform="translate(28, 27)" fill="#786A65">
                              <path d="M12.021,19.050 C17.168,19.050 21.354,14.861 21.354,9.717 C21.354,4.570 17.168,0.384 12.021,0.384 C6.874,0.384 2.688,4.570 2.688,9.717 C2.688,14.861 6.874,19.050 12.021,19.050"></path>
                              <path d="M18.661,21.674 L5.386,21.674 C2.426,21.674 0.021,23.986 0.026,26.928 L2.784,64.341 L10.688,64.341 L10.688,48.341 C10.688,47.605 11.285,47.008 12.021,47.008 C12.76,47.008 13.354,47.605 13.354,48.341 L13.354,64.341 L21.261,64.341 L24.021,26.832 C24.021,23.986 21.616,21.674 18.661,21.674"></path>
                          </g>
                          <polygon fill="#786A65" points="77.014 56.050 85.012 41.343 95.120 41.343 82.698 62.496 95.442 84 85.217 84 77.014 69.058 68.811 84 58.586 84 71.331 62.496 58.909 41.343 69.016 41.343"></polygon>
                      </g>
                      <g transform="translate(180, 10)">
                          <circle fill="#D8D8D8" cx="60" cy="60" r="60"></circle>
                          <g transform="translate(39, 11)" fill="#786A65">
                              <path d="M18.032,28.076 C25.752,28.076 32.032,21.792 32.032,14.076 C32.032,6.356 25.752,0.076 18.032,0.076 C10.312,0.076 4.032,6.356 4.032,14.076 C4.032,21.792 10.312,28.076 18.032,28.076"></path>
                              <path d="M27.992,32.012 L8.08,32.012 C3.64,32.012 0.032,35.48 0.04,39.892 L4.176,96.012 L16.032,96.012 L16.032,72.012 C16.032,70.908 16.928,70.012 18.032,70.012 C19.14,70.012 20.032,70.908 20.032,72.012 L20.032,96.012 L31.892,96.012 L36.032,39.748 C36.032,35.48 32.424,32.012 27.992,32.012"></path>
                          </g>
                          <rect fill="#786A65" x="77" y="51" width="4" height="56"></rect>
                          <polygon fill="#D8D8D8" points="59 85 75 82 75 84 59 87"></polygon>
                          <polygon fill="#D8D8D8" points="59 90 75 87 75 89 59 92"></polygon>
                          <polygon fill="#D8D8D8" points="59 95 75 92 75 94 59 97"></polygon>
                          <polygon fill="#D8D8D8" points="59 100 75 97 75 99 59 102"></polygon>
                          <polygon fill="#D8D8D8" points="59 105 75 102 75 104 59 107"></polygon>
                      </g>
                      <g transform="translate(340, 10)">
                          <circle fill="#D8D8D8" cx="60" cy="60" r="60"></circle>
                          <g transform="translate(39, 13)">
                              <path d="M40.58,75.124 L37.032,54.56 L37.032,36.444 C37.032,30.88 32.264,26 26.828,26 L14.58,26 C9.312,26 5.032,30.684 5.032,36.444 L5.032,54.36 L0.556,75.6 C0.428,76.2 0.58,76.8 0.96,77.28 C1.34,77.724 1.912,78 2.516,78 L9.032,78 L9.032,92 C9.032,93.124 9.928,94 11.032,94 L31.032,94 C32.14,94 33.032,93.124 33.032,92 L33.032,78 L38.7,78 L38.744,78 C39.86,78.04 40.78,77.124 40.78,76 C40.78,75.684 40.712,75.4 40.58,75.124" fill="#786A65"></path>
                              <path d="M20.7,24.56 C27.32,24.56 32.7,19.2 32.7,12.56 C32.7,5.96 27.32,0.56 20.7,0.56 C14.084,0.56 8.7,5.96 8.7,12.56 C8.7,19.2 14.084,24.56 20.7,24.56" fill="#786A65"></path>
                              <path d="M20.7,74.56 C27.32,74.56 32.7,69.2 32.7,62.56 C32.7,55.96 27.32,50.56 20.7,50.56 C14.084,50.56 8.7,55.96 8.7,62.56 C8.7,69.2 14.084,74.56 20.7,74.56" fill="#D8D8D8"></path>
                          </g>
                          <circle fill="#786A65" cx="65" cy="71" r="3"></circle>
                          <path d="M57.591,69.813 C58.066,69.536 58.692,69.682 59.001,70.155 L61.170,73.474 L65.085,74.855 C66.125,75.221 66.607,76.346 66.166,77.354 L63.855,82.646 C63.412,83.660 62.164,84.482 61.054,84.482 L61.207,84.482 C59.550,84.482 57.522,83.318 56.683,81.893 L55.600,80.054 L52.826,82.075 C52.376,82.403 51.731,82.320 51.384,81.889 L51.028,81.447 C50.682,81.017 50.726,80.365 51.135,79.984 L54.866,76.510 C55.272,76.133 55.923,76.133 56.332,76.520 L58.972,79.019 L59.793,79.019 L61.170,76.438 L58.689,74.679 L56.926,71.367 C56.664,70.875 56.837,70.252 57.311,69.976 L57.591,69.813 Z" fill="#786A65"></path>
                      </g>
                      <g transform="translate(500, 10)">
                          <circle fill="#D8D8D8" cx="60" cy="60" r="60"></circle>
                          <path d="M59.837,21.867 C52.749,21.867 49.180,24.867 49.180,24.867 L43,39.183 C43,39.183 46.948,32.286 59.802,32.308 C72.655,32.331 76.913,39.183 76.913,39.183 L70.760,24.867 C70.760,24.867 66.060,21.867 59.837,21.867 Z" stroke="#D8D8D8" fill="#786A65"></path>
                          <path d="M80.937,87.804 L74.945,98.132 C74.945,98.132 47.756,54.460 43,39.155 L49.154,24.867 C53.034,42.160 80.937,87.804 80.937,87.804 L80.937,87.804 Z" stroke="#D8D8D8" fill="#786A65"></path>
                          <path d="M39,87.804 L44.992,98.132 C44.992,98.132 72.181,54.460 76.937,39.155 L70.783,24.867 C66.903,42.160 39,87.804 39,87.804 Z" stroke="#D8D8D8" fill="#786A65"></path>
                      </g>
                      <text fontSize="13" fontWeight="bold" fill="#786A65">
                          <tspan x="62.943" y="158">{section0.blocks[2].dataset.consequences[0]}</tspan>
                      </text>
                      <text fontSize="13" fontWeight="bold" fill="#786A65">
                          <tspan x="197.073" y="158">{section0.blocks[2].dataset.consequences[1]}</tspan>
                      </text>
                      <text fontSize="13" fontWeight="bold" fill="#786A65">
                          <tspan x="399" y="158" textAnchor="middle">{section0.blocks[2].dataset.consequences[2][0]}</tspan>
                          <tspan x="399" y="173" textAnchor="middle">{section0.blocks[2].dataset.consequences[2][1]}</tspan>
                          <tspan x="399" y="188" textAnchor="middle">{section0.blocks[2].dataset.consequences[2][2]}</tspan>
                      </text>
                      <text fontSize="13" fontWeight="bold" fill="#786A65">
                          <tspan x="550" y="158" textAnchor="middle">{section0.blocks[2].dataset.consequences[3][0]}</tspan>
                          <tspan x="550" y="173" textAnchor="middle">{section0.blocks[2].dataset.consequences[3][1]}</tspan>
                          <tspan x="550" y="188" textAnchor="middle">{section0.blocks[2].dataset.consequences[3][2]}</tspan>
                          <tspan x="550" y="203" textAnchor="middle">{section0.blocks[2].dataset.consequences[3][3]}</tspan>
                      </text>
                      <text fontSize="13" fontWeight="bold" fill="#786A65">
                          <tspan x="720" y="158" textAnchor="middle">{section0.blocks[2].dataset.consequences[4][0]}</tspan>
                          <tspan x="720" y="173" textAnchor="middle">{section0.blocks[2].dataset.consequences[4][1]}</tspan>
                          <tspan x="720" y="188" textAnchor="middle">{section0.blocks[2].dataset.consequences[4][2]}</tspan>
                      </text>
                      <text fontSize="13" fontWeight="bold" fill="#786A65">
                          <tspan x="880" y="158" textAnchor="middle">{section0.blocks[2].dataset.consequences[5][0]}</tspan>
                          <tspan x="880" y="173" textAnchor="middle">{section0.blocks[2].dataset.consequences[5][1]}</tspan>
                          <tspan x="880" y="188" textAnchor="middle">{section0.blocks[2].dataset.consequences[5][2]}</tspan>
                      </text>
                      <polyline stroke="#F1F0EF" strokeWidth="4" points="834 266 834 246 484 246 484 266"></polyline>
                      <polyline stroke="#F1F0EF" strokeWidth="4" points="475 266 475 246 180 246 180 226"></polyline>
                      <polyline stroke="#F1F0EF" strokeWidth="4" points="940 226 940 246 844 246 844 266"></polyline>
                      <polyline stroke="#F1F0EF" strokeWidth="4" points="20 226 20 246 115 246 115 266"></polyline>
                      <polyline stroke="#F1F0EF" strokeWidth="4" points="140 226 140 246 125 246 125 266"></polyline>
                      <text fontSize="45" fontWeight="bold" fill="#EE3224">
                          <tspan x="67.935" y="488">{section0.blocks[2].dataset.summaries[0].number}</tspan>
                      </text>
                      <text fontSize="20" fontWeight="bold" fillOpacity="0.5" fill="#786A65">
                          <tspan x="49.521" y="534">{section0.blocks[2].dataset.summaries[0].text}</tspan>
                      </text>
                      <text fontSize="45" fontWeight="bold" fill="#0F9EE3">
                          <tspan x="434.483" y="488">{section0.blocks[2].dataset.summaries[1].number}</tspan>
                      </text>
                      <text fontSize="20" fontWeight="bold" fillOpacity="0.5" fill="#786A65">
                          <tspan x="367.788" y="534">{section0.blocks[2].dataset.summaries[1].text}</tspan>
                      </text>
                      <text fontSize="45" fontWeight="bold" textAnchor="middle" fill="#786A65">
                          <tspan x="860.330" y="488">{section0.blocks[2].dataset.summaries[2].number}</tspan>
                      </text>
                      <text fontSize="120" fontWeight="bold" fill="#F1F0EF">
                          <tspan x="810.146" y="407">?</tspan>
                      </text>
                      <text fontSize="20" fontWeight="bold" fillOpacity="0.5" fill="#786A65">
                          <tspan x="806.445" y="534">{section0.blocks[2].dataset.summaries[2].text}</tspan>
                      </text>
                      <rect fill="#0F9EE3" x="470" y="316" width="20" height="120"></rect>
                      <rect fill="#EE3224" x="110" y="426" width="20" height="10"></rect>
                  </g>
              </svg>

              { /* <p className="small">{section0.blocks[2].caption}</p> */ }
            </div>
          </div>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <hr />
              <DonutChart
                title={section0.blocks[3].title}
                caption={section0.blocks[3].caption}
                maxSize={480}
                dataset={section0.blocks[3].dataset}/>
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
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 pb2">
              <h4 className="title strong">{section1.blocks[1].title}</h4>
              <div className="clearfix">

                <div className="col xs-6">
                  <div className="col sm-6">
                    <img src={section1.blocks[1].items[0].img}/>
                  </div>
                  <div className="col sm-6">
                    <p className="display-1 strong color-primary m0">{section1.blocks[1].items[0].number}</p>
                    <p className="title strong m0">{section1.blocks[1].items[0].text[0]}</p>
                    <p className="small">{section1.blocks[1].items[0].text[1]}</p>
                  </div>
                </div>
                <div className="col xs-6">
                  <div className="col sm-6">
                    <img src={section1.blocks[1].items[1].img}/>
                  </div>
                  <div className="col sm-6">
                    <p className="display-1 strong color-primary m0">{section1.blocks[1].items[1].number}</p>
                    <p className="title strong m0">{section1.blocks[1].items[1].text[0]}</p>
                    <p className="small">{section1.blocks[1].items[1].text[1]}</p>
                  </div>
                </div>

              </div>
              <div className="clearfix">

                <div className="col xs-6">
                  <div className="col sm-6">
                    <img src={section1.blocks[1].items[2].img}/>
                  </div>
                  <div className="col sm-6">
                    <p className="display-1 strong color-primary m0">{section1.blocks[1].items[2].number}</p>
                    <p className="title strong m0">{section1.blocks[1].items[2].text[0]}</p>
                    <p className="small">{section1.blocks[1].items[2].text[1]}</p>
                  </div>
                </div>
                <div className="col xs-6">
                  <div className="col sm-6">
                    <img src={section1.blocks[1].items[3].img}/>
                  </div>
                  <div className="col sm-6">
                    <p className="display-1 strong color-primary m0">{section1.blocks[1].items[3].number}</p>
                    <p className="title strong m0">{section1.blocks[1].items[3].text[0]}</p>
                    <p className="small">{section1.blocks[1].items[3].text[1]}</p>
                  </div>
                </div>

              </div>
              { /* <p className="small">{section1.blocks[1].caption}</p> */ }
            </div>
          </div>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-4 md-offset-3 lg-4 lg-offset-3 sm-pr1">
              <ul>
                {section1.blocks[2].map((item, i) => {
                  return <li key={i}>{item}</li>
                })}
              </ul>
            </div>
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-4 md-offset-0 lg-3">
              <div className="bg-secondary p2">
                <p className="small strong color-primary caps mb0">Case Study</p>
                <h4 className="title strong mt0">{section1.blocks[3].title}</h4>
                  <svg width="140px" height="109px" viewBox="0 0 140 109" style={{margin:"0 auto",display:"block"}}>
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <polygon fill="#A8A09C" points="90.737 12.380 97.665 12.380 97.665 10 102.774 10 101.889 12.824 101.334 16.642 102.438 25.096 109.358 30.788 110.455 34.384 109.303 37.943 111.101 37.943 111.643 47.404 108.061 49.465 105.896 48.527 102.474 48.923 102.487 51.858 100.279 53.795 101.445 55.343 106.880 55.843 112.876 63.784 117.915 66.276 123.780 79.442 128.757 80.380 128.818 84.857 130.373 87.446 127.326 87.446 126.369 85.085 123.940 84.038 115.028 87.369 105.838 96.489 102.507 96.489 100.646 95.330 92.345 97.815 88.292 96.289 84.856 97.233 81.483 96.289 78.548 98.961 68.198 90.846 67.699 88.596 64.492 87.042 62.256 90.013 57.099 88.632 53.553 90.957 46.619 87.904 41.379 79.978 41.545 78.005 39.935 75.569 33.404 72.467 33.890 71.086 31.794 69.149 33.009 66.824 29.857 64.388 29.413 62.743 22.369 59.585 20.655 56.829 21.918 55.683 20.932 53.746 18.995 53.247 16.837 50.922 11.985 49.922 10 48.554 11.047 45.861 10.166 44.535 14.087 42.994 16.024 38.066 17.281 36.351 17.170 34.304 19.266 31.923 20.100 29.000 27.934 27.668 35.743 37.322 40.948 35.892 48.547 36.336 50.373 39.154 58.416 39.425 57.764 38.377 64.641 34.886 65.994 31.839 69.700 30.013 77.460 35.157 82.235 35.107 89.376 26.300 94.276 21.359 93.067 19.700 93.512 16.118"></polygon>
                    </g>
                  </svg>
                <p style={{fontSize:"16px"}}>{section1.blocks[3].content}</p>
              </div>
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
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 pt2">
              <p className="small strong color-primary caps">{chapter.title}</p>
              <h3 className="headline">{section3.title}</h3>
              <HeadlineDivider />
              <p>{section3.blocks[0]}</p>
              <p>{section3.blocks[1]}</p>
              <p>{section3.blocks[2]}</p>
              <p>{section3.blocks[3]}</p>
            </div>
          </div>

          <div className="clearfix" id="scroll-target-section4">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2">
              <p className="small strong color-primary caps">{chapter.title}</p>
              <h3 className="headline">{section4.title}</h3>
              <HeadlineDivider />
              <p>{section4.blocks[0]}</p>
            </div>
          </div>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-4 md-offset-3 lg-4 lg-offset-3 sm-pr1">
              <p>{section4.blocks[1]}</p>
              <p>{section4.blocks[2]}</p>
              <p>{section4.blocks[3]}</p>
              <p>{section4.blocks[4]}</p>
              <p>{section4.blocks[5]}</p>
            </div>
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-3 md-offset-0 lg-3">
              <h4 className="title strong mt0">{section4.blocks[6].title}</h4>
              <p style={{fontSize:"16px"}}>{section4.blocks[6].caption}</p>
              {section4.blocks[6].items.map((item, k) => {
                return (
                   <div className="clearfix pb1" key={k}>
                      <div className="col sm-4 center display-1">
                        <div className="bg-primary" style={{borderRadius:"50%",width:"60px",height:"60px",margin:"0 auto",lineHeight:"60px"}}>{k + 1}</div>
                      </div>
                      <div className="col sm-8">{item}</div>
                   </div>
                )
              })}
            </div>
          </div>

        </div>

        <NextChapter nextChapter={chapter.nextChapter} />
      </div>
    )
  }
}

Chapter6.contextTypes = {
  i18n: React.PropTypes.object.isRequired,
}

export default translate([ "report-strategic-aim-3" ], { wait: true })(Chapter6)
