export const fill_initial_form = () => {
  document.querySelector('input[name="nome"]').value =
    "teste" + Math.round(Math.random() * 100);
  document.querySelector('input[name="telefone"]').value = "9999999999";
  document.querySelector('input[name="email"]').value = "teste@teste.com";
};

export const fill_full_form = () => {
  fill_initial_form();
  document.querySelector('input[name="nome-2"]').value =
    "teste" + Math.round(Math.random() * 100);
  document.querySelector('input[name="telefone-2"]').value = "9999999999";
  document.querySelector('input[name="email-2"]').value = "teste@teste.com";
  document.querySelector('input[name="nascimento"]').value = "1996-09-30";
  document.querySelector('input[name="cidade"]').value = "Teste";
};

const CONTAINER1 = document.querySelector("#container1");
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
