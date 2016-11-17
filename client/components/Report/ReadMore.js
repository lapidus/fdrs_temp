
import React from 'react';
import { connect } from 'react-redux';

import HeadlineDivider from '../HeadlineDivider';

import Icon from '../Icon';

class ReadMore extends React.Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return this.context.language !== nextContext.language;
  }
  render() {
    return (
      <div>
        <div className='clearfix bg-primary pb2'>
          <div className='clearfix pt3 px1 sm-px0'>
            <div className='col sm-3 sm-offset-2'>
              <p className='small strong caps m0'>{this.props.content[this.context.language].home.downloadReportSection.preTitle}</p>
              <h2 className='display-1 mt0'>{this.props.content[this.context.language].home.downloadReportSection.title}</h2>
              <HeadlineDivider />
              <br />
              <br />
            </div>
          </div>
          <div className='clearfix pb3 px1 sm-px0'>
            <div className='col sm-4 sm-offset-2 pr2'>
              <img src="/img/cover.png" alt="" />
            </div>
            <div className='col sm-4'>
              <p className='lead'>{this.props.content[this.context.language].home.downloadReportSection.body}</p>
              <a className='btn py1' href={`/downloads/Everyone_counts_2013_en.pdf`} target="_blank">{this.props.content[this.context.language].home.downloadReportSection.buttons[0]} <Icon name='goto' /></a><br />
              <a className='btn py1' href={`/downloads/Everyone_counts_2013_fr.pdf`} target="_blank">{this.props.content[this.context.language].home.downloadReportSection.buttons[1]} <Icon name='goto' /></a><br />
              <a className='btn py1' href={`/downloads/Everyone_counts_2013_es.pdf`} target="_blank">{this.props.content[this.context.language].home.downloadReportSection.buttons[2]} <Icon name='goto' /></a><br />
              <a className='btn py1' href={`/downloads/Everyone_counts_2013_ar.pdf`} target="_blank">{this.props.content[this.context.language].home.downloadReportSection.buttons[3]} <Icon name='goto' /></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReadMore.contextTypes = {
  language: React.PropTypes.string
};

function mapStateToProps(state) {
  return {
    language: state.appReducer.language,
    content: {
      en: state.appReducer.en,
      fr: state.appReducer.fr,
      es: state.appReducer.es,
      ar: state.appReducer.ar
    }
  }
}
export default connect(mapStateToProps)(ReadMore)
