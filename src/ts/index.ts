import "./cipher";
import "./submit";
import "./buttons";
import "../css/style.css";
import start from "./start";
import logToConsole from "./log";

document.addEventListener("DOMContentLoaded", () => {
  logToConsole();
  start();
});
