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
    return (
      <section className="relative">
        <img src="/img/ipads2.png" className="absolute t0 r0 base-12 xs-8 sm-7 lg-6" style={{ transform: "translateY(-20%)" }}/>
        <header className='block relative px1 py4'>
          <div className='clearfix mxn1'>
            <div className='col sm-8 sm-offset-1 md-6 md-offset-2 lg-5 px1'>
              <h1 className='display-1 sm-display-2 md-display-3 light'>
                Data insights for<br />
                <span className='color-primary'>National Societies</span>
              </h1>
              <p className='lead'>FDRS provides crucial insights, reports, and analytical tools for National Societies and the IFRC secretariat.</p>
            </div>
          </div>

        </header>

        <Slant slantType='start' />

        <div className='px1 pb4 bg-beige'>
          <div className='clearfix mxn1'>
            <div className='col sm-10 sm-offset-1 px1'>
              <h2 className='headline sm-display-1 light mt0'>Services</h2>
            </div>

            <div className='col sm-10 sm-offset-1 px1'>
              <div className='clearfix mxn1 md-mxn3'>
                <div className='col sm-4 px1 md-px3'>
                  <h3 className='title sm-headline light'>The Federation<br />at a glance</h3>
                  <p>Explore the whole Federation at a glance, and see our work in numbers. This tool will give you an overview of what the entire Federation looks like.</p>
                  <Link to='/overview'>Read more</Link>
                </div>
                <div className='col sm-4 px1 md-px3'>
                  <h3 className='title sm-headline light'>National Society<br />profiles</h3>
                  <p>Interested in a particular National Society or a specific region? This tool is for you. Here you can also download profiles as PDFs.</p>
                  <Link to='/societies'>Read more</Link>
                </div>
                <div className='col sm-4 px1 md-px3'>
                  <h3 className='title sm-headline light'>"Everyone Counts"<br />annual report</h3>
                  <p>Our latest findings are also published in the form of an interactive annual report. Explore the report online, or download a PDF version.</p>
                  <Link to='/report'>Read more</Link>
                </div>
              </div>
            </div>

          </div>
        </div>

        <Slant slantType='end' />

        <div className='px1 pb4'>
          <div className='clearfix mxn1'>
            <div className='col sm-10 sm-offset-1 px1'>
              <h2 className='headline sm-display-1 light mt0'>Latest insights</h2>
            </div>
          </div>
        </div>

        <div className='px1 bg-secondary' style={{backgroundImage:"url(/img/worldmap.jpeg)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
          <div className='clearfix mxn1 py4' style={{background: "rgba(255,255,255,0.5)"}}>
            <div className='col sm-10 sm-offset-1 px1'>
              <h2 className='headline sm-display-1 light mt0'>For data collectors</h2>
              <p className='lead'>To get started with the data collection for your National Society, please log in.</p>
              <Link to='/' className='btn btn--raised bg-primary'>
                <span className='block py05 px1'>Login as data collector</span>
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

export default translate()(Home)
