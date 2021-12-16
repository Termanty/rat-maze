let ROW, COL, maze, path, AllPaths;

const searchAllRoutes = (Maze) => {
  maze = Maze;
  ROW = Maze.length;
  COL = Maze[0].length;
  path = []; // current path in search.
  AllPaths = []; // When we find path to the end of maze, we add it here.

  dfs(0, 0); // START depth first search
  return AllPaths;
};

const dfs = (row, col) => {
  path.push([row, col]); // add this location to path

  if (isEnd(row, col)) {
    AllPaths.push(copyPath());
    path.pop(); // remove location from path
    return;
  }

  if (canGoRight(row, col)) dfs(row, col + 1); // go right
  if (canGoDown(row, col)) dfs(row + 1, col); // go down

  path.pop(); // remove location from path
  return;
};

// Helper function
function isEnd(row, col) {
  return row === ROW - 1 && col === COL - 1; // bottom right corner?
}

function canGoDown(row, col) {
  return row < ROW - 1 && !maze[row + 1][col]; // Empty cell below?
}

function canGoRight(row, col) {
  return col < COL - 1 && !maze[row][col + 1]; // Empty cell right side?
}

function copyPath() {
  return path.map((e) => e.map((c) => c));
}

export default searchAllRoutes;
