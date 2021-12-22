import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export default function Header({ onClick, disabled }) {

  return (
    <StyledHeader>
      <div
        className='tab'
        onClick={!disabled ? onClick : undefined}
        disabled={!disabled}
      >
        친구목록
      </div>
      <div
        className='tab'
        onClick={disabled ? onClick : undefined}
        disabled={disabled}
      >
        채팅목록
      </div>
    </StyledHeader>
  );
}

Header.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .tab {
    width: 50%;
    color: white;
    background-color: #ff515f;
    padding: 0.4rem;
    display: flex;
    justify-content: center;
    cursor: unset;
  }

  .tab[disabled] {
    background-color: gray;
    opacity: 0.5;
    cursor: pointer;
  }
`;
