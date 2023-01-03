import React from 'react';
import PropTypes from 'prop-types';

import './scss/Paper.scss';

const Paper = ({ children }) => (
  <div className="paper for_fade">
    <p className="paper_text">{children}</p>
  </div>
);

Paper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paper;
