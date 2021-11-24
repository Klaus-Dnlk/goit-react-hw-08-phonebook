import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import ContactOperations from '../redux/contacts/contacts-operations';
import { getAllContacts } from '../redux/contacts/contacts-selectors';
import s from './Styles.module.scss';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const items = useSelector(getAllContacts);
  const dispatch = useDispatch();
  const contactId = uuidv4();
  const phoneId = uuidv4();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const repeatName = name =>
      items.find(contact => contact.name.toLowerCase() === name.toLowerCase());

    if (repeatName(name)) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(ContactOperations.addNewContact({ name, phone }));
    }
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={s.contact_form}>
        <label htmlFor={contactId} className={s.formLabel}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            className={s.inputWindow}
            value={name}
            onChange={handleChange}
            id={contactId}
          />
        </label>
        <label htmlFor={phoneId} className={s.contact_formLabel}>
          Phone
          <input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            className={s.inputWindow}
            value={phone}
            onChange={handleChange}
            id={phoneId}
          />
        </label>
        <button type="submit" title="Добавить контакт" className={s.btn}>
          Add contact
        </button>
      </div>
    </form>
  );
}
