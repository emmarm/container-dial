import React from 'react';
import { shallow } from 'enzyme';

import { NewTabPage } from '../../components/NewTabPage';
import DIALS from '../../DIALS';

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

  it('renders a Dial component for each dial item', () => {
    const dialComponents = wrapper.find('Dial');
    expect(dialComponents.length).toBe(3);
  });

  it('calls setContainer, setTheme, and startSetBackground functions', () => {
    const { setContainer, setTheme, startSetBackground } = props;
    const wrapper = shallow(<NewTabPage {...props} />);
    expect(setContainer).toHaveBeenCalled();
    expect(setTheme).toHaveBeenCalled();
    expect(startSetBackground).toHaveBeenCalled();
  });
});
