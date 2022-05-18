import styled from "styled-components";
import { Link } from "react-router-dom";

const ArrowButton = styled(Link)`
  width: 30%;
  display: block;
  text-decoration: none;
  font-size: 3rem;
  border: 1px solid white;
  color: white;
  position: relative;
  text-align: center;
  cursor: pointer;
  &:hover {
    border: 1px solid #07e798;
    color: #07e798;
  }
`;

export default ArrowButton;
