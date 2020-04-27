import React from "react";

import styled from "styled-components";

import Square from "./square";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const game = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const Board = (props) => {
  return (
    <Wrapper>
      {game.map((box) => {
        return (
          <Square
            key={box}
            id={box}
            playerOneTurn={props.playerOneTurn}
            setPlayerOneTurn={props.setPlayerOneTurn}
            setPick={props.setPick}
          />
        );
      })}
    </Wrapper>
  );
};

export default Board;
