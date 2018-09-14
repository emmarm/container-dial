import React from 'react';
import { shallow } from 'enzyme';

import Dial from '../../components/Dial';

describe('Dial Component', () => {
  const props = {
    dial: {
      siteName: 'Goodreads',
      siteUrl: 'https://goodreads.com',
      favicon: 'icon.jpg'
    }
  };
  const wrapper = shallow(<Dial {...props} />);

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('applies name prop correctly', () => {
    const styledTitle = wrapper.find('Styled(p)');
    const title = styledTitle.dive().find('p');
    expect(title.text()).toBe(props.dial.siteName);
  });

  it('applies icon prop correctly', () => {
    const icon = wrapper.find('Styled(div)').last();
    expect(icon.prop('favicon')).toBe(props.dial.favicon);
  });
});
