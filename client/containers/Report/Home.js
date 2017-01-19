import React from "react"
import { translate } from "react-i18next"
import LanguageLink from "../../components/LanguageLink"
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
            <div className="text-lg sm-text-xl md-text-xxl light">{ t("report-common:home.title.0") } <span className="color-primary"> { t("report-common:home.title.1") }</span></div>
            <div className="heading-xl sm-heading-xxl md-heading-xxxl color-primary lh-1">{ t("report-common:home.title.2") }</div>
            <div className="text-base sm-text-md md-text-lg">{t("report-common:reportType")}</div>
            <div className="inline-block pt2" style={{width: '48px'}}>
              <Icon name="down" width="34px" height="34px"/>
            </div>
          </h1>
        </div>

        <div className="clearfix text-center px1 sm-px0">
          <div className="col xs-8 xs-offset-2 md-6 md-offset-3 pt2 pb3">
            <p className="text-base sm-text-sm">{ t("report-common:home.intro.0") }</p>
            <p className="text-base sm-text-sm">{ t("report-common:home.intro.1") }</p>
            <div className="col xs-6 py2">
              <p>
                <strong>
                  { t("report-common:home.signatures.0.name") }
                </strong><br />
                { t("report-common:home.signatures.0.title") }
              </p>
              <img src="/img/signature1.png" alt=""/>
            </div>
            <div className="col xs-6 py2">
              <p>
                <strong>
                  { t("report-common:home.signatures.1.name") }
                </strong><br />
                { t("report-common:home.signatures.1.title") }
              </p>
              <img src="/img/signature2.png" alt=""/>
            </div>
          </div>
        </div>


        {
          /*
           * Section 1
           *
           */
        }
        <div className="bg-light py4">

          {
            // Section 1 - Heading
          }
          <div className="clearfix px1 sm-px0">
            <div className="col sm-3 sm-offset-2 pb3">
              <p className="text-sm color-primary m0">{t("report-common:home.sections.0.id")}</p>
              <h2 className="text-md sm-text-lg mt0 light">{t("report-common:home.sections.0.title")}</h2>
              <HeadlineDivider />
            </div>
          </div>

          {
            // Section 1 - Tiles
          }
          <div className="clearfix px1">
            {
              // Row 1
            }
            <div className="col sm-5 sm-offset-1">
              {
                // Who we are
              }
              <div className="relative sm-ratio-1-1 md-ratio-10-6" style={{
                  backgroundImage: "url(/img/chapters/chapter-1.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}>
                <div className="sm-absolute t0 l0 r0 b0 overflow-hidden color-inverted"
                     style={{background:"rgba(0,0,0,0.3)"}}
                  >
                  <div className="sm-absolute sm-10 sm-offset-1 sm-t50 l0 r0 sm-y-center-self px1 py6 sm-py0 text-center">
                    <LanguageLink to="/fdrs/report/who-we-are" className="text-md md-text-lg lh-small">
                      { t("report-common:chapters.chapter1.title") }
                    </LanguageLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col sm-5 md-3">
              {
                // Key number
              }
              <div className="relative sm-ratio-1-1">
                <div className="sm-absolute t0 l0 r0 b0 bg-white overflow-hidden">
                  <div className="sm-absolute sm-t50 l0 r0 sm-y-center-self py3 sm-py0 text-center px1">
                    <Icon name="usergroup" width="56px" height="56px" />
                    <p className="text-xl md-text-xxl m0">
                      { t("report-common:home.sections.0.statistic.number") }
                    </p>
                    <p className="m0">
                      { t("report-common:home.sections.0.statistic.text") }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix px1">
            {
              // Row 2
            }
            <div className="col sm-5 sm-offset-1 md-3 md-offset-3">
              {
                // Fact
              }
              <div className="relative sm-ratio-1-1">
                <div className="sm-absolute t0 l0 r0 b0 bg-white overflow-hidden">
                  <div className="sm-absolute sm-t50 l0 sm-y-center-self py3 sm-py0 text-center px1">
                    <Icon name="info" width="56px" height="56px" />
                    <p>
                      { t("report-common:home.sections.0.fact") }
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col sm-5">
              {
                // What we do
              }
              <div className="relative sm-ratio-1-1 md-ratio-10-6" style={{
                  backgroundImage: "url(/img/chapters/chapter-2.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}>
                <div className="sm-absolute t0 l0 r0 b0 overflow-hidden color-inverted"
                     style={{background:"rgba(0,0,0,0.3)"}}
                  >
                  <div className="sm-absolute sm-10 sm-offset-1 sm-t50 l0 r0 sm-y-center-self px1 py6 sm-py0 text-center">
                    <LanguageLink to="/fdrs/report/what-we-do" className="text-md md-text-lg lh-small">
                      { t("report-common:chapters.chapter2.title") }
                    </LanguageLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix px1">
            {
              // Row 3
            }
            <div className="col sm-10 sm-offset-1 md-5">
              {
                // Living our fundamental principles
              }
              <div className="relative sm-ratio-10-6" style={{
                  backgroundImage: "url(/img/chapters/chapter-3.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}>
                <div className="sm-absolute t0 l0 r0 b0 overflow-hidden color-inverted"
                     style={{background:"rgba(0,0,0,0.3)"}}
                  >
                  <div className="sm-absolute sm-10 sm-offset-1 sm-t50 l0 r0 sm-y-center-self px1 py6 sm-py0 text-center">
                    <LanguageLink to="/fdrs/report/living-our-fundamental-principles" className="text-md md-text-lg lh-small">
                      { t("report-common:chapters.chapter3.title") }
                    </LanguageLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col sm-10 sm-offset-1 md-5 md-offset-0">
              <div className="relative md-ratio-1-1">
                <div className="md-absolute t0 l0 r0 b0 overflow-hidden">
                  <div className="md-absolute md-t50 l0 md-y-center-self">
                    <Quote>
                      { t("report-common:home.sections.0.quote") }
                    </Quote>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>


        {
          /*
           * Section 2
           *
           */
        }
        <div className="py4">

          {
            // Section 2 - Heading
          }
          <div className="clearfix px1 sm-px0">
            <div className="col sm-3 sm-offset-2 pb3">
              <p className="text-sm color-primary m0">{t("report-common:home.sections.1.id")}</p>
              <h2 className="text-md sm-text-lg mt0 light">{t("report-common:home.sections.1.title")}</h2>
              <HeadlineDivider />
            </div>
          </div>

          {
            // Section 2 - Tiles
          }
          <div className="clearfix px1">
            {
              // Row 1
            }
            <div className="col sm-5 sm-offset-1">
              {
                // Strategic aim 1
              }
              <div className="relative sm-ratio-1-1 md-ratio-10-6" style={{
                  backgroundImage: "url(/img/chapters/chapter-4.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}>
                <div className="sm-absolute t0 l0 r0 b0 overflow-hidden color-inverted"
                     style={{background:"rgba(0,0,0,0.3)"}}
                  >
                  <div className="sm-absolute sm-10 sm-offset-1 sm-t50 l0 r0 sm-y-center-self px1 py6 sm-py0 text-center">
                    <LanguageLink to="/fdrs/report/who-we-are" className="text-md md-text-lg lh-small">
                      { t("report-common:chapters.chapter4.title") }
                    </LanguageLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col sm-5 md-3">
              {
                // Key number
              }
              <div className="relative sm-ratio-1-1">
                <div className="sm-absolute t0 l0 r0 b0 bg-light overflow-hidden">
                  <div className="sm-absolute sm-t50 l0 r0 sm-y-center-self py3 sm-py0 text-center px1">
                    <Icon name="usergroup" width="56px" height="56px" />
                    <p className="text-xl md-text-xxl m0">
                      { t("report-common:home.sections.1.statistic.number") }
                    </p>
                    <p className="m0">
                      { t("report-common:home.sections.1.statistic.text") }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix px1">
            {
              // Row 2
            }
            <div className="col sm-5 sm-offset-1 md-3 md-offset-3">
              {
                // Fact
              }
              <div className="relative sm-ratio-1-1">
                <div className="sm-absolute t0 l0 r0 b0 bg-light overflow-hidden">
                  <div className="sm-absolute sm-t50 l0 sm-y-center-self py3 sm-py0 text-center px1">
                    <Icon name="info" width="56px" height="56px" />
                    <p>
                      { t("report-common:home.sections.1.fact") }
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col sm-5">
              {
                // Strategic aim 2
              }
              <div className="relative sm-ratio-1-1 md-ratio-10-6" style={{
                  backgroundImage: "url(/img/chapters/chapter-5.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}>
                <div className="sm-absolute t0 l0 r0 b0 overflow-hidden color-inverted"
                     style={{background:"rgba(0,0,0,0.3)"}}
                  >
                  <div className="sm-absolute sm-10 sm-offset-1 sm-t50 l0 r0 sm-y-center-self px1 py6 sm-py0 text-center">
                    <LanguageLink to="/fdrs/report/what-we-do" className="text-md md-text-lg lh-small">
                      { t("report-common:chapters.chapter5.title") }
                    </LanguageLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix px1">
            {
              // Row 3
            }
            <div className="col sm-10 sm-offset-1 md-5">
              {
                // Strategic aim 3
              }
              <div className="relative sm-ratio-10-6" style={{
                  backgroundImage: "url(/img/chapters/chapter-6.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}>
                <div className="sm-absolute t0 l0 r0 b0 overflow-hidden color-inverted"
                     style={{background:"rgba(0,0,0,0.3)"}}
                  >
                  <div className="sm-absolute sm-10 sm-offset-1 sm-t50 l0 r0 sm-y-center-self px1 py6 sm-py0 text-center">
                    <LanguageLink to="/fdrs/report/living-our-fundamental-principles" className="text-md md-text-lg lh-small">
                      { t("report-common:chapters.chapter6.title") }
                    </LanguageLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col sm-10 sm-offset-1 md-5 md-offset-0">
              <div className="relative md-ratio-1-1">
                <div className="md-absolute t0 l0 r0 b0 overflow-hidden">
                  <div className="md-absolute md-t50 l0 md-y-center-self">
                    <Quote>
                      { t("report-common:home.sections.1.quote") }
                    </Quote>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>


        {
          /*
           * Section 3
           *
           */
        }
        <div className="bg-light py4">

          {
            // Section 3 - Heading
          }
          <div className="clearfix px1 sm-px0">
            <div className="col sm-3 sm-offset-2 pb3">
              <p className="text-sm color-primary m0">{t("report-common:home.sections.2.id")}</p>
              <h2 className="text-md sm-text-lg mt0 light">{t("report-common:home.sections.2.title")}</h2>
              <HeadlineDivider />
            </div>
          </div>

          {
            // Section 3 - Tiles
          }
          <div className="clearfix px1">
            {
              // Row 1
            }
            <div className="col sm-5 sm-offset-1">
              {
                // Enabling action 1
              }
              <div className="relative sm-ratio-1-1 md-ratio-10-6" style={{
                  backgroundImage: "url(/img/chapters/chapter-7.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}>
                <div className="sm-absolute t0 l0 r0 b0 overflow-hidden color-inverted"
                     style={{background:"rgba(0,0,0,0.3)"}}
                  >
                  <div className="sm-absolute sm-10 sm-offset-1 sm-t50 l0 r0 sm-y-center-self px1 py6 sm-py0 text-center">
                    <LanguageLink to="/fdrs/report/enabling-action-1" className="text-md md-text-lg lh-small">
                      { t("report-common:chapters.chapter7.title") }
                    </LanguageLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col sm-5 md-3">
              {
                // Key number
              }
              <div className="relative sm-ratio-1-1">
                <div className="sm-absolute t0 l0 r0 b0 bg-white overflow-hidden">
                  <div className="sm-absolute sm-t50 l0 r0 sm-y-center-self py3 sm-py0 text-center px1">
                    <Icon name="usergroup" width="56px" height="56px" />
                    <p className="text-xl md-text-xxl m0">
                      { t("report-common:home.sections.2.statistic.number") }
                    </p>
                    <p className="m0">
                      { t("report-common:home.sections.2.statistic.text") }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix px1">
            {
              // Row 2
            }
            <div className="col sm-5 sm-offset-1 md-3 md-offset-3">
              {
                // Fact
              }
              <div className="relative sm-ratio-1-1">
                <div className="sm-absolute t0 l0 r0 b0 bg-white overflow-hidden">
                  <div className="sm-absolute sm-t50 l0 sm-y-center-self py3 sm-py0 text-center px1">
                    <Icon name="info" width="56px" height="56px" />
                    <p>
                      { t("report-common:home.sections.2.fact") }
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col sm-5">
              {
                // Enabling action 2
              }
              <div className="relative sm-ratio-1-1 md-ratio-10-6" style={{
                  backgroundImage: "url(/img/chapters/chapter-8.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}>
                <div className="sm-absolute t0 l0 r0 b0 overflow-hidden color-inverted"
                     style={{background:"rgba(0,0,0,0.3)"}}
                  >
                  <div className="sm-absolute sm-10 sm-offset-1 sm-t50 l0 r0 sm-y-center-self px1 py6 sm-py0 text-center">
                    <LanguageLink to="/fdrs/report/enabling-action-2" className="text-md md-text-lg lh-small">
                      { t("report-common:chapters.chapter8.title") }
                    </LanguageLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix px1">
            {
              // Row 3
            }
            <div className="col sm-10 sm-offset-1 md-5">
              {
                // Enabling action 3
              }
              <div className="relative sm-ratio-10-6" style={{
                  backgroundImage: "url(/img/chapters/chapter-9.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}>
                <div className="sm-absolute t0 l0 r0 b0 overflow-hidden color-inverted"
                     style={{background:"rgba(0,0,0,0.3)"}}
                  >
                  <div className="sm-absolute sm-10 sm-offset-1 sm-t50 l0 r0 sm-y-center-self px1 py6 sm-py0 text-center">
                    <LanguageLink to="/fdrs/report/enabling-action-3" className="text-md md-text-lg lh-small">
                      { t("report-common:chapters.chapter9.title") }
                    </LanguageLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col sm-10 sm-offset-1 md-5 md-offset-0">
              <div className="relative md-ratio-1-1">
                <div className="md-absolute t0 l0 r0 b0 overflow-hidden">
                  <div className="md-absolute md-t50 l0 md-y-center-self">
                    <Quote>
                      { t("report-common:home.sections.2.quote") }
                    </Quote>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>


        {
          /*
           * Explore the data
           *
           */
        }
        <div style={{backgroundImage:"url(/img/dataViewPreview.jpg)",backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
          <div className="clearfix bg-data pb2" style={{background:"rgba(0,0,0,0.4)"}}>
            <div className="clearfix pt3 px1 sm-px0">
              <div className="col sm-3 sm-offset-2">
                <p className="text-sm color-primary m0">{t("report-common:chapters.data.preTitle")}</p>
                <h2 className="text-md sm-text-lg mt0 light">{t("report-common:chapters.data.title")}</h2>
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
                <LanguageLink to={"/fdrs/data"} className="btn bg-primary p1">{t("report-common:chapters.data.button")} <Icon name="goto" width="24px" height="24px"/></LanguageLink>
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
