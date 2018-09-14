import React from 'react';
import { shallow } from 'enzyme';

import AddDialButton from '../../components/AddDialButton';

describe('AddDialButton component', () => {
  const props = {
    handleShowDialModal: jest.fn()
  };
  const wrapper = shallow(<AddDialButton {...props} />);

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls handleShowDialModal on click', () => {
    const { handleShowDialModal } = props;
    const button = wrapper.find('Styled(button)');
    expect(button.length).toBe(1);
    button.simulate('click');
    expect(handleShowDialModal).toHaveBeenCalled();
  });
});
