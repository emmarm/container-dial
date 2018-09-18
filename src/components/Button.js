import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import Icon from './Icon';

const Btn = styled('button')(
  {
    alignItems: 'center',
    border: 'none',
    borderRadius: 4,
    boxShadow:
      'rgba(50, 50, 93, 0.1) 0px 7px 14px, rgba(0, 0, 0, 0.08) 0px 3px 6px',
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    fontSize: 20,
    fontWeight: 100,
    height: 50,
    justifyContent: 'center',
    padding: '0 25px',
    ':disabled': {
      cursor: 'auto'
    }
  },
  ({ danger, narrow, padded, primary, theme }) => ({
    backgroundColor: primary
      ? theme.primary
      : danger
        ? theme.danger
        : theme.secondary,
    padding: narrow && '0 15px',
    paddingLeft: padded && 30,
    ':disabled': {
      backgroundColor: theme.disabled
    },
    ':hover,:focus': {
      backgroundColor: primary
        ? theme.light
        : danger
          ? theme.dangerLight
          : theme.secondaryLight,
      ':disabled': {
        backgroundColor: theme.disabled
      }
    },
    '::-moz-focus-inner': {
      border: 0
    }
  })
);

const Button = ({
  className,
  danger,
  disabled,
  icon,
  narrow,
  onClick,
  primary,
  submit,
  tabIndex,
  text
}) => (
  <Btn
    className={className}
    danger={danger}
    disabled={disabled}
    onClick={onClick}
    narrow={narrow}
    padded={!!icon && !!text}
    primary={primary}
    type={submit ? 'submit' : 'button'}
    tabIndex={tabIndex ? tabIndex : 0}
  >
    {text}
    {icon && <Icon icon={icon} padded={!!text} />}
  </Btn>
);

Button.propTypes = {
  className: PropTypes.string,
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  narrow: PropTypes.bool,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  submit: PropTypes.bool,
  tabIndex: PropTypes.number,
  text: PropTypes.string
};

export default Button;
