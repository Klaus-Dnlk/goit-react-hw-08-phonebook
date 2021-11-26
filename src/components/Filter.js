import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, changeFilter } from '../redux/contacts';
import { v4 as uuidv4 } from 'uuid';
import { Form } from 'react-bootstrap';
import s from './Styles.module.css';

const filterId = uuidv4();

export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <Form className={s.filterBox}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className={s.filterLabel}></Form.Label>
        <Form.Control
          type="text"
          className={s.filterInput}
          id={filterId}
          placeholder="Find contact by name"
          value={value}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </Form.Group>
    </Form>
  );
}
