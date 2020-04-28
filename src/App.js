import React, { useState, useEffect } from "react";
import Styled from "styled-components";

import Board from "./components/board";

const Wrapper = Styled.div`
  display: flex;
  width: 100%;
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
  for (let row of checks) {
    if (row.every((num) => array.includes(num))) return true;
  }
  return false;
};

function App() {
  const [pick, setPick] = useState(-1);
  const [playerOne, setPlayerOne] = useState([]);
  const [playerTwo, setPlayerTwo] = useState([]);
  const [playerOneTurn, setPlayerOneTurn] = useState(true);
  const [isWon, setIsWon] = useState(false);
  const [winner, setWinner] = useState();

  useEffect(() => {
    if (pick === -1) return setPlayerOne([]);

    playerOneTurn
      ? setPlayerTwo([...playerTwo, pick])
      : setPlayerOne([...playerOne, pick]);
    // eslint-disable-next-line
  }, [pick]);

  useEffect(() => {
    if (playerOneTurn) {
      setIsWon(checkForWin(playerTwo, rows));
      setWinner("O");
    } else {
      setIsWon(checkForWin(playerOne, rows));
      setWinner("X");
    }
    // eslint-disable-next-line
  }, [playerOne, playerTwo]);

  return (
    <Wrapper>
      <h1>Tic Tac Toe</h1>
      {isWon && <div>{`${winner}`} WON</div>}
      <Board
        playerOneTurn={playerOneTurn}
        setPlayerOneTurn={setPlayerOneTurn}
        setPick={setPick}
      />
    </Wrapper>
  );
}

export default App;
