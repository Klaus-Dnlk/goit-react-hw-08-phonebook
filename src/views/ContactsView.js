// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import s from './views.module.scss';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList ';
import Homeview from '../views/HomeView';
import { authSelectors } from '../redux/auth';
// import contactsOperations from '../redux/contacts/contacts-operations';

export default function ContactsView() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(contactsOperations.fetchContacts());
  // }, [dispatch]);

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <div className={s.section}>
          <h2 className={s.title}>Phonebook</h2>
          <ContactForm />
          <h2 className={s.title}>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      ) : (
        <Homeview />
      )}
    </>
  );
}
