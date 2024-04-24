import React from "react";
import { Link } from "react-router-dom";

import "./MainNavigation.css";
import Mainheader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";

const MainNavigation = (props) => {
  return (
    // only one root per component, so wrapped by <React.Fragment> to fulfill this requirement
    <React.Fragment>
      <SideDrawer>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <Mainheader className="main-navigation__menu-btn">
        <button>
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
