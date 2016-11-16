
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import { startMainLoad, endMainLoad } from './actions/appActions';

import Chapter1 from './components/views/chapters/Chapter1';
import Chapter2 from './components/views/chapters/Chapter2';
import Chapter3 from './components/views/chapters/Chapter3';
import Chapter4 from './components/views/chapters/Chapter4';
import Chapter5 from './components/views/chapters/Chapter5';
import Chapter6 from './components/views/chapters/Chapter6';
import Chapter7 from './components/views/chapters/Chapter7';
import Chapter8 from './components/views/chapters/Chapter8';
import Chapter9 from './components/views/chapters/Chapter9';

import Acknowledgements from './components/views/Acknowledgements';
import DataView from './components/views/DataView';
import Home from './components/views/Home';

// class LanguageRouteComponent extends React.Component {
//   render() {
//     return (<div>{this.props.children}</div>);
//   }
// }

var LanguageRouteComponent = (props) => (
  <div>{props.children}</div>
);

function createLanguageRoute(lang) {
  return (
    <Route path={lang} component={LanguageRouteComponent}>
      <IndexRoute component={Home} />
      <Route path='who-we-are' component={Chapter1}/>
      <Route path='what-we-do' component={Chapter2} />
      <Route path='living-our-fundamental-principles' component={Chapter3} />
      <Route path='strategic-aim-1' component={Chapter4} />
      <Route path='strategic-aim-2' component={Chapter5} />
      <Route path='strategic-aim-3' component={Chapter6} />
      <Route path='enabling-action-1' component={Chapter7} />
      <Route path='enabling-action-2' component={Chapter8} />
      <Route path='enabling-action-3' component={Chapter9} />
      <Route path='acknowledgements' component={Acknowledgements} />
      <Route path='data' component={DataView} />
    </Route>
  );
}

var routes = (
  <Route path='/' component={require('./components/App')}>
    {/*createLanguageRoute('ar')*/}
    {createLanguageRoute('fr')}
    {createLanguageRoute('es')}
    <IndexRoute component={Home} />
    <Route path='who-we-are' component={Chapter1}/>
    <Route path='what-we-do' component={Chapter2} />
    <Route path='living-our-fundamental-principles' component={Chapter3} />
    <Route path='strategic-aim-1' component={Chapter4} />
    <Route path='strategic-aim-2' component={Chapter5} />
    <Route path='strategic-aim-3' component={Chapter6} />
    <Route path='enabling-action-1' component={Chapter7} />
    <Route path='enabling-action-2' component={Chapter8} />
    <Route path='enabling-action-3' component={Chapter9} />
    <Route path='acknowledgements' component={Acknowledgements} />
    <Route path='data' component={DataView} />
  </Route>
);

export default routes;
