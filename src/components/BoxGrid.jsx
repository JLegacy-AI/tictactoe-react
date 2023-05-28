import React, { useEffect, useState } from "react";
import Box from "./Box";
import Winner from "./Winner";

const BoxGrid = () => {
  const [win, setWin] = useState(0);
  const [player, setPlayer] = useState(1);
  const [grid, setGrid] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const handleClick = (id) => {
    let newGrid = grid;
    if (newGrid[id] == 0) {
      newGrid[id] = player;
      setGrid(newGrid);
      setPlayer(player == 1 ? 2 : 1);
    } else {
      alert("Already Occupied By Player " + newGrid[id]);
    }
  };

  useEffect(() => {
    console.log(grid);
    let horizantal = [0, 0];
    let vertical = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < grid.length; i++) {
      //Make Horizantal to Zero on Each Row
      if (i % 3 == 0) horizantal = [0, 0];

      // Calculating Horizantal
      if (grid[i] == 1) horizantal[0]++;
      if (grid[i] == 2) horizantal[1]++;

      // Calculating Vertical
      if (i % 3 == 1) {
        if (grid[i] == 1) vertical[0]++;
        if (grid[i] == 2) vertical[1]++;
      }
      if (i % 3 == 2) {
        if (grid[i] == 1) vertical[2]++;
        if (grid[i] == 2) vertical[3]++;
      }
      if (i % 3 == 0) {
        if (grid[i] == 1) vertical[4]++;
        if (grid[i] == 2) vertical[5]++;
      }

      //Vertical Condition Matched Break the Loop
      if (vertical.find((value) => value == 3)) break;

      // Horizantal Condition Matched Then Break The Loop
      if (horizantal.find((value) => value == 3)) break;
    }

    let diagonal = [0, 0, 0, 0];
    let leftDiagonalIndex = 6;
    for (let i = 0; i < 9; i += 4) {
      if (grid[i] == 1) diagonal[0] += 1;
      if (grid[i] == 2) diagonal[1] += 1;

      if (grid[leftDiagonalIndex] == 1) diagonal[2] += 1;
      if (grid[leftDiagonalIndex] == 2) diagonal[3] += 1;

      leftDiagonalIndex -= 2;
      if (diagonal.find((value) => value == 3)) break;
    }

    if (horizantal[0] == 3) setWin(1);
    if (horizantal[1] == 3) setWin(2);

    let winningIndex = vertical.findIndex((value) => value === 3);
    if (winningIndex != -1) {
      setWin((winningIndex % 2) + 1);
    }

    winningIndex = diagonal.findIndex((value) => value == 3);
    if (winningIndex != -1) setWin((winningIndex % 2) + 1);

    console.log(diagonal);
  }, [player]);

  useEffect(() => {
    setTimeout(() => {
      setWin(0);
      setGrid([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }, 1000);
  }, [win]);

  return (
    <>
      {win != 0 ? <Winner player={win} /> : ""}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
          height: "500px",
          width: "500px",
        }}
      >
        {grid.map((value, key) => {
          return (
            <Box key={key} player={value} id={key} handleClick={handleClick} />
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          width: "470px",
          justifyContent: "space-between",
        }}
      >
        <button
          style={{
            width: "150px",
            height: "50px",
          }}
          onClick={() => setGrid([0, 0, 0, 0, 0, 0, 0, 0, 0])}
        >
          Reset Game
        </button>
        <div
          style={{
            height: "50px",
            width: "50px",
            border: "2px solid white",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          {player == 1 ? "X" : "O"}
        </div>
      </div>
    </>
  );
};

export default BoxGrid;
