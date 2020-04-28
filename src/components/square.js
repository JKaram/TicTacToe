import React, { useState } from "react";
import styled from "styled-components";

const Block = styled.div`
  flex: 33%;
  height: 150px;
  border: 1px solid black;
  font-size: 70px;
`;

const Icon = styled.div`
  margin: 0 auto;
  width: fit-content;
`;

const Square = (props) => {
  const [value, setValue] = useState();

  const changePlayer = () => {
    if (value) return null;
    setValue(props.playerOneTurn ? "X" : "O");
    props.setPlayerOneTurn(!props.playerOneTurn);
    props.setPick(props.id);
  };

  return (
    <Block onClick={() => changePlayer()}>
      <Icon>{value}</Icon>
    </Block>
  );
};

export default Square;
