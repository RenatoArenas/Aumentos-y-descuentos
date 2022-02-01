//Event Listeners

document.getElementById("increase").addEventListener('click', showIncreases);
document.getElementById("discount").addEventListener('click', showDiscounts);

//Variables

const result = document.getElementById("result");

//Calcs

function increases(number, percentage) {
    res = number * ((100 + percentage)/100);
    return res;
}

function discounts(number, percentage) {
    res = number * ((100 - percentage)/100);
    return res;
}

//Show Result

function showIncreases() {
    let number = Number(document.getElementById("number").value);
    let percentage = Number(document.getElementById("percentage").value);
    increases(number, percentage);
    result.textContent = "Resultado: " + res;
}
function showDiscounts() {
    let number = Number(document.getElementById("number").value);
    let percentage = Number(document.getElementById("percentage").value);
    discounts(number, percentage);
    result.textContent = "Resultado: " + res;
}