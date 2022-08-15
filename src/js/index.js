window.onload = () => {
  getAllPokemon()
}

/** Pega uma lista de 40 pokemons na API. */
function getAllPokemon() {
  const urlAPI = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=40`

  fetch(urlAPI)
    .then(resp => {
      return resp.json()
    })
    .then(dado => {
      const arrayURLPokemons = []
      for (let pokemon of dado.results) {
        arrayURLPokemons.push(pokemon.url)
      }
      console.log('Pegou lista de URL dos Pokemon')

      criarPokemon(arrayURLPokemons)
    })
    .catch(erro => {
      console.log('Não conseguiu montar a url de pokemon. ' + erro)
    })
}

/** Recebe um array com URL dos pokemons a ser pesquisado na API.
 * @param {object} arrayUrlPokemon */
function criarPokemon(arrayUrlPokemon) {
  arrayUrlPokemon.forEach(urlPokemon => {
    fetch(urlPokemon)
      .then(resp => {
        return resp.json()
      })
      .then(pokemon => {
        const idPokemon = `${pokemon.id}`.padStart(3, 0)
        const nome = pokemon.forms[0].name
        const imgPokemon = pokemon.sprites.other.home.front_default
        const tipoPokemon = pokemon.types[0].type.name
        const HP = pokemon.stats[0].base_stat
        const ATK = pokemon.stats[1].base_stat
        const DEF = pokemon.stats[2].base_stat
        const VEL = pokemon.stats[5].base_stat

        const buildListPokemon = `<li class="pokemon" id="${nome}">
          <img src="${imgPokemon}" alt="${nome}"/>
          <span>${nome}</span>
        </li>`
        document
          .querySelector('.listagem ul')
          .insertAdjacentHTML('beforeend', buildListPokemon)

        const cardPokemon = `<div class="cartao-pokemon tipo-${tipoPokemon}" id="cartao-${nome}">
          <div class="cartao-topo">
            <div class="detalhes">
              <h2 class="nome">${nome}</h2>
              <span>#${idPokemon}</span>
            </div>

            <span class="tipo">${tipoPokemon}</span>

            <div class="cartao-imagem">
              <img src="${imgPokemon}" alt="${nome}" />
            </div>
          </div>

          <div class="cartao-informacoes">
            <div class="status">
              <h3>Status</h3>

              <ul>
                <li>HP: ${HP}</li>
                <li>Ataque: ${ATK}</li>
                <li>Defesa: ${DEF}</li>
                <li>Velocidade: ${VEL}</li>
              </ul>
            </div>

            <div class="habilidades">
              <h3>Habilidades</h3>

              <ul>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>`
        document
          .querySelector('.cartoes-pokemon')
          .insertAdjacentHTML('beforeend', cardPokemon)
      })
      .then(() => {
        const listaCartaoPokemons = document.querySelectorAll('.pokemon')
        // Adicionando evento de click para cada cartão de pokemon na lista.
        listaCartaoPokemons.forEach(pokemon => {
          pokemon.addEventListener('click', () => {
            openCard(pokemon)
          })
        })
      })
      .catch(erro => {
        console.log('Não conseguiu criar a lista de Pokemon. ' + erro)
      })
  })
}

/** Faz o controle de abertura e fechamento dos cartões.
 * @param {Element} pokemon */
function openCard(pokemon) {
  //Removendo cartão do pokemon aberto.
  const cartaoPokemonAberto = document.querySelector('.aberto')
  if (cartaoPokemonAberto) {
    cartaoPokemonAberto.classList?.remove('aberto')
  }

  //Removendo cartão ativo marcado na lista de pokémon.
  const pokemonAtivoNaListagem = document.querySelector('.ativo')
  if (pokemonAtivoNaListagem) {
    pokemonAtivoNaListagem.classList?.remove('ativo')
  }

  //Ao clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual cartão mostrar.
  const idPokemonSelecionado = pokemon.attributes.id.value
  const idDoCartaoPokemonParaAbrir = `cartao-${idPokemonSelecionado}`

  const cartaoPokemonParaAbrir = document.getElementById(
    idDoCartaoPokemonParaAbrir
  )
  cartaoPokemonParaAbrir.classList?.add('aberto')

  //Deixar selecionado o cartão na lista de pokemon escolido.
  const pokemonSelecionadoNaListagem =
    document.getElementById(idPokemonSelecionado)
  pokemonSelecionadoNaListagem.classList?.add('ativo')
}
