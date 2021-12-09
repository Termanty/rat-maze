import { Component } from "react";
import "./App.css";

let ROW = 5;
let COL = 5;
let WallProbability = 0.35;

class App extends Component {
  state = {
    showResult: false,
    paths: 0,
    pathsArr: [[]],
    maze: [
      [0, 1, 0, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
    ],
  };

  newMaze = (arr) => {
    return arr.map((row, i) => {
      return row.map((e, j) => {
        if (i === 0 && j === 0) return 0;
        if (i === ROW - 1 && j === COL - 1) return 0;
        return Math.random() < WallProbability ? 1 : 0;
      });
    });
  };

  changeMazeSize = (rows, cols) => {
    const arr = new Array(rows).fill(new Array(cols).fill(0));
    return this.newMaze(arr);
  };

  renderColumn = (row, i) =>
    row.map((e, j) => {
      const classes = e
        ? "wall"
        : this.state.pathsArr.find((arr) => arr[0] === i && arr[1] === j)
        ? "path"
        : "";
      return (
        <td key={j} className={classes}>
          {e}
        </td>
      );
    });

  mazeSizeHandler = () => {
    ROW = Math.floor(Math.random() * 4) + 4;
    COL = Math.floor(Math.random() * 4) + 4;
    console.log(this.changeMazeSize(ROW, COL));
    this.setState({
      maze: this.changeMazeSize(ROW, COL),
      showResult: false,
      pathsArr: [[[]]],
    });
  };

  generateMazeHandler = () =>
    this.setState({
      maze: this.newMaze(this.state.maze),
      showResult: false,
      pathsArr: [[[]]],
    });

  findRoutesHandler = () => {
    this.path = [];
    this.finalPaths = [];
    this.pathCounter = 0;
    this.routeSolver(0, 0);
    console.log(this.pathCounter);
    console.log(this.finalPaths.flat());
    this.finalPaths.push([[0, 0]]);
    this.setState({
      showResult: true,
      paths: this.pathCounter,
      pathsArr: this.pathCounter ? this.finalPaths.flat() : [[]],
    });
  };

  path = [];
  finalPaths = [];
  pathCounter = 0;

  routeSolver = (i, j) => {
    if (i === ROW - 1 && j === COL - 1) {
      console.log(this.path);
      this.finalPaths.push(this.path.map((e) => e.map((i) => i)));
      this.pathCounter += 1;
      return;
    }
    if (i < ROW - 1 && !this.state.maze[i + 1][j]) {
      this.path.push([i + 1, j]);
      this.routeSolver(i + 1, j);
      this.path.pop();
    }
    if (j < COL - 1 && !this.state.maze[i][j + 1]) {
      this.path.push([i, j + 1]);
      this.routeSolver(i, j + 1);
      this.path.pop();
    }
  };

  render() {
    const maze = this.state.maze.map((row, i) => {
      return <tr key={i}>{this.renderColumn(row, i)}</tr>;
    });
    return (
      <div className="App">
        <header>
          <h1>Rat Maze</h1>
        </header>
        <main>
          <div className="maze">
            <table>
              <tbody>{maze}</tbody>
            </table>
          </div>
          {this.state.showResult && (
            <h2>{this.state.paths} unique paths found</h2>
          )}
          <div className="controls">
            <button onClick={this.generateMazeHandler}>NEW MAZE</button>
            <button onClick={this.findRoutesHandler}>FIND ROUTES</button>
          </div>
          <button onClick={this.mazeSizeHandler} className="maze-size">
            CHANGE MAZE SIZE
          </button>
        </main>
        <footer>
          <p>
            <small>copyright Tero Mäntylä</small>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
