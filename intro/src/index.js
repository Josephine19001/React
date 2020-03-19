//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

let num = Math.floor(Math.random() * 7);
ReactDOM.render(
  <div>
    <h1>Popular Front-end Frameworks</h1>
    <ul>
      <li>React</li>
      <li>Vue</li>
      <li>Angula</li>
    </ul>
  </div>,
  document.getElementById("root")
);
//Lucky Number Challenge
ReactDOM.render(
  <div>
    <h2>Your lucky number is {num}</h2>
  </div>,
  document.getElementById("root")
);
