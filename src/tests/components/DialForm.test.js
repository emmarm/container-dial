import React from 'react';
import { shallow } from 'enzyme';

import { DialForm } from '../../components/DialForm';

describe('DialForm component', () => {
  const props = {
    handleHideDialModal: jest.fn(),
    theme: {
      primary: '#333',
      dark: '#000',
      light: '#fff'
    },
    container: {
      name: 'Personal',
      color: 'orange'
    },
    addDial: () => {},
    toggleShowDeleteConfirm: jest.fn()
  };
  const wrapper = shallow(<DialForm {...props} />);

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

  describe('button actions', () => {
    it('calls handleHideDialModal on cancel', () => {
      const cancelButton = wrapper.find('Styled(button)').first();
      cancelButton.simulate('click');
      expect(props.handleHideDialModal).toHaveBeenCalled();
    });
  });

  describe('with dial prop', () => {
    const dial = {
      siteName: 'Goodreads',
      siteUrl: 'https://goodreads.com',
      container: 'Personal',
      favicon: 'image.jpg'
    };
    const wrapperWithDial = shallow(<DialForm {...props} dial={dial} />);

    it('sets up inputs with dial data', () => {
      const nameInput = wrapperWithDial.find('Styled(input)').first();
      const urlInput = wrapperWithDial.find('Styled(input)').last();
      expect(nameInput.props().value).toBe('Goodreads');
      expect(urlInput.props().value).toBe('https://goodreads.com');
    });

    it('shows delete button', () => {
      const deleteButton = wrapperWithDial.find('[danger=true]');
      expect(deleteButton.length).toBeGreaterThan(0);
    });

    it('calls toggleShowDeleteConfirm when delete button clicked', () => {
      const deleteButton = wrapperWithDial.find('[danger=true]');
      deleteButton.simulate('click');
      expect(props.toggleShowDeleteConfirm).toHaveBeenCalled();
    });
  });
});
