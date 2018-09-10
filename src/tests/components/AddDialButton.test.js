import React from 'react';
import { shallow } from 'enzyme';

import AddDialButton from '../../components/AddDialButton';

describe('AddDialButton component', () => {
  const props = {
    handleShowAddDialModal: jest.fn()
  };
  const wrapper = shallow(<AddDialButton {...props} />);

  it('calls handleShowAddDialModal on click', () => {
    const { handleShowAddDialModal } = props;
    wrapper.find('button').simulate('click');
    expect(handleShowAddDialModal).toHaveBeenCalled();
  });
});
