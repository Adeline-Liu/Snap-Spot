import React from "react";
import ReactDom from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./SideDrawer.css";

const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      //   in takes a boolean that determines whether the component should be in the "entered" or "exited" state
      //   when true, the transition to enter is performed, and when false, the transition to exit is performed
      //   this prop controls whether the component should be shown (true) or hidden (false)
      timeout={350}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );

  return ReactDom.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
