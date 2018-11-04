import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

library.add(faSpinner);

const Loading = ({ className = '' }) =>
    <div className={className}>
        <FontAwesomeIcon icon="spinner" />
    </div>

export { Loading };
