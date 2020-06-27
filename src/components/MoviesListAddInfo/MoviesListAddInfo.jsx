import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import { object } from "prop-types";

import Cast from '../Cast';
import Reviews from '../Reviews';

const MoviesListAddInfo = (props) => {
  const { match, location } = props;

  return (
    <div>
      <hr />
            Additional information
      <ul>
        <li>
          <NavLink
            to={{
              pathname: `${match.url}/cast`,
              state: { from: location }
            }}
            style={{ color: '#212121', fontWeight: 600 }}
            activeStyle={{ color: 'palevioletred' }}>Cast</NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: `${match.url}/reviews`,
              state: { from: location }
            }}
            style={{ color: '#212121', fontWeight: 600 }}
            activeStyle={{ color: 'palevioletred' }}>Reviews</NavLink>
        </li>
      </ul>
      <hr />
      <Route path={`${match.path}/cast`} component={Cast} />
      <Route path={`${match.path}/reviews`} component={Reviews} />
    </div>
  );
}

MoviesListAddInfo.propTypes = {
  movies: object.isRequired,
};

export default MoviesListAddInfo;


