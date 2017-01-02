
import React from "react"
import Breadcrumbs from "../components/Breadcrumbs"

class About extends React.Component {
  render() {
    return (
      <section>
        <Breadcrumbs links={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}/>
        <div className="px1">
          <div className="clearfix mxn1">
            <header className="col sm-6 sm-offset-3 px1 pt1">
              <h1 className="display-1 md-display-2 m0 light">{ "About" }</h1>
            </header>
          </div>

          <div className="clearfix mxn1 pb4">
            <div className="col sm-6 sm-offset-3 px1 pt1">
              <p className="lead">{ "This is where some about text can go. Is the content for this page ready yet? This column is a nice width that works, but will likely have to resize better." }</p>
              <p>{ "More text can go here. If necessary we can drop in visuals and other small bits and pieces of content in here." }</p>
              <p>{ "More text can go here. If necessary we can drop in visuals and other small bits and pieces of content in here. We need a little bit more text here in order to fill up the page." }</p>
              <p>{ "More text can go here. If necessary we can drop in visuals and other small bits and pieces of content in here." }</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
