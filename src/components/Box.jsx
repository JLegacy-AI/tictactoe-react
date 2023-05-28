import React from "react";

const Box = ({ id, player, handleClick }) => {
  return (
    <button
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "30%",
        width: "30%",
        background: "none",
        outline: "none",
        border: "2px solid white",
        borderRadius: "30px",
        fontSize: "30px",
        color: "white",
      }}
      onClick={() => handleClick(id)}
    >
      {player == 1 ? "X" : player == 2 ? "O" : " "}
    </button>
  );
};

export default Box;
