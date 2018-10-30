import React, { Component } from 'react';
import './App.css';

const DEFAULT_QUERY = 'redux';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';

const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`;

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

// ES6 Class Component
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: null,
            searchTerm: DEFAULT_QUERY
        };

        // Explicityly binds methods.
        this.setSearchTopStories = this.setSearchTopStories.bind(this);
        this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
    }

    setSearchTopStories(result) {
        this.setState({ result });
    }

    fetchSearchTopStories(searchTerm) {
        fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
            .then(response => response.json())
            .then(result => this.setSearchTopStories(result))
            .catch(error => error);
    }

    onSearchChange(event) {
        this.setState({ searchTerm: event.target.value });
    }

    onSearchSubmit(event) {
        const { searchTerm } = this.state;

        this.fetchSearchTopStories(searchTerm);
        event.preventDefault();
    }

    onDismiss(id) {
        const isNotId = (item) => item.objectID !== id;
        const updatedHits = this.state.result.hits.filter(isNotId);
        this.setState({
            result: { ...this.state.result, hits: updatedHits }
        });
    }

    componentDidMount() {
        const { searchTerm } = this.state;

        this.fetchSearchTopStories(searchTerm);
    }

    render() {
        // Destructuring this.state to create local scope variables.
        const { searchTerm,
                result
        } = this.state;

        return (
            <div className="page">
                <div className="interactions">
                    <Search
                        value={searchTerm}
                        onChange={this.onSearchChange}
                        onSubmit={this.onSearchSubmit}
                    >
                    Search
                    </Search>
                </div>
                {   result ?
                        <Table
                        list={result.hits}
                        onDismiss={this.onDismiss}
                        />
                        : null
                }
            </div>
        );
    }
}

// Functional Stateless component
const Search = ({
    value,
    onChange,
    onSubmit,
    children }) =>
    <form onSubmit={onSubmit}>
        <input
            type="text"
            value={value}
            onChange={onChange}
        />
        <button type="submit">
            {children}
        </button>
    </form>

const largeColumn = {
    width: '40%,'
}

const midColumn = {
    width: '30%,'
}

const smallColumn = {
    width: '10%,'
}

// Functional Stateless component
const Table = ({ list, onDismiss }) =>
    <div>
        {list.map(item =>
            <div key={item.objectID} className="table-row">
                <span style={largeColumn}>
                    <a href={item.url}>{item.title} </a>
                </span>
                <span style={midColumn}>
                    {item.author}
                </span>
                <span style={smallColumn}>
                    {item.num_comments}
                </span>
                <span style={smallColumn}>
                    {item.points}
                </span>
                <span style={smallColumn}>
                    <Button
                        onClick={() => onDismiss(item.objectID)}
                        className="button-inline"
                    >
                        Dismiss
                    </Button>
                </span>
            </div>
        )}
    </div>

// Functional Stateless component
const Button = ({ onClick, className = '', children }) =>
    <button
        onClick={onClick}
        className={className}
        type="button"
    >
        {children}
    </button>

export default App;
