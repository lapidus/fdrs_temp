import React from "react"
import { translate } from "react-i18next"
import { Link } from "react-router"

import prefixLanguageToRoute from "../../utils/prefixLanguageToRoute"
import Reveal from "../../components/Reveal"
import Icon from "../../components/Icon"
import HeadlineDivider from "../../components/HeadlineDivider"

class Quote extends React.Component {
  render() {
    return (
      <blockquote style={{marginTop:"72px",fontSize:"1.5rem"}}>
        <Icon name="quote" width="72px" height="72px" /><br />
        {this.props.children}
      </blockquote>
    )
  }
}

class RatioCard extends React.Component {
  render() {
     const styling = {
      wrapper: {
        position:"relative",
      },
      content: {
        backgroundImage:`url(${this.props.backgroundImage})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
      }
    }
    const ratio = this.props.ratio.split(':');
    return (
      <div className={`ratio-${ratio[0]}-${ratio[1]}`} style={styling.wrapper}>
        <div className={`ratio-content ${this.props.contentClass || ''}`} style={styling.content}>
          <div className="relative t50 y-center-self">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

class Home extends React.Component {
  render() {
    const { t } = this.props
    const { language } = this.context.i18n
    return (
      <div>
        <div className="text-center overflow-hidden" style={{ boxShadow:"inset 0 100px 100px #fff,inset 0 -100px 100px #fff",backgroundImage: "url(/img/ifrc-progress-report-2015-bg.jpg)", backgroundSize: 'cover'}}>
          <h1 style={{paddingTop:"96px"}} className="bg-gradient--white m0 pb4">
            <div className="display-3 light">{ t("report-common:home.title.0") } <span className="color-primary"> { t("report-common:home.title.1") }</span></div>
            <div className="display-5 color-primary lh-1">{ t("report-common:home.title.2") }</div>
            <div className="headline">{t("report-common:reportType")}</div>
            <div className="inline-block pt2" style={{width: '48px'}}>
              <Icon name="down" width="34px" height="34px"/>
            </div>
          </h1>
        </div>

        <div className="clearfix text-center px1 sm-px0">
          <div className="col sm-6 sm-offset-3 pt2 pb3">
            <p className="lead">{t("report-common:home.intro.0")}</p>
            <Reveal offset={600}>
              <p className="body-text">{t("report-common:home.intro.1")}</p>
            </Reveal>
            <Reveal offset={600}>
              <div className="col xs-6 py2">
                <p><strong>{t("report-common:home.signatures.0.name")}</strong><br />{t("report-common:home.signatures.0.title")}</p>
                <img src="/img/signature1.png" alt=""/>
              </div>
              <div className="col xs-6 py2">
                <p><strong>{t("report-common:home.signatures.1.name")}</strong><br />{t("report-common:home.signatures.1.title")}</p>
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
                <p className="small strong caps color-primary m0">{t("report-common:home.sections.0.id")}</p>
                <h2 className="display-1 mt0 light">{t("report-common:home.sections.0.title")}</h2>
                <HeadlineDivider />
                <br />
                <br />
                <br />
              </div>
            </div>



          { /* Section 1 */ }
            <div className="clearfix px1 sm-px0">
              <div className="col sm-5 sm-offset-1">
                <RatioCard ratio="10:6" contentClass="bg-dark" gradient={true} backgroundImage="/img/chapters/chapter-1.jpg">
                  <p className="subhead color-primary m0 px2 pt2">{t("report-common:home.sections.0.title")}</p>
                  <h3 className="display-1 m0 px2 light">
                    <Link to={prefixLanguageToRoute(language,"/report/who-we-are")}>
                      <span>{t("report-common:chapters.chapter1.title")} </span>
                      {/* <Icon name="goto" width="28px" height="28px"/> */}
                    </Link>
                  </h3>
                </RatioCard>
              </div>
              <div className="col sm-5 md-3">
                <RatioCard ratio="1:1" contentClass="px1 bg-white text-center">
                  <Icon name="usergroup" width="56px" height="56px" />
                  <p className="display-3 color-primary m0">{t("report-common:home.sections.0.statistic.number")}</p>
                  <p className="caps">{t("report-common:home.sections.0.statistic.text")}</p>
                </RatioCard>
              </div>
            </div>

            <div className="clearfix px1 sm-px0">
              <div className="col sm-5 sm-offset-1 md-3 md-offset-3">
                <RatioCard ratio="1:1" contentClass="px1 bg-white center">
                  {/* <Icon name="info" width="56px" height="56px" /> */}
                  <p className="px2">{t("report-common:home.sections.0.fact")}</p>
                  <p className="caps"></p>
                </RatioCard>
              </div>
              <div className="col sm-5">
                <RatioCard ratio="10:6" contentClass="bg-dark" gradient={true} backgroundImage="/img/chapters/chapter-2.jpg">
                  <p className="subhead color-primary m0 px2 pt2">{t("report-common:home.sections.0.title")}</p>
                  <h3 className="display-1 m0 px2">
                    <Link to={prefixLanguageToRoute(language,"/report/what-we-do")}>
                      <span>{t("report-common:chapters.chapter2.title")} </span>
                      {/* <Icon name="goto" width="28px" height="28px"/> */}
                    </Link>
                  </h3>
                </RatioCard>
              </div>
            </div>

            <div className="clearfix px1 sm-px0">
              <div className="col sm-5 sm-offset-1">
                <RatioCard ratio="10:6" contentClass="bg-dark" gradient={true} backgroundImage="/img/chapters/chapter-3.jpg">
                  <p className="subhead color-primary m0 px2 pt2">{t("report-common:home.sections.0.title")}</p>
                  <h3 className="display-1 m0 px2">
                    <Link to={prefixLanguageToRoute(language,"/report/living-our-fundamental-principles")}>
                      <span>{t("report-common:chapters.chapter3.title")} </span>
                      {/* <Icon name="goto" width="28px" height="28px"/> */}
                    </Link>
                  </h3>
                </RatioCard>
              </div>
              <div className="col sm-10 sm-offset-1 md-5 md-offset-0 px2 py2">
                <Quote>{t("report-common:home.sections.0.quote")}</Quote>
              </div>
            </div>

          </div>
        </Reveal>





        { /* Section 2 */ }
        <Reveal offset={500}>
          <div className="bg-white py4" style={{paddingBottom:"120px"}}>

            <div className="clearfix px1 sm-px0">
              <div className="col sm-3 sm-offset-2">
                <p className="small strong caps color-primary m0">{t("report-common:home.sections.1.id")}</p>
                <h2 className="display-1 mt0">{t("report-common:home.sections.1.title")}</h2>
                <HeadlineDivider />
                <br />
                <br />
                <br />
              </div>
            </div>

            <div className="clearfix px1 sm-px0">
              <div className="col sm-5 sm-offset-1">
                <RatioCard ratio="10:6" contentClass="bg-primary" backgroundImage={"/img/strategic-aim-1.jpg"}>
                  <p className="display-1 m0 px2 pt2">
                    <Link to={prefixLanguageToRoute(language,"/report/strategic-aim-1")}>
                      <span>{t("report-common:chapters.chapter4.pretitle")} </span>
                      {/* <Icon name="goto" width="28px" height="28px"/> */}
                    </Link>
                  </p>
                  <h3 className="subhead m0 px2" style={{maxWidth:"360px"}}>{t("report-common:chapters.chapter4.title")}</h3>
                </RatioCard>
              </div>
              <div className="col sm-5 md-3">
                <RatioCard ratio="1:1" contentClass="px1 bg-secondary center">
                  {/* <Icon name="tornado" width="56px" height="56px"/> */}
                  <p className="display-3 color-primary">{t("report-common:home.sections.1.statistic.number")}</p>
                  <p className="caps">{t("report-common:home.sections.1.statistic.text")}</p>
                </RatioCard>
              </div>
            </div>

            <div className="clearfix px1 sm-px0">
              <div className="col sm-5 sm-offset-1 md-3 md-offset-3">
                <RatioCard ratio="1:1" contentClass="px1 bg-secondary center">
                  {/* <Icon name="info" width="56px" height="56px" /> */}
                  <p className="px2">{t("report-common:home.sections.1.fact")}</p>
                  <p className="caps"></p>
                </RatioCard>
              </div>
              <div className="col sm-5">
                <RatioCard ratio="10:6" contentClass="bg-primary" backgroundImage={"/img/strategic-aim-2.jpg"}>
                  <p className="display-1 m0 px2 pt2">
                    <Link to={prefixLanguageToRoute(language,"/report/strategic-aim-2")}>
                      <span>{t("report-common:chapters.chapter5.pretitle")} </span>
                      {/* <Icon name="goto" width="28px" height="28px"/> */}
                    </Link>
                  </p>
                  <h3 className="subhead m0 px2" style={{maxWidth:"360px"}}>{t("report-common:chapters.chapter5.title")}</h3>
                </RatioCard>
              </div>
            </div>

            <div className="clearfix px1 sm-px0">
              <div className="col sm-5 sm-offset-1">
                <RatioCard ratio="10:6" contentClass="bg-primary" backgroundImage={"/img/strategic-aim-3.jpg"}>
                  <p className="display-1 m0 px2 pt2">
                    <Link to={prefixLanguageToRoute(language,"/report/strategic-aim-3")}>
                      <span>{t("report-common:chapters.chapter6.pretitle")} </span>
                      {/* <Icon name="goto" width="28px" height="28px"/> */}
                    </Link>
                  </p>
                  <h3 className="subhead m0 px2" style={{maxWidth:"360px"}}>{t("report-common:chapters.chapter6.title")}</h3>
                </RatioCard>
              </div>
              <div className="col sm-10 sm-offset-1 md-5 md-offset-0 px2 py2">
                <Quote>{t("report-common:home.sections.1.quote")}</Quote>
              </div>
            </div>

          </div>
        </Reveal>





        { /* Section 3 */ }
        <Reveal offset={500}>
          <div className="bg-secondary py4" style={{paddingBottom:"120px"}}>

            <div className="clearfix px1 sm-px0">
              <div className="col sm-3 sm-offset-2">
                <p className="small strong caps color-primary m0">{t("report-common:home.sections.2.id")}</p>
                <h2 className="display-1 mt0">{t("report-common:home.sections.2.title")}</h2>
                <HeadlineDivider />
                <br />
                <br />
                <br />
              </div>
            </div>

            <div className="clearfix px1 sm-px0">
              <div className="col sm-5 sm-offset-1">
                <RatioCard ratio="10:6" contentClass="bg-dark" gradient={true} backgroundImage="/img/chapters/chapter-7.jpg">
                  <p className="display-1 color-primary m0 px2 pt2">
                    <Link to={prefixLanguageToRoute(language,"/report/enabling-action-1")}>
                      <span>{t("report-common:chapters.chapter7.pretitle")} </span>
                      {/* <Icon name="goto" width="28px" height="28px"/> */}
                    </Link>
                  </p>
                  <h3 className="subhead m0 px2" style={{maxWidth:"360px"}}>{t("report-common:chapters.chapter7.title")}</h3>
                </RatioCard>
              </div>
              <div className="col sm-5 md-3">
                <RatioCard ratio="1:1" contentClass="px1 bg-white center">
                  {/* <Icon name="flag" width="56px" height="56px"/> */}
                  <p className="display-3 color-primary">{t("report-common:home.sections.2.statistic.number")}</p>
                  <p className="caps">{t("report-common:home.sections.2.statistic.text")}</p>
                </RatioCard>
              </div>
            </div>

            <div className="clearfix px1 sm-px0">
              <div className="col sm-5 sm-offset-1 md-3 md-offset-3">
                <RatioCard ratio="1:1" contentClass="px1 bg-white center">
                  <Icon name="info" width="56px" height="56px" />
                  <p className="px2">{t("report-common:home.sections.2.fact")}</p>
                  <p className="caps"></p>
                </RatioCard>
              </div>
              <div className="col sm-5">
                <RatioCard ratio="10:6" contentClass="bg-dark" gradient={true} backgroundImage="/img/chapters/chapter-8.jpg">
                  <p className="display-1 color-primary m0 px2 pt2">
                    <Link to={prefixLanguageToRoute(language,"/report/enabling-action-2")}>
                      <span>{t("report-common:chapters.chapter8.pretitle")} </span>
                      <Icon name="goto" width="28px" height="28px"/>
                    </Link>
                  </p>
                  <h3 className="subhead m0 px2" style={{maxWidth:"360px"}}>{t("report-common:chapters.chapter8.title")}</h3>
                </RatioCard>
              </div>
            </div>

            <div className="clearfix px1 sm-px0">
              <div className="col sm-5 sm-offset-1">
                <RatioCard ratio="10:6" contentClass="bg-dark" gradient={true} backgroundImage="/img/chapters/chapter-9.jpg">
                  <p className="display-1 color-primary m0 px2 pt2">
                    <Link to={prefixLanguageToRoute(language,"/report/enabling-action-3")}>
                      <span>{t("report-common:chapters.chapter9.pretitle")} </span>
                      <Icon name="goto" width="28px" height="28px"/>
                    </Link>
                  </p>
                  <h3 className="subhead m0 px2" style={{maxWidth:"360px"}}>{t("report-common:chapters.chapter9.title")}</h3>
                </RatioCard>
              </div>
              <div className="col sm-10 sm-offset-1 md-5 md-offset-0 px2 py2">
                <Quote>{t("report-common:home.sections.2.quote")}</Quote>
              </div>
            </div>

          </div>
        </Reveal>




        { /* EXPLORE THE DATA */ }
        <div style={{backgroundImage:"url(/img/dataViewPreview.jpg)",backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
          <div className="clearfix bg-data pb2" style={{background:"rgba(0,0,0,0.4)"}}>
            <div className="clearfix pt3 px1 sm-px0">
              <div className="col sm-3 sm-offset-2">
                <p className="small strong caps color-primary m0">{t("report-common:chapters.data.preTitle")}</p>
                <h2 className="display-1 mt0">{t("report-common:chapters.data.title")}</h2>
                <HeadlineDivider />
                <br />
                <br />
                <br />
              </div>
            </div>

            <div className="clearfix pb3 px1 sm-px0">
              <div className="col sm-6 sm-offset-2 pr2">
                <p className="lead">{t("report-common:chapters.data.body.0")} <Icon name="goto" width="24px" height="24px"/></p>
                <p className="lead">{t("report-common:chapters.data.body.1")} <Icon name="goto" width="24px" height="24px"/></p>
                <br />
                <br />
                <Link to={prefixLanguageToRoute(language,"/data")} className="btn bg-primary p1">{t("report-common:chapters.data.button")} <Icon name="goto" width="24px" height="24px"/></Link>
              </div>
            </div>
          </div>
        </div>

      </div>


    )
  }
}

Home.propTypes = {
  t: React.PropTypes.func.isRequired,
}

Home.contextTypes = {
  i18n: React.PropTypes.object,
}

export default translate()(Home)
