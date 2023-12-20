const userInput = document.getElementById('input-number');
const addElement = document.getElementById('add-btn');
const substractElement = document.getElementById('substract-btn');
const multiplyElement = document.getElementById('multiply-btn');
const divideElement = document.getElementById('divide-btn');


const outputcaldes = document.querySelector('.cal-description');
const outputcalresult = document.querySelector('span.cal-result');

function output(result,desc){
    outputcaldes.innerText = desc;
    outputcalresult.innerText = result; 
}