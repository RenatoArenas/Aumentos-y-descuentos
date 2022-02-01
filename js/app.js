//Event Listeners

document.getElementById("increases-link").addEventListener('click', increasesBtn);
document.getElementById("discounts-link").addEventListener('click', discountsBtn);

//Variables

const increases_link = document.getElementById("increases-link");
const discounts_link = document.getElementById("discounts-link");
const increase_btn = document.getElementById("increase");
const discount_btn = document.getElementById("discount");

//Active Links && Change buttons

function increasesBtn() {
    increases_link.classList.add("button-active");
    discounts_link.classList.remove("button-active");
    increase_btn.classList.add("button-block");
    discount_btn.classList.remove("button-block");
}

function discountsBtn() {
    increases_link.classList.remove("button-active");
    discounts_link.classList.add("button-active");
    increase_btn.classList.remove("button-block");
    discount_btn.classList.add("button-block");
}