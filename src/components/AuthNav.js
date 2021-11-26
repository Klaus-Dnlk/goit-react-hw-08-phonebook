import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Styles.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Registration
      </NavLink>

      <NavLink
        to="/login"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Sign in
      </NavLink>
    </div>
  );
}
