let ROW;
let COL;
let maze;
let path;
let AllPaths;

const searchAllRoutes = (Maze) => {
  maze = Maze;
  ROW = Maze.length;
  COL = Maze[0].length;
  path = []; // current path in search.
  AllPaths = []; // When we find path to the end of maze, we add it here.

  dfs(0, 0); // START RECURSIVE SEARCH
  return AllPaths;
};

// Depth First Search
const dfs = (i, j) => {
  path.push([i, j]); // add this location to path
  if (isEnd(i, j)) {
    AllPaths.push(copyPath());
    return path.pop(); // remove location from path
  }

  if (canGoDown(i, j)) {
    dfs(i + 1, j); // go down
  }
  if (canGoRight(i, j)) {
    dfs(i, j + 1); // go right
  }
  return path.pop(); // remove location from path
};

// Helper function
function isEnd(i, j) {
  return i === ROW - 1 && j === COL - 1; // bottom right corner?
}

function canGoDown(i, j) {
  return i < ROW - 1 && !maze[i + 1][j]; // Empty cell below?
}

function canGoRight(i, j) {
  return j < COL - 1 && !maze[i][j + 1]; // Empty cell right side?
}

function copyPath() {
  return path.map((e) => e.map((i) => i));
}

export default searchAllRoutes;
