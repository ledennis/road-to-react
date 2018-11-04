import { sortBy } from 'lodash';

// Columns
export const smallColumn = {
    width: '10%,'
}

export const midColumn = {
    width: '30%,'
}

export const largeColumn = {
    width: '40%,'
}

// Sort
export const SORTS = {
    NONE: list => list,
    TITLE: list => sortBy(list, 'title'),
    AUTHOR: list => sortBy(list, 'author'),
    COMMENTS: list => sortBy(list, 'num_comments').reverse(),
    POINTS: list => sortBy(list, 'points').reverse(),
};
