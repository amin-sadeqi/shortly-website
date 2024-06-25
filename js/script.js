"use strict";

const form = document.getElementById("link-form");
const input = document.getElementById("link-input");
const errMsg = document.getElementById("err-msg");

form.addEventListener("submit", submitForm);

function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}

function submitForm(e) {
  e.preventDefault();

  if (input.value === "") {
    errMsg.innerHTML = "please enter something";
    input.classList.add("border-pink-500");
  } else if (!validURL(input.value)) {
    errMsg.innerHTML = "please enter a valid URL";
    input.classList.add("border-pink-500");
  } else {
    errMsg.innerHTML = "";
    input.classList.remove("border-pink-500");
    alert("Success");
  }
}
