import React from 'react';
import { shallow } from 'enzyme';

import { DeleteConfirm } from '../../components/DeleteConfirm';

describe('DeleteConfirm component', () => {
  const props = {
    theme: {
      primary: '#333',
      dark: '#000',
      light: '#fff'
    },
    container: {
      name: 'Personal',
      color: 'orange'
    },
    dial: {
      siteName: 'Goodreads',
      siteUrl: 'https://goodreads.com',
      container: 'Personal',
      favicon: 'image.jpg'
    },
    toggleShowDeleteConfirm: jest.fn(),
    handleDelete: jest.fn()
  };
  const wrapper = shallow(<DeleteConfirm {...props} />);

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correct text', () => {
    const p = wrapper.find('p');
    expect(p.text()).toBe('Delete Goodreads from Personal?');
  });

  it('calls toggleShowDeleteConfirm on cancel', () => {
    const cancelButton = wrapper.find('button').first();
    cancelButton.simulate('click');
    expect(props.toggleShowDeleteConfirm).toHaveBeenCalled();
  });

  it('calls handleDelete on submit', () => {
    const deleteButton = wrapper.find('button').last();
    deleteButton.simulate('click');
    expect(props.handleDelete).toHaveBeenCalled();
  });
});
