import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

import { NavLink } from 'react-router-dom';
import s from './Styles.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          className={s.link}
          activeClassName={s.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
