
import React from "react"
import { Link } from "react-router"

class Landing extends React.Component {
  render() {
    return (
      <section style={{
             backgroundImage: "url(/img/landing-bg.jpg)",
             backgroundRepeat: "no-repeat",
             backgroundSize: "100% auto"
           }}
           className="py2"
        >
        <header className='block relative px1 py4'>
          <div className='clearfix mxn1'>
            <div className='col sm-10 sm-offset-1 px1'>
              <h1 className='display-1 sm-display-2 md-display-3 light m0'>
                <span className="color-primary">{ "IFRC" }</span>&nbsp;{ "Data initiatives" }
              </h1>
              <p className="lead">{ "IFRC is a data-driven organization aimed at making evidence-based decisionmaking." }</p>
            </div>
          </div>
        </header>

        <div className='block relative px1'>
          <div className='clearfix mxn1'>
            <div className='col sm-10 sm-offset-1 px1'>
              <div className="clearfix mxn1">
                <div className="col sm-8 px1">
                  <div className="clearfix mxn1">
                    <div className="col sm-6 px1 pb2">
                      <div className="relative ratio-3-2">
                        <article className="ratio-content shadow-4 p2">
                          <h1 className="headline m0">
                            <Link to="/fdrs">{ "FDRS" }</Link>
                          </h1>
                          <p>
                            { "The Federation-wide Data and Reporting System provides data about 190 national societies." }
                          </p>
                        </article>
                      </div>
                    </div>
                    <div className="col sm-6 px1 pb2">
                      <div className="relative ratio-3-2">
                        <article className="ratio-content shadow-4 p2">
                          <h1 className="headline m0">
                            { "Go Project" }
                          </h1>
                          <p>
                            { "Go is building a virtual Emergency Operations Center." }
                          </p>
                        </article>
                      </div>
                    </div>
                    <div className="col sm-6 px1 pb2">
                      <div className="relative ratio-3-2">
                        <article className="ratio-content shadow-4 p2">
                          <h1 className="headline m0">
                            { "Data Literacy" }
                          </h1>
                          <p>
                            { "Building collective understanding of how to collect, analyze, and visualize data." }
                          </p>
                        </article>
                      </div>
                    </div>
                    <div className="col sm-6 px1 pb2">
                      <div className="relative ratio-3-2">
                        <article className="ratio-content shadow-4 p2">
                          <h1 className="headline m0">
                            { "DREFs & Appeals" }
                          </h1>
                          <p>
                            { "Visualization of current and historic Disaster Relief Emergency Fund requests and appeals." }
                          </p>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col sm-4 px1">
                  <div className="relative ratio-1-1">
                    <article className="ratio-content shadow-4 bg-beige p2">
                      <h1 className="headline m0">
                        { "About Data" }
                      </h1>
                      <p>
                        { "IFRC aggregating its data and data literacy efforts into this prototype web site." }
                      </p>
                      <p>
                        { "Please provide feedback to data@ifrc.org" }
                      </p>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Landing
