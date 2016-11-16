
import React from "react"
import ReactDOM from "react-dom"

import { connect } from "react-redux"

import { translate } from "react-i18next"

import { Link } from "react-router"
import prefixLanguageToRoute from "../../utils/prefixLanguageToRoute"

import Reveal from "../Reveal"

import TextTruncate from "../../utils/TextTruncate"
import Icon from "../Icon"
import HeadlineDivider from "../HeadlineDivider"

class Quote extends React.Component {
  render() {
    return (
      <blockquote style={{marginTop:"72px",fontSize:"1.5rem"}}>
        <Icon name="quote" width="72px" height="72px" />
        {this.props.children}
      </blockquote>
    )
  }
}

class RatioCard extends React.Component {
  render() {

     var styling = {
      wrapper: {
        position:"relative",
        // height:0,
        // paddingBottom:this.props.ratio
      },
      content: {
        // position:"absolute",
        // width:"100%",
        // height:"100%",
        backgroundImage:`url(${this.props.backgroundImage})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
      }
    }

    return (
      <div className={"ratio-card " + ("ratio-card--" + this.props.ratio) + (this.props.wrapperClass || "")} style={styling.wrapper}>
        <div className={this.props.gradient ? "ratio-card__content with-gradient--dark " + (this.props.contentClass || "") : "ratio-card__content " + (this.props.contentClass || "")} style={styling.content}>
          <div className="vertical-center">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: 0,
      parsedData: {},
      showLoader: false
    }
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.context.language !== nextContext.language
  }
  render() {
    const { t } = this.props
    return (
      <div>
        <div className="center" style={{boxShadow:"inset 0 100px 100px #fff,inset 0 -100px 100px #fff",backgroundImage: "url(/img/ifrc-progress-report-2015-bg.jpg)",overflow:"hidden"}}>
          <h1 style={{paddingTop:"100px", paddingBottom:"60px"}} className="bg-gradient--white m0">
            { /* <div className="display-2 caps"><strong>Everyone <span className="color-primary">Counts</span></strong></div> */ }
            <div className="display-3">
              <strong className="caps">
                { t("common:home.title.0") } <span className="color-primary"> { t("common:home.title.1") }</span>
              </strong>
            </div>
            <div className="display-5 pb2 color-primary">{ t("common:home.title.2") }</div>
            <div className="display-1">{t("common:reportType")}</div>
            <div className="pt3">
              <Icon name="down" width="34px" height="34px"/>
            </div>
          </h1>
        </div>

        <div className="clearfix center px1 sm-px0">
          <div className="col sm-6 sm-offset-3 pt2 pb3">
            { /* <Reveal offset={10}> */ }
              <p className="lead">{t("common:home.intro.0")}</p>
            { /* </Reveal> */ }
            <Reveal offset={600}>
              <p className="body-text">{t("common:home.intro.1")}</p>
            </Reveal>
            <Reveal offset={600}>
              <div className="col xs-6 py2">
                <p><strong>{t("common:home.signatures.0.name")}</strong><br />{t("common:home.signatures.0.title")}</p>
                <img src="/img/signature1.png" alt=""/>
              </div>
              <div className="col xs-6 py2">
                <p><strong>{t("common:home.signatures.1.name")}</strong><br />{t("common:home.signatures.1.title")}</p>
                <img src="/img/signature2.png" alt=""/>
              </div>

            </Reveal>
          </div>
        </div>


        { /* Section 1 */ }
        <Reveal offset={500}>
          <div className="bg-secondary py4" style={{paddingBottom:"120px"}}>

            <div className="clearfix px1 sm-px0">
              <div className="col sm-3 sm-offset-2">
                <p className="small strong caps color-primary m0">{t("common:home.sections.0.id")}</p>
                <h2 className="display-1 mt0">{t("common:home.sections.0.title")}</h2>
                <HeadlineDivider />
                <br />
                <br />
                <br />
              </div>
            </div>



          { /* Section 1 */ }
            <div className="clearfix px1 sm-px0">
              <div className="col sm-5 sm-offset-1">
                <RatioCard ratio="60" contentClass="bg-dark" gradient={true} backgroundImage="/img/chapters/chapter-1.jpg">
                  <p className="subhead color-primary m0 px2 pt2">{t("common:home.sections.0.title")}</p>
                  <h3 className="display-1 m0 px2">
                    <Link to={prefixLanguageToRoute(this.context.language,"/who-we-are")}>
                      <span>{t("common:home.sections.0.chapters.0.title")} </span>
                      <Icon name="goto" width="28px" height="28px"/>
                    </Link>
                  </h3>
                </RatioCard>
              </div>
              <div className="col sm-5 md-3">
                <RatioCard ratio="100" contentClass="px1 bg-white center">
                  <Icon name="usergroup" width="56px" height="56px" />
                  <p className="display-3 color-primary">{t("common:home.sections.0.statistic.number")}</p>
                  <p className="caps">{t("common:home.sections.0.statistic.text")}</p>
                </RatioCard>
              </div>
            </div>

            <div className="clearfix px1 sm-px0">
              <div className="col sm-5 sm-offset-1 md-3 md-offset-3">
                <RatioCard ratio="100" contentClass="px1 bg-white center">
                  <Icon name="info" width="56px" height="56px" />
                  <p className="px2">{t("common:home.sections.0.fact")}</p>
                  <p className="caps"></p>
                </RatioCard>
              </div>
              <div className="col sm-5">
                <RatioCard ratio="60" contentClass="bg-dark" gradient={true} backgroundImage="/img/chapters/chapter-2.jpg">
                  <p className="subhead color-primary m0 px2 pt2">{t("common:home.sections.0.title")}</p>
                  <h3 className="display-1 m0 px2">
                    <Link to={prefixLanguageToRoute(this.context.language,"/what-we-do")}>
                      <span>{t("common:home.sections.0.chapters.1.title")} </span>
                      <Icon name="goto" width="28px" height="28px"/>
                    </Link>
                  </h3>
                </RatioCard>
              </div>
            </div>

            <div className="clearfix px1 sm-px0">
              <div className="col sm-5 sm-offset-1">
                <RatioCard ratio="60" contentClass="bg-dark" gradient={true} backgroundImage="/img/chapters/chapter-3.jpg">
                  <p className="subhead color-primary m0 px2 pt2">{t("common:home.sections.0.title")}</p>
                  <h3 className="display-1 m0 px2">
                    <Link to={prefixLanguageToRoute(this.context.language,"/living-our-fundamental-principles")}>
                      <span>{t("common:home.sections.0.chapters.2.title")} </span>
                      <Icon name="goto" width="28px" height="28px"/>
                    </Link>
                  </h3>
                </RatioCard>
              </div>
              <div className="col sm-10 sm-offset-1 md-5 md-offset-0 px2 py2">
                <Quote>{t("common:home.sections.0.quote")}</Quote>
              </div>
            </div>

          </div>
        </Reveal>





        { /* Section 2 */ }
        <Reveal offset={500}>
          <div className="bg-white py4" style={{paddingBottom:"120px"}}>

            <div className="clearfix px1 sm-px0">
              <div className="col sm-3 sm-offset-2">
                <p className="small strong caps color-primary m0">{t("common:home.sections.1.id")}</p>
                <h2 className="display-1 mt0">{t("common:home.sections.1.title")}</h2>
                <HeadlineDivider />
                <br />
                <br />
                <br />
              </div>
            </div>

            <div className="clearfix px1 sm-px0">
              <div className="col sm-5 sm-offset-1">
                <RatioCard ratio="60" contentClass="bg-primary" backgroundImage={"/img/strategic-aim-1.jpg"}>
                  <p className="display-1 m0 px2 pt2">
                    <Link to={prefixLanguageToRoute(this.context.language,"/strategic-aim-1")}>
                      <span>{t("common:home.sections.1.chapters.0.pretitle")} </span>
                      <Icon name="goto" width="28px" height="28px"/>
                    </Link>
                  </p>
                  <h3 className="subhead m0 px2" style={{maxWidth:"360px"}}>{t("common:home.sections.1.chapters.0.title")}</h3>
                </RatioCard>
              </div>
              <div className="col sm-5 md-3">
                <RatioCard ratio="100" contentClass="px1 bg-secondary center">
                  <Icon name="tornado" width="56px" height="56px"/>
                  <p className="display-3 color-primary">{t("common:home.sections.1.statistic.number")}</p>
                  <p className="caps">{t("common:home.sections.1.statistic.text")}</p>
                </RatioCard>
              </div>
            </div>

            <div className="clearfix px1 sm-px0">
              <div className="col sm-5 sm-offset-1 md-3 md-offset-3">
                <RatioCard ratio="100" contentClass="px1 bg-secondary center">
                  <Icon name="info" width="56px" height="56px" />
                  <p className="px2">{t("common:home.sections.1.fact")}</p>
                  <p className="caps"></p>
                </RatioCard>
              </div>
              <div className="col sm-5">
                <RatioCard ratio="60" contentClass="bg-primary" backgroundImage={"/img/strategic-aim-2.jpg"}>
                  <p className="display-1 m0 px2 pt2">
                    <Link to={prefixLanguageToRoute(this.context.language,"/strategic-aim-2")}>
                      <span>{t("common:home.sections.1.chapters.1.pretitle")} </span>
                      <Icon name="goto" width="28px" height="28px"/>
                    </Link>
                  </p>
                  <h3 className="subhead m0 px2" style={{maxWidth:"360px"}}>{t("common:home.sections.1.chapters.1.title")}</h3>
                </RatioCard>
              </div>
            </div>

            <div className="clearfix px1 sm-px0">
              <div className="col sm-5 sm-offset-1">
                <RatioCard ratio="60" contentClass="bg-primary" backgroundImage={"/img/strategic-aim-3.jpg"}>
                  <p className="display-1 m0 px2 pt2">
                    <Link to={prefixLanguageToRoute(this.context.language,"/strategic-aim-3")}>
                      <span>{t("common:home.sections.1.chapters.2.pretitle")} </span>
                      <Icon name="goto" width="28px" height="28px"/>
                    </Link>
                  </p>
                  <h3 className="subhead m0 px2" style={{maxWidth:"360px"}}>{t("common:home.sections.1.chapters.2.title")}</h3>
                </RatioCard>
              </div>
              <div className="col sm-10 sm-offset-1 md-5 md-offset-0 px2 py2">
                <Quote>{t("common:home.sections.1.quote")}</Quote>
              </div>
            </div>

          </div>
        </Reveal>





        { /* Section 3 */ }
        <Reveal offset={500}>
          <div className="bg-secondary py4" style={{paddingBottom:"120px"}}>

            <div className="clearfix px1 sm-px0">
              <div className="col sm-3 sm-offset-2">
                <p className="small strong caps color-primary m0">{t("common:home.sections.2.id")}</p>
                <h2 className="display-1 mt0">{t("common:home.sections.2.title")}</h2>
                <HeadlineDivider />
                <br />
                <br />
                <br />
              </div>
            </div>

            <div className="clearfix px1 sm-px0">
              <div className="col sm-5 sm-offset-1">
                <RatioCard ratio="60" contentClass="bg-dark" gradient={true} backgroundImage="/img/chapters/chapter-7.jpg">
                  <p className="display-1 color-primary m0 px2 pt2">
                    <Link to={prefixLanguageToRoute(this.context.language,"/enabling-action-1")}>
                      <span>{t("common:home.sections.2.chapters.0.pretitle")} </span>
                      <Icon name="goto" width="28px" height="28px"/>
                    </Link>
                  </p>
                  <h3 className="subhead m0 px2" style={{maxWidth:"360px"}}>{t("common:home.sections.2.chapters.0.title")}</h3>
                </RatioCard>
              </div>
              <div className="col sm-5 md-3">
                <RatioCard ratio="100" contentClass="px1 bg-white center">
                  <Icon name="flag" width="56px" height="56px"/>
                  <p className="display-3 color-primary">{t("common:home.sections.2.statistic.number")}</p>
                  <p className="caps">{t("common:home.sections.2.statistic.text")}</p>
                </RatioCard>
              </div>
            </div>

            <div className="clearfix px1 sm-px0">
              <div className="col sm-5 sm-offset-1 md-3 md-offset-3">
                <RatioCard ratio="100" contentClass="px1 bg-white center">
                  <Icon name="info" width="56px" height="56px" />
                  <p className="px2">{t("common:home.sections.2.fact")}</p>
                  <p className="caps"></p>
                </RatioCard>
              </div>
              <div className="col sm-5">
                <RatioCard ratio="60" contentClass="bg-dark" gradient={true} backgroundImage="/img/chapters/chapter-8.jpg">
                  <p className="display-1 color-primary m0 px2 pt2">
                    <Link to={prefixLanguageToRoute(this.context.language,"/enabling-action-2")}>
                      <span>{t("common:home.sections.2.chapters.1.pretitle")} </span>
                      <Icon name="goto" width="28px" height="28px"/>
                    </Link>
                  </p>
                  <h3 className="subhead m0 px2" style={{maxWidth:"360px"}}>{t("common:home.sections.2.chapters.1.title")}</h3>
                </RatioCard>
              </div>
            </div>

            <div className="clearfix px1 sm-px0">
              <div className="col sm-5 sm-offset-1">
                <RatioCard ratio="60" contentClass="bg-dark" gradient={true} backgroundImage="/img/chapters/chapter-9.jpg">
                  <p className="display-1 color-primary m0 px2 pt2">
                    <Link to={prefixLanguageToRoute(this.context.language,"/enabling-action-3")}>
                      <span>{t("common:home.sections.2.chapters.2.pretitle")} </span>
                      <Icon name="goto" width="28px" height="28px"/>
                    </Link>
                  </p>
                  <h3 className="subhead m0 px2" style={{maxWidth:"360px"}}>{t("common:home.sections.2.chapters.2.title")}</h3>
                </RatioCard>
              </div>
              <div className="col sm-10 sm-offset-1 md-5 md-offset-0 px2 py2">
                <Quote>{t("common:home.sections.2.quote")}</Quote>
              </div>
            </div>

          </div>
        </Reveal>




        { /* EXPLORE THE DATA */ }
        <div style={{backgroundImage:"url(/img/dataViewPreview.jpg)",backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
          <div className="clearfix bg-data pb2" style={{background:"rgba(0,0,0,0.4)"}}>
            <div className="clearfix pt3 px1 sm-px0">
              <div className="col sm-3 sm-offset-2">
                <p className="small strong caps color-primary m0">{t("common:home.sections.3.chapters.0.preTitle")}</p>
                <h2 className="display-1 mt0">{t("common:home.sections.3.chapters.0.title")}</h2>
                <HeadlineDivider />
                <br />
                <br />
                <br />
              </div>
            </div>

            <div className="clearfix pb3 px1 sm-px0">
              <div className="col sm-6 sm-offset-2 pr2">
                <p className="lead">{t("common:home.sections.3.chapters.0.body.0")} <Icon name="goto" width="24px" height="24px"/></p>
                <p className="lead">{t("common:home.sections.3.chapters.0.body.1")} <Icon name="goto" width="24px" height="24px"/></p>
                <br />
                <br />
                <Link to={prefixLanguageToRoute(this.context.language,"/data")} className="btn bg-primary p1">{t("common:home.sections.3.chapters.0.button")} <Icon name="goto" width="24px" height="24px"/></Link>
              </div>
            </div>
          </div>
        </div>

      </div>


    )
  }
}

Home.contextTypes = {
  language: React.PropTypes.string
}

function mapStateToProps(state) {
  return {
    language: state.appReducer.language,
    content: {
      en: state.appReducer.en,
      fr: state.appReducer.fr,
      es: state.appReducer.es,
      ar: state.appReducer.ar
    }
  }
}

// Home.defaultProps = {}

module.exports = translate()(connect(mapStateToProps)(Home))
