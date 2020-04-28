import React, { useState } from 'react';
import styled from 'styled-components';

import Burger from '@animated-burgers/burger-squeeze';
import '@animated-burgers/burger-squeeze/dist/styles.css';
import Image from './Image';
import NavDropdown from './NavDropdown';

import logo from '../images/drinkcast-logo-white.png';
import { get } from '../utils/apiConn';

const NavStyled = styled.nav`
  width: calc(100vw - (100vw - 100%));
  min-height: var(--nav-height);
  display: flex;
  background-color: var(--primaryFaded);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 6;

  .links {
    display: flex;
    font-size: 1.6rem;
    flex-direction: row-reverse;
    width: 100%;
    align-items: center;
  }
  
  .links {
    padding: 0 1rem;
  }

  .links a {
    padding: 10px 1rem;
  }
  
  a:hover {
    transition: 0.3s ease-in-out;
    color: var(--secondary);
  }

  @media only screen and (min-width: 601px) {
    .mobile {
      display: none;
    }
  }

  @media only screen and (max-width: 600px) {
    .desktop {
      display: none;
    }
  }
`;

const Nav = () => {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);

  const getBarName = () => {
    const item = localStorage.getItem('barName');
    const bar = JSON.parse(item);
    return bar.localValue;
  };

  const name = getBarName();

  const burgerClick = () => {
    setBurgerIsOpen(!burgerIsOpen);
  };

  return (
    <NavStyled>
      <a href="/">
        <Image src={logo} alt="logo" className="nav-logo" />
      </a>
      <div className="desktop links">
        {localStorage.getItem('sessionId') && localStorage.getItem('token')
          ? <a href="/bar">{name}</a> : null}
        <a href="/joinbar" className="joinBar">
          JOIN
        </a>
        <a href="/createbar" classnam="createBar">
          CREATE
        </a>
      </div>
      <div className="mobile links">
        {burgerIsOpen ? <Burger isOpen onClick={burgerClick} /> : <Burger onClick={burgerClick} />}
        <NavDropdown isOpen={burgerIsOpen}>
          {localStorage.getItem('sessionId') && localStorage.getItem('token')
            ? <a href="/bar">{name}</a> : null}
          <a href="/joinbar" className="joinBar">
            JOIN
          </a>
          <a href="/createbar" classnam="createBar">
            CREATE
          </a>
        </NavDropdown>
      </div>
    </NavStyled>
  );
};

export default Nav;
