
import React from "react"
import { Link } from "react-router"
import { translate } from "react-i18next"
import Breadcrumbs from "../components/Breadcrumbs"

const CollapsibleHeader = ({ children }) => <span>{ children }</span>
const CollapsibleBody = ({ children }) => <span>{ children }</span>

class Collapsible extends React.Component {
  constructor(props) {
    super(props)
    this.state = { expanded: false }

    this.toggleCollapsible = this.toggleCollapsible.bind(this)
  }
  toggleCollapsible() {
    this.setState({ expanded: !this.state.expanded })
  }
  render() {
    return (
      <article className="shadow-4 bg-white mb1">
        <header className="p1" style={{ cursor: "pointer" }} onClick={ this.toggleCollapsible }>
          { this.props.children[0] }
        </header>
        <div className="p1 bg-secondary" style={{ display: this.state.expanded ? "block" : "none" }}>
          { this.props.children[1] }
        </div>
      </article>
    )
  }
}

class FAQ extends React.Component {
  render() {

    const { i18n } = this.context
    const { t } = this.props

    const questions = t("faq:questions")

    return (
      <section>
        <Breadcrumbs links={[
          { name: "Home", path: "/fdrs" },
          { name: "FAQ", path: "/fdrs/faq" },
        ]}/>
        <div className="px1">
          <div className="clearfix mxn1">
            <header className="col sm-6 sm-offset-3 px1 pt1">
              <h1 className="display-1 md-display-2 m0 light">{ t("faq:title") }</h1>
            </header>
          </div>

          <div className="clearfix mxn1 pb4">
            <div className="col sm-6 sm-offset-3 px1 pt1">
              <p className="lead">
                { t("faq:intro") }
                <span className="color-primary"> { " fdrs@ifrc.org" }</span></p>
              {
                questions.map((questionItem, i) => {

                  const { question, answer } = questionItem

                  return (
                    <Collapsible key={ i }>
                      <CollapsibleHeader>
                        <h1 className="headline m0">{ question }</h1>
                      </CollapsibleHeader>
                      <CollapsibleBody>
                        {
                          answer.map((answerItem, j) => {
                            if(typeof answerItem !== "string") {
                              return (
                                <ul key={ j }>
                                  {
                                    answerItem.map((listItem, k) => (
                                      <li key={ k }>{ listItem }</li>
                                    ))
                                  }
                                </ul>
                              )
                            }
                            else {
                              return (
                                <p key={ j }>{ answerItem }</p>
                              )
                            }
                          })
                        }
                      </CollapsibleBody>
                    </Collapsible>
                  )
                })
              }

            </div>
          </div>

        </div>

      </section>
    )
  }
}

FAQ.contextTypes = {
  // router: React.PropTypes.object.isRequired,
  i18n: React.PropTypes.object.isRequired
}

FAQ.propTypes = {
  t: React.PropTypes.func.isRequired
}

export default translate("faq", { wait: true })(FAQ)
