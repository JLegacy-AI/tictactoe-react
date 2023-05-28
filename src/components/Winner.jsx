import React from "react";

const Winner = ({ player }) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.9)",
        zIndex: "100",
        color: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "100px",
      }}
    >
      {"Player " + (player == 1 ? "X" : "O") + " Win the Game"}
    </div>
  );
};

export default Winner;
