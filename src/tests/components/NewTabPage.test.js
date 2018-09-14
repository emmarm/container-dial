import React from 'react';
import { shallow } from 'enzyme';

import { NewTabPage } from '../../components/NewTabPage';
import DIALS from '../seedData/DIALS';

describe('NewTabPage component', () => {
  const props = {
    container: { name: 'Default' },
    theme: { primary: '#333', dark: '#000', light: '#fff' },
    dials: DIALS,
    setContainer: jest.fn(),
    setTheme: jest.fn(),
    startSetBackground: jest.fn()
  };
  const wrapper = shallow(<NewTabPage {...props} />);

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls setContainer, setTheme, and startSetBackground functions', () => {
    const { setContainer, startSetBackground } = props;
    expect(setContainer).toHaveBeenCalled();
    expect(startSetBackground).toHaveBeenCalled();
  });

  it('renders AddDialButton component', () => {
    const addDialButton = wrapper.find('AddDialButton');
    expect(addDialButton.length).toBe(1);
  });

  it('renders a Dial and EditDialButton component for each dial item', () => {
    const dialComponents = wrapper.find('Dial');
    const editDialButtons = wrapper.find('EditDialButton');
    expect(dialComponents.length).toBe(3);
    expect(editDialButtons.length).toBe(3);
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
