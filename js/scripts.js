window.onload = function () {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    let showResult = document.getElementById("output");
    showResult.removeAttribute("class", "hidden");
  }
}