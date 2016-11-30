
import React from 'react'

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardView: 0,
      overlay: false,
    };

    this.switchView = this.switchView.bind(this);
    this.toggleOverlay = this.toggleOverlay.bind(this);
  }
  switchView(viewIndex) {
    this.setState({
      cardView: viewIndex
    });
  }
  toggleOverlay() {
    this.setState({
      overlay: !this.state.overlay
    });
  }
  render() {
    return (
      <article className='relative overflow-hidden shadow-2'>
        <div>
          {
            this.props.children.map((child, i) => {
              if(child.type.name === 'CardView' && this.state.cardView == i) {
                return (
                  <div style={{height:240}} key={i}>
                    {child.props.children}
                  </div>
                )
              }
            })
          }
        </div>
        <footer className='relative pt2 pb05 px1'>
          <button className='btn btn--raised btn--circle absolute t0 r1 y-center-self' onClick={this.toggleOverlay}>
            <svg width="2rem" height="2rem" viewBox="0 0 36 36">
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g>
                  <g transform="translate(8, 9)" stroke="#343434"><path d="M9.09090909,0.909090909 L20,0.909090909"></path><path d="M9.09090909,6.36363636 L20,6.36363636"></path><path d="M0,11.8181818 L20,11.8181818"></path><path d="M0,17.2727273 L20,17.2727273"></path></g>
                  <path d="M11.1271973,15.6171875 L13.0187988,15.6171875 L13.0187988,17.4516602 L11.1271973,17.4516602 L11.1271973,15.6171875 Z M10.0734863,8.48242188 C10.5728378,8.16080568 11.1864384,8 11.9143066,8 C12.8706916,8 13.6651987,8.22851334 14.2978516,8.68554688 C14.9305045,9.14258041 15.2468262,9.81965697 15.2468262,10.7167969 C15.2468262,11.2669298 15.109295,11.7303041 14.8342285,12.1069336 C14.6734204,12.3354504 14.3645042,12.6274396 13.9074707,12.9829102 L13.4567871,13.3320312 C13.2113432,13.5224619 13.0484216,13.7446276 12.9680176,13.9985352 C12.9172361,14.1593433 12.8897298,14.4090152 12.885498,14.7475586 L11.1716309,14.7475586 C11.1970216,14.0323857 11.2647293,13.5383314 11.3747559,13.2653809 C11.4847825,12.9924303 11.7683083,12.6782244 12.2253418,12.3227539 L12.6887207,11.9609375 C12.8410652,11.8466791 12.9637853,11.7218431 13.0568848,11.5864258 C13.2261564,11.3536772 13.310791,11.0976576 13.310791,10.8183594 C13.310791,10.4967432 13.2166351,10.203696 13.0283203,9.93920898 C12.8400056,9.67472198 12.4961776,9.54248047 11.9968262,9.54248047 C11.5059383,9.54248047 11.1578786,9.70540202 10.9526367,10.03125 C10.7473948,10.357098 10.6447754,10.6956363 10.6447754,11.046875 L8.81030273,11.046875 C8.86108424,9.84081428 9.28214123,8.98600512 10.0734863,8.48242188 L10.0734863,8.48242188 Z" fill="#D90212"></path>
                </g>
              </g>
            </svg>
          </button>
          <div className='t0 l1 y-center-self absolute btn-group btn-group--raised'>
            {
              this.props.children.map((child, i) => {
                if(child.type.name === 'CardView') {
                  return (
                    <button key={i} onClick={() => this.switchView(i)} className='btn'>
                      <span className='px05'>{i}</span>
                    </button>
                  )
                }
              })
            }
          </div>
          <a href='#' className='btn'><span className='small'>show on map</span></a>
        </footer>
        {
          this.props.children.map((child, i) => {
            if(child.type.name == 'CardOverlay') {
              return (
                <div key={i} className={this.state.overlay ? 'card__overlay card__overlay--active' : 'card__overlay'}>
                  <div>
                    {child.props.children}
                  </div>
                  <button onClick={this.toggleOverlay} className='btn bg-primary'>close</button>
                </div>
              )
            }
          })
        }
      </article>
    );
  }
}

export default Card;
