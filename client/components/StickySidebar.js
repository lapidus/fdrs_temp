
import React from 'react'
import ReactIScroll from 'react-iscroll'
var iScroll = require('iscroll');

class StickySidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stickyTrigger: 0,
      isSticky: false,
      bottomStick: false,
      width: 0,
      height: 0,
      left: 0,
      wrapperHeight: 0,
    };

    this.affixSidebar = this.affixSidebar.bind(this);
    this.defixSidebar = this.defixSidebar.bind(this);
    this.setDimensions = this.setDimensions.bind(this);
    this.resizeHandler = this.resizeHandler.bind(this);
  }
  affixSidebar() {
    if(this.state.bottomStick) {
      if(this.state.wrapperHeight + this.state.stickyTrigger - window.pageYOffset - window.innerHeight - 48 > 0) {
        this.setState({isSticky: true, bottomStick: false}, () => {
          window.removeEventListener('scroll', this.affixSidebar);
          window.addEventListener('scroll', this.defixSidebar);
        });
      }
    }
    else if(this.state.stickyTrigger <= window.pageYOffset) {
      this.setState({isSticky: true}, () => {
        window.removeEventListener('scroll', this.affixSidebar);
        window.addEventListener('scroll', this.defixSidebar);
      });
    }
  }
  defixSidebar() {
    if(this.state.wrapperHeight + this.state.stickyTrigger - window.pageYOffset - window.innerHeight - 48 < 0) {
      this.setState({isSticky: false, bottomStick: true}, () => {
        window.removeEventListener('scroll', this.defixSidebar);
        window.addEventListener('scroll', this.affixSidebar);
      });
    }
    if(this.state.stickyTrigger >= window.pageYOffset) {
      this.setState({isSticky: false, bottomStick: false}, () => {
        window.removeEventListener('scroll', this.defixSidebar);
        window.addEventListener('scroll', this.affixSidebar);
      });
    }
  }
  setDimensions() {
    const height = window.innerHeight - 32;
    const wrapperHeight = this.stickyElementWrapper.parentElement.nextElementSibling.offsetHeight;

    this.setState({
      stickyTrigger: this.stickyElementWrapper.getBoundingClientRect().top + window.pageYOffset,
      width: this.stickyElementWrapper.offsetWidth,
      height: height,
      wrapperHeight: wrapperHeight,
      left: this.stickyElementWrapper.getBoundingClientRect().left,
    });
  }
  resizeHandler() {
    this.setDimensions();
  }
  componentDidMount() {
    this.setDimensions();
    window.addEventListener('scroll', this.affixSidebar);
    window.addEventListener('resize', this.resizeHandler);
  }
  onScrollStart() {
    // console.log("iScroll starts scrolling")
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.affixSidebar);
    window.removeEventListener('scroll', this.defixSidebar);
    window.removeEventListener('resize', this.resizeHandler);
  }
  render() {

    const wrapperStyles = {
      position: 'relative',
      height: this.state.wrapperHeight - 64
    }

    const stickyStyles = {
      position: this.state.isSticky ? 'fixed' : (this.state.bottomStick ? 'absolute' : 'relative'),
      left: this.state.isSticky ? this.state.left : 0,
      width: this.state.width,
      height: this.state.height,
      overflow: 'hidden',
    }

    return (
      <div
        ref={(stickyElementWrapper) => { this.stickyElementWrapper = stickyElementWrapper; }}
        style={wrapperStyles}
        >
        <div
          ref={(stickyElement) => { this.stickyElement = stickyElement; }}
          className={`${this.props.className} ${this.state.bottomStick ? "pb2 b0" : "pb2 t1"}`}
          style={stickyStyles}
          >
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default StickySidebar;
