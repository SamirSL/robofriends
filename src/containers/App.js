import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    color: #333;
  }

  h1, h2, h3 {
    font-family: 'SEGA LOGO FONT', sans-serif; /* Assuming you have this font imported */
    font-weight: 200;
    color: #0ccac4;
  }

  /* Add more global styles as needed */
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
    }, []);

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    };

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ? (
        <h1>Loading</h1>
    ) : (
        <>
            <GlobalStyle />
            <Container>
                <div className='app-wrapper tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <div className='scroll-area-1'>
                        <SearchBox searchChange={onSearchChange} />
                    </div>
                    <div className='scroll-area-2'>
                        <ErrorBoundry>
                            <Scroll>
                                <CardList robots={filteredRobots} />
                            </Scroll>
                        </ErrorBoundry>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default App;
