
import React from "react"
import { Link } from "react-router"
import { translate } from "react-i18next"
import * as d3 from "d3";


class Landing extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      items : [],
    }

  }

  componentDidMount() {

    d3.json("https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fmedia.ifrc.org%2Fifrc%2Ftheme%2Fdata%2Ffeed%2F", (data) => {

      console.log(data)

      /*
      *
      *
      *
      * */


      this.setState({
        items : data.items
      })

    })

  }

  render() {

    const { t } = this.props

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
                <span className="color-primary">{ t("landing:titleParts")[0] }</span>&nbsp;{ t("landing:titleParts")[1] }
              </h1>
              <p className="lead">
                { t("landing:lead") }
              </p>
            </div>
          </div>
        </header>


        <div className='col sm-12'>

              <div className='col sm-7 sm-offset-1 px1'>
                { this.state.items.map((item, index) =>
                   <div key={index}>
                     <h1 className="headline">{item.title}</h1>
                     <p>{item.description}</p>
                     <a target="_blank" href={item.link} className='btn btn--raised bg-primary'>
                      <span className='block py05 px1'>
                        Read More
                      </span>
                     </a>
                   </div>
                )}
              </div>


            <div className="col sm-4 px1">
              <div className="relative ratio-1-1">
                <article className="ratio-content shadow-4 bg-beige p2">
                  <h1 className="headline m0">
                    { t("landing:about.title") }
                  </h1>
                  <p>
                    { t("landing:about.text")[0] }
                  </p>
                  <p>
                    { t("landing:about.text")[1] }
                  </p>
                </article>
              </div>
            </div>
          
        </div>





        <div className='block relative px1'>
          <div className='clearfix mxn1'>
            <div className='col sm-10 sm-offset-1 px1'>
              <div className="clearfix mxn1">
                <div className="col sm-8 px1">
                  <div className="clearfix mxn1">
                    <div className="col sm-12 md-6 px1 pb2">
                      <div className="relative ratio-3-2">
                        <article className="ratio-content shadow-4 p2">
                          <h1 className="headline m0">
                            <Link to="/fdrs">
                              { t("landing:projects.fdrs.title") }
                            </Link>
                          </h1>
                          <p>
                            { t("landing:projects.fdrs.text") }
                          </p>
                        </article>
                      </div>
                    </div>
                    <div className="col sm-12 md-6 px1 pb2">
                      <div className="relative ratio-3-2">
                        <article className="ratio-content shadow-4 p2">
                          <h1 className="headline m0">
                            { t("landing:projects.go.title") }
                          </h1>
                          <p>
                            { t("landing:projects.go.text") }
                          </p>
                        </article>
                      </div>
                    </div>
                    <div className="col sm-12 md-6 px1 pb2">
                      <div className="relative ratio-3-2">
                        <article className="ratio-content shadow-4 p2">
                          <h1 className="headline m0">
                            { t("landing:projects.literacy.title") }
                          </h1>
                          <p>
                            { t("landing:projects.literacy.text") }
                          </p>
                        </article>
                      </div>
                    </div>
                    <div className="col sm-12 md-6 px1 pb2">
                      <div className="relative ratio-3-2">
                        <article className="ratio-content shadow-4 p2">
                          <h1 className="headline m0">
                            { t("landing:projects.dref.title") }
                          </h1>
                          <p>
                            { t("landing:projects.dref.text") }
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
                        { t("landing:about.title") }
                      </h1>
                      <p>
                        { t("landing:about.text")[0] }
                      </p>
                      <p>
                        { t("landing:about.text")[1] }
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

Landing.contextTypes = {
  i18n: React.PropTypes.object.isRequired,
}

Landing.propTypes = {
  t: React.PropTypes.func.isRequired,
}

export default translate("landing", { wait: true })(Landing)
