
import React from "react"
import LanguageLink from "../components/LanguageLink"
import { translate } from "react-i18next"

class Breadcrumbs extends React.Component {
  render() {
    const { t } = this.props
    return (
      <div className="sm-visible">
        <div className="clearfix bg-light px1">
          <div className="col sm-8 sm-offset-0 md-offset-2">
            <ul className="m0 py05 px0 text-base">
              {
                this.props.links.map((item, i) => (
                  <li className="inline-block" key={ i }>
                    {
                      item.path ? (
                        <LanguageLink to={ item.path }>
                          { item.name }
                        </LanguageLink>
                      ) : (
                        <span className={ i === (this.props.links.length - 1) ? "color-primary" : "" }>
                          { item.name }
                        </span>
                      )
                    }
                    {
                      i < (this.props.links.length -1) ? (
                        <div className="inline-block px05">
                          <svg width="24px" height="24px" viewBox="0 0 24 24" style={{width: "1rem",stroke:"currentcolor",marginTop:-1}}>
                            <polyline fill="none" stroke="#343434" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" points="10,8 14,12 10,16 " transform="translate(0, 0)" strokeLinejoin="miter"/>
                          </svg>
                        </div>
                      ) : null
                    }
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default translate([], { wait: true })(Breadcrumbs)
