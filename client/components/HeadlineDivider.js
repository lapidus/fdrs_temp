
import React from 'react';

class HeadlineDivider extends React.Component {
  render() {
    return (
      <div className='headline-divider'>
        <svg viewBox='0 0 30 20'>
          <polyline points='2 0 2 16 20 2 30 2' strokeWidth={4} stroke='#EE3224' fill='transparent'></polyline>
          { /* <polyline points='0 2 10 2 28 16 28 2 28 0' strokeWidth={4} stroke='#EE3224' fill='transparent'></polyline> */ }
        </svg>
      </div>
    );
  }
}

module.exports = HeadlineDivider;
