const Stone = ({ color }) => {
  let definition = {
    //Default color because black rules
    background: color,
    width: "20px",
    height: "20px",
    borderRadius: 100,
  };
  if (color == "white") {
    //The other color that not worth anithing
    definition = {
      background: color,
      width: "15px",
      height: "15px",
      borderRadius: 100,
      border: "solid black",
    };
  }
  return <div style={definition}></div>;
};

export default Stone;
