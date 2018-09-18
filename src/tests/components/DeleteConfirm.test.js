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
    const title = wrapper
      .find('Styled(p)')
      .dive()
      .find('p')
      .text();
    const span1 = wrapper
      .find('Styled(span)')
      .first()
      .dive()
      .find('span')
      .text();
    const span2 = wrapper
      .find('Styled(span)')
      .last()
      .dive()
      .find('span')
      .text();
    expect(span1).toBe('Goodreads');
    expect(span2).toBe('Personal');
    expect(title).toBe(
      'Delete <Styled(span) /> from <Styled(span) /> Container?'
    );
  });

  it('calls toggleShowDeleteConfirm on cancel', () => {
    const cancelButton = wrapper.find('Button').first();
    cancelButton.simulate('click');
    expect(props.toggleShowDeleteConfirm).toHaveBeenCalled();
  });

  it('calls handleDelete on submit', () => {
    const deleteButton = wrapper.find('Button').last();
    deleteButton.simulate('click');
    expect(props.handleDelete).toHaveBeenCalled();
  });
});
