
import React from 'react';
import { connect } from 'react-redux';

class Loader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{opacity: `${this.props.showLoader && this.props.loadProgress > 0 ? '1' : '0'}`, position:'fixed', top:0, left:0,width:'100%',height:'3px',zIndex:9999999999}}>
        <div style={{height:'3px',background:'#EE3224',transition:'all 0.3s',width:`${this.props.loadProgress}%`}}></div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    showLoader: state.appReducer.showLoader,
    loadProgress: state.appReducer.loadProgress,
  }
}

export default connect(mapStateToProps)(Loader)
