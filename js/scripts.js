window.onload = function () {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    let showResult = document.getElementById("output");
    showResult.removeAttribute("class", "hidden");

    const eyes = document.getElementById("eyes").value;
    const arms = document.getElementById("arms").value;
    const human = document.getElementById("human").value;
    const murder = document.getElementById("murder").value;
    const grasp = document.getElementById("grasp").value;
    let armsAnswer = "blank";
    let humanAnswer = "blank";
    let murderAnswer = "blank";
    let graspAnswer = "blank";

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
      armsAnswer = "No Arms? How are you clicking on things? ";
    } else if (arms === "1") {
      armsAnswer = "You only have one arm? That's okay. I love Def Leppard. ";
    } else if (arms === "2") {
      armsAnswer = "You have enough arms to be a coder. ";
    } else if (arms === "3+") {
      armsAnswer = "You have more than 3 arms? Wow, really? That's odd. ";
    }
    if (human === "Yes") {
      humanAnswer = "As a human being, you can probably work anywhere. ";
    } else if (human === "No") {
      humanAnswer = "Not being human can be unsettling for coworkers. You should work remotely. ";
    } else if (human === "Sometimes") {
      humanAnswer = "Only sometimes human? Caffeine is important. I get it. ";
    } else if (human === "Yes" && arms === "3+") {
      humanAnswer = "Human? With all them arms flapping around? I don't think you're being entirely truthful. ";
    }
    if (murder === "Vengeance") {
      murderAnswer = "Sounds like you make people upset. Focus on Javascript. ";
    } else if (murder === "Ambition") {
      murderAnswer = "Well, Mr. Fancypants might like to style with CSS. ";
    } else if (murder === "Random Chance") {
      murderAnswer = "If you tend to bounce around without guidance, it sounds like Ruby on Rails is for you. ";
    } else if (murder === "Unsure") {
      murderAnswer = "Why waste time coding? Figure out why you were murdered so you can pass on! ";
    }
    if (grasp === "Yes") {
      graspAnswer = "Good Luck!";
    } else if (grasp === "asfdfdhfash") {
      armsAnswer = "kldsauptpowdsapvpo";
      humanAnswer = "envvcxpzutpeonpagaphoiupaev";
      murderAnswer = "cdla;jepoiueapbnnebewaeuqpupupoijbporipoiupwoieurp";
      graspAnswer = "vrpqwpobnapywteoiwqhwgponpsadohuoeiognvusaidhiuowei";
    };

    let response = armsAnswer + humanAnswer + murderAnswer + graspAnswer;
    document.querySelector("span#choice").innerText = response;
    let showTry = document.getElementById("tryAgain");
    showTry.removeAttribute("class", "hidden");
  };
}