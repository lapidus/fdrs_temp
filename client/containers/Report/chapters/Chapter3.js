import React from "react"
import { connect } from "react-redux"

import { fetchChapter } from "../../../actions/chapterActions"
import NextChapter from "../../../utils/NextChapter"
import BreadCrumbs from "../../../components/Breadcrumbs"

var principleReference = [
  "humanity",
  "impartiality",
  "neutrality",
  "independence",
  "voluntary-service",
  "unity",
  "universality"
]

class Chapter3 extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log("Mounted Living our fundamental principles")
  }
  shouldComponentUpdate(newProps, newState, newContext) {
    var newDataAvailable = newProps.content[newContext.language].chapters["living-our-fundamental-principles"] !== undefined
    var sameData = this.props.content[this.context.language].chapters["living-our-fundamental-principles"] === newProps.content[newContext.language].chapters["who-we-are"]
    return newDataAvailable && !sameData
  }
  render() {

    var chapter = this.props.content[this.context.language].chapters["living-our-fundamental-principles"]

    var section1 = chapter.sections[0]

    return (
      <div>
        <div className="clearfix bg-primary-dark">
          <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py1">
            <BreadCrumbs chapter={chapter} language={this.context.language}/>
          </div>
        </div>

        <div className="clearfix bg-primary pt1">
          <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3">
            <h2 className="display-2">{chapter.title}</h2>
          </div>
        </div>

        <div className="clearfix bg-dark chapter-banner" style={{backgroundImage:"url(/img/chapters/chapter-3.jpg)",backgroundSize: "cover",backgroundPosition:"center 50%",backgroundRepeat: "no-repeat"}}>
          <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3">
            <p className="lead">{chapter.intro}</p>
            <hr />
          </div>
        </div>

        <div className="clearfix bg-secondary body-text py2">
          <div className="col sm-10 sm-offset-1 center">
            {chapter.general[0].map((principle, j) => {
              return (
                <span key={j} className="px2 pt1 pb2" style={{display:"inline-block"}}>
                  <img src={`/img/chapters/3/${principleReference[j]}.svg`} /><br />
                  {principle}
                </span>
              )
            })}
            <p>{chapter.general[1]}</p>
          </div>
        </div>


        <div className="clearfix body-text" style={{position:"relative"}}>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 pt2">
              <p>{section1.blocks[0]}</p>
            </div>
          </div>

          <div className="clearfix">
            <div className="col px1 sm-px0 sm-5 sm-offset-1 md-5 md-offset-1 lg-4 lg-offset-2 pb2">
              <div className="pr2">
                <div>
                  <svg width="100%" height="480px" viewBox="0 0 480 480" version="1.1">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g>
                        <circle cx="240" cy="240" r="210" fill="none" stroke="#F1F0EF" strokeWidth="4"></circle>
                        <circle cx="240" cy="240" r="150" fill="none" stroke="#F1F0EF" strokeWidth="4"></circle>
                        <g transform="translate(0, 62)" fontSize="20" fontFamily="Roboto-Bold, Roboto" fill="#786A65" fontWeight="700">
                          {section1.blocks[1].items.map((item, i) => {
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
                          {section1.blocks[1].name.split("\n").map((item, i) => <tspan textAnchor="middle" className="caps" key={i} x="240" y={237 + (i * 15)}>{item}</tspan>)}
                        </text>
                      </g>
                    </g>
                  </svg>
                </div>
                <p>{section1.blocks[3]}</p>
                <button className="btn bg-primary p1">{section1.blocks[5]}</button>
              </div>
            </div>
            <div className="col px1 sm-px0 sm-5 md-5 lg-4">
              <p>{section1.blocks[2]}</p>
              <div>
                <svg width="100%" height="480px" viewBox="0 0 480 480" version="1.1">
                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g>
                      <circle cx="240" cy="240" r="210" fill="none" stroke="#F1F0EF" strokeWidth="4"></circle>
                      <circle cx="240" cy="240" r="150" fill="none" stroke="#F1F0EF" strokeWidth="4"></circle>
                      <g transform="translate(0, 62)" fontSize="20" fontFamily="Roboto-Bold, Roboto" fill="#786A65" fontWeight="700">
                        {section1.blocks[4].items.map((item, i) => {
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
                        {section1.blocks[4].name.split("\n").map((item, i) => <tspan textAnchor="middle" className="caps" key={i} x="240" y={237 + (i * 15)}>{item}</tspan>)}
                      </text>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>

        </div>

        <NextChapter nextChapter={chapter.nextChapter} />

      </div>
    )
  }
}

Chapter3.needs = [ fetchChapter ]

Chapter3.contextTypes = {
  language: React.PropTypes.string
}

function mapStateToProps(state) {
  return {
    // language: state.appReducer.language,
    content: {
      en: state.chapterReducer.en,
      fr: state.chapterReducer.fr,
      es: state.chapterReducer.es,
      ar: state.chapterReducer.ar
    }
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     changeDataset: (id) => {
//       dispatch(changeDataset(id))
//     }
//   }
// }

export default connect(mapStateToProps)(Chapter3)