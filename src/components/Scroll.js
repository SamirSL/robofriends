import React from "react";
import styled from "styled-components";

const ScrollContainer = styled.div`
  max-width: 1200px; /* Adjust max-width as needed */
  margin: 0 auto; /* Center container horizontally */
  overflow-x: hidden;
  overflow-y: scroll;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  
  /* Hide default scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
  
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  @media (max-width: 768px) {
    padding: 10px; /* Adjust padding for smaller screens */
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
