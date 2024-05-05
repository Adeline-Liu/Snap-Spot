import React from "react";
import ReactDom from "react-dom";

import "./Modal.css";
import Backdrop from "./Backdrop";
import { CSSTransition } from "react-transition-group";

// internal use only, so don't need to export, will used by modal
const ModalOverlay = (props) => {
  const content = (
    // the ${} syntax is used inside backticks (``) to insert a JavaScript expression into a string
    // in this case, props.className, props.style, props.headerClass, props.contentClass, props.children, props.footer
    // we do that to complete the class name, and maybe something else
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
          // if props.onSubmit is not defined, event.preventDefault()
          // is used to prevent the form from being submitted and the page from reloading
        }
      >
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  return ReactDom.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      {/* conditionally renders the Backdrop component if the show prop is true
      the Backdrop component is only rendered when the modal is visible */}
      <CSSTransition
        in={props.show} // when props.show is true (when showMap is true), the animation will be rendered
        mountOnEnter
        unmountOnExit
        timeout={280}
        classNames="modal"
      >
        <ModalOverlay {...props} />
        {/* pass the props of Modal to ModalOverlay */}
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
