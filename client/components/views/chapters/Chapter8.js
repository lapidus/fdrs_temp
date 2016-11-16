
import React from 'react';
import { connect } from 'react-redux';
import { fetchChapter } from '../../../actions/chapterActions';
import BreadCrumbs from '../../Breadcrumbs';
import HeadlineDivider from '../../HeadlineDivider';

import NextChapter from '../../../utils/NextChapter';
import SideNavigation from '../../SideNavigation';
import LineChart from '../../charts/LineChart';

import WorldMap from '../../charts/WorldMap';

class Chapter8 extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('Mounted Enabling Action 2');
  }
  shouldComponentUpdate(newProps, newState, newContext) {
    var newDataAvailable = newProps.content[newContext.language].chapters['enabling-action-2'] !== undefined;
    var sameData = this.props.content[this.context.language].chapters['enabling-action-2'] === newProps.content[newContext.language].chapters['who-we-are'];
    return newDataAvailable && !sameData;
  }
  bubbleCallback(response) {
    return [
      {
        name: 'Peru',
        latitude: -9.189967,
        longitude: -75.015152,
        radius: 6,
        fillKey: 'bubbleFill'
      },
      {
        name: 'Jamaica',
        latitude: 18.109581,
        longitude: -77.297508,
        radius: 6,
        fillKey: 'bubbleFill'
      },
      {
        name: 'Austria',
        latitude: 47.516231,
        longitude: 14.550072,
        radius: 6,
        fillKey: 'bubbleFill'
      },
      {
        name: 'Indonesia',
        latitude: -6.208763,
        longitude: 106.845599,
        radius: 6,
        fillKey: 'bubbleFill'
      }
    ];
  }
  render() {

    var chapter = this.props.content[this.context.language].chapters['enabling-action-2'];

    var section1 = chapter.sections[0];
    var section2 = chapter.sections[1];
    var section3 = chapter.sections[2];
    var section4 = chapter.sections[3];

    return (
      <div>
        <div className='clearfix bg-primary-dark'>
          <div className='col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py1'>
            <BreadCrumbs chapter={chapter} language={this.context.language}/>
          </div>
        </div>

        <div className='clearfix bg-primary pt1'>
          <div className='col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3'>
            <h2 className='display-2'>{chapter.title}</h2>
            <p className='title'>{chapter.subtitle}</p>
          </div>
        </div>

        <div className='clearfix bg-dark chapter-banner' style={{backgroundImage:'url(/img/chapters/chapter-8.jpg)',backgroundSize:'cover',backgroundPosition:'center 50%',backgroundRepeat:'no-repeat'}}>
          <div className='col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3'>
            <p className='lead'>{chapter.intro}</p>
            <hr />
          </div>
        </div>

        <div className='clearfix body-text' style={{position:'relative'}}>

          <SideNavigation title={chapter.title} sections={chapter.sections} sectionReferences={['scroll-target-section1','scroll-target-section2','scroll-target-section3','scroll-target-section4']}/>

          <div className='clearfix' id='scroll-target-section1'>
            <div className='col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2'>
              <p>{section1.blocks[0]}</p>
              <ul>
                {section1.blocks[1].map((item, i) => {
                  return <li key={i}>{item}</li>
                })}
              </ul>
              <p>{section1.blocks[2]}</p>
            </div>
          </div>

          <div className='clearfix' id='scroll-target-section2'>
            <div className='col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2'>
              <p className='small strong color-primary caps'>{chapter.title}</p>
              <h3 className='headline'>{section2.title}</h3>
              <HeadlineDivider />
              <p>{section2.blocks[0]}</p>
            </div>
          </div>

          <div className='clearfix' id='scroll-target-section3'>
            <div className='col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2'>
              <p className='small strong color-primary caps'>{chapter.title}</p>
              <h3 className='headline'>{section3.title}</h3>
              <HeadlineDivider />
              <p>{section3.blocks[0]}</p>
            </div>
          </div>

          <div className='clearfix'>
            <div className='col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-7 lg-offset-2 pb2'>
              <WorldMap
                title={section3.blocks[1].title}
                caption={section3.blocks[1].caption}
                bubbleSource={false}
                bubbleCallback={this.bubbleCallback}
                />
              <div className='clearfix'>
                {section3.blocks[1].items.map((item, i) => {
                  return (
                    <div key={i} className='col md-6 lg-3 pr2'>
                      <p className='subhead strong'>{item.country}</p>
                      <p className='small'>{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className='clearfix'>
            <div className='col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2'>
              <p>{section3.blocks[2]}</p>
            </div>
          </div>


          <div className='clearfix' id='scroll-target-section4'>
            <div className='col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2'>
              <p className='small strong color-primary caps'>{chapter.title}</p>
              <h3 className='headline'>{section4.title}</h3>
              <HeadlineDivider />
              <p>{section4.blocks[0]}</p>
            </div>
          </div>

          <div className='clearfix'>
            <div className='col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-4 lg-offset-2 pb2'>
              <LineChart
                title={section4.blocks[1].title}
                caption={section4.blocks[1].caption}
                height={480}
                padding={{
                  top: 30,
                  bottom: 40,
                  left: 80,
                  right: 60
                }}
                domain={{
                  x: [new Date(2009,1,1), new Date(2015,1,1)],
                  y: [0,25000000]
                }}
                axisLabels={section4.blocks[1].axisLabels}
                dataset={[[
                  {x: new Date(2010,1,1), y: 7444228},
                  {x: new Date(2011,1,1), y: 8561015},
                  {x: new Date(2012,1,1), y: 8590604},
                  {x: new Date(2013,1,1), y: 9766893},
                  {x: new Date(2014,1,1), y: 8884783}
                ],[
                  {x: new Date(2010,1,1), y: 1507782},
                  {x: new Date(2011,1,1), y: 2422085},
                  {x: new Date(2012,1,1), y: 2653814},
                  {x: new Date(2013,1,1), y: 4020726},
                  {x: new Date(2014,1,1), y: 2938558}
                ],[
                  {x: new Date(2013,1,1), y: 12998671},
                  {x: new Date(2014,1,1), y: 23268122}
                ],[
                  {x: new Date(2013,1,1), y: 4779438},
                  {x: new Date(2014,1,1), y: 11612597}
                ],[
                  {x: new Date(2010,1,1), y: 498454},
                  {x: new Date(2011,1,1), y: 522033},
                  {x: new Date(2012,1,1), y: 448753},
                  {x: new Date(2013,1,1), y: 464628},
                  {x: new Date(2014,1,1), y: 539588}
                ],[
                  {x: new Date(2013,1,1), y: 145000},
                  {x: new Date(2014,1,1), y: 310000}
                ]]}
                labels={section4.blocks[1].lineLabels}
              />
            </div>
            <div className='col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-4 lg-offset-0 pb2'>
              <p>{section4.blocks[2]}</p>
            </div>
          </div>

        </div>

        <NextChapter nextChapter={chapter.nextChapter} />
      </div>
    );
  }
}

Chapter8.needs = [ fetchChapter ];

Chapter8.contextTypes = {
  language: React.PropTypes.string
};

function mapStateToProps(state) {
  return {
    // language: state.appReducer.language,
    content: {
      en: state.chapterReducer.en,
      fr: state.chapterReducer.fr,
      es: state.chapterReducer.es,
      ar: state.chapterReducer.ar
    }
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     changeDataset: (id) => {
//       dispatch(changeDataset(id));
//     }
//   }
// }

module.exports = connect(mapStateToProps)(Chapter8);
