import { projects } from "./modules/project_data.js";
import { initProjectsInput } from "./modules/project.js";

const LOGO = document.querySelector("#logo");
const BG_IMG = document.querySelector(".image img");
const PROJECT_FIELD = document.querySelector("#input-projeto");
const PROJECT_FIELD2 = document.querySelector("#input-projeto-2");

const initProject = (projectName) => {
  LOGO.src = projects[projectName].logo;
  BG_IMG.src = projects[projectName].image;
  document.documentElement.style.setProperty(
    "--primary",
    projects[projectName].color
  );
  PROJECT_FIELD.value = projects[projectName].name;
  PROJECT_FIELD2.value = projects[projectName].name;
  PROJECT_FIELD2.disabled = true;
  updateProject(projectName);
};

const getUrlParameter = (param) => {
  const project = window.location.search;
  const searchParams = new URLSearchParams(project);
  return searchParams.get(param);
};

// const initProjectsInput = () => {
//   const SELECT = document.querySelector("#input-projeto-2");
//   Object.keys(projects).forEach((e) => {
//     const htmlString = `<option value="${projects[e].name}" data-name="${e}">${projects[e].name}</option>`;
//     const div = document.createElement("div");
//     div.innerHTML = htmlString;
//     SELECT.append(div.firstChild);
//   });
// };

const appendTurmaField = (projectName) => {
  const SELECT = document.querySelector("#input-turma-2");
  SELECT.innerHTML =
    '<option value="" disabled selected>Selecione uma turma</option>';
  projects[projectName].cities.forEach((e) => {
    const htmlString = `<option value="${e.city}" data-state="${e.state}">${e.city}</option>`;
    const div = document.createElement("div");
    div.innerHTML = htmlString;
    SELECT.append(div.firstChild);
  });
};

const appendStateField = (projectName) => {
  const SELECT = document.querySelector("#input-estado-2");
  SELECT.innerHTML =
    '<option value="" disabled selected>Selecione um estado</option>';
  let states = [...new Set(projects[projectName].cities.map((e) => e.state))];
  states.forEach((e) => {
    const htmlString = `<option value="${e}">${e}</option>`;
    const div = document.createElement("div");
    div.innerHTML = htmlString;
    SELECT.append(div.firstChild);
  });
};

const updateProject = (projectName) => {
  appendStateField(projectName);
  appendTurmaField(projectName);
};

const setupMobilizador = (mobilizador) => {
  const COMO_SOUBE = document.querySelector("#input-como-soube-2");
  COMO_SOUBE.querySelector("option").value = "Mobilizador: " + mobilizador;
  COMO_SOUBE.querySelector("option").text = mobilizador;
  COMO_SOUBE.disabled = "true";
  COMO_SOUBE.style.display = "none";
  COMO_SOUBE.previousElementSibling.style.display = "none";
};

PROJECT_FIELD2.addEventListener("change", (e) => {
  projectName = [...PROJECT_FIELD2.querySelectorAll("option")].filter(
    (e) => e.text == PROJECT_FIELD2.value
  )[0].dataset.name;
  updateProject(projectName);
});

window.addEventListener("DOMContentLoaded", (event) => {
  initProjectsInput();
  const projeto = getUrlParameter("projeto");
  const mobilizador = getUrlParameter("mobilizador");
  if (mobilizador) {
    setupMobilizador(mobilizador);
  }
  if (projeto && projects[projeto]) {
    initProject(projeto);
  }
});
