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
