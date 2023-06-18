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
    let armsAnswer = "blank";

    if (eyes === "Yes") {
      let showResult = document.getElementById("hidePage");
      showResult.removeAttribute("class", "hidden");
      } else if (eyes === "No") {
      let showResult = document.getElementById("hidePage");
      showResult.setAttribute("class", "hidden");  
      let showButton = document.getElementById("wellThen");
      showButton.removeAttribute("class", "hidden");
    }
    if (arms === "0") {
      armsAnswer = "How are you clicking on things?";
    } else if (arms === "1") {
      armsAnswer = "I love Def Leppard.";
    } else if (arms === "2") {
      armsAnswer = "Are you a hugger?";
    } else if (arms === "3+") {
      armsAnswer = "That's odd."
    }
  }
}