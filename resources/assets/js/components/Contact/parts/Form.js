import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Alert from 'react-s-alert';

import getAction from '../../../actions/contact';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';

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
  static propTypes = {
    contact: PropTypes.shape({
      username: PropTypes.string,
      subject: PropTypes.string,
      email: PropTypes.string,
      body: PropTypes.string
    }),
    getAction: PropTypes.func
  };

  static defaultProps = {
    contact: {
      username: '',
      subject: '',
      email: '',
      body: ''
    },
    getAction: () => {}
  };

  contactForm = createRef();
  username = createRef();
  email = createRef();
  subject = createRef();
  body = createRef();

  _send = () => {
    const {
      contact: { username, subject, email, body }
    } = this.props;

    Alert.info('Message is Sent', configAlert);

    axios
      .post('/mail', {
        username,
        subject,
        email,
        body
      })
      .then(() => Alert.success('Message Sent', configAlert))
      .catch(() => Alert.error('Error(', configAlert));
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

    this.contactForm.current.reset();
    this.username.current.classList.remove('goodInput');
    this.email.current.classList.remove('goodInput');
    this.subject.current.classList.remove('goodInput');
    this.body.current.classList.remove('goodInput');

    getAction(USERNAME, '');
    getAction(EMAIL, '');
    getAction(SUBJECT, '');
    getAction(BODY, '');
  };

  _onKeyUp = ({ target: { name, value } }) => {
    const { getAction } = this.props;
    const actionResult = getAction(name, value);
    const { fieldName } = actionResult;

    this._validate(fieldName);
  };

  _validate = (name = null) => {
    let resultValidation = true;
    const ruleEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    this.addError = fieldName => {
      this[fieldName].current.classList.remove('goodInput');
      this[fieldName].current.classList.add('badInput');
      resultValidation = false;
    };

    this.removeError = fieldName => {
      this[fieldName].current.classList.add('goodInput');
      this[fieldName].current.classList.remove('badInput');
    };

    if (name == null || name === EMAIL) {
      const emailField = this[EMAIL].current.value;
      emailField && ruleEmail.test(emailField) ? this.removeError(EMAIL) : this.addError(EMAIL);
    }

    [USERNAME, SUBJECT, BODY].forEach(fieldName => {
      if (name == null || name === fieldName) {
        const currentField = this[fieldName].current.value;
        currentField ? this.removeError(fieldName) : this.addError(fieldName);
      }
    });

    return resultValidation;
  };

  render() {
    const {
      contact: { username, subject, email, body }
    } = this.props;

    return (
      <div className="contact-form" id="mycontact_form_container">
        <p>Contact me</p>
        <p>If you have any question, use form below ...</p>

        <form onSubmit={this._onSubmit} ref={this.contactForm}>
          <div>
            <input
              placeholder="Name"
              type="text"
              name={USERNAME}
              ref={this.username}
              value={username}
              onChange={this._onKeyUp}
            />
            <input
              placeholder="Email"
              type="text"
              name={EMAIL}
              ref={this.email}
              value={email}
              onChange={this._onKeyUp}
            />
          </div>
          <div>
            <input
              placeholder="Subject"
              type="text"
              name={SUBJECT}
              ref={this.subject}
              value={subject}
              onChange={this._onKeyUp}
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              name={BODY}
              ref={this.body}
              value={body}
              onChange={this._onKeyUp}
            />
          </div>
          <div>
            <input type="submit" value="Send" />
          </div>
        </form>
        <Alert stack={{ limit: 3 }} />
      </div>
    );
  }
}

const mapStateToProps = ({ contact }) => ({ contact });

const matchDispatchToProps = { getAction };

export default connect(mapStateToProps, matchDispatchToProps)(Form);
