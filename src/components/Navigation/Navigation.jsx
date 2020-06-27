import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../../routes';


const Navigation = ({ props }) => (
  <ul className="Heder">
    {
      routes.map(({ path, name, isExact, showInMenu }) =>
        showInMenu ? (
          <li key={name}>
            <NavLink
              to={{ pathname: path }}
              exact={isExact}
              style={{ color: '#212121', fontWeight: 600 }}
              activeStyle={{ color: 'palevioletred' }}
            >
              {name}
            </NavLink>
          </li>
        )
          : null
      )
    }
    {/* <li>
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
    </li> */}
  </ul >
);

export default Navigation;
