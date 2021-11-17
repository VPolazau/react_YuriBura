import React from 'react';
import './item-status-filter.css';

const ItemStatusFilter = () => {
  return (
    <div className='btn-group'>
      <button type='button' className='btn btn-info'>
        All
      </button>
      <button type='button' className='btn btn-outline-secondary btn-active'>
        Active
      </button>
      <button type='button' className='btn btn-outline-secondary btn-done'>
        Done
      </button>
    </div>
  );
};

export default ItemStatusFilter;
