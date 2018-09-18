import React from 'react';
import { shallow } from 'enzyme';

import ButtonGroup from '../../components/ButtonGroup';

describe('ButtonGroup component', () => {
  const wrapper = shallow(<ButtonGroup />);

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a Group div', () => {
    const group = wrapper.find('Styled(div)');
    expect(group.length).toBe(1);
  });
});
