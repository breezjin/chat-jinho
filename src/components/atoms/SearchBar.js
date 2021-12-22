import { HiSortAscending, HiSortDescending } from 'react-icons/hi';

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export default function SearchBar({ onChange, handleSort, sort }) {
  return (
    <StyledSearchBar>
      <input
        type="text"
        placeholder='🔍    친구 이름을 검색하세요.'
        onChange={(e) => onChange(e.target.value)}
      />
      <div className='sort'>
        {sort
          ? <HiSortDescending className='icon' onClick={handleSort} />
          : <HiSortAscending className='icon' onClick={handleSort} />
        }
      </div>
    </StyledSearchBar>
  );
}

SearchBar.propTypes = {
  onChange: PropTypes.func,
  handleSort: PropTypes.func,
  sort: PropTypes.bool,
};

const StyledSearchBar = styled.div`
  width: 100%;
  background-color: whitesmoke;
  display: flex;
  justify-content: space-between;

  input {
    flex-grow: 1;
    padding: 0.4rem;
    border-color: #949494;
    box-shadow: inset 2px 2px 6px #dedede;
    margin: 0.5rem 0rem 0.5rem 1rem;
  }

  .sort {
    width: 2rem;
    height: 2rem;
    padding: 0.4rem;
    border-color: #949494;
    margin: 0.5rem 0rem 0.5rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .icon {
    width: 100%;
    height: 80%;
  }
`;
