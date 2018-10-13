import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        const helloWorld = 'Welcome to the Road to learn React',
            person = {
                firstName: 'Dennis',
                lastName: 'Le'
            };

        return (
            <div className="App">
                <h2>{helloWorld}</h2>
                <h3>{person.firstName} {person.lastName}</h3>
            </div>
        );
    }
}

export default App;
