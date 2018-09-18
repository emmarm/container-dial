import React from 'react';
import { shallow } from 'enzyme';

import Icon from '../../components/Icon';

describe('Icon component', () => {
  const props = {
    icon: 'add'
  };
  const wrapper = shallow(<Icon {...props} />);

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders an icon', () => {
    const icon = wrapper.find('Styled(i)');
    expect(icon.length).toBe(1);
    const iconText = icon
      .dive()
      .find('i')
      .text();
    expect(iconText).toBe(props.icon);
  });

  it('applies padded prop if supplied', () => {
    const wrapperPadded = shallow(<Icon {...props} padded />);
    expect(wrapperPadded.prop('padded')).toBeTruthy();
  });
});
