
import React from 'react';
import { Link } from 'react-router';

import prefixLanguageToRoute from '../utils/prefixLanguageToRoute';

class BreadCrumbs extends React.Component {
  render() {
    return (
      <div>
        <Link to={prefixLanguageToRoute(this.props.language,'/')}><span>Home</span></Link>&nbsp;&nbsp;&nbsp;›&nbsp;&nbsp;&nbsp;{this.props.chapter.title}
      </div>
    );
  }
}

module.exports = BreadCrumbs;
