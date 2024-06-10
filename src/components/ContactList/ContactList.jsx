import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={styles.wrapperList}>
      {contacts.map(contact => (
        <ContactListItem
          key={nanoid()}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
