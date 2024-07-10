import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundry'; // Corrected spelling
import './App.css';

const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users))
            .catch(error => console.error('Error fetching robots:', error));
    }, []); // Empty dependency array ensures this effect runs only once after the initial render

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    };

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ? (
        <h1 className='tc f1'>Loading</h1> // Center align and apply f1 class for large font
    ) : (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundary> {/* Corrected component name */}
                    <CardList robots={filteredRobots} />
                </ErrorBoundary>
            </Scroll>
        </div>
    );
};

export default App;
