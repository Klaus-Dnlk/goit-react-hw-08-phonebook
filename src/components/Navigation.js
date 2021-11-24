import { NavLink } from 'react-router-dom';
import s from './Styles.module.scss';

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
        Home
      </NavLink>

      <NavLink
        to="/contacts"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Contacts
      </NavLink>
    </nav>
  );
}
