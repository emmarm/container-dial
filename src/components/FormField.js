import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Field = styled('div')({
  marginBottom: 15,
  position: 'relative'
});

const InputArea = styled('div')({
  alignItems: 'center',
  display: 'grid',
  gridTemplateColumns: '120px 300px',
  margin: 10
});

const Label = styled('label')({
  color: '#888',
  fontSize: 20
});

const Input = styled('input')(
  {
    padding: 8
  },
  ({ error, theme }) => ({
    outline: error && `1px solid ${theme.danger}`
  })
);

const Err = styled('p')(
  {
    fontSize: 14,
    left: 135,
    position: 'absolute',
    top: 40
  },
  ({ theme }) => ({
    color: theme.danger
  })
);

const FormField = ({
  error,
  label,
  id,
  onBlur,
  onChange,
  placeholder,
  type,
  value
}) => (
  <Field>
    <InputArea>
      <Label htmlFor={id}>{label}</Label>
      <Input
        error={!!error}
        id={id}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        type={type ? type : 'text'}
        value={value}
      />
    </InputArea>
    <Err>{error}</Err>
  </Field>
);

FormField.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number, PropTypes.bool])
};

export default FormField;
