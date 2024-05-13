 // Obtém o dia da semana (0 = Domingo, 1 = Segunda, ..., 6 = Sábado)
 const diaDaSemana = new Date().getDay();

 // Objeto com as imagens e mensagens para cada dia da semana
 const imagensEMensagensPorDia = {
   0: {
     imagem: "../files/semAula.png",
     mensagem: "Hoje é Domingo!"
   },
   1: {
     imagem: "../files/segundaAluno.png",
     mensagem: "Hoje é Segunda-feira!"
   },
   2: {
     imagem: "../files/tercaAluno.png",
     mensagem: "Hoje é Terça-feira!"
   },
   3: {
     imagem: "../files/quartaAluno.png",
     mensagem: "Hoje é Quarta-feira!"
   },
   4: {
     imagem: "../files/quintaAluno.png",
     mensagem: "Hoje é Quinta-feira!"
   },
   5: {
     imagem: "../files/sextaAluno.png",
     mensagem: "Hoje é Sexta-feira!"
   },
   6: {
     imagem: "../files/semAula.png",
     mensagem: "Hoje é Sábado!"
   }
 };

 // Função para exibir a imagem e a mensagem do dia da semana
 function exibirImagemEMensagemDoDia(dia) {
   const infoDia = imagensEMensagensPorDia[dia];
   if (infoDia) {
     const imgElement = document.createElement("img");
     imgElement.src = infoDia.imagem;
     imgElement.alt = "Imagem do dia da semana";

     const mensagemElement = document.createElement("p");
     mensagemElement.textContent = infoDia.mensagem;

     const container = document.getElementById("imagem-e-mensagem-do-dia");
     container.innerHTML = "";
     container.appendChild(imgElement);
     container.appendChild(mensagemElement);
   } else {
     const container = document.getElementById("imagem-e-mensagem-do-dia");
     container.innerHTML = "Imagem e mensagem não encontradas para este dia.";
   }
 }

 // Chamando a função para exibir a imagem e a mensagem do dia da semana ao carregar a página
 window.onload = function() {
   exibirImagemEMensagemDoDia(diaDaSemana);
 };