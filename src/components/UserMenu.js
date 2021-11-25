import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../redux/auth';
import s from './Styles.module.scss';
import defaultAvatar from '../icons/userAva.png';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <div className={s.user_container}>
      <img src={avatar} alt="" width="32" className={s.avatar} />
      <span className={s.user_name}>Welcome, {name}</span>
      <button
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
        className={s.btn}
      >
        Log Out
      </button>
    </div>
  );
}
