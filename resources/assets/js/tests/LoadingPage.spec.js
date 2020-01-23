import React from 'react';

import { render } from '@testing-library/react';

import LoadingPage from '../components/LoadingPage';

describe('LoadingPage', () => {
  const wrapper = render(<LoadingPage />);

  it('Renders without error', () => {
    render(<LoadingPage />);
  });

  it('Renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
