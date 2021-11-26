import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';
import operations from '../redux/auth/auth-operations';
import { Button } from 'react-bootstrap';
import s from './Styles.module.css';
import defaultAvatar from '../icons/userAva.png';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <div className={s.user_container}>
      <img src={avatar} alt="" width="32" className={s.avatar} />
      <span className={s.user_name}>Welcome, {name}</span>
      <Button
        variant="outline-success"
        type="button"
        className={s.btn}
        onClick={() => dispatch(operations.logOut())}
      >
        Log Out
      </Button>
    </div>
  );
}
