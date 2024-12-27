import { projects } from "./modules/project_data.js";

const LOGO = document.querySelector("#logo");
const BG_IMG = document.querySelector(".image img");
const PROJECT_FIELD = document.querySelector("#input-projeto");
const PROJECT_FIELD2 = document.querySelector("#input-projeto-2");

export const initProjectsInput = () => {
  Object.keys(projects).forEach((e) => {
    const htmlString = `<option value="${projects[e].name}" data-name="${e}">${projects[e].name}</option>`;
    const div = document.createElement("div");
    div.innerHTML = htmlString;
    PROJECT_FIELD2.append(div.firstChild);
  });
};

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
