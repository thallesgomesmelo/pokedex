function buildCardHTML(pokemon) {
  const elementCard = document.querySelector(".cartoes-pokemon");
  const idPokemon = `${pokemon.id}`.padStart(3, 0);
  const nome = pokemon.forms[0].name;
  const imgPokemon = pokemon.sprites.other.home.front_default;
  const tipoPokemon = pokemon.types[0].type.name;
  const HP = pokemon.stats[0].base_stat;
  const ATK = pokemon.stats[1].base_stat;
  const DEF = pokemon.stats[2].base_stat;
  const VEL = pokemon.stats[5].base_stat;
  const ATKRapido = pokemon.abilities[0].ability.name;
  const ATKCaregado = pokemon.abilities[1].ability.name;

  const cardPokemon = `
    <div class="cartao-pokemon tipo-${tipoPokemon}" id="cartao-${nome}">
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
                <li>${ATKRapido}</li>
                <li>${ATKCaregado}</li>
              </ul>
            </div>
          </div>
        </div>`;

  elementCard.insertAdjacentHTML("beforeend", cardPokemon);
}

function buildListHTML(pokemon) {
  const nome = pokemon.forms[0].name;
  const imgPokemon = pokemon.sprites.other.home.front_default;
  const elementList = document.querySelector(".listagem ul");

  const buildListPokemon = `
    <li class="pokemon" id="${nome}">
        <img src="${imgPokemon}" alt="${nome}"/>
        <span>${nome}</span>
    </li>`;

  elementList.insertAdjacentHTML("beforeend", buildListPokemon);
}
