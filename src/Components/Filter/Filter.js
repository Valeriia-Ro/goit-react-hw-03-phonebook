import React from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';
const Filter = ({ value, onFilter }) => {
  return (
    <label className={styles.filter_label}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onFilter}
        className={styles.filter_input}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
