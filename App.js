import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { key: "child" }, [
    React.createElement("h1", { id: "1" }, "i am h1 Tag"),
    React.createElement("h2", { id: "2" }, "i am h2 Tag"),
  ]),
  React.createElement("div", { key: "child2" }, [
    React.createElement("h1", { key: "1" }, "this is react"),
    React.createElement("h2", { key: "2" }, "i am h2 Tag"),
  ]),
]);

// JSX
console.log(parent); // object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // this render methood is beascically converting it into hy1 tag and put it  in inside that
