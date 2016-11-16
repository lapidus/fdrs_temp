
import React from 'react';
import ReactDOM from 'react-dom';

import debounce from '../utils/debounce';

class Reveal extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Reveal';

    this.state = {
      revealed: false,
      triggerOffset: undefined
    };

    this.reveal = this.reveal.bind(this);
    this.unreveal = this.unreveal.bind(this);
    this.resize = this.resize.bind(this);
  }

  componentDidMount() {

    var offset = window.innerHeight * 0.8;

    var bodyOffset = document.body.getBoundingClientRect().top;
    var initialTriggerOffset = ReactDOM.findDOMNode(this).getBoundingClientRect().top - bodyOffset - offset;
    var initiallyRevealed = window.pageYOffset > initialTriggerOffset;

    this.setState({
      triggerOffset: initialTriggerOffset,
      revealed: initiallyRevealed ? true : false
    });

    window.addEventListener('scroll', initiallyRevealed ? this.unreveal : this.reveal);
    window.addEventListener('resize', this.resize);
  }

  reveal() {
    if(window.pageYOffset > this.state.triggerOffset) {
      this.setState({revealed:true});
      window.removeEventListener('scroll', this.reveal);
      window.addEventListener('scroll', this.unreveal);
    }
  }

  unreveal() {
    if(window.pageYOffset < this.state.triggerOffset) {
      this.setState({revealed:false});
      window.removeEventListener('scroll', this.unreveal);
      window.addEventListener('scroll', this.reveal);
    }
  }

  resize() {

    var offset = window.innerHeight * 0.8;

    var bodyOffset = document.body.getBoundingClientRect().top;
    var initialTriggerOffset = ReactDOM.findDOMNode(this).getBoundingClientRect().top - bodyOffset - offset;
    var initiallyRevealed = window.pageYOffset > initialTriggerOffset;

    this.setState({
      triggerOffset: initialTriggerOffset,
      revealed: initiallyRevealed ? true : false
    });

    window.removeEventListener('scroll', !initiallyRevealed ? this.unreveal : this.reveal);
    window.addEventListener('scroll', initiallyRevealed ? this.unreveal : this.reveal);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.reveal);
    window.removeEventListener('scroll', this.unreveal);
    window.removeEventListener('resize', this.resize);
  }

  render() {

    var revealItemClass = this.props.customClassName || 'reveal-item',
        revealItemActiveClass = this.props.customClassNameActive || 'is-revealed';

    return <div className={this.state.revealed ? `${revealItemClass} ${revealItemActiveClass}` : `${revealItemClass}`}>{this.props.children}</div>;
  }
}

Reveal.defaultProps = {
  offset: 0
};

export default Reveal;
