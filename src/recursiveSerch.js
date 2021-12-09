"use strict";

let path;
let AllPaths;
let ROW;
let COL;
let maze;

const searchAllRoutes = (Maze) => {
  maze = Maze;
  ROW = Maze.length;
  COL = Maze[0].length;
  path = [[0, 0]]; // current path in search. We have RAT:s position added here.
  AllPaths = []; // When we find path to the end of maze, we add it here.

  dfs(0, 0); // START RECURSIVE SEARCH
  return AllPaths;
};

// Depth First Search
const dfs = (i, j) => {
  // recursion end condition (checking that we are bottom right corner)
  if (i === ROW - 1 && j === COL - 1) {
    AllPaths.push(path.map((e) => e.map((i) => i)));
    return;
  }

  // move to cell below
  if (notInBottomRowAndNoWallBelow(i, j)) {
    path.push([i + 1, j]);
    dfs(i + 1, j); // go one cell down
    path.pop(); // remove move down from path
  }
  // move to cell on right side
  if (notInLastColumnAndNoWallRight(i, j)) {
    path.push([i, j + 1]); // add down move to path
    dfs(i, j + 1); // go one cell right
    path.pop(); // remove move down from path
  }
};

function notInBottomRowAndNoWallBelow(i, j) {
  return i < ROW - 1 && !maze[i + 1][j]; // Empty cell below?
}

function notInLastColumnAndNoWallRight(i, j) {
  return j < COL - 1 && !maze[i][j + 1]; // Empty cell right side?
}

export default searchAllRoutes;
