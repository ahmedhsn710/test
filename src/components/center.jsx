import React from 'react';

const Center = ({ children }) => {
  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={centerStyle}>
      {children}
    </div>
  );
};

export default Center;
