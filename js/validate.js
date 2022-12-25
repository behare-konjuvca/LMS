const adminError = document.getElementById("school-label");
const btn1 = document.getElementById("admin");

var nameRegex = /\w{4,10}/;
btn1.addEventListener("click", function (event) {
  const adminValidation = document.getElementById("school-name").value;
  if (adminValidation == "") {
    adminError.innerText = "Please enter a school name!";
    adminError.style.color = "red";
    event.preventDefault();
  } else {
    if (nameRegex.test(adminValidation)) {
      //shtohet ne databaze me php
    } else {
      adminError.innerText = "Please enter a valid school name!";
      adminError.style.color = "red";
      event.preventDefault();
    }
  }
});
