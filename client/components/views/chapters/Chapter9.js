
import React from 'react';
import { connect } from 'react-redux';
import { fetchChapter } from '../../../actions/chapterActions';
import BreadCrumbs from '../../Breadcrumbs';
import HeadlineDivider from '../../HeadlineDivider';

import { VictoryPie } from 'victory';
import NextChapter from '../../../utils/NextChapter';

import SideNavigation from '../../SideNavigation';
import SimpleBarChart from '../../charts/SimpleBarChart';
import LineChart from '../../charts/LineChart';
import DonutChart from '../../charts/DonutChart';

class Chapter9 extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('Mounted Enabling Action 3');
  }
  shouldComponentUpdate(newProps, newState, newContext) {
    var newDataAvailable = newProps.content[newContext.language].chapters['enabling-action-3'] !== undefined;
    var sameData = this.props.content[this.context.language].chapters['enabling-action-3'] === newProps.content[newContext.language].chapters['who-we-are'];
    return newDataAvailable && !sameData;
  }
  render() {

    var chapter = this.props.content[this.context.language].chapters['enabling-action-3'];

    var section1 = chapter.sections[0];
    var section2 = chapter.sections[1];
    var section3 = chapter.sections[2];
    var section4 = chapter.sections[3];
    var section5 = chapter.sections[4];
    var section6 = chapter.sections[5];
    var section7 = chapter.sections[6];

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

        <div className='clearfix bg-dark chapter-banner' style={{backgroundImage:'url(/img/chapters/chapter-9.jpg)',backgroundRepeat:'no-repeat',backgroundPosition:'center 50%', backgroundSize:'cover'}}>
          <div className='col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3'>
            <p className='lead'>{chapter.intro}</p>
            <hr />
          </div>
        </div>

        <div className='clearfix body-text' style={{position:'relative'}}>

          <SideNavigation title={chapter.title} sections={chapter.sections} sectionReferences={['scroll-target-section1','scroll-target-section2','scroll-target-section3','scroll-target-section4','scroll-target-section5','scroll-target-section6','scroll-target-section7']}/>

          <div className='clearfix' id='scroll-target-section1'>
            <div className='col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2'>
              <p>{section1.blocks[0]}</p>
              <p>{section1.blocks[1]}</p>
              <DonutChart
                title={section1.blocks[2].title}
                caption={section1.blocks[2].caption}
                maxSize={480}
                dataset={section1.blocks[2].dataset}/>
              <p>{section1.blocks[3]}</p>
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

          <div className='clearfix'>
            <div className='col px1 sm-px2 sm-8 sm-offset-2 md-4 md-offset-3 lg-4 lg-offset-2 pb2'>
              { /* <h4 className='title strong'>{section2.blocks[1].title}</h4> */ }
              <img src={`/img/chapters/9/accountability-wheel${this.context.language != 'en' ? '-' + this.context.language : ''}.jpg`} />
              { /* <img src='/img/chapters/9/accountability-wheel.jpg' /> */ }
              <p className='small'>{section2.blocks[1].caption}</p>
            </div>
            <div className='col px1 sm-px0 sm-8 sm-offset-2 md-4 md-offset-0 lg-4 lg-offset-0 pb2'>
              <p>{section2.blocks[2]}</p>
              <p>{section2.blocks[3]}</p>
            </div>
          </div>

          <div className='clearfix' id='scroll-target-section3'>
            <div className='col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2'>
              <p className='small strong color-primary caps'>{chapter.title}</p>
              <h3 className='headline'>{section3.title}</h3>
              <HeadlineDivider />
              <p>{section3.blocks[0]}</p>
              <p>{section3.blocks[1]}</p>
              <SimpleBarChart
                title={section3.blocks[2].title}
                caption={section3.blocks[2].caption}
                horizontal={true}
                height={300}
                data={section3.blocks[2].dataset}
                labels={(datum) => `${datum.xName} (${String(datum.y)})`}
                />
              <p>{section3.blocks[3]}</p>
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
            <div className='col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-7 lg-offset-2 pb2'>
              <h4 className='title strong'>{section4.blocks[1].title}</h4>
              <table>
                <thead>
                  <tr className='small'>
                    <th>Income level</th>
                    <th>%</th>
                    <th>-</th>
                    <th>Paid staff</th>
                    <th>%</th>
                    <th>-</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Above CHF 1 million</td>
                    <td>87%</td>
                    <td>-</td>
                    <td>Above 25</td>
                    <td>77%</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>Below CHF 1 million</td>
                    <td>55%</td>
                    <td>-</td>
                    <td>Below 25</td>
                    <td>47%</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>

              <p className='small'>{section4.blocks[1].caption}</p>
            </div>

            <div className='col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-7 lg-offset-2 pb2'>
              <h4 className='title strong'>{section4.blocks[2].title}</h4>
              <table>
                <thead>
                  <tr className='small'>
                    <th>Income level</th>
                    <th>%</th>
                    <th>-</th>
                    <th>Paid staff</th>
                    <th>%</th>
                    <th>-</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Above CHF 10 million</td>
                    <td>81%</td>
                    <td>-</td>
                    <td>Above 250</td>
                    <td>64%</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>Below CHF 10 million</td>
                    <td>42%</td>
                    <td>-</td>
                    <td>Below 250</td>
                    <td>36%</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>

              <p className='small'>{section4.blocks[2].caption}</p>
            </div>
          </div>

          <div className='clearfix'>
            <div className='col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2'>
              <p>{section4.blocks[3]}</p>
            </div>
          </div>

          <div className='clearfix' id='scroll-target-section5'>
            <div className='col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2'>
              <p className='small strong color-primary caps'>{chapter.title}</p>
              <h3 className='headline'>{section5.title}</h3>
              <HeadlineDivider />
              <p>{section5.blocks[0]}</p>
            </div>
          </div>

          <div className='clearfix'>
            <div className='col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 pb2'>
              <div className='bg-secondary p2'>
                <h4 className='title strong'>{section5.blocks[1]}</h4>
                <p>{section5.blocks[2]}</p>
                <p>{section5.blocks[3]}</p>
              </div>
            </div>
          </div>

          <div className='clearfix' id='scroll-target-section6'>
            <div className='col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2'>
              <p className='small strong color-primary caps'>{chapter.title}</p>
              <h3 className='headline'>{section6.title}</h3>
              <HeadlineDivider />
              <p>{section6.blocks[0]}</p>
            </div>
          </div>

          <div className='clearfix'>
            <div className='col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-4 lg-offset-2 pb2'>
              <SimpleBarChart
                title={section6.blocks[1].title}
                caption={section6.blocks[1].caption}
                horizontal={true}
                height={360}
                data={section6.blocks[1].dataset}
                labels={(datum) => `${datum.xName} ${String(datum.y)}`}
                />
            </div>
            <div className='col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-4 lg-offset-0 pb2'>
              <p>{section6.blocks[2]}</p>
              <p>{section6.blocks[3]}</p>
            </div>
          </div>

          <div className='clearfix'>
            <div className='col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2'>
              <p>{section6.blocks[4]}</p>
            </div>
          </div>

          <div className='clearfix'>
            <div className='col px1 sm-px0 sm-10 sm-offset-1 md-7 md-offset-3 lg-6 lg-offset-3 pb2'>
              <h4 className='title strong'>{section6.blocks[5].title}</h4>
              <table>
                <thead>
                  <tr className='small'>
                    <th style={{width:'20%'}}>Year</th>
                    <th style={{width:'40%'}}>No. of IMPACT courses</th>
                    <th style={{width:'40%'}}>No. of participants</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2009</td>
                    <td>15</td>
                    <td>420</td>
                  </tr>
                  <tr>
                    <td>2010</td>
                    <td>15</td>
                    <td>460</td>
                  </tr>
                  <tr>
                    <td>2011</td>
                    <td>21</td>
                    <td>525</td>
                  </tr>
                  <tr>
                    <td>2012</td>
                    <td>25</td>
                    <td>625</td>
                  </tr>
                  <tr>
                    <td>2013</td>
                    <td>20</td>
                    <td>500</td>
                  </tr>
                  <tr>
                    <td>2014</td>
                    <td>11</td>
                    <td>575</td>
                  </tr>
                </tbody>
              </table>

              <p className='small'>{section6.blocks[5].caption}</p>
            </div>
          </div>

          <div className='clearfix'>
            <div className='col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2'>
              <p>{section6.blocks[7]}</p>
              <LineChart
                title={section6.blocks[6].title}
                caption={section6.blocks[6].caption}
                height={480}
                padding={{
                  top: 30,
                  bottom: 40,
                  left: 60,
                  right: 60
                }}
                domain={{
                  x: [new Date(2008,1,1), new Date(2015,1,1)],
                  y: [0,250000]
                }}
                axisLabels={section6.blocks[6].axisLabels}
                dataset={[[
                  {x: new Date(2009,1,1), y: 1170 },
                  {x: new Date(2010,1,1), y: 9909 },
                  {x: new Date(2011,1,1), y: 25564 },
                  {x: new Date(2012,1,1), y: 52154 },
                  {x: new Date(2013,1,1), y: 115994 },
                  {x: new Date(2014,1,1), y: 222572 }
                ],[
                  {x: new Date(2009,1,1), y: 311},
                  {x: new Date(2010,1,1), y: 4511},
                  {x: new Date(2011,1,1), y: 11370},
                  {x: new Date(2012,1,1), y: 21949 },
                  {x: new Date(2013,1,1), y: 58657},
                  {x: new Date(2014,1,1), y: 109930}
                ]]}
                labels={section6.blocks[6].lineLabels}
              />
              <p>{section6.blocks[8]}</p>
            </div>
          </div>

          <div className='clearfix' id='scroll-target-section7'>
            <div className='col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2'>
              <p className='small strong color-primary caps'>{chapter.title}</p>
              <h3 className='headline'>{section7.title}</h3>
              <HeadlineDivider />
              <p>{section7.blocks[0]}</p>
            </div>
          </div>

          <div className='clearfix'>
            <div className='col px1 sm-px0 sm-10 sm-offset-1 md-8 md-offset-3 lg-offset-2 pb2'>
              {section7.blocks[1].map((item, k) => {
                return (
                  <div className='col xs-6 sm-4 lg-3 py1 pr2' key={k}>
                    <div style={{height:'200px',overflow:'hidden'}}>
                      <h4 className='title strong'>
                        <a href={item.slug} target='_blank'>{item.title}</a>
                      </h4>
                      <p className='subhead'>{item.subtitle}</p>
                    </div>
                    <hr />
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        <NextChapter nextChapter={chapter.nextChapter} />
      </div>
    );
  }
}

Chapter9.needs = [ fetchChapter ];

Chapter9.contextTypes = {
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

module.exports = connect(mapStateToProps)(Chapter9);
