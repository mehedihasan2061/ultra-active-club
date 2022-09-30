import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Header = () => {
    return (
      <div className='header'>
        <span>
          <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
          <h4 className="container shadow p-3 m-5 bg-body rounded text-primary">
            Daily Exercise Training
          </h4>
        </span>
        <h5 className="container px-4">Select Today's Exercise</h5>
      </div>
    );
};

export default Header;