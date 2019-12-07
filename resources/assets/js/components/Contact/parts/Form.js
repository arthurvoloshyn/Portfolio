import React, { Component } from 'react';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getAction from '../../../actions/contact';

const USERNAME = 'username';
const EMAIL = 'email';
const SUBJECT = 'subject';
const BODY = 'body';

const configAlert = {
  position: 'top-right',
  effect: 'scale',
  beep: false,
  timeout: 2000
};

class Form extends Component {
    _send = () => {
      const { contact: { username, subject, email, body } } = this.props;

      Alert.info('Message is Sent', configAlert);

      axios.post('/mail',
        {
          username,
          subject,
          email,
          body
        })
        .then(_ => {
          Alert.success('Message Sent', configAlert);
        })
        .catch(_ => {
          Alert.error('Error(', configAlert);
        });
    };

    _onSubmit = e => {
      e.preventDefault();

      const error = this._validate();
      const { getAction } = this.props;

      if (!error) {
        Alert.error('Some field is Invalid', configAlert);

        return;
      }

      this._send();

      this.refs.contactForm.reset();
      this.refs.username.classList.remove('goodInput');
      this.refs.email.classList.remove('goodInput');
      this.refs.subject.classList.remove('goodInput');
      this.refs.body.classList.remove('goodInput');

      getAction(USERNAME, '');
      getAction(EMAIL, '');
      getAction(SUBJECT, '');
      getAction(BODY, '');
    };

    _onKeyUp = ({ target: { name, value } }) => {
      const actionResult = this.props.getAction(name, value);
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
      const { contact: { username, subject, email, body } } = this.props;

      return (
        <div className='contact-form' id='mycontact_form_container'>

          <p>Contact me</p>
          <p>If you have any question, use form below ...</p>

          <form onSubmit={this._onSubmit} ref='contactForm'>
            <div>
              <input placeholder='Name' type='text' name={USERNAME} ref={USERNAME}
                value={username}
                onInput={this._onKeyUp}/>
              <input placeholder='Email' type='text' name={EMAIL} ref={EMAIL} value={email}
                onInput={this._onKeyUp}/>
            </div>
            <div>
              <input placeholder='Subject' type='text' name={SUBJECT} ref={SUBJECT}
                value={subject}
                onInput={this._onKeyUp}/>
            </div>
            <div>
              <textarea placeholder='Message' name={BODY} ref={BODY} value={body}
                onInput={this._onKeyUp}/>
            </div>
            <div>
              <input type='submit' value='Send'/>
            </div>
          </form>
          <Alert stack={{ limit: 3 }}/>
        </div>
      );
    }
}

const mapStateToProps = ({ contact }) => ({ contact });

const matchDispatchToProps = { getAction };

Form.propTypes = {
  contact: PropTypes.object,
  getAction: PropTypes.func
};

export default connect(mapStateToProps, matchDispatchToProps)(Form);
