import React from 'react';

import { func } from 'prop-types';


export default function Button({ onClick }) {

  return (
    <button className="Button" type="button" onClick={onClick}>
      ❮ Back to movies
    </button>
  )
};

Button.propTypes = {
  onClick: func.isRequired,
}

