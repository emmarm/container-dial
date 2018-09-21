import React from 'react';
import { shallow } from 'enzyme';

import { DialList } from '../../components/DialList';
import DIALS from '../seedData/DIALS';

describe('DialList component', () => {
  const state = { dials: DIALS.filter(dial => dial.container === '123') };
  const props = {
    dials: DIALS.filter(dial => dial.container === '123'),
    handleShowDialModal: () => {},
    updateDialOrder: () => {}
  };
  const wrapper = shallow(<DialList {...props} />);
  wrapper.setState(state);

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders AddDialButton component', () => {
    const addDialButton = wrapper.find('AddDialButton');
    expect(addDialButton.length).toBe(1);
  });

  it('renders a Dial and EditDialButton component for each dial item', () => {
    const dialComponents = wrapper.find('Dial');
    const editDialButtons = wrapper.find('Connect(EditDialButton)');
    expect(dialComponents.length).toBe(3);
    expect(editDialButtons.length).toBe(3);
  });
});
