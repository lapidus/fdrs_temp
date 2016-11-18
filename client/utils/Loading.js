
import React from 'react';

class Loading extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='loading-circle'><div className='loading-text'>loading</div></div>
    );
  }
}

export default Loading;
