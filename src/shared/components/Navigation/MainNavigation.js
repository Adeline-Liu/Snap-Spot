import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./MainNavigation.css";

import Mainheader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
    // console.log("button pressed!");
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    // only one root per component, so wrapped by <React.Fragment> to fulfill this requirement
    <React.Fragment>
      {drawerIsOpen ? <Backdrop onClick={closeDrawerHandler} /> : null}
      {/* onece the drawer is open, render the backdrop component in the background to close the drawer for future use */}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <Mainheader>
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Your Places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </Mainheader>
    </React.Fragment>
  );
};

export default MainNavigation;
