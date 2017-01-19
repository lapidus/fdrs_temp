
import React from "react"

class Dropdown extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showDropdown: props.showDropdown
    }

    this.showDropdown = this.showDropdown.bind(this)
    this.hideDropdown = this.hideDropdown.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.showDropdown !== this.props.showDropdown) {
      this.setState({ showDropdown: nextProps.showDropdown })
    }
  }
  showDropdown() {
    this.setState({ showDropdown: true })
  }
  hideDropdown() {
    this.setState({ showDropdown: false })
  }
  render() {

    const dropdownStyles = {
      opacity: this.state.showDropdown || this.props.navOpen ? 1 : 0,
      pointerEvents: this.state.showDropdown || this.props.navOpen ? "all" : "none",
    }

    return (
      <span onMouseEnter={ this.showDropdown } onMouseLeave={ this.hideDropdown } onClick={ this.hideDropdown }>
        { this.props.children[0] }
        <div style={ dropdownStyles }>
          { this.props.children[1] }
        </div>
      </span>
    )
  }
}

export default Dropdown
