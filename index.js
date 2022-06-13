// Your code goes here
"use strict";
// this listens for the DOMContentLoaded event on the DOM
const domLoaded = document.addEventListener("DOMContentLoaded", function () {
  domUpdater();
});
// this is the event handler
function domUpdater() {
  document.getElementById("text").innerHTML = "This is really cool!";
}
