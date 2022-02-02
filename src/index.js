import img from "../src/logo.png";
import onSubmit from "./sub.js";
import "./index.css";

document.getElementById("logo").style.backgroundImage = "url(" + img + ")";
let form = document.querySelector("form");
form.addEventListener("submit", onSubmit);
