window.onload = function () {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    let showResult = document.getElementById("output");
    showResult.removeAttribute("class", "hidden");

    const eyes = document.getElementById("eyes").value;
    const arms = document.getElementById("arms").value;
    const human = parseInt(document.getElementById("human").value);
    const murder = document.getElementById("murder").value;
    const grasp = document.getElementById("grasp").value;

    if (eyes === "Yes") {
      let showResult = document.getElementById("hidePage");
      showResult.removeAttribute("class", "hidden");
      } else if (eyes === "No") {
      let showResult = document.getElementById("hidePage");
      showResult.setAttribute("class", "hidden");  
      let showButton = document.getElementById("wellThen");
      showButton.removeAttribute("class", "hidden");
    }
  }
}