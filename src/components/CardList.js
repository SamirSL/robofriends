import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const CardList = ({ robots }) => {
  return (
    <CardContainer>
      {robots.map((user, i) => {
        const { id, name, username, email } = user;
        return (
          <Card
            key={i}
            id={id}
            name={name}
            username={username}
            email={email}
          />
        );
      })}
    </CardContainer>
  );
};

export default CardList;
