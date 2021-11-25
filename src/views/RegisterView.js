import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import s from './views.module.scss';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.section}>
      <h1 className={s.title}>Registration page</h1>

      <form onSubmit={handleSubmit} className={s.user_form} autoComplete="off">
        <label className={s.user_label}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            className={s.user_input}
          />
        </label>
        <label className={s.user_label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={s.user_input}
          />
        </label>
        <label className={s.user_label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={s.user_input}
          />
        </label>

        <button type="submit" className={s.btn}>
          Register
        </button>
      </form>
    </div>
  );
}
