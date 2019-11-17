import React, { Component } from 'react';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getAction from '../../../actions/contact';

const USERNAME = 'username';
const EMAIL = 'email';
const SUBJECT = 'subject';
const BODY = 'body';

class Form extends Component {
    _sand = () => {
      const contact = this.props.contact;

      Alert.info('Message is Sent', {
        position: 'top-right',
        effect: 'scale',
        beep: false,
        timeout: 2000
      });

      axios.post('/mail',
        {
          username: contact.username,
          subject: contact.subject,
          email: contact.email,
          body: contact.body
        })
        .then(_ => {
          Alert.success('Message Sent', {
            position: 'top-right',
            effect: 'scale',
            beep: false,
            timeout: 2000
          });
        })
        .catch(_ => {
          Alert.error('Error(', {
            position: 'top-right',
            effect: 'scale',
            beep: false,
            timeout: 2000
          });
        });
    };

    _onSubmit = e => {
      e.preventDefault();

      const error = this._validate();

      if (!error) {
        Alert.error('Some field is Invalid', {
          position: 'top-right',
          effect: 'scale',
          beep: false,
          timeout: 2000
        });

        return;
      }

      this._sand();

      this.refs.contactForm.reset();
      this.refs.username.classList.remove('goodInput');
      this.refs.email.classList.remove('goodInput');
      this.refs.subject.classList.remove('goodInput');
      this.refs.body.classList.remove('goodInput');

      this.props.getAction(USERNAME, '');
      this.props.getAction(EMAIL, '');
      this.props.getAction(SUBJECT, '');
      this.props.getAction(BODY, '');
    };

    _onKeyUp = e => {
      const actionResult = this.props.getAction(e.target.name, e.target.value);
      this._validate(actionResult.fieldName);
    };

    _validate = (name = null) => {
      let resultValidation = true;
      const ruleEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      this.addError = (fieldName) => {
        this.refs[fieldName].classList.remove('goodInput');
        this.refs[fieldName].classList.add('badInput');
        resultValidation = false;
      };

      this.removeError = (fieldName) => {
        this.refs[fieldName].classList.add('goodInput');
        this.refs[fieldName].classList.remove('badInput');
      };

      if (name == null || name === EMAIL) {
        this.refs[EMAIL].value && ruleEmail.test(this.refs[EMAIL].value) ? this.removeError(EMAIL) : this.addError(EMAIL);
      }

      [
        USERNAME,
        SUBJECT,
        BODY
      ]
        .map(fieldName => {
          if (name == null || name === fieldName) {
            this.refs[fieldName].value ? this.removeError(fieldName) : this.addError(fieldName);
          }
        });

      return resultValidation;
    }

    render () {
      const contact = this.props.contact;

      return (
        <div className="contact-form" id="mycontact_form_container">

          <p>Contact me</p>
          <p>If you have any question, use form below ...</p>

          <form onSubmit={this._onSubmit} ref='contactForm'>
            <div>
              <input placeholder="Name" type="text" name={USERNAME} ref={USERNAME}
                value={contact.username}
                onInput={this._onKeyUp}/>
              <input placeholder="Email" type="text" name={EMAIL} ref={EMAIL} value={contact.email}
                onInput={this._onKeyUp}/>
            </div>
            <div>
              <input placeholder="Subject" type="text" name={SUBJECT} ref={SUBJECT}
                value={contact.subject}
                onInput={this._onKeyUp}/>
            </div>
            <div>
              <textarea placeholder="Message" name={BODY} ref={BODY} value={contact.body}
                onInput={this._onKeyUp}/>
            </div>
            <div>
              <input type="submit" value="Send"/>
            </div>
          </form>
          <Alert stack={{ limit: 3 }}/>
        </div>
      );
    }
}

function mapStateToProps (state) {
  return {
    contact: state.contact
  };
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({ getAction: getAction }, dispatch);
}

Form.propTypes = {
  contact: PropTypes.object,
  getAction: PropTypes.func
};

export default connect(mapStateToProps, matchDispatchToProps)(Form);
