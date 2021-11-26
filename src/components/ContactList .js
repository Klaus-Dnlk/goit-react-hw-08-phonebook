// import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors } from '../redux/contacts';
import operations from '../redux/contacts/contacts-operations';
import { Button } from 'react-bootstrap';
import s from './Styles.module.css';

export default function ContactList() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(contactsSelectors.getLoading);

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {contacts.length > 0 && (
        <ul className={s.contactList}>
          {contacts.map(({ id, name, number }) => (
            <li key={id} className={s.listItem}>
              <p>
                {name}: {number}
              </p>
              <Button
                variant="outline-danger"
                size="sm"
                type="button"
                className={s.btn}
                onClick={() => dispatch(operations.deleteContact(id))}
                title="Delete contact"
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
