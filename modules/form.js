import { initialForm, fullForm } from "./form_data.js";

const form = document.querySelector("#form");
const form2 = document.querySelector("#form2");
const CONTAINER1 = document.querySelector("#container1");
const CONTAINER2 = document.querySelector("#container2");

export const initForms = () => {
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
};

const getInputData = (form) => {
  let dataToPost = new FormData();
  form.forEach((e) => {
    console.log(e.name);
    const val = document.querySelector(`[name='${e.name}']`).value;
    dataToPost.append(e.code, val);
    if (isInitialForm())
      document.querySelector(`#container2 [name='${e.name}-2']`).value = val;
  });
  return dataToPost;
};

const clearInputs = () => {
  document.querySelector("form").reset();
};

const isInitialForm = () => {
  return !CONTAINER1.classList.contains("closed");
};
