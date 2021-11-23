import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../redux/contacts';
import s from './Styles.module.scss';
import { useEffect } from 'react';

export default function ContactList() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(contactsSelectors.getLoading);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {contacts.length > 0 && (
        <ul className={s.contactList}>
          {contacts.map(({ id, name, phone }) => (
            <li key={id} className={s.listItem}>
              <p>
                {name}: {phone}
              </p>
              <button
                type="button"
                onClick={() => dispatch(contactsOperations.deleteContact(id))}
                className={s.btn}
                title="Удалить контакт"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
