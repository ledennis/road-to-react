import React from 'react';

// Functional Stateless component
export const Search = ({
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
