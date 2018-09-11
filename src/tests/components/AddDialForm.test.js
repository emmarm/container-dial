import React from 'react';
import { shallow } from 'enzyme';

import { AddDialForm } from '../../components/AddDialForm';

describe('AddDialForm component', () => {
  const props = {
    handleHideAddDialModal: jest.fn(),
    theme: {
      primary: '#333',
      dark: '#000',
      light: '#fff'
    },
    container: {
      name: 'Personal',
      color: 'orange'
    },
    addDial: () => {}
  };
  const wrapper = shallow(<AddDialForm {...props} />);

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('site-name input', () => {
    const nameInput = wrapper.find('#site-name');

    it('updates siteName on change', () => {
      const value = 'Goodreads';
      expect(nameInput.length).toBe(1);
      nameInput.simulate('change', {
        target: { value }
      });
      expect(wrapper.state('siteName')).toBe(value);
    });

    it('sets nameError for empty site name', () => {
      nameInput.simulate('blur', {
        target: { value: '' }
      });
      expect(wrapper.state('nameError')).toBe('Required');
    });

    it('does not set nameError for valid site name', () => {
      nameInput.simulate('blur', {
        target: { value: 'Goodreads' }
      });
      expect(wrapper.state('nameError')).toBe('');
    });
  });

  describe('site-url input', () => {
    const urlInput = wrapper.find('#site-url');

    it('updates siteUrl on change', () => {
      const value = 'https://goodreads.com';
      expect(urlInput.length).toBe(1);
      urlInput.simulate('change', {
        target: { value }
      });
      expect(wrapper.state('siteUrl')).toBe(value);
    });

    it('sets urlError for empty url', () => {
      expect(urlInput.length).toBe(1);
      urlInput.simulate('blur', {
        target: { value: '' }
      });
      expect(wrapper.state('urlError')).toBe('Required');
    });

    it('sets urlError for invalid url', () => {
      urlInput.simulate('blur', {
        target: { value: '@?!' }
      });
      expect(wrapper.state('urlError')).toBe('Invalid URL');
    });

    it('does not set urlError for valid url', () => {
      urlInput.simulate('blur', {
        target: { value: 'https://goodreads.com' }
      });
      expect(wrapper.state('urlError')).toBe('');
    });
  });
});
