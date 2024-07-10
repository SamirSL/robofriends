import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  text-align: center;
  background-color: #d4edda; /* light-green */
  display: inline-block;
  border-radius: 15px;
  padding: 20px;
  margin: 15px;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0px 5px 15px rgba(0,0,0,0.1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 20px rgba(0,0,0,0.2);
  }
`;

const RobotImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;

const CardContent = styled.div`
  h2 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
    font-size: 1em;
  }
`;

const Card = ({ name, username, email, id }) => {
  return (
    <CardContainer>
      <RobotImage src={`https://robohash.org/${id}?200x200`} alt="robots" />
      <CardContent>
        <h2>{name}</h2>
        <p>{username}</p>
        <p>{email}</p>
      </CardContent>
    </CardContainer>
  );
}

export default Card;
