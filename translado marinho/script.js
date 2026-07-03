document.addEventListener('DOMContentLoaded', function () {
  const actionButton = document.getElementById('actionButton');
  const message = document.getElementById('message');

  actionButton.addEventListener('click', function () {
    message.textContent = 'Obrigado por visitar o Translado Marinho!';
    actionButton.textContent = 'Atualizado';
    actionButton.disabled = true;
  });
});

document.getElementById("orcamentoForm").addEventListener("submit", function(e){

e.preventDefault();

let nome = document.getElementById("nome").value;
let telefone = document.getElementById("telefone").value;
let origem = document.getElementById("origem").value;
let destino = document.getElementById("destino").value;
let data = document.getElementById("data").value;
let hora = document.getElementById("hora").value;
let mensagem = document.getElementById("mensagem").value;

let texto = `Olá, gostaria de um orçamento:%0A
Nome: ${nome}%0A
Telefone: ${telefone}%0A
Origem: ${origem}%0A
Destino: ${destino}%0A
Data: ${data}%0A
Hora: ${hora}%0A
Observações: ${mensagem}`;

let url = `https://wa.me/5547984987802?text=${texto}`;

window.open(url, "_blank");

});
