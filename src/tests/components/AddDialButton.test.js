import React from 'react';
import { shallow } from 'enzyme';

import AddDialButton from '../../components/AddDialButton';

describe('AddDialButton component', () => {
  const props = {
    handleShowDialModal: jest.fn()
  };
  const wrapper = shallow(<AddDialButton {...props} />);

  it('calls handleShowDialModal on click', () => {
    const { handleShowDialModal } = props;
    wrapper.find('button').simulate('click');
    expect(handleShowDialModal).toHaveBeenCalled();
  });
});
