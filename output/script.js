"use strict";
var form = document.querySelector(".user-form");
console.log(form);
var firstNameInput = document.querySelector("#firstname");
var lastNameInput = document.querySelector("#lastname");
var userNameInput = document.querySelector("#username");
console.log(userNameInput);
var selectInput = document.querySelector("#country");
var feedbackInput = document.querySelector("#feedback");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var userData = {
        firstname: firstNameInput.value,
        lastname: lastNameInput.value,
        userName: userNameInput.value,
        country: selectInput.value,
        feedback: feedbackInput.value
    };
    console.log(userData);
});
