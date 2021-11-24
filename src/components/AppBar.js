import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import s from './Styles.module.scss';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.section}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <h2 className={s.title}>Navigation</h2>
    </header>
  );
}
