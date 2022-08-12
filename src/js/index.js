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

      const imgAPI = data.sprites.other.home.front_default;
      const imagElem = document.querySelector(`#${card}  .cartao-imagem img`);
      imagElem.setAttribute("src", imgAPI);
      imagElem.setAttribute("alt", _pokemon);

      const tipoPokemon = document.querySelector(`#${card} .tipo`);
      tipoPokemon.innerText = data.types[0].type.name;

      const [HP, ATK, DEF, VEL] = document.querySelectorAll(
        `#${card} .status ul li span`
      );
      const status = data.stats;
      HP.innerText = status[0].base_stat;
      ATK.innerText = status[1].base_stat;
      DEF.innerText = status[2].base_stat;
      VEL.innerText = status[5].base_stat;

      console.log(data.name);
    })
    .catch(error => {
      console.log(error);
    });
}

// pokemon/?offset=15&limit=5"
