import { projects } from "./modules/project_data.js";
import { initProject } from "./modules/project.js";
import { initProjectsInput } from "./modules/inputs.js";
import { setupMobilizador } from "./modules/mobilizador.js";
import { fill_full_form } from "./modules/testing_tools.js";

const DEBUG = true;

const getUrlParameter = (param) => {
  const project = window.location.search;
  const searchParams = new URLSearchParams(project);
  return searchParams.get(param);
};

window.addEventListener("DOMContentLoaded", (event) => {
  if (DEBUG) fill_full_form();

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
