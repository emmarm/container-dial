import React from 'react';
import { shallow } from 'enzyme';

import { DialModal } from '../../components/DialModal';

describe('DialModal component', () => {
  const props = {
    handleHideDialModal: jest.fn(),
    container: {
      name: 'Personal',
      color: 'orange'
    },
    isOpen: true,
    theme: {
      primary: '#333',
      light: '#fff',
      dark: '#000'
    },
    deleteDial: jest.fn()
  };
  const wrapper = shallow(<DialModal {...props} />);

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('displays correct title', () => {
    const title = wrapper.find('.dial-modal__title').text();
    expect(title).toBe('New Personal Dial');
  });

  it('renders DialForm', () => {
    expect(wrapper.find('Connect(DialForm)').length).toBe(1);
  });

  it('updates title on showDeleteConfirm', () => {
    wrapper.setState({ showDeleteConfirm: true });
    const title = wrapper.find('.dial-modal__title').text();
    expect(title).toBe('Delete Dial');
  });

  it('shows DeleteConfirm component on showDeleteConfirm', () => {
    wrapper.setState({ showDeleteConfirm: true });
    expect(wrapper.find('Connect(DialForm)').length).toBe(0);
  });

  describe('with dial prop', () => {
    const dial = {
      siteName: 'Goodreads',
      siteUrl: 'https://goodreads.com',
      container: 'Personal',
      favicon: 'image.jpg'
    };
    const wrapperWithDial = shallow(<DialModal {...props} dial={dial} />);

    it('updates title', () => {
      const title = wrapperWithDial.find('.dial-modal__title').text();
      expect(title).toBe('Edit Dial');
    });
  });
});
