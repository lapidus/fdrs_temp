
import React from 'react';
import { Link } from 'react-router';
import Icon from '../components/Icon';
import prefixLanguageToRoute from './prefixLanguageToRoute';



class NextChapter extends React.Component {
  render() {
    return (
      <div className='clearfix py2 bg-secondary'>
        <div className='col sm-6 sm-offset-6 px1'>
          { /* <p>{this.props.nextChapter.subtitle}</p> */ }
          <p>{this.props.nextChapter.heading}</p>
          <h2 className='display-1'>
            <Link to={prefixLanguageToRoute(this.context.language,`/${this.props.nextChapter.slug}`)}>
              {this.props.nextChapter.title} <Icon name='goto' width={30} height={30}/>
            </Link>
          </h2>
        </div>
      </div>
    );
  }
}

NextChapter.contextTypes = {
  language: React.PropTypes.string
};

module.exports = NextChapter;
