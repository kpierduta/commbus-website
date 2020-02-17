import React from 'react';

const DropDownItem = ({ onClick, title }) => (
  <button
    type="button"
    onClick={onClick}
    className="title dropdown-item is-5 has-text-weight-medium	has-text-white"
  >
    {title}
  </button>
);

export default DropDownItem;
