import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../../routes';


const Navigation = () => (
  <ul className="Heder">
    <li>
      <NavLink
        exact
        to={routes.HOME}
        style={{ color: '#212121' }}
        activeStyle={{ color: 'palevioletred' }}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to={routes.MOVIES}
        style={{ color: '#212121' }}
        activeStyle={{ color: 'palevioletred' }}
      >
        Shows
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
