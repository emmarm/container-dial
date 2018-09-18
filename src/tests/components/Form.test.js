import React from 'react';
import { shallow } from 'enzyme';

import Form from '../../components/Form';

describe('Form component', () => {
  const wrapper = shallow(<Form />);

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a Form form', () => {
    const form = wrapper.find('Styled(form)');
    expect(form.length).toBe(1);
  });
});
