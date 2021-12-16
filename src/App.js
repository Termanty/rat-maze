import { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Maze from "./components/Maze";

import searchAllRoutes from "./recursiveSerch";
import { generateNewMaze, changeMazeDimesions } from "./mazeGenerator";
import "./App.css";

class App extends Component {
  state = {
    showResult: false,
    paths: [],
    maze: [
      [0, 0, 0, 0],
      [0, 1, 0, 1],
      [0, 0, 0, 0],
      [0, 1, 0, 0],
    ],
  };

  changeMazeSizeHandler = () => {
    this.setState({
      maze: changeMazeDimesions(),
      showResult: false,
      paths: [],
    });
  };

  generateMazeHandler = () =>
    this.setState({
      maze: generateNewMaze(this.state.maze),
      showResult: false,
      paths: [],
    });

  findRoutesHandler = () => {
    let AllPaths = searchAllRoutes(this.state.maze);
    let numberOfPaths = AllPaths.length;

    this.setState({
      showResult: true,
      paths: numberOfPaths ? AllPaths : [],
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Maze maze={this.state.maze} paths={this.state.paths} />

          {this.state.showResult && (
            <h2>{this.state.paths.length} unique paths found</h2>
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
