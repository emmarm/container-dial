import React from 'react';
import { shallow } from 'enzyme';

import Button from '../../components/Button';

describe('Button component', () => {
  const props = {
    onClick: () => {},
    text: 'Click Me'
  };
  const wrapper = shallow(<Button {...props} />);

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('sets button text correctly', () => {
    const buttonText = wrapper
      .find('Styled(button)')
      .dive('button')
      .text();
    expect(buttonText).toBe(props.text);
  });

  describe('Button component with boolean props', () => {
    it('sets danger, disabled, narrow, and primary to true when passed in props', () => {
      const wrapperWithProps = shallow(
        <Button {...props} danger disabled narrow primary />
      );
      expect(wrapperWithProps.prop('danger')).toBeTruthy;
      expect(wrapperWithProps.prop('disabled')).toBeTruthy;
      expect(wrapperWithProps.prop('narrow')).toBeTruthy;
      expect(wrapperWithProps.prop('primary')).toBeTruthy;
    });
  });

  describe('Button component with icon', () => {
    const icon = 'image.jpg';
    const wrapperWithIcon = shallow(<Button {...props} icon={icon} />);

    it('matches snapshot', () => {
      expect(wrapperWithIcon).toMatchSnapshot();
    });

    it('shows icon', () => {
      const buttonIcon = wrapperWithIcon.find('Icon');
      expect(buttonIcon.length).toBe(1);
      expect(buttonIcon.prop('icon')).toBe(icon);
    });

    it('sets padded to true when text and icon props', () => {
      expect(wrapperWithIcon.prop('padded')).toBeTruthy();
    });
  });
});
