const btn1 = document.getElementById("btn");
const studentError = document.getElementById("student-label");
const passError = document.getElementById("pass-label");
const btn2 = document.getElementById("btn-2");
const studentError2 = document.getElementById("sign-name-label");
const passError2 = document.getElementById("pass-label-2");

var nameRegex = /\w{4,10}/;
btn1.addEventListener("click", function (event) {
  const validation = document.getElementById("student").value;
  const passValidation = document.getElementById("pass").value;
  if (validation == "") {
    studentError.innerText = "Please enter your name!";
    studentError.style.color = "red";
    event.preventDefault();
  } else {
    if (nameRegex.test(validation)) {
      //shtohet ne databaze me php
    } else {
      studentError.innerText = "Please enter a valid name!";
      studentError.style.color = "red";
      event.preventDefault();
    }
  }
  if (passValidation == "") {
    passError.innerText = "Please enter your password!";
    passError.style.color = "red";
    event.preventDefault();
  } else {
    if (nameRegex.test(passValidation)) {
      //shtohet ne databaze me php
    } else {
      passError.innerText = "Please enter a valid password!";
      passError.style.color = "red";
      event.preventDefault();
    }
  }
});
btn2.addEventListener("click", function (event) {
  const validation = document.getElementById("sign-name").value;
  const passValidation = document.getElementById("pass-sign").value;
  if (validation == "") {
    studentError2.innerText = "Please enter your name!";
    studentError2.style.color = "red";
    event.preventDefault();
  } else {
    if (nameRegex.test(validation)) {
      //shtohet ne databaze me php
    } else {
      studentError2.innerText = "Please enter a valid name!";
      studentError2.style.color = "red";
      event.preventDefault();
    }
  }
  if (passValidation == "") {
    passError2.innerText = "Please enter your password!";
    passError2.style.color = "red";
    event.preventDefault();
  } else {
    if (nameRegex.test(passValidation)) {
      //shtohet ne databaze me php
    } else {
      passError2.innerText = "Please enter a valid password!";
      passError2.style.color = "red";
      event.preventDefault();
    }
  }
});
