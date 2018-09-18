import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
});

const Form = ({ children, onSubmit }) => (
  <StyledForm onSubmit={onSubmit}>{children}</StyledForm>
);

Form.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onSubmit: PropTypes.func
};

export default Form;
