import React, { Component } from 'react';

// ES6 class component
class Search extends Component {
    render() {
        const {
            value,
            onChange,
            onSubmit,
            children
        } = this.props;

        return (
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
        );
    }
}

export { Search };
