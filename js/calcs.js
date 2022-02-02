//Event Listeners
document.getElementById("increases-link").addEventListener('click', showIncreases);
document.getElementById("discounts-link").addEventListener('click', showDiscounts);
document.getElementById("numberA").addEventListener('keyup', showIncreases);
document.getElementById("numberD").addEventListener('keyup', showDiscounts);
document.getElementById("percentageA").addEventListener('keyup', showIncreases);
document.getElementById("percentageD").addEventListener('keyup', showDiscounts);

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
    const discount_num = document.getElementById("numberD");
    const discount_per = document.getElementById("percentageD");
    let number = Number(document.getElementById("numberA").value);
    let percentage = Number(document.getElementById("percentageA").value);
    increases(number, percentage);
    result.innerHTML = "Resultado: " + res;
    discount_num.value = number;
    discount_per.value = percentage;
    if (increase_num.value == 0) {    
        increase_num.value = "";
        result.innerHTML = "Resultado: ";
    }
    if (increase_per.value == 0) {
        increase_per.value = "";
        result.innerHTML = "Resultado: ";
    }
}
function showDiscounts() {
    const increase_num = document.getElementById("numberA");
    const increase_per = document.getElementById("percentageA"); 
    let number = Number(document.getElementById("numberD").value);
    let percentage = Number(document.getElementById("percentageD").value);
    discounts(number, percentage);
    result.innerHTML = "Resultado: " + res;
    increase_num.value = number;
    increase_per.value = percentage;
    if (discount_num.value == 0) {
        discount_num.value = "";
        result.innerHTML = "Resultado: ";
    }
    if (discount_per.value == 0) {
        discount_per.value = "";
        result.innerHTML = "Resultado: ";
    }
}