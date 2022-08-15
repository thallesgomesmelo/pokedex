const cartaoPokemon = `
<div class="cartao-pokemon tipo-eletrico" id="cartao-${pokemon.nome}">
  <div class="cartao-topo">
    <div class="detalhes">
      <h2 class="nome">${pokemon.nome}</h2>
      <span>${pokemon.id}</span>
    </div>

    <span class="tipo">${pokemon.tipo}</span>

    <div class="cartao-imagem">
      <img src="${pokemon.imagem}" alt="${pokemon.nome}" />
    </div>
  </div>

  <div class="cartao-informacoes">
    <div class="status">
      <h3>Status</h3>

      <ul>
        <li>HP: ${pokemon.hp}</li>
        <li>Ataque: ${pokemon.atk}</li>
        <li>Defesa: ${pokemon.def}</li>
        <li>Velocidade: ${pokemon.vel}</li>
      </ul>
    </div>

    <div class="habilidades">
      <h3>Habilidades</h3>

      <ul>
        <li>${pokemon.atk.rapido}</li>
        <li>${pokemon.atk.carregado}</li>
      </ul>
    </div>
  </div>
</div>`
