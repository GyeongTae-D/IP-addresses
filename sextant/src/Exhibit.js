import React from 'react';
import './Exhibit.css';

function Exhibit({ children }) {
  return (
    <div className="exhibit">
      {children}
    </div>
  );
}

export default Exhibit;