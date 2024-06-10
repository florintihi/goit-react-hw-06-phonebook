import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ handleFilterChange, filter }) => {
  return <input type="text" onChange={handleFilterChange} value={filter} />;
};

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
