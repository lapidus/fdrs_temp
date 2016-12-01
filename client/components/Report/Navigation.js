import React from "react"
import { Link } from "react-router"
import { translate } from "react-i18next"

import prefixLanguageToRoute from "../../utils/prefixLanguageToRoute"
import { report } from "../../routes/config"

const Navigation = ({ navOpen, t }, { i18n }) => {
  const { language } = i18n
  const content = i18n.store.data[language]["report-common"]
  const langRoute = prefixLanguageToRoute(language)
  const { routes } = report

  const chaptersBySection = [
    [ "chapter1",  "chapter2",  "chapter3" ],
    [ "chapter4",  "chapter5",  "chapter6" ],
    [ "chapter7",  "chapter8",  "chapter9" ],
  ]

  return (
    <nav className={ navOpen ? "site-nav is-open" : "site-nav" }>
      <ul>
        <div className="col md-7 lg-5">
          {
            content.home.sections.map((section, sectionKey) =>
              (sectionKey < 3) &&
              <li key={ sectionKey } className="site-nav__section clearfix pb2">
                <div className="strong caps">
                  { `Section ${sectionKey + 1} — ${section.title}` }
                </div>
                <ul>
                  {
                    chaptersBySection[sectionKey].map((chapter) =>
                      <li key={ chapter } className="site-nav__chapter col md-12 lg-12">
                        <div
                          style={{
                            position: "absolute",
                            width: "2rem",
                            top: 0,
                            left: 0,
                          }}
                          className="display-2 center strong"
                        >
                          { chapter.id }
                        </div>
                        <div className="pl2">
                          <Link to={ `${langRoute}/report/${routes[chapter].slug}` }>
                            <div className="title">{ t(`report-common:chapters.${chapter}.title`) }</div>
                            <hr style={{ marginBottom: "8px", marginTop: "4px" }} />
                          </Link>
                        </div>
                      </li>
                    )
                  }
                </ul>
              </li>
            )
          }
        </div>

        <div className="col md-5 lg-5 lg-offset-1">
          <li className="site-nav__section clearfix pb2">
            <div className="strong caps">
              { `${t("report-common:home.sections.3.id")} — ${t("report-common:home.sections.3.title")}` }
            </div>
            <ul>
              <li className="site-nav__chapter col md-12">
                <div
                  style={{
                    position: "absolute",
                    width: "2rem",
                    top: 0,
                    left: 0,
                  }}
                  className="display-2 center strong"
                >
                  { "11" }
                </div>
                <div className="pl3">
                  <Link to={ `${langRoute}/report/${routes.acknowledgements.slug}` }>
                    <div className="title">{ t("report-common:chapters.acknowledgements.title") }</div>
                    <hr style={{ marginBottom: "8px", marginTop: "4px" }} />
                  </Link>
                </div>
              </li>
            </ul>
          </li>
        </div>

      </ul>
    </nav>
  )
}

Navigation.propTypes = {
  t: React.PropTypes.func.isRequired,
  navOpen: React.PropTypes.bool,
}

Navigation.contextTypes = {
  i18n: React.PropTypes.object.isRequired,
}

export default translate([], { wait: true })(Navigation)
