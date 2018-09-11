import React from 'react';
import { shallow } from 'enzyme';

import Dial from '../../components/Dial';

describe('Dial Component', () => {
  const props = { siteName: 'test', icon: 'icon.jpg' };
  const wrapper = shallow(<Dial {...props} />);

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('applies name prop correctly', () => {
    const title = wrapper.find('.dial__title');
    expect(title.text()).toBe(props.siteName);
  });

  it('applies icon prop correctly', () => {
    const icon = wrapper.find('.dial__icon');
    expect(icon.prop('style')).toEqual({
      backgroundImage: `url('${props.icon}')`
    });
  });
});
