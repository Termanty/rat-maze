(this["webpackJsonprat-maze"]=this["webpackJsonprat-maze"]||[]).push([[0],{14:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),s=n(4),o=n.n(s),c=(n(3),n(5)),h=n(6),i=n(8),l=n(7),u=n(0),p=5,d=5,j=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={showResult:!1,paths:0,pathsArr:[[]],maze:[[0,1,0,0,0],[0,1,0,1,0],[0,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0]]},t.newMaze=function(t){return t.map((function(t,e){return t.map((function(t,n){return 0===e&&0===n||e===p-1&&n===d-1?0:Math.random()<.35?1:0}))}))},t.changeMazeSize=function(e,n){var a=new Array(e).fill(new Array(n).fill(0));return t.newMaze(a)},t.renderColumn=function(e,n){return e.map((function(e,a){var r=e?"wall":t.state.pathsArr.find((function(t){return t[0]===n&&t[1]===a}))?"path":"";return Object(u.jsx)("td",{className:r,children:e},a)}))},t.mazeSizeHandler=function(){p=Math.floor(4*Math.random())+4,d=Math.floor(4*Math.random())+4,console.log(t.changeMazeSize(p,d)),t.setState({maze:t.changeMazeSize(p,d),showResult:!1,pathsArr:[[[]]]})},t.generateMazeHandler=function(){return t.setState({maze:t.newMaze(t.state.maze),showResult:!1,pathsArr:[[[]]]})},t.findRoutesHandler=function(){t.path=[],t.finalPaths=[],t.pathCounter=0,t.routeSolver(0,0),console.log(t.pathCounter),console.log(t.finalPaths.flat()),t.finalPaths.push([[0,0]]),t.setState({showResult:!0,paths:t.pathCounter,pathsArr:t.pathCounter?t.finalPaths.flat():[[]]})},t.path=[],t.finalPaths=[],t.pathCounter=0,t.routeSolver=function(e,n){if(e===p-1&&n===d-1)return console.log(t.path),t.finalPaths.push(t.path.map((function(t){return t.map((function(t){return t}))}))),void(t.pathCounter+=1);e<p-1&&!t.state.maze[e+1][n]&&(t.path.push([e+1,n]),t.routeSolver(e+1,n),t.path.pop()),n<d-1&&!t.state.maze[e][n+1]&&(t.path.push([e,n+1]),t.routeSolver(e,n+1),t.path.pop())},t}return Object(h.a)(n,[{key:"render",value:function(){var t=this,e=this.state.maze.map((function(e,n){return Object(u.jsx)("tr",{children:t.renderColumn(e,n)},n)}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{children:Object(u.jsx)("h1",{children:"Rat Maze"})}),Object(u.jsxs)("main",{children:[Object(u.jsx)("div",{className:"maze",children:Object(u.jsx)("table",{children:Object(u.jsx)("tbody",{children:e})})}),this.state.showResult&&Object(u.jsxs)("h2",{children:[this.state.paths," unique paths found"]}),Object(u.jsxs)("div",{className:"controls",children:[Object(u.jsx)("button",{onClick:this.generateMazeHandler,children:"NEW MAZE"}),Object(u.jsx)("button",{onClick:this.findRoutesHandler,children:"FIND ROUTES"})]}),Object(u.jsx)("button",{onClick:this.mazeSizeHandler,className:"maze-size",children:"CHANGE MAZE SIZE"})]}),Object(u.jsx)("footer",{children:Object(u.jsx)("p",{children:Object(u.jsx)("small",{children:"copyright Tero M\xe4ntyl\xe4"})})})]})}}]),n}(a.Component),f=j;o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))},3:function(t,e,n){}},[[14,1,2]]]);
//# sourceMappingURL=main.1a3fc536.chunk.js.map