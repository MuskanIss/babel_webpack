"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = onSubmit;

function onSubmit(e) {
  e.preventDefault();
  var val = document.getElementById("enNote").value;
  var div = document.createElement("div");
  div.textContent = val;
  document.getElementById("AddNotes").appendChild(div);
}