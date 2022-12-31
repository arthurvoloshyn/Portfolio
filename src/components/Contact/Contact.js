import React from 'react';

import Form from './parts/Form';
import MapLeaflet from './parts/Map';

import './scss/Contact.scss';

const ContactMe = () => (
  <div className="contact_page_container for_fade">
    <Form />
    <MapLeaflet />
  </div>
);

export default ContactMe;
