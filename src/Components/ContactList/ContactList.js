import React from 'react';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onClick }) => (
  <ul className={styles.list_section}>
    {contacts().map(({ id, name, number }) => (
      <li key={id} className={styles.list_element}>
        <span>{name}: </span>
        <span>{number} </span>
        <button
          className={styles.list_button}
          type="button"
          onClick={() => {
            onClick(id);
          }}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactList;
