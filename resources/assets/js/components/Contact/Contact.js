import React from 'react';
import MapLeaflet from './parts/Map';
import Form from './parts/Form';
import './scss/Contact.scss';

const ContactMe = () => {
  return (
    <div className="contact_page_container for_fade ">
      <Form/>
      <MapLeaflet/>
    </div>
  );
};

export default ContactMe;
