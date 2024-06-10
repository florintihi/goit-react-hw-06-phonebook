import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import PropTypes from 'prop-types';

const ContactForm = ({ handleNewContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleContact = event => {
    event.preventDefault();
    handleNewContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleContact} className={styles.wrapper}>
      <h3>Name</h3>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <h3>Number</h3>
      <input
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
      />
      <button type="submit" className={styles.addButton}>
        Add
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  handleNewContact: PropTypes.func.isRequired,
};

export default ContactForm;
