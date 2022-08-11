const listaCartaoPokemons = document.querySelectorAll(".pokemon");

// Adicionando evento de click para cada cartão de pokemon na lista.
listaCartaoPokemons.forEach(pokemon => {
  pokemon.addEventListener("click", () => {
    //Removendo cartão do pokemon aberto.
    const cartaoPokemonAberto = document.querySelector(".aberto");
    cartaoPokemonAberto.classList.remove("aberto");

    //Removendo cartão ativo marcado na lista de pokémon.
    const pokemonAtivoNaListagem = document.querySelector(".ativo");
    pokemonAtivoNaListagem.classList.remove("ativo");

    //Ao clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual cartão mostrar.
    const idPokemonSelecionado = pokemon.attributes.id.value;
    const idDoCartaoPokemonParaAbrir = `${idPokemonSelecionado}-card`;
    const cartaoPokemonParaAbrir = document.getElementById(
      idDoCartaoPokemonParaAbrir
    );
    cartaoPokemonParaAbrir.classList.add("aberto");

    //Deixar selecionado o cartão na lista de pokemon escolido.
    const pokemonSelecionadoNaListagem =
      document.getElementById(idPokemonSelecionado);
    pokemonSelecionadoNaListagem.classList.add("ativo");
  });
});
