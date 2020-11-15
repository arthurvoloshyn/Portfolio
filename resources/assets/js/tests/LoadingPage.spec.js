import React from 'react';

import LoadingPage from '../components/LoadingPage/LoadingPage';

describe('LoadingPage', () => {
  const wrapper = shallow(<LoadingPage />);

  it('Renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
