import React from 'react';
import { shallow } from 'enzyme';

import AddDialModal from '../../components/AddDialModal';

describe('AddDialModal component', () => {
  const props = {
    handleHideAddDialModal: jest.fn(),
    container: {
      name: 'Personal',
      color: 'orange'
    },
    isOpen: true,
    theme: {
      primary: '#333',
      light: '#fff',
      dark: '#000'
    }
  };
  const wrapper = shallow(<AddDialModal {...props} />);

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('displays correct title', () => {
    const title = wrapper.find('.add-dial-modal__title').text();
    expect(title).toBe('New Personal Dial');
  });

  it('renders AddDialForm', () => {
    expect(wrapper.find('Connect(AddDialForm)').length).toBe(1);
  });
});
