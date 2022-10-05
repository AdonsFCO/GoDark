import { useState } from "react";
import Board from "./components/Board/Board";
import StoneGrid from "./components/Board/StoneGrid";
import Stone from "./components/Stone/Stone";

import "./App.css";
//https://www.youtube.com/watch?v=5PTXdR8hLlQ
const App = () => {
  let size = 9; //Modify this value to change the size of the board

  /*This value is intended for modify positions on the board based on this state you can set
  of the stones
  */
  const positions =
    Array(size * size).fill(false, 0, size * size); 
  
  

  return (
    <>
      <Board size={size} postionSystem={positions} />
      
      <Stone color="white" />
      <Stone color="black" />
    </>
  );
};

export default App;
