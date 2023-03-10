import React, { Component } from "react";

const Navbar = ({ totalCounters }) => {
  return (
    <nav className='navbar navbar-light bg-light'>
      <a
        className='navbar-brand'
        href='#'
      >
        Navbar{" "}
        <span className='badge bg-pill bg-secondary'>{totalCounters}</span>
      </a>
    </nav>
  );
};

export default Navbar;
