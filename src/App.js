import { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cell from "./Cell";
import searchAllRoutes from "./recursiveSerch";
import { generateNewMaze, changeMazeDimesions } from "./mazeGenerator";
import "./App.css";

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

  renderMaze = () =>
    this.state.maze.map((row, i) => (
      <tr key={i}>
        {row.map((valueInCell, j) => (
          <Cell
            key={j}
            isWall={valueInCell}
            row={i}
            col={j}
            paths={this.state.pathsArr}
          />
        ))}
      </tr>
    ));

  changeMazeSizeHandler = () => {
    this.setState({
      maze: changeMazeDimesions(),
      showResult: false,
      pathsArr: [[[]]],
    });
  };

  generateMazeHandler = () =>
    this.setState({
      maze: generateNewMaze(this.state.maze),
      showResult: false,
      pathsArr: [[[]]],
    });

  findRoutesHandler = () => {
    let AllPaths = searchAllRoutes(this.state.maze);
    let numberOfPaths = AllPaths.length;

    this.setState({
      showResult: true,
      paths: numberOfPaths,
      pathsArr: numberOfPaths ? AllPaths.flat() : [[]],
    });
  };

  render() {
    const maze = this.renderMaze();

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
          <button onClick={this.changeMazeSizeHandler} className="maze-size">
            change maze size
          </button>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
