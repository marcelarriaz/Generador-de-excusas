/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let wo = Math.floor(Math.random() * 4);
  let ac = Math.floor(Math.random() * 4);
  let wa = Math.floor(Math.random() * 4);
  let we = Math.floor(Math.random() * 4);
  console.log(who[wo] + " " + action[ac] + " " + what[wa] + " " + when[we]);

  document.getElementById("excuse").innerHTML =
    who[wo] + " " + action[ac] + " " + what[wa] + " " + when[we];
};
