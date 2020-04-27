import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import _ from "lodash";

import Board from "./components/board";

const Wrapper = Styled.div`
  display: flex;
  flex-direction: column;
`;

const rows = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkForWin = (array, checks) => {
  for (let check of checks) {
    if (_.includes(array, check)) return true;
    console.log("Here");
  }
  return false;
};

function App() {
  const [pick, setPick] = useState(-1);
  const [playerOne, setPlayerOne] = useState([]);
  const [playerTwo, setPlayerTwo] = useState([]);
  const [playerOneTurn, setPlayerOneTurn] = useState(true);
  const [isWon, setIsWon] = useState(false);

  useEffect(() => {
    if (pick === -1) return setPlayerOne([]);

    playerOneTurn
      ? setPlayerTwo([...playerTwo, pick])
      : setPlayerOne([...playerOne, pick]);
  }, [pick]);

  useEffect(() => {
    playerOneTurn
      ? setIsWon(checkForWin(playerOne, rows))
      : setIsWon(checkForWin(playerTwo, rows));
  }, [playerOne, playerTwo]);

  return (
    <Wrapper>
      <h1>Tic Tac Toe</h1>
      {isWon && <div>YOU WON</div>}
      <Board
        playerOneTurn={playerOneTurn}
        setPlayerOneTurn={setPlayerOneTurn}
        setPick={setPick}
      />
    </Wrapper>
  );
}

export default App;
