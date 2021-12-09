"use strict";

let path;
let AllPaths;
let ROW;
let COL;
let maze;

const searchAllRoutes = (row, col, Maze) => {
  maze = Maze;
  ROW = row;
  COL = col;

  path = [[0, 0]]; // current path in search. We have RAT:s position added here.
  AllPaths = []; // When we find path to the end of maze, we add it here.

  dfs(0, 0); // Here we start recursive search

  return AllPaths;
};

// Depth First Search
const dfs = (i, j) => {
  if (i === ROW - 1 && j === COL - 1) {
    console.log(path);
    AllPaths.push(path.map((e) => e.map((i) => i)));
    return;
  }
  if (i < ROW - 1 && !maze[i + 1][j]) {
    path.push([i + 1, j]);
    dfs(i + 1, j);
    path.pop();
  }
  if (j < COL - 1 && !maze[i][j + 1]) {
    path.push([i, j + 1]);
    dfs(i, j + 1);
    path.pop();
  }
};

export default searchAllRoutes;
