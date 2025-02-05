import { projects } from "./project_data.js";
import { updateInputs } from "./inputs.js";
import { updateConclusionMessage } from "./conclusion_message.js";

const LOGO = document.querySelector("#logo");
const BG_IMG = document.querySelector(".image img");
const PROJECT_FIELD = document.querySelector("#input-projeto");
const PROJECT_FIELD2 = document.querySelector("#input-projeto-2");

export const initProject = (projectName) => {
  LOGO.src = projects[projectName].logo;
  BG_IMG.src = projects[projectName].image;
  document.documentElement.style.setProperty(
    "--primary",
    projects[projectName].color
  );
  PROJECT_FIELD.value = projects[projectName].name;
  PROJECT_FIELD2.value = projects[projectName].name;
  PROJECT_FIELD2.disabled = true;
  updateInputs(projectName);
  updateConclusionMessage(projects[projectName].message);
};
