fetch("http://localhost:3000/filmes")
  .then((req) => req.json())
  .then((data) => mostrarFilmes(data));

function mostrarFilmes(filmes) {
  const htmlFilmes = filmes.map(
    (filme) => `
      <div>
        <h2>${filme.titulo}</h2>
        <img src="${filme.url}" alt="${filme.titulo}">
        <h3>${filme.ano}</h3>
        <button class="btn-deletar-filme" data-id="${filme.id}">Deletar</button>
      </div>
    `
  );
  document.getElementById("app").innerHTML = htmlFilmes.join("");

  const btnsDeletarFilme = document.querySelectorAll(".btn-deletar-filme");
  btnsDeletarFilme.forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = btn.getAttribute("data-id");
      deletarFilme(id);
    });
  });
}

function deletarFilme(id) {
  fetch(`http://localhost:3000/filmes/${id}`, {
    method: "DELETE",
  })
    .then(() => {
      fetchFilmes();
    })
    .catch((error) => {
      console.error("Erro ao excluir filme:", error);
    });
}

function fetchFilmes() {
  fetch("http://localhost:3000/filmes")
    .then((req) => req.json())
    .then((data) => mostrarFilmes(data));
}

// Adicionar evento de clique no botão de adicionar filme
document.getElementById("btn-adicionar-filme").addEventListener("click", function(event) {
  event.preventDefault(); // impede que a página seja recarregada

  // Pega os valores do formulário
  const titulo = document.getElementById("titulo").value;
  const url = document.getElementById("url").value;
  const ano = document.getElementById("ano").value;

  // Cria um objeto com os dados do novo filme
  const novoFilme = {
    titulo: titulo,
    url: url,
    ano: ano
  };

  // Envia uma requisição POST para adicionar o novo filme
  fetch("http://localhost:3000/filmes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(novoFilme)
  })
  .then(() => {
    // Atualiza a lista de filmes após adicionar o novo filme
    fetchFilmes();
  })
  .catch((error) => {
    console.error("Erro ao adicionar filme:", error);
  });

  // Limpa os campos do formulário após adicionar o novo filme
  document.getElementById("titulo").value = "";
  document.getElementById("url").value = "";
  document.getElementById("ano").value = "";
});
