const baseUrl = "http://localhost:3000/filmes";

const fetchFilmes = () => {
  fetch("http://localhost:3000/filmes")
    .then((req) => req.json())
    .then((data) => mostrarFilmes(data));
};

const mostrarFilmes = (filmes) => {
  const filmesHtml = filmes.map(
    (filme) => `
      <h2>${filme.id}</h2>
      <h2>Nome do filme: ${filme.titulo}</h2>
      <img src=${filme.url} alt="${filme.titulo}">
      <h1>${filme.ano}</h1>
      <button id="btn-excluir-${filme.id}">Excluir</button>
    `
  );
  document.getElementById("app").innerHTML = filmesHtml.join("");
  filmes.forEach((filme) => {
    const btnExcluir = document.getElementById(`btn-excluir-${filme.id}`);
    btnExcluir.addEventListener("click", () => {
      excluirFilme(filme.id);
    });
  });
};

const excluirFilme = (id) => {
  fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  }).catch((error) => console.error("Erro ao excluir filme:", error));
};

window.addEventListener("load", () => {
  fetchFilmes();
});
