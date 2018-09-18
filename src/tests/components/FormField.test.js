import React from 'react';
import { shallow } from 'enzyme';

import FormField from '../../components/FormField';

describe('FormField component', () => {
  const props = {
    id: 'new-form',
    label: 'New Form',
    onBlur: () => {},
    onChange: () => {},
    placeholder: 'Some text',
    value: 1
  };
  const wrapper = shallow(<FormField {...props} />);

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('does not show error text if no error', () => {
    const error = wrapper
      .find('Styled(p)')
      .dive()
      .find('p')
      .text();
    expect(error).toBe('');
  });

  it('applies id to input and label htmlFor', () => {
    const label = wrapper.find('Styled(label)').first();
    const input = wrapper.find('Styled(input)').first();
    expect(label.prop('htmlFor')).toBe(props.id);
    expect(input.prop('id')).toBe(props.id);
  });

  it('applies label text', () => {
    const labelText = wrapper
      .find('Styled(label)')
      .first()
      .dive()
      .find('label')
      .text();
    expect(labelText).toBe(props.label);
  });

  it('applies placeholder text and value to input', () => {
    const input = wrapper.find('Styled(input)').first();
    expect(input.prop('placeholder')).toBe(props.placeholder);
    expect(input.prop('value')).toBe(props.value);
  });

  it('sets input type if type prop provided', () => {
    const wrapperWithType = shallow(<FormField {...props} type="number" />);
    const input = wrapperWithType.find('Styled(input)').first();
    expect(input.prop('type')).toBe('number');
  });

  it('shows error text if error', () => {
    const wrapperWithError = shallow(<FormField {...props} error="Required" />);
    const errorText = wrapperWithError
      .find('Styled(p)')
      .dive()
      .find('p')
      .text();
    expect(errorText).toBe('Required');
  });
});
