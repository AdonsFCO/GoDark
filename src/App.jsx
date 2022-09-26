import { useState } from "react";
import Board from "./components/Board/Board";
import Stone from "./components/Stone/Stone";
import "./App.css"
//https://www.youtube.com/watch?v=5PTXdR8hLlQ
const App = () => {
  return (
    <>
      <Board size={9} />
      <Stone color="white" />
      <Stone color="black" />
    </>
  );
};

export default App;
