import React from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 10px;
  border: none;
  border-bottom: 2px solid #ccc;
  background-color: #f0f0f0;
  font-size: 1em;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  
  &:focus {
    border-bottom: 2px solid #0ccac4;
  }
`;

const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2">
            <Input
                type="search"
                placeholder="search robots"
                onChange={searchChange}
            />
        </div>
    );
};

export default SearchBox;
