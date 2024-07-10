import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  padding: 16px;
  display: flex;
  justify-content: center;
`;

const SearchInput = styled.input`
  padding: 12px;
  border: 2px solid #4CAF50; /* Green */
  border-radius: 25px;
  outline: none;
  width: 300px;
  font-size: 16px;
  transition: width 0.3s ease-in-out;

  &:focus {
    width: 350px;
    border-color: #45a049;
  }

  &::placeholder {
    color: #9E9E9E; /* Grey */
  }
`;

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <SearchContainer>
      <SearchInput
        type="search"
        placeholder="Search robots..."
        onChange={searchChange}
      />
    </SearchContainer>
  );
}

export default SearchBox;
