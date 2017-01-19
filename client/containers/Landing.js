
import React from "react"
import LanguageLink  from "../components/LanguageLink"
import { translate } from "react-i18next"
import * as d3 from "d3";


class Landing extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      items : [],
    }

    !function(e,o,n){window.HSCW=o,window.HS=n,n.beacon=n.beacon||{};var t=n.beacon;t.userConfig={},t.readyQueue=[],t.config=function(e){this.userConfig=e},t.ready=function(e){this.readyQueue.push(e)},o.config={docs:{enabled:!1,baseUrl:""},contact:{enabled:!0,formId:"df61f27b-dcce-11e6-8789-0a5fecc78a4d"}};var r=e.getElementsByTagName("script")[0],c=e.createElement("script");c.type="text/javascript",c.async=!0,c.src="https://djtflbt20bdde.cloudfront.net/",r.parentNode.insertBefore(c,r)}(document,window.HSCW||{},window.HS||{});
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

    var myRegex = /<img[^>]+src="(http:\/\/[^">]+)"/g;

    this.getImage = (content) => {
      var result = myRegex.exec(content);
      if(result){
        return result[1];
      }
      else{
        return "";
      }
    }

    return (
      <section style={{
             backgroundImage: "url(/img/landing-bg.jpg)",
             backgroundRepeat: "no-repeat",
             backgroundSize: "100% auto"
           }}
           className="py2"
        >
        <header className='block relative px1 pt4 pb1'>
          <div className='clearfix mxn1'>
            <div className='col sm-10 sm-offset-1 px1'>
              <h1 className='text-lg sm-text-xl md-text-xxl lh-small light'>
                <span className="color-primary">{ t("landing:titleParts")[0] }</span>&nbsp;{ t("landing:titleParts")[1] }
              </h1>
              <p className='text-sm md-text-md'>
                { t("landing:lead") }
              </p>
            </div>
          </div>
        </header>

        <div className='block relative px1 pb1'>
          <div className='clearfix mxn1'>
            <div className='col sm-10 sm-offset-1 px1'>
              <h2 className="text-base color-secondary">{ "Featured project" }</h2>
              <article className="shadow-4 p2">
                <h1 className='text-lg md-text-xl lh-small light m0'>
                  <LanguageLink to="/fdrs">
                    { t("landing:projects.fdrs.title") }
                  </LanguageLink>
                </h1>
                <p>
                  { t("landing:projects.fdrs.text") }
                </p>
                <LanguageLink to="/fdrs/" className='btn btn--raised mt1 bg-primary'>
                  <span className='block py05 px1'>
                    { "Go to FDRS" }
                  </span>
                </LanguageLink>
              </article>
            </div>
          </div>
        </div>

        <div className='block relative px1 pb1'>
          <div className='clearfix mxn1'>
            <div className='col sm-10 sm-offset-1 px1'>
              <h2 className="text-base color-secondary">{ "News" }</h2>
            </div>
          </div>

          <div className='clearfix mxn1'>
            <div className='col sm-6 sm-offset-1 px1'>
              { this.state.items.map((item, index) =>
                 <div key={index} className="shadow-4 p2 mb2">
                   {
                     <img className="base-12" src={this.getImage(item.content)} alt=""/>
                   }
                   <img src="" alt=""/>
                   <h1 className="text-md md-text-lg light lh-small">
                    {item.title}
                  </h1>
                   <div>
                     <span>By {item.author}</span> | <span>{item.pubDate.substring(0,item.pubDate.length-9)}</span>
                     {
                       item.categories ?
                         item.categories.map((cat, index) =>
                          <span key={index}> | {cat} </span>
                        ) : null
                     }
                   </div>
                   <p>{item.description}</p>
                   <a target="_blank" href={item.link} className='btn btn--raised bg-primary'>
                    <span className='block py05 px1'>
                      Read More
                    </span>
                   </a>
                 </div>
              )}
            </div>

            <aside className="col sm-3 sm-offset-1 px1">
              <div className="relative bg-secondary shadow-4 p2">
                <h2 className="text-base md-text-md light">
                  { t("landing:about.title") }
                </h2>
                <p>
                  { t("landing:about.text")[0] }
                </p>
                <p>
                  { t("landing:about.text")[1] }
                </p>
              </div>
            </aside>

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
