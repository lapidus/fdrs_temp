import React from "react"
import { Link } from "react-router"

class Card extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cardView: props.initialView,
      overlay: false,
    }

    this.switchView = this.switchView.bind(this)
    this.handleOverlayToggle = this.handleOverlayToggle.bind(this)
  }

  switchView(viewIndex) {
    this.setState({ cardView: viewIndex })
  }

  handleOverlayToggle() {
    this.setState({ overlay: !this.state.overlay })
  }

  render() {
    const lineChartIcon = (
      <svg
        width="16px"
        height="16px"
        viewBox="0 0 16 16"
        className="block"
        style={{ width: 20, height: 20 }}
      >
        <g stroke="#4A4A4A" strokeWidth="1" fill="none" fillRule="evenodd">
          <path d="M2,12 L14,12" />
          <polyline points="3 9 5.85714286 6.2 8 8.5 13 3.4" />
          <polyline points="11 3 13.4 3 13.4 5.4" />
        </g>
      </svg>
    )

    const genderChartIcon = (
      <svg
        width="16px"
        height="16px"
        viewBox="0 0 16 16"
        className="block"
        style={{ width: 20, height: 20 }}
      >
        <g stroke="#4A4A4A" strokeWidth="1" fill="none" fillRule="evenodd">
          <ellipse cx="5.27272727" cy="6.90909091" rx="3.27272727" ry="3.27272727" />
          <path d="M5,10 L5,13.5" />
          <path d="M3.67999268,12 L6.36000061,12" />
          <path d="M11.3818182,4.61818182 L14,2" />
          <ellipse cx="9.09090909" cy="6.90909091" rx="3.27272727" ry="3.27272727" />
          <polyline points="11.8181818 2 14 2 14 4.18181818" />
        </g>
      </svg>
    )

    const plainNumber = (
      <svg
        width="16px"
        height="16px"
        viewBox="0 0 16 16"
        className="block"
        style={{ width: 20, height: 20 }}
      >
        <g stroke="#4A4A4A" strokeWidth="1" fill="none" fillRule="evenodd">
          <path d="M4,7.68181818 L7.27272727,7.68181818 L7.27272727,11.7727273 L4,11.7727273 L4,7.68181818 C4,5.75568318 4.71590909,4.54971591 6.04545455,4" />
          <path d="M9.72727273,7.68181818 L13,7.68181818 L13,11.7727273 L9.72727273,11.7727273 L9.72727273,7.68181818 C9.72727273,5.75568318 10.4431818,4.54971591 11.7727273,4" />
        </g>
      </svg>
    )

    const viewIcons = {
      lineChart: lineChartIcon,
      genderChart: genderChartIcon,
      plainNumber: plainNumber,
    }

    const { children, bgColor, basicCard } = this.props
    const { cardView, overlay } = this.state

    return (
      <article className={ `relative overflow-hidden shadow-2 ${bgColor}` }>
        <div>
          {
            children.map((child, i) =>
              child.props.componentIdentifier === "CardView" && cardView === i &&
                <div style={{ height:240 }} key={ i }>
                  { child.props.children }
                </div>
            )
          }
        </div>
        <footer className="relative pt2 pb05 px1" style={{opacity: this.props.controlsVisible ? 1 : 0, pointerEvents: this.props.controlsVisible ? "all" : "none"}}>
          {
            !basicCard &&
            <div className="t0 l1 y-center-self absolute btn-group btn-group--raised">
              {
                children.map((child, i) =>
                  child.props.componentIdentifier === "CardView" &&
                  <button
                    key={ i }
                    onClick={ () => this.switchView(i) }
                    className={ cardView === i ? "btn bg-primary stroke-white" : "btn bg-white" }
                  >
                    {
                      child.props.viewIcon ?
                      viewIcons[child.props.viewIcon] :
                      <span className="px05">{ i }</span>
                    }
                  </button>
                )
              }
            </div>
          }
          <Link to={`/fdrs/overview?currentIndicator=${this.props.indicator}`} className={this.props.indicator ? "btn" : "btn opacity-0"}>
            <span className="text-xs">{ "show on map" }</span>
          </Link>
          <button
            className="btn btn--raised btn--circle bg-white absolute t0 r1 y-center-self"
            style={{width:48,height:48}}
            onClick={ this.handleOverlayToggle }
          >
            <svg width="2rem" height="2rem" viewBox="0 0 36 36">
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g>
                  <g transform="translate(8, 9)" stroke="#343434">
                    <path d="M9.09090909,0.909090909 L20,0.909090909" />
                    <path d="M9.09090909,6.36363636 L20,6.36363636" />
                    <path d="M0,11.8181818 L20,11.8181818" />
                    <path d="M0,17.2727273 L20,17.2727273" />
                  </g>
                  <path d="M11.1271973,15.6171875 L13.0187988,15.6171875 L13.0187988,17.4516602 L11.1271973,17.4516602 L11.1271973,15.6171875 Z M10.0734863,8.48242188 C10.5728378,8.16080568 11.1864384,8 11.9143066,8 C12.8706916,8 13.6651987,8.22851334 14.2978516,8.68554688 C14.9305045,9.14258041 15.2468262,9.81965697 15.2468262,10.7167969 C15.2468262,11.2669298 15.109295,11.7303041 14.8342285,12.1069336 C14.6734204,12.3354504 14.3645042,12.6274396 13.9074707,12.9829102 L13.4567871,13.3320312 C13.2113432,13.5224619 13.0484216,13.7446276 12.9680176,13.9985352 C12.9172361,14.1593433 12.8897298,14.4090152 12.885498,14.7475586 L11.1716309,14.7475586 C11.1970216,14.0323857 11.2647293,13.5383314 11.3747559,13.2653809 C11.4847825,12.9924303 11.7683083,12.6782244 12.2253418,12.3227539 L12.6887207,11.9609375 C12.8410652,11.8466791 12.9637853,11.7218431 13.0568848,11.5864258 C13.2261564,11.3536772 13.310791,11.0976576 13.310791,10.8183594 C13.310791,10.4967432 13.2166351,10.203696 13.0283203,9.93920898 C12.8400056,9.67472198 12.4961776,9.54248047 11.9968262,9.54248047 C11.5059383,9.54248047 11.1578786,9.70540202 10.9526367,10.03125 C10.7473948,10.357098 10.6447754,10.6956363 10.6447754,11.046875 L8.81030273,11.046875 C8.86108424,9.84081428 9.28214123,8.98600512 10.0734863,8.48242188 L10.0734863,8.48242188 Z" fill="#D90212" />
                </g>
              </g>
            </svg>
          </button>
        </footer>
        {
          children.map((child, i) =>
            child.props.componentIdentifier == "CardOverlay" &&
            <div
              key={ i }
              className={ `card__overlay bg-white color-regular ${overlay && "card__overlay--active"}` }
            >
              <div className="pt2">
                { child.props.children }
              </div>
              <button
                onClick={ this.handleOverlayToggle }
                className="absolute btn"
                style={{top:"1rem",right:"1rem"}}
                tabIndex={overlay ? "0" : "-1"}
              >
                <svg style={{width:16,stroke:"currentcolor"}} width="24px" height="24px" viewBox="0 0 24 24">
                  <g  transform="translate(0, 0)">
                    <line fill="none" strokeWidth="3" strokeLinecap="square" strokeMiterlimit="10" x1="19" y1="5" x2="5" y2="19" strokeLinejoin="miter"/>
                    <line fill="none" strokeWidth="3" strokeLinecap="square" strokeMiterlimit="10" x1="19" y1="19" x2="5" y2="5" strokeLinejoin="miter"/>
                  </g>
                </svg>
              </button>
            </div>
          )
        }
      </article>
    )
  }
}

Card.propTypes = {
  children: React.PropTypes.node,
  initialView: React.PropTypes.number,
  bgColor: React.PropTypes.string,
  basicCard: React.PropTypes.bool,
  controlsVisible: React.PropTypes.bool,
  indicator: React.PropTypes.string,
}

Card.defaultProps = {
  initialView: 0,
  bgColor: "",
  basicCard: false,
  controlsVisible: true,
}

export default Card
