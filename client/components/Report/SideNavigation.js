
import React from 'react';
import ReactDOM from 'react-dom';

class SideNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSticky: false,
      offset: 100,
      bottomLimit: 100,
      top: 0,
      bottom: 'initial',
      scrollSpyBreakpoints: [],
      scrollSpyCurrent: null
    };

    this.stick = this.stick.bind(this);
    this.unstick = this.unstick.bind(this);
    this.resize = this.resize.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
    this.updateScrollSpy = this.updateScrollSpy.bind(this);
  }
  componentDidMount() {
    // Timeout is necessary because images change the height of the parent
    // element, resulting in jumping behaviour at the bottom of the page
    setTimeout(() => {
      var elem = ReactDOM.findDOMNode(this);
      var parent = elem.parentElement;

      var scrollSpyBreakpoints = this.props.sectionReferences.map((reference, i) => {
        var referenceElement = document.getElementById(reference);
        // return referenceElement.offsetParent.offsetTop + referenceElement.offsetTop;
        return window.pageYOffset + referenceElement.getBoundingClientRect().top;
      });

      this.setState({
        offset: parent.offsetTop - 100,
        bottomLimit: parent.offsetTop + parent.offsetHeight - (elem.offsetHeight + 100),
        scrollSpyBreakpoints: scrollSpyBreakpoints
      });

      window.addEventListener('scroll', this.stick);
      window.addEventListener('scroll', this.updateScrollSpy);
      window.addEventListener('resize', this.resize);

    }, 10);
  }
  resize() {
    var elem = ReactDOM.findDOMNode(this);
    var parent = elem.parentElement;

    var breakpoints = this.props.sectionReferences.map((reference, i) => {
      var referenceElement = document.getElementById(reference);
      // return reference.offsetParent.offsetTop + reference.offsetTop;
      return window.pageYOffset + referenceElement.getBoundingClientRect().top;
    });

    var currentBreakpoint = this.state.scrollSpyCurrent;

    for (var i = 0; i < breakpoints.length; i++) {
      currentBreakpoint = window.pageYOffset >= (breakpoints[i] - 72) ? i : window.pageYOffset < (breakpoints[0] - 72) ? null : currentBreakpoint;
    }

    this.setState({
      offset: parent.offsetTop - 100,
      bottomLimit: parent.offsetTop + parent.offsetHeight - (elem.offsetHeight + 100),
      scrollSpyCurrent: currentBreakpoint,
      scrollSpyBreakpoints: breakpoints
    });
  }
  stick() {
    if(window.pageYOffset > this.state.offset && window.pageYOffset < this.state.bottomLimit) {
      this.setState({
        isSticky: true,
        top: 100,
        bottom: 'initial'
      });
      window.removeEventListener('scroll', this.stick);
      window.addEventListener('scroll', this.unstick);
    }
  }
  unstick() {
    if(window.pageYOffset < this.state.offset) {
      this.setState({
        isSticky: false,
        top: 0,
        bottom: 'initial'
      });
      window.removeEventListener('scroll', this.unstick);
      window.addEventListener('scroll', this.stick);
    }
    if(window.pageYOffset > this.state.bottomLimit) {
      this.setState({
        isSticky: false,
        top: 'initial',
        bottom: 0
      });
      window.removeEventListener('scroll', this.unstick);
      window.addEventListener('scroll', this.stick);
    }
  }
  scrollTo(sectionTarget) {
    var targetSection = document.getElementById('scroll-target-section' + (sectionTarget + 1));
    window.scroll(0, targetSection.offsetParent.offsetTop + targetSection.offsetTop - 71);
  }
  updateScrollSpy() {
    var breakpoints = this.state.scrollSpyBreakpoints;
    var currentBreakpoint = this.state.scrollSpyCurrent;

    for (var i = 0; i < breakpoints.length; i++) {
      currentBreakpoint = window.pageYOffset >= (breakpoints[i] - 72) ? i : window.pageYOffset < (breakpoints[0] - 72) ? null :  currentBreakpoint;
    }

    if(currentBreakpoint !== this.state.scrollSpyCurrent) {
      this.setState({scrollSpyCurrent: currentBreakpoint});
    }

  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.stick);
    window.removeEventListener('scroll', this.unstick);
    window.removeEventListener('scroll', this.updateScrollSpy);
    window.removeEventListener('resize', this.resize);
  }
  render() {
    return (
      <div className='side-navigation sm-7 sm-offset-3 md-3 md-offset-0 lg-2 px1 py2 md-visible' ref='sticker' style={{position:this.state.isSticky ? 'fixed' : 'absolute', top: this.state.top, bottom: this.state.bottom }}>
        <h4 className='title strong'>{this.props.title}</h4>
        <ul style={{fontSize:'1rem'}}>
          {this.props.sections.map((section, i) => {
            return (
              <li key={i} className={this.state.scrollSpyCurrent == i ? 'scroll-spy active' : 'scroll-spy'} onClick={() => {this.scrollTo(i)}}>
                {section.title.length > 40 ? `${section.title.slice(0,40)}...` : section.title }
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = SideNavigation;
