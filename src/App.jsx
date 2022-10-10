import { useState } from "react";
import Board from "./components/Board/Board";
import StoneGrid from "./components/Board/StoneGrid";
import Stone from "./components/Stone/Stone";

import "./App.css";
//https://www.youtube.com/watch?v=5PTXdR8hLlQ
const App = () => {
  let size = 9; //Modify this value to change the size of the board
  const [turn, changeTurn] = useState("black")
  

  return (
    <>
      <Board size={size} turn={turn} />
     
    </>
  );
};

export default App;
