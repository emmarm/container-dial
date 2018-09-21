import React from 'react';
import { shallow } from 'enzyme';

import { NewTabPage } from '../../components/NewTabPage';

describe('NewTabPage component', () => {
  const props = {
    container: { cookieStoreId: '123' },
    theme: { primary: '#333', dark: '#000', light: '#fff' },
    setContainer: jest.fn(),
    setCurrentDial: jest.fn(),
    setTheme: jest.fn(),
    startSetBackground: jest.fn()
  };
  const wrapper = shallow(<NewTabPage {...props} />);

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls setContainer and startSetBackground functions', () => {
    const { setContainer, startSetBackground } = props;
    expect(setContainer).toHaveBeenCalled();
    expect(startSetBackground).toHaveBeenCalled();
  });

  it('does not show DialModal when showDialModal false', () => {
    const dialModal = wrapper.find('Connect(DialModal)');
    expect(dialModal.props().isOpen).toBeFalsy();
  });

  it('shows DialModal when showDialModal true', () => {
    wrapper.setState({ showDialModal: true });
    const dialModal = wrapper.find('Connect(DialModal)');
    expect(dialModal.props().isOpen).toBeTruthy();
  });
});
