const listaCartaoPokemons = document.querySelectorAll(".pokemon");

// Adicionando evento de click para cada cartão de pokemon na lista.
listaCartaoPokemons.forEach(pokemon => {
  pokemon.addEventListener("click", () => {
    //Removendo cartão do pokemon aberto.
    const cartaoPokemonAberto = document.querySelector(".aberto");
    if (cartaoPokemonAberto) {
      cartaoPokemonAberto.classList?.remove("aberto");
    }

    //Removendo cartão ativo marcado na lista de pokémon.
    const pokemonAtivoNaListagem = document.querySelector(".ativo");
    if (pokemonAtivoNaListagem) {
      pokemonAtivoNaListagem.classList?.remove("ativo");
    }

    //Ao clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual cartão mostrar.
    const idPokemonSelecionado = pokemon.attributes.id.value;
    const idDoCartaoPokemonParaAbrir = `cartao-${idPokemonSelecionado}`;

    getPokemon(idPokemonSelecionado, idDoCartaoPokemonParaAbrir);

    const cartaoPokemonParaAbrir = document.getElementById(
      idDoCartaoPokemonParaAbrir
    );
    cartaoPokemonParaAbrir.classList?.add("aberto");

    //Deixar selecionado o cartão na lista de pokemon escolido.
    const pokemonSelecionadoNaListagem =
      document.getElementById(idPokemonSelecionado);
    pokemonSelecionadoNaListagem.classList?.add("ativo");
  });
});

function getPokemon(_pokemon, card) {
  const url = `https://pokeapi.co/api/v2/pokemon/${_pokemon}`;

  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const id = `${data.id}`.padStart(3, 0);
      document.querySelector(`#${card} .detalhes span`).innerText = `#${id}`;

      let img = data.sprites.other.home.front_default;
      document
        .querySelector(`#${card}  .cartao-imagem img`)
        .setAttribute("src", img);

      console.log(data.name);
    })
    .catch(error => {
      console.log(error);
    });
}
