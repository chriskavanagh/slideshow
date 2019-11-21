import React, { useState, Fragment } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import cx from "classnames";

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 4rem;
`;

const Transition = () => {
  const [toggle, setToggle] = useState(false);
  const [highlight, sethighlight] = useState(false);

  const switchMe = () => {
    setToggle(!toggle);
  };

  const listSwitch = () => {
    sethighlight(!highlight);
  };
  return (
    <Container>
      <button className="display" onClick={switchMe}>
        Click Me
      </button>
      <CSSTransition
        in={toggle}
        timeout={400}
        classNames="list-transition"
        unmountOnExit
        appear
        onEntered={listSwitch}
        onExit={listSwitch}
      >
        <div className="list-body">
          <ul className="list">
            <li
              className={cx("list-item", {
                "list-item--active": highlight
              })}
            >
              Writing JavaScript
            </li>
            <li className="list-item"> Running</li>
            <li className="list-item"> Technical Writing</li>
            <li className="list-item"> Writing Clean code</li>
          </ul>
        </div>
      </CSSTransition>
    </Container>
  );
};

export default Transition;
