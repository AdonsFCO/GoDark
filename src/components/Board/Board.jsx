const Board = ({ size }) => {
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
    border: "solid 2px black",
    width: "30px",
    height: "30px",
    
  };
  return (
    <div id="board" style={definition}>
      {[...Array(size * size)].map((box,i) => {
        return <div style={boxStyle} key={i}>

        </div>;
      })}
    </div>
  );
};

export default Board;
