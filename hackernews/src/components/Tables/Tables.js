import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Buttons/Buttons';
import { Sort } from '../Sort/Sort';
import {
    smallColumn,
    midColumn,
    largeColumn,
    SORTS
} from '../../constants/Tables.js';

// Functional Stateless component
const Table = ({
    list,
    sortKey="NONE",
    isSortReverse=false,
    onSort,
    onDismiss
}) => {
    const sortedList = SORTS[sortKey](list);
    const reverseSortedList = isSortReverse
        ? sortedList.reverse()
        : sortedList;

    console.log(sortedList);

    return (
        <div className="table">
            <div className="table-header">
                <span style={{ width: '40%' }}>
                     <Sort
                        sortKey={'TITLE'}
                        onSort={onSort}
                        activeSortKey={sortKey}
                    >
                        Title
                    </Sort>
                </span>
                <span style={{ width: '30%' }}>
                     <Sort
                        sortKey={'AUTHOR'}
                        onSort={onSort}
                        activeSortKey={sortKey}
                    >
                        Author
                    </Sort>
                </span>
                <span style={{ width: '10%%' }}>
                     <Sort
                        sortKey={'COMMENTS'}
                        onSort={onSort}
                        activeSortKey={sortKey}
                    >
                        Comments
                    </Sort>
                </span>
                <span style={{ width: '10%' }}>
                     <Sort
                        sortKey={'POINTS'}
                        onSort={onSort}
                        activeSortKey={sortKey}
                    >
                        Points
                    </Sort>
                </span>
                <span style={{ width: '10%' }}>
                     Archive
                </span>
            </div>
            {SORTS[sortKey](list).map(item =>
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
    );
}

Table.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            objectID: PropTypes.string.isRequired,
            author: PropTypes.string,
            url: PropTypes.string,
            num_comments: PropTypes.number,
            points: PropTypes.number,
        })
    ).isRequired,
    onDismiss: PropTypes.func.isRequired,
};

export { Table };
