/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
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

  let uno = Math.floor(Math.random() * 4);
  let dos = Math.floor(Math.random() * 4);
  let tres = Math.floor(Math.random() * 3);
  let cuatro = Math.floor(Math.random() * 5);

  let i = who[uno];
  let j = action[dos];
  let k = what[tres];
  let l = when[cuatro];

  document.querySelector("p").innerHTML = i + "  " + j + "  " + k + "  " + l;
};
