import React from 'react';

// Functional Stateless component
export const Button = ({ onClick, className = '', children }) =>
    <button
        onClick={onClick}
        className={className}
        type="button"
    >
        {children}
    </button>
