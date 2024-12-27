import { initialForm, fullForm } from "./modules/form_data.js";

const form = document.querySelector("#form");
const form2 = document.querySelector("#form2");
const CONTAINER1 = document.querySelector("#container1");
const CONTAINER2 = document.querySelector("#container2");

window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector("body").classList.remove("preload");
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

//form 1
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(initialForm.url, {
    method: "POST",
    mode: "no-cors",
    header: {
      "Content-Type": "application/json",
    },
    body: getInputData(initialForm.fields),
  })
    .then((data) => {
      console.log(data);
      CONTAINER1.classList.toggle("closed");
      clearInputs();
    })
    .catch((err) => console.error(err));
});

//form 2
form2.addEventListener("submit", (e) => {
  e.preventDefault();
  CONTAINER2.classList.add("loading");
  fetch(fullForm.url, {
    method: "POST",
    mode: "no-cors",
    header: {
      "Content-Type": "application/json",
    },
    body: getInputData(fullForm.fields),
  })
    .then((data) => {
      console.log(data);
      CONTAINER2.classList.remove("loading");
      CONTAINER2.classList.add("loaded");
    })
    .catch((err) => console.error(err));
});

const getInputData = (form) => {
  let dataToPost = new FormData();
  form.forEach((e) => {
    console.log(e.name);
    const val = document.querySelector(`[name='${e.name}']`).value;
    dataToPost.append(e.code, val);
    if (isForm1())
      document.querySelector(`#container2 [name='${e.name}-2']`).value = val;
  });
  return dataToPost;
};

const clearInputs = () => {
  document.querySelector("form").reset();
};

const isForm1 = () => {
  return !CONTAINER1.classList.contains("closed");
};

document.body.onkeyup = function (e) {
  if (e.keyCode == 66) {
    if (
      location.hostname === "localhost" ||
      location.hostname === "127.0.0.1" ||
      location.hostname === ""
    ) {
      window.scrollTo(0, 0);
      CONTAINER1.classList.toggle("closed");
    }
  }
};
