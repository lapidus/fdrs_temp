
import React from "react"

class Textfield extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isFocused: false,
      placeholder: this.props.placeholder,
    }

    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }
  handleFocus() {
    this.setState({ isFocused: true, placeholder: "e.g. Swedish Red Cross" })
  }
  handleBlur() {
    this.setState({ isFocused: false, placeholder: this.props.placeholder })
  }
  render() {
    return (
      <div className="relative">
        <div className="absolute t50 y-center-self" style={{left:6}}>
          <svg className="align-middle" style={{width:16,height:16,marginTop:-1}} width="16px" height="16px" viewBox="0 0 24 24">
            <g  transform="translate(0, 0)" style={{stroke:"currentColor"}}>
              <line fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" x1="22" y1="22" x2="16.4" y2="16.4" strokeLinejoin="miter"/>
              <circle fill="none" stroke="inherit" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" cx="10" cy="10" r="9" strokeLinejoin="miter"/>
            </g>
          </svg>
        </div>
        <input type="text"
               className={this.state.isFocused ? "textfield textfield--focused px0 py05 pl2" : "textfield px0 py05 pl2"}
               placeholder={this.state.placeholder}
               onChange={this.props.onChange}
               onFocus={this.handleFocus}
               onBlur={this.handleBlur}
               value={this.props.value}
               />
      </div>
    )
  }
}

export default Textfield
