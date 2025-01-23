let listDrawNumbers = [];
let limitNumbers = 10;
let secretNumber = numberRandom();
let attempts = 1;
initialMsg();

function verificarChute() {
    let selectedNumber = document.querySelector("input").value;
    let attemptWord = attempts > 1 ? "attempts" : "attempt";

    if (selectedNumber == secretNumber) {
        textOnScreen("h1", "You win");
        textOnScreen(
            "p",
            `You find the secret number with ${attempts} ${attemptWord}`
        );
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        textOnScreen("h1", "You are wrong");
        if (secretNumber > selectedNumber) {
            textOnScreen("p", "number is bigger");
        } else {
            textOnScreen("p", "number is smaller");
        }
        attempts++;
        clearField();
    }
}

function newGame() {
    secretNumber = numberRandom();
    clearField();
    attempts = 1;
    initialMsg();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

function textOnScreen(tag, text) {
    let field = document.querySelector(tag);
    field.innerHTML = text;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'es-US'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }

}

function initialMsg() {
    textOnScreen("h1", "Secret Number Game");
    textOnScreen("p", `Choose a number between 1 and ${limitNumbers}`);
}

function numberRandom() {
    let choseNumber = parseInt(Math.random() * limitNumbers + 1);
    let quantityChosenNumbers = listDrawNumbers.length;

    if (quantityChosenNumbers == 10) {
        listDrawNumbers = [];
    }

    if (listDrawNumbers.includes(choseNumber)) {
        return numberRandom();
    } else {
        listDrawNumbers.push(choseNumber);
        console.log(listDrawNumbers);
        return choseNumber;
    }
}

function clearField() {
    selectedNumber = document.querySelector("input");
    selectedNumber.value = "";
}
