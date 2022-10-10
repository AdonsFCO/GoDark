import Stone from "../Stone/Stone";
import React, { useRef } from "react";

const Board = ({ size, turn }) => {
  //The size of the board will be multipled by itself for example if you use 9 the board will be 9x9 or if its
  // 19 will be 19x19
  const definition = {
    display: "grid",
    color: "red",
    gridTemplateColumns: `repeat(${size},31px)`,
    gridTemplateRows: `repeat(${size},31px)`,
    gap: 0,
    width: "1000px",
  };
  const boxStyle = {
    display: "flex",
    border: "solid 2px black",
    width: "30px",
    height: "30px",
    justifyContent: "center",
    alignItems: "center",
  };

  /*This value is intended for modify positions on the board based on this state you can set
  of the stones
  */
  const boardRefs = useRef([]);

  const boardMap = {
    position: Array(size * size).fill(false, 0, size * size),
    // stoneRefs: Array(size * size).fill(useRef(), 0, size * size),
  };

  const eneableStone = ({ currentTarget }) => {
    boardRefs.current[currentTarget.id].style.backgroundColor = "blue";
  };

  return (
    <div id="board" style={definition}>
      {
        /* {[...Array(size * size)].map((box, i) => {
        return <div style={boxStyle} key={i}></div>;
      })} */

        boardMap.position.map((box, i) => {
          {
            /* if (box[i]) {
            return <div style={boxStyle}>boardMap.stone[i]</div>;
          } */
          }

          return (
            <div
              style={boxStyle}
              key={i}
              id={i}
              ref={(box) => (boardRefs.current[i] = box)}
              onClick={eneableStone}
            ></div>
          );
        })
      }
    </div>
  );
};

export default Board;
