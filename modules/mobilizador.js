export const initInputs = (mobilizador) => {
  const COMO_SOUBE = document.querySelector("#input-como-soube-2");
  COMO_SOUBE.querySelector("option").value = "Mobilizador: " + mobilizador;
  COMO_SOUBE.querySelector("option").text = mobilizador;
  COMO_SOUBE.disabled = "true";
  COMO_SOUBE.style.display = "none";
  COMO_SOUBE.previousElementSibling.style.display = "none";
};
