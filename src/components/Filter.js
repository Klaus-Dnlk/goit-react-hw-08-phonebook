import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, changeFilter } from '../redux/contacts';
import { v4 as uuidv4 } from 'uuid';
import s from './Styles.module.scss';

const filterId = uuidv4();

export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  return (
    <div className={s.filterBox}>
      <label htmlFor={filterId} className={s.filterLabel}>
        <input
          type="text"
          className={s.filterInput}
          id={filterId}
          placeholder="Find contacts by name"
          value={value}
          onChange={e => dispatch(changeFilter(e.target.value))}
        ></input>
      </label>
    </div>
  );
}
