import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import s from './views.module.css';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList ';
import contactsOperations from '../redux/contacts/contacts-operations';

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className={s.flexbox}>
        <div className={s.flexboxitem}>
          <h2 className={s.title}>Add new contact</h2>
          <ContactForm />
        </div>
        <div className={s.flexboxitem}>
          <h2 className={s.title}>Contacts</h2>
          <Filter />
          <ContactList className={s.contactlist} />
        </div>
      </div>
    </>
  );
}
