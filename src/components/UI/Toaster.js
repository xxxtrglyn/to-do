import React from "react";
import Modal from "./Modal";
import styled from "styled-components";

const Toaster = (props) => {
  return (
    <Modal>
      <Notify>{props.children}</Notify>
    </Modal>
  );
};

export default Toaster;

const Notify = styled.div`
  color: white;
  font-size: 1.8rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
