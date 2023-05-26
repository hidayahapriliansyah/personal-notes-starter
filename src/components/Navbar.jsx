import React from 'react';

function Navbar() {
  return (
    <div className="note-app__header">
      <h1>Catata Catat</h1>
      <div className="note-search">
        <input type="text" placeholder="Cari catata ..." value=""/>
      </div>
    </div>
  );
};

export default Navbar;
