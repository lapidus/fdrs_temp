
import React from 'react';
import { Link } from 'react-router';

import prefixLanguageToRoute from '../utils/prefixLanguageToRoute';

class Navigation extends React.Component {
  componentDidMount() {
    console.log('NAVIGATION CONTENT: ', this.props.navigationContent);
  }
  render() {
    return (
      <nav className={this.props.navOpen ? 'site-nav is-open' : 'site-nav'}>
        <ul>
          <div className='col md-7 lg-5'>
            {this.props.navigationContent[this.props.language].home.sections.map((section, sectionKey) => {
              return sectionKey < 3 ? (
                <li key={sectionKey} className='site-nav__section clearfix pb2'>
                  <div className='strong caps'>Section {sectionKey + 1} — {section.title}</div>
                  <ul>
                    {section.chapters.map((chapter, chapterKey) => {
                      return (
                        <li key={chapterKey} className='site-nav__chapter col md-12 lg-12'>
                          <div style={{position:'absolute',width:'2rem',top:0,left:0}} className='display-2 center strong'>{chapter.id}</div>
                          <div className='pl2'>
                            <Link to={prefixLanguageToRoute(this.props.language,chapter.slug)}>
                              <div className='title'>{chapter.title}</div>
                              <hr style={{marginBottom:'8px',marginTop:'4px'}}/>
                              <div style={{color:'#222'}}>{chapter.subtitle || ''}</div>
                            </Link>
                          </div>
                        </li>
                    )})}
                  </ul>
                </li>
            ) : ''})}
          </div>

          <div className='col md-5 lg-5 lg-offset-1'>
            <li className='site-nav__section clearfix pb2'>
              <div className='strong caps'>{this.props.navigationContent[this.props.language].home.sections[3].id} — {this.props.navigationContent[this.props.language].home.sections[3].title}</div>
              <ul>
                <li className='site-nav__chapter col md-12'>
                  <div style={{position:'absolute',width:'2rem',top:0,left:0}} className='display-2 center strong'>10</div>
                  <div className='pl3'>
                    <Link to={prefixLanguageToRoute(this.props.language, '/data')}>
                      <div className='title'>{this.props.navigationContent[this.props.language].home.sections[3].chapters[0].preTitle}</div>
                      <hr style={{marginBottom:'8px',marginTop:'4px'}}/>
                    </Link>
                  </div>
                  <div>
                    <Link to={prefixLanguageToRoute(this.props.language, '/data')}>
                      <img src='/img/data-view-preview.png' />
                    </Link>
                  </div>
                </li>
                <li className='site-nav__chapter col md-12'>
                  <div style={{position:'absolute',width:'2rem',top:0,left:0}} className='display-2 center strong'>11</div>
                  <div className='pl3'>
                    <Link to={prefixLanguageToRoute(this.props.language, '/acknowledgements')}>
                      <div className='title'>{this.props.navigationContent[this.props.language].home.sections[3].chapters[1].title}</div>
                      <hr style={{marginBottom:'8px',marginTop:'4px'}}/>
                    </Link>
                  </div>
                </li>
              </ul>
            </li>
          </div>

        </ul>
      </nav>
    );
  }
}

Navigation.defaultProps = {
  mainSections: [
    {
      title: 'Overview',
      chapters: [
        {
          id: '1',
          title: 'Who we are',
          slug: '/who-we-are'
        },
        {
          id: '2',
          title: 'What we do',
          slug: '/what-we-do'
        },
        {
          id: '3',
          title: 'Living our fundamental principles',
          slug: '/living-our-fundamental-principles'
        }
      ]
    },
    {
      title: 'Strategic aims',
      chapters: [
        {
          id: '4',
          title: 'Strategic Aim 1',
          slug: '/strategic-aim-1',
          subtitle: 'Save lives, protect livelihoods and strengthen recovery from disasters and crises'
        },
        {
          id: '5',
          title: 'Strategic Aim 2',
          slug: '/strategic-aim-2',
          subtitle: 'Healthy and safe living'
        },
        {
          id: '6',
          title: 'Strategic Aim 3',
          slug: '/strategic-aim-3',
          subtitle: 'Social inclusion and a culture of non-violence and peace'
        }
      ]
    },
    {
      title: 'Enabling actions',
      chapters: [
        {
          id: '7',
          title: 'Enabling Action 1',
          slug: '/enabling-action-1',
          subtitle: 'Strong National Red Cross and Red Crescent Societies'
        },
        {
          id: '8',
          title: 'Enabling Action 2',
          slug: '/enabling-action-2',
          subtitle: 'Humanitarian diplomacy to prevent and reduce vulnerability in a globalised world'
        },
        {
          id: '9',
          title: 'Enabling Action 3',
          slug: '/enabling-action-3',
          subtitle: 'Function effectively as the IFRC'
        }
      ]
    }
  ]
};

export default Navigation
