const container = document.getElementById("cards-container");
const mensagem = document.getElementById("mensagem");

async function buscarPersonagens() {

  try {

    const resposta = await fetch("https://akabab.github.io/superhero-api/api/all.json");

    if (!resposta.ok) {
      throw new Error("Erro na requisição");
    }

    const dados = await resposta.json();

    mensagem.textContent = "";

    dados.slice(0, 20).forEach(hero => {

      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${hero.images.sm}">
        <h3>${hero.name}</h3>
        <p>${hero.biography.publisher}</p>
      `;

      container.appendChild(card);

    });

  } catch (erro) {

    mensagem.textContent = "Erro ao carregar personagens.";
    console.error(erro);

  }
}

buscarPersonagens();