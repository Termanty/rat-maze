import { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import searchAllRoutes from "./recursiveSerch";
import "./App.css";

let ROW = 4;
let COL = 4;
let WallProbability = 0.35;

class App extends Component {
  state = {
    showResult: false,
    paths: 0,
    pathsArr: [[]],
    maze: [
      [0, 1, 0, 0],
      [0, 1, 0, 1],
      [0, 0, 0, 0],
      [1, 0, 0, 0],
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
    let AllPaths = searchAllRoutes(ROW, COL, this.state.maze);
    let numberOfPaths = AllPaths.length;

    this.setState({
      showResult: true,
      paths: numberOfPaths,
      pathsArr: numberOfPaths ? AllPaths.flat() : [[]],
    });
  };

  render() {
    const maze = this.state.maze.map((row, i) => {
      return <tr key={i}>{this.renderColumn(row, i)}</tr>;
    });
    return (
      <div className="App">
        <Header />
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
            <button onClick={this.generateMazeHandler}>generate maze</button>
            <button onClick={this.findRoutesHandler}>find routes</button>
          </div>
          <button onClick={this.mazeSizeHandler} className="maze-size">
            change maze size
          </button>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
