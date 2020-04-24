import React from "react";
import styled from "styled-components";

const Block = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #000;

  text-align: center;
`;

const Square = (props) => {
  return <Block>{props.children}</Block>;
};

export default Square;
