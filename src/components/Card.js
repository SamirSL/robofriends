import React, { useState } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  text-align: center;
  background-color: #c5f4da; /* Light green background */
  display: inline-block;
  border-radius: 15px;
  padding: 20px;
  margin: 15px;
  transition: transform 0.2s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  width: 300px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }


  @media (max-width: 450px) {
    width: 100%; 
    // border: 5px solid black;
    margin: 15px 0px 15px 0px;
  }
`;

const RobotImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const Card = ({ username, id }) => {
  const [expanded, setExpanded] = useState(false);
  const [details, setDetails] = useState(null);

  const handleClick = () => {
    if (!expanded) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(data => {
          setDetails(data);
          setExpanded(true);
        })
        .catch(error => {
          console.error('Error fetching user details:', error);
        });
    } else {
      setExpanded(false);
    }
  };

  return (
    <CardContainer onClick={handleClick}>
      <RobotImage src={`https://robohash.org/${id}?size=200x200`} alt="robot" />
      <div>
        <h2>{username}</h2>
        {expanded && details && (
          <div>
            <p><strong>Name:</strong> {details.name}</p>
            <p><strong>Email:</strong> {details.email}</p>
            <p><strong>Address:</strong> {details.address.street}, {details.address.city}</p>
            <p><strong>About Me:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        )}
      </div>
    </CardContainer>
  );
};

export default Card;
