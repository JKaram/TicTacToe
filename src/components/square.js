import React, { useState } from "react";
import styled from "styled-components";

const Block = styled.div`
  flex: 0 32%;
  height: 100px;
  border: 1px solid black;
  text-align: center;
`;

const Square = (props) => {
  const [value, setValue] = useState();

  const changePlayer = () => {
    setValue(props.playerOneTurn ? "X" : "O");
    props.setPlayerOneTurn(!props.playerOneTurn);
    props.setPick(props.id);
  };

  return <Block onClick={() => changePlayer()}>{value}</Block>;
};

export default Square;
