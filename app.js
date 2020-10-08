const screenOutput = document.querySelector(".screen");

const numberInputButton = document.querySelectorAll(".btn-number");

const operatorInputButton = document.querySelectorAll(".btn-operator");

const clearButton = document.querySelector(".btn-clear");

const equalButton = document.querySelector(".btn-equal");

let canAddDecimal = true;

function canAddOperator() {
  if (screenOutput.value === "") {
    return false;
  }
  let lastCharacter = screenOutput.value.slice(-1);
  if (
    lastCharacter === "+" ||
    lastCharacter === "-" ||
    lastCharacter === "*" ||
    lastCharacter === "/"
  ) {
    return false;
  }

  return true;
}

// Inmatning av siffror
numberInputButton.forEach((element) => {
  element.addEventListener("click", () => {
    let number = element.dataset.num;
    if (number === "." && !canAddDecimal) {
      return;
    }
    screenOutput.value = screenOutput.value + number;
    if (number === ".") {
      canAddDecimal = false;
    }
  });
});

// Inmatning av operator
operatorInputButton.forEach((element) => {
  element.addEventListener("click", () => {
    canAddDecimal = true;
    let operator = element.dataset.num;
    if (canAddOperator()) {
      screenOutput.value = screenOutput.value + operator;
    }
  });
});

// Rensa skärmen
clearButton.addEventListener("click", () => {
  canAddDecimal = true;
  screenOutput.value = "";
});

// Beräkna ekvationen och skriv ut svaret
equalButton.addEventListener("click", () => {
  screenOutput.value = eval(screenOutput.value);
  if (screenOutput.value.includes(".")) {
    canAddDecimal = false;
  } else {
    canAddDecimal = true;
  }
});
