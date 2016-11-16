
import React from 'react';
import classNames from 'classnames';

function isValid(value) {
  return Boolean(value || value === 0);
}

class TextField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
      isClean: isValid(!this.props.defaultValue),
      hasValue: isValid(this.props.defaultValue)
    };

    this._focusHandler = this._focusHandler.bind(this);
    this._blurHandler = this._blurHandler.bind(this);
    this._changeHandler = this._changeHandler.bind(this);
  }

  _focusHandler() {
    this.setState({focused: true});
  }

  _blurHandler() {
    this.setState({focused: false});
  }

  _changeHandler(event) {
    this.setState({hasValue: isValid(event.target.value), isClean: false});
  }

  render() {

    var labelClass = classNames('textfield', {
      'is-focused': this.state.focused,
      'is-clean': this.state.isClean,
      'is-highlighted': !this.state.hasValue && this.state.focused,
      'has-value': this.state.hasValue
    });

    return (
      <div className='textfield-wrapper'>
        <label className={labelClass}>
          <span className='textfield__label'>{this.props.floatingLabelText}</span>
          <input className='textfield__input' placeholder={this.props.hintText} onFocus={this._focusHandler} onBlur={this._blurHandler} onChange={this._changeHandler} defaultValue={this.props.defaultValue}/>
        </label>
      </div>
    );
  }
}

class Forms extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        <div className='bg--primary clearfix'>
          <div className='col sm-10 sm-offset-1 md-8 md-offset-2 px1 pt3'>
            <h1>Textfields</h1>
            <p className='lead'>Getting information from users</p>
          </div>
        </div>

        <div className='container is-narrow px1 md-px2'>
          <div className='clearfix mxn1 md-mxn2'>
            <div className='col sm-6 px1 md-px2'>
              <TextField hintText='e.g. John Smith' floatingLabelText='Enter Full Name'/>
              <TextField hintText='e.g. Web Developer' floatingLabelText='What do you do?'/>
              <TextField hintText='e.g. Awesome dude(tte)' floatingLabelText='What is your status?'/>
              <TextField hintText='e.g. Switzerland' floatingLabelText='Where do you come from?' defaultValue='Switzerland'/>
              <TextField hintText='' floatingLabelText='Password'/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

// export default Forms;
module.exports = Forms;
