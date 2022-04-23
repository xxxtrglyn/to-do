import styled from "styled-components";

export const XButton = styled.div`
  color: white;
  font-size: 2rem;
  width: 3rem;
  height: 3rem;
  border: 2px solid white;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    border: 2px solid red;
    color: red;
  }
`;
