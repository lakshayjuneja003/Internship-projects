let totalAmountInput = document.getElementById("totalAmount");
let tipInput = document.getElementById("tip");
let personsInput = document.getElementById("persons");

let tipResult = document.getElementById("tip-result");
let totalResult = document.getElementById("total-result");

let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    if (totalAmount.value === "" || tip.value === "" || persons.value === "") {
        alert("Please enter valid input values.");
        return;
    }

    let amountPerPerson = parseFloat(totalAmount.value) / parseFloat(persons.value);
    let tipAmount = (parseFloat(tip.value) / 100) * amountPerPerson;
    let totalAmountPerPerson = amountPerPerson + tipAmount;

    // Clear previous results
    tipResult.innerHTML = '';
    totalResult.innerHTML = '';

    // Append new results
    tipResult.innerHTML = `<h1>TIP : $<span>${tipAmount.toFixed(2)}</span></h1>`;
    totalResult.innerHTML = `<h1>TOTAL : $<span>${totalAmountPerPerson.toFixed(2)}</span></h1>`;
});


