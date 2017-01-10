import React from "react"
import { translate } from "react-i18next"
import Slant from '../components/Slant'
import { Link } from 'react-router'

class Home extends React.Component {
  // render() {
  //   const { t } = this.props
  //   return <div className="py4 pl2">{ t("report-common:site-title") }</div>
  // }
  render() {

    const { t } = this.props

    const servicesIllustrations = [
      (
        <svg width="132px" height="118px" viewBox="0 0 132 118" style={{width:"auto", height:"100%"}}>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g stroke="#FFFFFF" strokeWidth="3">
                    <g transform="translate(8, 8)">
                        <g transform="translate(0.721311, 0.721311)">
                            <path d="M18.4713443,7.81036066 C21.2007869,9.82859016 23.296918,14.96 23.296918,14.96 C23.296918,14.96 25.6541639,16.597377 26.3927869,18.6877377 C27.1299672,20.7780984 26.4331803,23.6171803 26.4331803,23.6171803 C26.4331803,23.6171803 28.523541,29.7526557 27.5396721,31.4751475 C26.5558033,33.1961967 22.375082,34.3026885 22.375082,34.3026885 C22.375082,34.3026885 20.6540328,37.499541 17.0878689,38.1140984 C14.7522623,38.3593443 12.4152131,39.9577705 12.4152131,43.2786885 C12.4152131,46.5996066 15.7346885,52.008 15.7346885,52.008 C15.7346885,52.008 19.1767869,53.691541 19.6687213,54.9220984 C20.1606557,56.1526557 20.328,59.0162623 20.328,59.0162623 C20.328,59.0162623 23.6027541,64.7954098 21.759082,68.1148852 C21.1704918,69.1737705 18.4396066,69.9585574 18.4396066,69.9585574 L14.6108852,75.703082"></path>
                            <path d="M77.4342295,16.696918 C73.2578361,18.6992787 65.9523934,20.3698361 65.9523934,20.3698361 C65.9523934,20.3698361 60.6146885,26.312 57.1105574,25.8200656 C53.6064262,25.3281311 50.0402623,21.3940984 50.0402623,21.3940984 C50.0402623,21.3940984 50.2855082,14.1405902 49.1790164,13.7712787 C48.0725246,13.4019672 45.1223607,15.3697049 43.2772459,13.8939016 C41.4335738,12.4180984 42.4967869,8.26045902 42.4967869,8.26045902 C42.4967869,8.26045902 38.4819672,7.00970492 37.9900328,5.65652459 C37.4980984,4.30334426 39.4514098,1.29259016 39.8236066,0.13704918"></path>
                            <path d="M75.0005246,46.1062295 C75.9843934,48.4418361 73.1539672,54.4085246 70.8198033,55.5727213 C67.7297049,57.1148852 65.6220328,59.0508852 64.7622295,60.4040656 C63.9009836,61.7572459 62.7699672,67.3373115 59.9409836,68.4438033 C57.1134426,69.5502951 50.4095738,75.8603279 46.8448525,74.876459 C43.2786885,73.8940328 43.2786885,65.4099672 45.7383607,61.5985574 C47.2069508,59.323541 45.4931148,54.3450492 45.3690492,52.6225574 C45.2464262,50.9015082 40.0818361,47.7046557 40.0818361,45.9836066 C40.0818361,43.2786885 45.9836066,36.1478033 45.9836066,36.1478033 C45.9836066,36.1478033 50.8192787,34.549377 52.295082,34.9186885 C53.7708852,35.288 56.5580328,37.0090492 56.5580328,37.0090492 C56.5580328,37.0090492 62.0904918,37.5009836 64.1808525,38.6074754 L67.0083934,41.1897705 C67.0083934,41.1883279 74.0166557,43.770623 75.0005246,46.1062295 L75.0005246,46.1062295 Z"></path>
                            <circle cx="43.2786885" cy="43.2786885" r="43.2786885"></circle>
                        </g>
                    </g>
                    <rect x="95.6666667" y="84.3333333" width="9" height="26.6666667"></rect>
                    <rect x="77.3333333" y="101.666667" width="9" height="9.33333333"></rect>
                    <polygon points="115 65 124 65 124 111 115 111"></polygon>
                </g>
            </g>
        </svg>
      ),
      (
        <svg width="104px" height="118px" viewBox="0 0 104 118" style={{width:"auto", height:"100%"}}>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g stroke="#FFFFFF" strokeWidth="3">
                    <g transform="translate(8, 7)">
                        <ellipse cx="63.3333333" cy="79.3333333" rx="16" ry="16"></ellipse>
                        <path d="M87.3333333,103.333333 L74.6466667,90.6466667"></path>
                        <g>
                            <g transform="translate(0.666667, 0.666667)">
                                <polyline points="48 0 48 16 64 16"></polyline>
                                <polyline points="64 55.5997663 64 16 48 0 0 0 0 80 38.6508537 80"></polyline>
                                <rect x="28" y="26.6666667" width="8" height="26.6666667"></rect>
                                <rect x="10.6666667" y="44" width="8" height="9.33333333"></rect>
                                <rect x="45.3333333" y="37.3333333" width="8" height="16"></rect>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
      ),
      (
        <svg width="102px" height="118px" viewBox="0 0 102 118" style={{width:"auto", height:"100%"}}>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g strokeWidth="3" stroke="#FFFFFF">
                    <g transform="translate(8, 5)">
                        <g transform="translate(0.663265, 0.663265)">
                            <polyline points="42.4489796 0 42.4489796 21.2244898 63.6734694 21.2244898"></polyline>
                            <polyline points="63.6734694 42.5343099 63.6734694 21.2244898 42.4489796 0 0 0 0 79.5918367 32.4307967 79.5918367"></polyline>
                            <path d="M15.9183673,61.0204082 L31.755102,61.0204082"></path>
                            <path d="M15.9183673,47.755102 L31.755102,47.755102"></path>
                            <path d="M15.9183673,34.4897959 L47.755102,34.4897959"></path>
                            <path d="M15.9183673,21.2244898 L26.5306122,21.2244898"></path>
                        </g>
                    </g>
                    <g transform="translate(45, 53)">
                        <g transform="translate(0.5, 0.5)">
                            <polyline points="36 0 36 12 48 12"></polyline>
                            <polygon points="36 0 0 0 0 60 48 60 48 12"></polygon>
                            <rect x="21" y="20" width="6" height="20"></rect>
                            <rect x="8" y="33" width="6" height="7"></rect>
                            <rect x="34" y="28" width="6" height="12"></rect>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
      )
    ]

    return (
      <section className="relative" style={{
             backgroundImage: "url(/img/landing-bg.jpg)",
             backgroundRepeat: "no-repeat",
             backgroundSize: "100% auto"
           }}>
        <img src="/img/ipads2.png" className="absolute t0 r0 base-12 xs-8 sm-7 lg-6" style={{ transform: "translateY(-20%)" }}/>
        <header className='block relative px1 py4'>
          <div className='clearfix mxn1'>
            <div className='col sm-8 sm-offset-1 md-6 md-offset-1 lg-6 px1'>
              <h1 className='display-1 sm-display-2 md-display-3 light'>
                <span className="color-primary">{ t("home:intro.titleParts")[0] }&nbsp;</span>
                { t("home:intro.titleParts")[1] }
              </h1>
              <p className='lead md-headline pr4'>
                { t("home:intro.lead") }
              </p>
            </div>
          </div>

        </header>

        <Slant slantType='start' />

        <div className='px1 pb4 bg-beige'>
          <div className='clearfix mxn1'>
            <div className='col sm-10 sm-offset-1 px1'>
              <h2 className='headline sm-display-1 light mt0'>
                { t("home:services.title") }
              </h2>
            </div>

            <div className='col sm-10 sm-offset-1 px1'>
              <div className='clearfix mxn1 md-mxn3'>
                {
                  servicesIllustrations.map((item, i) => {
                    return (
                      <div key={i} className='col sm-6 lg-4 px1 md-px3'>
                        <div style={{height:96}}>
                          { servicesIllustrations[i] }
                        </div>
                        <h3 className='title sm-headline light'>
                          { t("home:services.items")[i].title }
                        </h3>
                        <p>
                          { t("home:services.items")[i].description }
                        </p>
                        <Link to='/overview' className="btn btn--raised bg-primary">
                          <span className='block py05 px05'>
                            { t("home:services.items")[i].button }
                          </span>
                        </Link>
                      </div>
                    )
                  })
                }
              </div>
            </div>

          </div>
        </div>

        <Slant slantType='end' />

        <div className='px1 pb4'
             style={{
               backgroundImage: "url(/img/report-preview.png)",
               backgroundSize: "auto 100%",
               backgroundRepeat: "no-repeat",
               backgroundPosition: "left"
          }}>
          <div className='clearfix mxn1'>
            <div className='col sm-10 sm-offset-1 px1'>
              <h2 className='headline sm-display-1 light mt0 color-primary'>
                { t("home:insights.title") }
              </h2>
              <div className="clearfix mxn1">
                <div className="col base-6 base-offset-6 px1 py4">
                  <h2 className="title sm-headline light">
                    { t("home:insights.subtitle") }
                  </h2>
                  <p>
                    { t("home:insights.description") }
                  </p>
                  <Link to="/" className="btn btn--raised bg-primary">
                    <span className='block py05 px1'>
                      { t("home:insights.button") }
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='px1 bg-secondary'
             style={{
               backgroundImage:"url(/img/worldmap.jpeg)",
               backgroundRepeat: "no-repeat",
               backgroundSize: "cover",
               backgroundPosition: "center"
          }}>
          <div className='clearfix mxn1 py4' style={{ background: "rgba(255,255,255,0.5)" }}>
            <div className='col sm-10 sm-offset-1 px1 py4'>
              <h2 className='headline sm-display-1 light mt0'>
                { t("common:dataCollectors.title") }
              </h2>
              <p className='lead'>
                { t("common:dataCollectors.lead") }
              </p>
              <Link to='/' className='btn btn--raised bg-primary'>
                <span className='block py05 px1'>
                  { t("common:dataCollectors.button") }
                </span>
              </Link>
            </div>
          </div>
        </div>

      </section>
    )
  }
}

Home.propTypes = {
  t: React.PropTypes.func.isRequired,
}

Home.contextTypes = {
  i18n: React.PropTypes.object.isRequired,
}

export default translate("home", { wait: true })(Home)
