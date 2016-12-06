
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
      <div>
        <input type="text"
               className={this.state.isFocused ? "textfield textfield--focused px0 py05" : "textfield px0 py05"}
               placeholder={this.state.placeholder}
               onChange={this.props.onChange}
               onFocus={this.handleFocus}
               onBlur={this.handleBlur}
               />
      </div>
    )
  }
}

export default Textfield
