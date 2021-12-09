import React from "react";
import Cell from "./Cell";

function Maze({ maze, paths }) {
  const renderMaze = () =>
    maze.map((row, i) => (
      <tr key={i}>
        {row.map((valueInCell, j) => (
          <Cell key={j} isWall={valueInCell} row={i} col={j} paths={paths} />
        ))}
      </tr>
    ));

  return (
    <div className="maze">
      <table>
        <tbody>{renderMaze()}</tbody>
      </table>
    </div>
  );
}

export default Maze;
