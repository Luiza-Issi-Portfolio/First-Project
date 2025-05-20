function renderProdutos() {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  produtos.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.imagem}" alt="${p.nome}" />
      <h3>${p.nome}</h3>
      <p>R$ ${p.preco.toFixed(2)}</p>
      <button class="add-button" onclick="adicionarCarrinho(${p.id})">Adicionar</button>
    `;
    container.appendChild(card);
  });
}

function adicionarCarrinho(id) {
  const item = produtos.find(p => p.id === id);
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.push(item);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert("Produto adicionado ao carrinho!");
}
