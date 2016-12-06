
import React from 'react'
import ReactIScroll from 'react-iscroll'
// import iScroll from 'iscroll'
var iScroll = require('iscroll');

// style={{
//   position: this.state.isSticky ? 'fixed' : (this.state.bottomStick ? 'absolute' : 'relative'),
//   left: this.state.isSticky ? this.state.left : 0,
//   width: this.state.width,
//   height: this.state.height,
//   overflow: 'scroll',
//   borderBottom: '32px solid rgb(246, 244, 242)',
//   borderTop: '16px solid rgb(246, 244, 242)'
// }}

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

    // Needs a better approach, like the followig:

    // 1. Start with the height of the sticky element
    const height = window.innerHeight - 32;
    // 2. Determine parent height based on sibling reference element
    const wrapperHeight = this.stickyElementWrapper.parentElement.nextElementSibling.offsetHeight;
    // 3. Establish page y offset
    // 4. ...

    this.setState({
      stickyTrigger: this.stickyElementWrapper.getBoundingClientRect().top + window.pageYOffset,
      width: this.stickyElementWrapper.offsetWidth,
      // height: this.stickyElement.offsetHeight,
      height: height,
      // wrapperHeight: this.stickyElementWrapper.parentElement.nextElementSibling.offsetHeight,
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
    console.log("iScroll starts scrolling")
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.affixSidebar);
    window.removeEventListener('scroll', this.defixSidebar);
    window.removeEventListener('resize', this.resizeHandler);
  }
  render() {
    return (
      <div ref={(stickyElementWrapper) => { this.stickyElementWrapper = stickyElementWrapper; }}
           style={{
             position: 'relative',
             height: this.state.wrapperHeight - 64
           }}
        >
        <div ref={(stickyElement) => { this.stickyElement = stickyElement; }}
          className={this.props.className + ' ' + (this.state.bottomStick ? 'bg-secondary pb2 b0' : 'bg-secondary pb2 t1')}
          style={{
            position: this.state.isSticky ? 'fixed' : (this.state.bottomStick ? 'absolute' : 'relative'),
            left: this.state.isSticky ? this.state.left : 0,
            width: this.state.width,
            height: this.state.height,
            overflow: 'hidden',
          }}
          >
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default StickySidebar;
