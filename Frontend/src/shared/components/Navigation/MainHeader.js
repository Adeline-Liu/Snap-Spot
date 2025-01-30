import React from "react";

import "./MainHeader.css";

const MainHeader = (props) => {
  return <header className="main-header">{props.children}</header>;
  // props.children refers to the things that are passed bewteen opening and closing tags,
  // in this case, anything passed in between <MainHeader> and </MainHeader>
};

export default MainHeader;
