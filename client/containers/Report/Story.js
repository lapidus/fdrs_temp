
import React from 'react';
import { connect } from 'react-redux';

import { VictoryChart, VictoryAxis, VictoryBar, VictoryScatter } from 'victory';

import Reveal from '../Reveal';
import { changeDataset, fetchDatasets } from '../../actions/storyActions';

class Story extends React.Component {
  constructor(props) {
    super(props);

    this.state = { chartWidth: 400 }

    this.changeDataset = this.changeDataset.bind(this);
    this.updateChartDimensions = this.updateChartDimensions.bind(this);
  }
  componentDidMount() {
    this.setState({
      chartWidth: this.refs.chartContainer.clientWidth - 32
    });
    window.addEventListener('resize', this.updateChartDimensions);
  }
  updateChartDimensions() {
    this.setState({chartWidth: this.refs.chartContainer.clientWidth - 32});
  }
  changeDataset() {
    var newDataset = this.props.currentDataset === 1 ? 0 : 1;
    this.props.changeDataset(newDataset);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateChartDimensions);
  }
  render() {
    return (
      <div className='body-text'>

        <div className='bg--primary clearfix'>
          <div className='col sm-10 sm-offset-1 md-8 md-offset-2 px1 pt3'>
            <h1>Data Story</h1>
            <p className='lead'>A First Look At A Story Concept</p>
          </div>
        </div>

        <div className='clearfix'>
          <div className='col sm-10 sm-offset-1 md-8 md-offset-2'>
            <div className='col sm-12 px1 pt2 pb1'>
              <p className='lead'>The two column layout used for the Millions Saved online report seems to have worked really well, and I would like to keep using it for data stories. Here is an example of what a data story could look like. With the simplest of tools we can create something that is really nice to look at, and fun to work with.</p>
            </div>
            <div className='col sm-6 px1'>
              <h3>A Smaller Heading for this Section</h3>
              <p>The two column layout used for the Millions Saved online report seems to have worked really well, and I would like to keep using it for data stories. Here is an example of what a data story could look like. With the simplest of tools we can create something that is really nice to look at, and fun to work with.</p>
              <p>Here is an example of what a data story could look like. With the simplest of tools we can create something that is really nice to look at, and fun to work with. The two column layout used for the Millions Saved online report seems to have worked really well, and I would like to keep using it for data stories. Let us just add a little bit of text here, to differentiate the two paragraphs ever so slightly.</p>
              <p>The two column layout used for the Millions Saved online report seems to have worked really well, and I would like to keep using it for data stories. Here is an example of what a data story could look like. With the simplest of tools we can create something that is really nice to look at, and fun to work with.</p>
            </div>
            <div className='col sm-6 px1' ref='chartContainer'>
              <VictoryChart width={this.state.chartWidth} domainPadding={{x: 120, y: 20}} animate={{velocity: 0.02}}>
                { /* <VictoryBar data={this.props.dataset} style={{data:{stroke:'#fff',strokeWidth:'6px',width:13}}}/> */ }
                <VictoryBar data={this.props.dataset}/>
                <VictoryAxis dependentAxis domain={[0,4000]} style={{axis: {stroke: 'transparent'}, ticks: {stroke: 'transparent'}, tickLabels: {fill: 'transparent'}}}/>
                <VictoryAxis style={{axis: {stroke: '#dCdFe1'}, ticks: {stroke: 'transparent'}, tickLabels: {fill: '#607D8B'}}}/>
              </VictoryChart>
              <div style={{textAlign: 'center'}}>
                <button onClick={this.changeDataset} className='btn is-raised bg--primary'>Change Data</button><br /><br />
                <p><small>The above chart shows the GDP of three countries in Western Africa. Click the button to see the changes between 2011 and 2012.</small></p>
              </div>
            </div>
          </div>
        </div>

        <Reveal offset={600}>
          <div className='clearfix'>
            <div className='col sm-10 sm-offset-1 md-8 md-offset-2'>
              <div className='col sm-6 px1'>
                <VictoryChart width={this.state.chartWidth} domainPadding={{x: 120, y: 20}} animate={{velocity: 0.02}}>
                  <VictoryAxis dependentAxis domain={[0,4000]} style={{axis: {stroke: 'transparent'},ticks: {stroke: 'transparent'}, tickLabels: { fill: 'transparent' }}}/>
                  <VictoryScatter data={this.props.dataset}/>
                </VictoryChart>
                <div style={{textAlign: 'center'}}>
                  <button onClick={this.changeDataset} className='btn'>Change Data</button><br /><br />
                  <p><small>The above chart shows the GDP of three countries in Western Africa. Click the button to see the changes between 2011 and 2012.</small></p>
                </div>
              </div>
              <div className='col sm-6 px1'>
                <p>Here is an example of what a data story could look like. With the simplest of tools we can create something that is really nice to look at, and fun to work with. The two column layout used for the Millions Saved online report seems to have worked really well, and I would like to keep using it for data stories. Let us just add a little bit of text here, to differentiate the two paragraphs ever so slightly.</p>
                <p>The two column layout used for the Millions Saved online report seems to have worked really well, and I would like to keep using it for data stories. Here is an example of what a data story could look like. With the simplest of tools we can create something that is really nice to look at, and fun to work with. Here is an example of what a data story could look like.</p>
                <p>Let us just add a little bit of text here, to differentiate the two paragraphs ever so slightly. Here is an example of what a data story could look like.</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal offset={600}>
          <div className='clearfix'>
            <div className='col sm-10 sm-offset-1 md-8 md-offset-2'>
              <div className='col sm-9 px1'>
                <blockquote>
                  The traditional mathematician recognizes and appreciates mathematical elegance when he sees it. I propose to go one step further, and to consider elegance an essential ingredient of mathematics: if it is clumsy, it is not mathematics.
                  <footer>
                    <cite><a href='http://www.brainyquote.com/quotes/authors/e/edsger_dijkstra.html'>Edsger W. Dijkstra</a></cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal offset={600}>
          <div className='clearfix'>
            <div className='col sm-10 sm-offset-1 md-8 md-offset-2'>
              <div className='col sm-6 px1'>
                <p>The two column layout used for the Millions Saved online report seems to have worked really well, and I would like to keep using it for data stories. Here is an example of what a data story could look like. With the simplest of tools we can create something that is really nice to look at, and fun to work with.</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal offset={600}>
          <div className='clearfix'>
            <div className='col sm-10 sm-offset-1 md-8 md-offset-2'>
              <div className='col sm-6 px1'>
                <p>With the simplest of tools we can create something that is really nice to look at, and fun to work with. The two column layout used for the Millions Saved online report seems to have worked really well, and I would like to keep using it for data stories. Let us just add a little bit of text here, to differentiate the two paragraphs ever so slightly.</p>
              </div>
              <div className='col sm-6 px1'>
                <p>Here is an example of what a data story could look like. With the simplest of tools we can create something that is really nice to look at, and fun to work with. The two column layout used for the Millions Saved online report seems to have worked really well, and I would like to keep using it for data stories. Let us just add a little bit of text here, to differentiate the two paragraphs ever so slightly. Here is an example of what a data story could look like.</p>
                <ul>
                  <li>Lists are useful</li>
                  <li>They look fairly ok</li>
                  <li>If thought out properly, they scale well</li>
                </ul>
                <p>The two column layout used for the Millions Saved online report seems to have worked really well, and I would like to keep using it for data stories. Here is an example of what a data story could look like. With the simplest of tools we can create something that is really nice to look at, and fun to work with.</p>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    );
  }
}

Story.needs = [ fetchDatasets ];

function mapStateToProps(state) {
  return {
    currentDataset: state.storyReducer.currentDataset,
    dataset: state.storyReducer.datasets[state.storyReducer.currentDataset]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeDataset: (id) => {
      dispatch(changeDataset(id));
    }
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Story);
module.exports = connect(mapStateToProps, mapDispatchToProps)(Story);
