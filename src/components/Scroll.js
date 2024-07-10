import React from "react";
import styled from "styled-components";

const ScrollContainer = styled.div`
  overflow-y: scroll;
  border: 2px solid #ccc; /* Light grey border */
  border-radius: 10px;
  height: 800px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  /* Scrollbar styles */
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
`;

const Scroll = ({ children }) => {
  return (
    <ScrollContainer>
      {children}
    </ScrollContainer>
  );
};

export default Scroll;
