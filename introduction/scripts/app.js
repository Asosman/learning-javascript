let currentResult = 0;
let logEntries = [];

function userput() {
  const enteredNumber = parseInt(userInput.value);
  return enteredNumber;
}
function resultdescription(operator, resultBefore, userenteredNumber) {
  const descriptionresult =
    resultBefore + " " + operator + " " + userenteredNumber;
  return output(currentResult, descriptionresult);
}
function writeLogEntries(operator, prevresult, result) {
  let userentered = userput();
  let logEntry = {
    operator: operator,
    prevresult: prevresult,
    usertextnum: userentered,
    result: result,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
  // for (let i = 0; i < logEntries; i++) {
  //     console.log(logEntries[i].logEntry.prevresult + ' ' + logEntries[i].logEntry.operator + ' ' + logEntries[i].logEntry.usertextnum);
  // }
}
function calculateResult(calSymbol) {
  let operationType = calSymbol;
  let operatorType;
  const numberBefore = currentResult;

  if (
    operationType != "ADD" &&
    operationType != "SUBSTRACT" &&
    operationType != "MULTIPLY" &&
    operationType != "DIVDE" || !userput()
  ){
    return;
  }
    if (operationType == "ADD") {
      currentResult += userput();
      operatorType = "+";
    } else if (operationType == "SUBSTRACT") {
      currentResult -= userput();
      operatorType = "-";
    } else if (operationType == "MULTIPLY") {
      currentResult *= userput();
      operatorType = "*";
    } else if (operationType == "DIVIDE") {
      currentResult /= userput();
      operatorType = "/";
    }
  resultdescription("+", numberBefore, userput());
  writeLogEntries(operationType, numberBefore, currentResult);
}
function add() {
  calculateResult("ADD");
}
function substract() {
  calculateResult("SUBSTRACT");
}
function multiply() {
  calculateResult("MULTIPLY");
}
function divide() {
  calculateResult("DIVIDE");
}
addElement.addEventListener("click", add);
substractElement.addEventListener("click", substract);
multiplyElement.addEventListener("click", multiply);
divideElement.addEventListener("click", divide);
// output(currentResult,"my score" );
