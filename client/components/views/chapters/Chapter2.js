
import React from 'react';
import { connect } from 'react-redux';
import { fetchChapter } from '../../../actions/chapterActions';
import BreadCrumbs from '../../Breadcrumbs';
import HeadlineDivider from '../../HeadlineDivider';

import NextChapter from '../../../utils/NextChapter';
import SideNavigation from '../../SideNavigation';

class Chapter2 extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('Mounted What we do');
  }
  shouldComponentUpdate(newProps, newState, newContext) {
    var newDataAvailable = newProps.content[newContext.language].chapters['what-we-do'] !== undefined;
    var sameData = this.props.content[this.context.language].chapters['what-we-do'] === newProps.content[newContext.language].chapters['who-we-are'];
    return newDataAvailable && !sameData;
  }
  render() {

    var chapter = this.props.content[this.context.language].chapters['what-we-do'];

    var section1 = chapter.sections[0];
    var section2 = chapter.sections[1];

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
          </div>
        </div>

        <div className='clearfix bg-dark chapter-banner' style={{backgroundImage:'url(/img/chapters/chapter-2.jpg)',backgroundSize: 'cover',backgroundPosition:'center 40%',backgroundRepeat: 'no-repeat'}}>
          <div className='col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3'>
            <p className='lead'>{chapter.intro}</p>
            <hr />
          </div>
        </div>

        <div className='clearfix body-text' style={{position:'relative'}}>

          <SideNavigation title={chapter.title} sections={chapter.sections} sectionReferences={['scroll-target-section1', 'scroll-target-section2']}/>

          <div className='clearfix' id='scroll-target-section1'>
            <div className='col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2'>
              <p><strong>{section1.blocks[0]}</strong></p>
              <ol>
                {section1.blocks[1].map((item, i) => {
                  return (<li key={i}>{item}</li>);
                })}
              </ol>
              <p><strong>{section1.blocks[2]}</strong></p>
              <ol>
                {section1.blocks[3].map((item, i) => {
                  return (<li key={i}>{item}</li>);
                })}
              </ol>
              <p>{section1.blocks[4]}</p>
              <a href={section1.blocks[5]} target="_blank">
                <button className='btn bg-primary p1'>{section1.blocks[6]}</button>
              </a>
            </div>
          </div>

          <div className='clearfix' style={{position:'relative'}} id='scroll-target-section2'>
            <div className='col px1 sm-px0 sm-8 sm-offset-2 md-6 md-offset-3 lg-5 lg-offset-3 py2'>
              <p className='small strong color-primary caps'>{chapter.title}</p>
              <h3 className='headline'>{section2.title}</h3>
              <HeadlineDivider />
              <p>{section2.blocks[0]}</p>
            </div>
          </div>

        </div>

        <div className='center pb3' style={{position:'relative'}}>
          <img src='/img/chapters/2/flickr.jpg' style={{opacity:0.3}}/>
          <div className='vertical-center' style={{position:'absolute',width:'100%'}}>
            <a className='btn bg-primary p1' href='https://www.flickr.com/photos/ifrc/albums' target='_blank'>{section2.blocks[1]}</a>
          </div>
        </div>

        <NextChapter nextChapter={chapter.nextChapter} />

      </div>
    );
  }
}

Chapter2.needs = [ fetchChapter ];

Chapter2.contextTypes = {
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

module.exports = connect(mapStateToProps)(Chapter2);
