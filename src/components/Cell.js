import React from "react";

function Cell({ isWall, row, col, paths }) {
  const classes = isWall
    ? "wall"
    : paths.flat().find(([i, j]) => row === i && col === j)
    ? "path"
    : "";

  return <td className={classes}></td>;
}

export default Cell;
