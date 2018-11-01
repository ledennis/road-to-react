import React from 'react';
import { Button } from '../Buttons/Buttons';
import {
    smallColumn,
    midColumn,
    largeColumn
} from '../../constants/Tables.js';

// Functional Stateless component
export const Table = ({ list, onDismiss }) =>
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
