import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  height: 10vh;
  background: #5b78c7;

  @media screen and (max-width: 768px) {
    position: relative;
  }
`;

const Hamburger = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    cursor: pointer;
    right: 5%;
    top: 50%;
    transform: translate(-5%, -50%);
    z-index: 2;

    .line {
      width: 30px;
      height: 3px;
      background: white;
      margin: 5px;
    }
  }
`;

const UL = styled.ul`
  display: flex;
  list-style: none;
  width: 30%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  margin-left: auto;
  background-color: coral;

  @media screen and (max-width: 768px) {
    position: fixed;
    background: #5b78c7;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    clip-path: circle(100px at 90% -10%);
    transition: all 1s ease-out;
    pointer-events: none;

    li.non--fade {
      opacity: 0;
    }
    .nav-links li a {
      font-size: 25px;
    }
    li:nth-child(1) {
      transition: all 0.5s ease 0.2s;
    }
    li:nth-child(2) {
      transition: all 0.5s ease 0.4s;
    }
    li:nth-child(3) {
      transition: all 0.5s ease 0.6s;
    }
    li.fade {
      opacity: 1;
    }

    ${({ open }) => {
      if (open === true) return `clip-path: circle(1200px at 90% -10%)`;
      if (open === true) return `pointer-events: all`;
    }}
  }
`;

const StyledLink = styled(NavLink)`
  padding: 5px 5px 5px 5px;
  color: #fff;
  text-decoration: none;
  display: block;
  font-family: Roboto;
  font-size: 20px;
  :hover,
  :active {
    color: #fa923f;
    background: gray;
  }
`;

// Navbar Component
const Navbar = props => {
  const [open, setOpen] = useState(false);

  const toggleCollapse = () => {
    setOpen(!open);
  };

  const pages = ["About", "Contact", "Projects"];

  return (
    <>
      <Nav>
        <Hamburger className="hamburger" onClick={toggleCollapse}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </Hamburger>
        <UL open={open}>
          {pages.map((page, i) => (
            <li className={open ? "fade" : "non--fade"} key={i}>
              <StyledLink to={`/${page.toLowerCase()}`}>{page}</StyledLink>
            </li>
          ))}
        </UL>
      </Nav>
    </>
  );
};

export default Navbar;
