import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'

const Header = () => {
    return (
      <div className='m-3'>
        <p className="header container shadow py-3 bg-body rounded">
          <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
          <h4 className="container rounded text-primary">
            Daily Exercise Training
          </h4>
        </p>
        <h5 className="container px-4">Select Today's Exercise</h5>
      </div>
    );
};

export default Header;