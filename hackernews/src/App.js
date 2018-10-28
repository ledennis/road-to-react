import React, { Component } from 'react';
import './App.css';

const list = [
    {
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://github.com/reactjs/redux',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
];

// Without arrow functions
// function isSearched(searchTerm) {
//     return function(item) {
//         return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//     }
// }

// With arrow functions
const isSearched = searchTerm => item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list,
            searchTerm: ''
        };

        // Explicityly binds onDismiss to this. See onClickMe for implicit.
        this.onDismiss = this.onDismiss.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    onDismiss(id) {
        const isNotId = (item) => item.objectID !== id;
        const updatedList = this.state.list.filter(isNotId);
        this.setState({ list: updatedList });
    }

    onSearchChange(event) {
        this.setState({ searchTerm: event.target.value });
    }

    // Implicitly binds onClickMe to this.
    onClickMe = () => {
        console.log(this);
    }

    render() {
        // Destructuring this.state to create local scope variables.
        const { searchTerm,
                list
        } = this.state;
        return (
            <div className="App">
                <Search
                    value={searchTerm}
                    onChange={this.onSearchChange}
                />
                <Table
                    list={list}
                    pattern={searchTerm}
                    onDismiss={this.onDismiss}
                />
            </div>
        );
    }
}

class Search extends Component {
    render() {
        const {
            value,
            onChange
        } = this.props;
        return (
            <form>
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                />
            </form>
        );
    }
}

class Table extends Component {
    render() {
        const {
            list,
            pattern,
            onDismiss
        } = this.props;
        return (
            <div>
                {list.filter(isSearched(pattern)).map(item =>
                    <div key={item.objectID}>
                        <span>
                            <a href={item.url}>{item.title} </a>
                        </span>
                        <span>{item.author}</span>
                        <span>{item.num_comments}</span>
                        <span>{item.points}</span>
                        <span>
                            <button
                                onClick = {() => onDismiss(item.objectID)}
                                type = "button"
                            >
                            </button>
                        </span>
                    </div>
                )}
            </div>
        );
    }
}

export default App;
