
import React from 'react';

const Slant = ({ slantType, className }) => (
  <div>
    {
      slantType == 'start' ? (
        <svg width='100%' viewBox='0 0 1440 145'>
          <polygon points='0 0 1440 145 0 145 0 0' className={ className || 'fill-beige' } />
        </svg>
      ) : (
        <svg width='100%' viewBox='0 0 1440 145'>
          <polygon points='0 0 1440 0 1440 145 0 0' className={ className || 'fill-beige' } />
        </svg>
      )
    }

  </div>
);

export default Slant;
