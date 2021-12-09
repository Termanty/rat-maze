"use strict";

let WallProbability = 0.35;

export const generateNewMaze = (oldMaze) => {
  let ROW = oldMaze.length;
  let COL = oldMaze[0].length;
  // using map to create new maze
  return oldMaze.map((row, i) => {
    return row.map((e, j) => {
      if (i === 0 && j === 0) return 0;
      if (i === ROW - 1 && j === COL - 1) return 0;
      return Math.random() < WallProbability ? 1 : 0;
    });
  });
};

export const changeMazeDimesions = () => {
  let rows = Math.floor(Math.random() * 8) + 4; // row size 4 - 11
  let cols = Math.floor(Math.random() * 8) + 4; // col size 4 - 11
  const zeroMaze = new Array(rows).fill(new Array(cols).fill(0)); // Empty maze full of zeroes
  return generateNewMaze(zeroMaze);
};
