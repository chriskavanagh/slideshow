import React, { useState } from "react";
import styled from "styled-components";
import circles from "../circles.svg";

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

  a {
    color: white;
    text-decoration: none;
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    position: fixed;
    background: #5b78c7;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    clip-path: circle(100px at 90% -10%);
    -webkit-clip-path: circle(100px at 90% -10%);
    transition: all 1s ease-out;
    pointer-events: none;

    ${({ open }) => {
      if (open === true) return `clip-path: circle(1000px at 90% -10%)`;
      if (open === true) return `pointer-events: all`;
    }}
  }
`;

const Navbar = props => {
  console.log(props);
  const [open, setOpen] = useState(false);

  const toggleCollapse = () => {
    setOpen(!open);
  };

  const pages = ["about", "contact", "projects"];

  return (
    <>
      <Nav>
        <Hamburger className="hamburger" onClick={toggleCollapse}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </Hamburger>
        <UL open={open}>
          {pages.map(page => (
            <li className={open ? "fade" : ""}>
              <a href="/{page}">{page.toUpperCase()}</a>
            </li>
          ))}
        </UL>
      </Nav>

      <section className="landing">
        <img src={circles} alt="dots" />
        <h1>Dots</h1>
      </section>
    </>
  );
};

export default Navbar;
