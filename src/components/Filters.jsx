import React from 'react';

const Filters = ({ setFilter, filter }) => {
  const filterOptions = [
    { label: 'All', value: 'all' },
    { label: 'Completed', value: 'completed' },
    { label: 'Incomplete', value: 'incomplete' },
    { label: '★', value: '★' },
    { label: '★★', value: '★★' },
    { label: '★★★', value: '★★★' },
  ];

  return (
    <div className="filters">
      {filterOptions.map(option => (
        <button
          key={option.value}
          className={filter === option.value ? 'selected' : ''}
          onClick={() => setFilter(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Filters;
