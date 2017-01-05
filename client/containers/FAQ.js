
import React from "react"
import { Link } from "react-router"
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
    return (
      <section>
        <Breadcrumbs links={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]}/>
        <div className="px1">
          <div className="clearfix mxn1">
            <header className="col sm-6 sm-offset-3 px1 pt1">
              <h1 className="display-1 md-display-2 m0 light">{ "FAQ" }</h1>
            </header>
          </div>

          <div className="clearfix mxn1 pb4">
            <div className="col sm-6 sm-offset-3 px1 pt1">
              <p className="lead">{ "This text will be the introduction for the FAQ page. Below you will find the most frequently asked questions. If your question has not been answered below, please contact the IFRC secreatariat at: " }<span className="color-primary">{ "fdrs@ifrc.org" }</span></p>

              <Collapsible>
                <CollapsibleHeader>
                  <h1 className="headline m0">{ "1. Question goes here" }</h1>
                </CollapsibleHeader>
                <CollapsibleBody>
                  <p>{ "The answer will go here, but will be hidden by default." }</p>
                </CollapsibleBody>
              </Collapsible>

              <Collapsible>
                <CollapsibleHeader>
                  <h1 className="headline m0">{ "2. Second question can go here" }</h1>
                </CollapsibleHeader>
                <CollapsibleBody>
                  <p>{ "The answer will go here, but will be hidden by default." }</p>
                </CollapsibleBody>
              </Collapsible>

              <Collapsible>
                <CollapsibleHeader>
                  <h1 className="headline m0">{ "3. Another question goes here" }</h1>
                </CollapsibleHeader>
                <CollapsibleBody>
                  <p>{ "The answer will go here, but will be hidden by default." }</p>
                </CollapsibleBody>
              </Collapsible>

            </div>
          </div>

        </div>

        <div className="px1 py4 bg-secondary">
          <div className="clearfix mxn1">
            <div className="col sm-10 sm-offset-1 px1">
              <h2 className="headline sm-display-1 light mt0">{ "For data collectors" }</h2>
              <p className="lead">{ "To get started with the data collection for your National Society, please log in." }</p>
              <Link to="/" className="btn btn--raised bg-primary">
                <span className="block py05 px1">{ "Login as data collector" }</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default FAQ
