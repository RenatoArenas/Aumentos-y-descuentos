//Event Listeners

document.getElementById("increases-link").addEventListener('click', increasesBtn);
document.getElementById("discounts-link").addEventListener('click', discountsBtn);

//Variables

const increases_link = document.getElementById("increases-link");
const discounts_link = document.getElementById("discounts-link");
const increase_num = document.getElementById("numberA");
const discount_num= document.getElementById("numberD");
const increase_per = document.getElementById("percentageA");
const discount_per = document.getElementById("percentageD");

//Active Links && Change buttons

function increasesBtn() {
    increases_link.classList.add("button-active");
    discounts_link.classList.remove("button-active");
    increase_num.classList.add("input-block");
    discount_num.classList.remove("input-block");
    increase_per.classList.add("input-block");
    discount_per.classList.remove("input-block");
    if (increase_num.value == 0) {    
        increase_num.value = "";
    }
    if (increase_per.value == 0) {
        increase_per.value = "";
    }
}

function discountsBtn() {
    increases_link.classList.remove("button-active");
    discounts_link.classList.add("button-active");
    increase_num.classList.remove("input-block");
    discount_num.classList.add("input-block");
    increase_per.classList.remove("input-block");
    discount_per.classList.add("input-block");
    if (discount_num.value == 0) {
        discount_num.value = "";
    }
    if (discount_per.value == 0) {
        discount_per.value = "";
    }
}