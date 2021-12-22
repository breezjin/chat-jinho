import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export default function Button({ children, onClick, type }) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  onCick: PropTypes.func,
  type: PropTypes.string,
};

const StyledButton = styled.button`
  font-size: small;
  -webkit-appearance: button;
  text-rendering: auto;
  color: white;
  text-indent: 0rem;
  text-shadow: none;
  display: inline-block;
  text-align: center;
  align-items: flex-start;
  background-color: #ff515f;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186);
  border-image: initial;
  margin: 0.4rem 0.2rem;
  padding: 0.6rem 0.8rem;
  border-radius: 0.4rem;
  cursor: pointer;

  :disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
  }

  :hover {
    background-color: #f01f30;
  }
`;
