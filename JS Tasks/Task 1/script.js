/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const formEl = document.querySelector('form');
const output = document.querySelector('#output');

formEl.onsubmit = (event) => {
    event.preventDefault();
    const input = formEl.querySelector('#search').value;
    const calculate = [input * 2.2046 + " lb", input / 0.0010000 + " g", input * 35.274 + " oz"];
    calculate.forEach(result => {
        output.innerHTML += `<div class="result">${result}</div>`;        
    })    
}

