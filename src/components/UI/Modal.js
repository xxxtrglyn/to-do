import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<BackDrop />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay />, portalElement)}
    </React.Fragment>
  );
};

export default Modal;

const BackDrop = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(34, 42, 66, 0.9);
  z-index: 20;
  position: fixed;
`;

const ModalOverlay = styled.div`
  min-width: 50rem;
  min-height: 20rem;
  border: 2px solid white;
  color: white;
  background-color: transparent;
  z-index: 30;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
`;
