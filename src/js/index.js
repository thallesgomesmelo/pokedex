window.onload = () => {
  getAllPokemon();
};

/** Pega uma lista de 40 pokemons na API. */
function getAllPokemon() {
  const urlAPI = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=40`;

  fetch(urlAPI)
    .then(resp => {
      return resp.json();
    })
    .then(dado => {
      const arrayURLPokemons = [];
      for (let pokemon of dado.results) {
        arrayURLPokemons.push(pokemon.url);
      }
      console.log("Pegou lista de URL dos Pokemon");

      criarPokemon(arrayURLPokemons);
    })
    .catch(erro => {
      console.log("Não conseguiu montar a url de pokemon. " + erro);
    });
}

/** Recebe um array com URL dos pokemons a ser pesquisado na API.
 * @param {object} arrayUrlPokemon */
function criarPokemon(arrayUrlPokemon) {
  arrayUrlPokemon.forEach(urlPokemon => {
    fetch(urlPokemon)
      .then(resp => {
        return resp.json();
      })
      .then(pokemon => {
        buildListHTML(pokemon);
        buildCardHTML(pokemon);
      })
      .then(() => {
        const listCardPokemons = document.querySelectorAll(".pokemon");
        // Adicionando evento de click para cada cartão de pokemon na lista.
        listCardPokemons.forEach(pokemon => {
          pokemon.addEventListener("click", () => {
            openCard(pokemon);
          });
        });
      })
      .catch(erro => {
        console.log("Não conseguiu criar a lista de Pokemon. " + erro);
      });
  });
}

/** Faz o controle de abertura e fechamento dos cartões.
 * @param {Element} pokemon */
function openCard(pokemon) {
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

  const cartaoPokemonParaAbrir = document.getElementById(
    idDoCartaoPokemonParaAbrir
  );
  cartaoPokemonParaAbrir.classList?.add("aberto");

  //Deixar selecionado o cartão na lista de pokemon escolido.
  const pokemonSelecionadoNaListagem =
    document.getElementById(idPokemonSelecionado);
  pokemonSelecionadoNaListagem.classList?.add("ativo");
}
