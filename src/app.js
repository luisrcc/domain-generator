/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

window.onload = function() {
  let pronombre = parseInt(Math.random() * (pronoun.length + 1 - 1) + 1);
  let adjetivo = parseInt(Math.random() * (adj.length + 1 - 1) + 1);
  let nombre = parseInt(Math.random() * (noun.length + 1 - 1) + 1);

  let concat =
    pronoun[pronombre - 1] + adj[adjetivo - 1] + noun[nombre - 1] + ".com";

  return concat;
};

document.getElementById("domain").innerText = onload();
