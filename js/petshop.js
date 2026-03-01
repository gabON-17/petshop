// ==============================
// FUNÇÃO PRINCIPAL DO SISTEMA
// ==============================
// Essa função é chamada quando o usuário clica no botão "Cadastrar"
function cadastrarPet() {

  // ==============================
  // 1) PEGAR DADOS DIGITADOS
  // ==============================

  // Pega o texto digitado no campo com id="nome"
  let nomePet = document.getElementById("nome").value;

  // Pega o texto digitado no campo com id="especie"
  let especiePet = document.getElementById("especie").value;


  // ==============================
  // 2) DESCOBRIR O SEXO DO PET
  // ==============================

  // Procura qual radio (opção) do grupo "sexo" está marcado
  let opcaoSexo = document.querySelector('input[name="sexo"]:checked');

  // Define um valor inicial, caso nada esteja marcado
  let sexoPet = "Não informado";

  // Se existir uma opção marcada...
  if (opcaoSexo) {
    // ... então pega o valor dessa opção
    sexoPet = opcaoSexo.value;
  }

  // Pega a data de nascimento
  let dataNascimentoPet = document.getElementById("data_nascimento").value;

  // ==============================
  // 3) PEGAR OS SERVIÇOS MARCADOS
  // ==============================

  // Pega todos os checkboxes com a classe "serv" que estão marcados
  let servicosSelecionados = document.querySelectorAll(".serv:checked");

  // Cria uma variável vazia para guardar os serviços em forma de texto
  let listaServicos = "";

  // Laço FOR: passa por cada checkbox marcado
  // cont começa em 0 e vai até o tamanho da lista de serviços
  for (let cont = 0; cont < servicosSelecionados.length; cont++) {

    // Em cada volta do laço, pega o valor do serviço
    let nomeServico = servicosSelecionados[cont].value;

    // Junta (concatena) esse valor na variável listaServicos
    listaServicos += "<li>" + nomeServico + "</li>";
  }


  // ==============================
  // 4) SALVAR OS DADOS PARA A PRÓXIMA PÁGINA
  // ==============================

  // Guarda os dados no localStorage (memória do navegador)
  localStorage.setItem("nomePet", nomePet);
  localStorage.setItem("especiePet", especiePet);
  localStorage.setItem("sexoPet", sexoPet);
  localStorage.setItem("listaServicos", "<ul>" + listaServicos + "</ul>");
localStorage.setItem("dataNascimentoPet", dataNascimentoPet);

  // ==============================
  // 5) ABRIR A PÁGINA DO COMPROVANTE
  // ==============================

  // Redireciona para outra página
  window.location.href = "comprovante.html";
}

// ==============================
// FUNÇÃO DA CALCULADORA DE RAÇÃO
// ==============================
function calcularRacao() {

  // 1) Pegar os dados
  let nomeCachorro = document.getElementById("nome_cachorro").value;
  let porteCachorro = document.getElementById("porte_cachorro").value;
  let opcaoIdade = document.querySelector('input[name="idade_cachorro"]:checked');
  
  let idadeCachorro = "Não informado";
  if (opcaoIdade) {
    idadeCachorro = opcaoIdade.value;
  }

  // 2) Calcular quantidade
  let quantidadeDiaria = "";

  if (porteCachorro.includes("Miniatura")) {
    quantidadeDiaria = "50g a 120g";
  } else if (porteCachorro.includes("Pequeno")) {
    quantidadeDiaria = "120g a 200g";
  } else if (porteCachorro.includes("Médio")) {
    quantidadeDiaria = "200g a 400g";
  } else if (porteCachorro.includes("Grande")) {
    quantidadeDiaria = "400g a 600g";
  } else if (porteCachorro.includes("Gigante")) {
    quantidadeDiaria = "600g a 800g";
  } else {
    quantidadeDiaria = "Não foi possível calcular";
  }

  // 3) Salvar os dados no localStorage
  localStorage.setItem("nomeCachorro", nomeCachorro);
  localStorage.setItem("porteCachorro", porteCachorro);
  localStorage.setItem("idadeCachorro", idadeCachorro);
  localStorage.setItem("quantidadeDiaria", quantidadeDiaria);

  // 4) Redirecionar para o comprovante
  window.location.href = "comprovante.html";
}
