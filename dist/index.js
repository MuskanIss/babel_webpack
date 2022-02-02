"use strict";

var _logo = _interopRequireDefault(require("../src/logo.png"));

var _sub = _interopRequireDefault(require("./sub.js"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

document.getElementById("logo").style.backgroundImage = "url(" + _logo["default"] + ")";
var form = document.querySelector("form");
form.addEventListener("submit", _sub["default"]);