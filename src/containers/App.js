import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

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
    );
};

export default App;
