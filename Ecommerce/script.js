function renderProdutos() {
  const container = document.getElementById("product-list");
  produtos.forEach(p => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
      <img src="${p.imagem}" alt="${p.nome}" />
      <h2>${p.nome}</h2>
      <p>R$ ${p.preco.toFixed(2)}</p>
      <button onclick="adicionarCarrinho(${p.id})">Adicionar</button>
    `;
    container.appendChild(card);
  });
}

function adicionarCarrinho(id) {
  const item = produtos.find(p => p.id === id);
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.push(item);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert("Adicionado ao carrinho!");
}

function renderCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  const container = document.getElementById("cart-items");
  let total = 0;

  carrinho.forEach((item, index) => {
    total += item.preco;
    const div = document.createElement("div");
    div.innerHTML = `
      <p>${item.nome} - R$ ${item.preco.toFixed(2)}
      <button onclick="removerItem(${index})">Remover</button></p>
    `;
    container.appendChild(div);
  });

  document.getElementById("total").textContent = total.toFixed(2);
}

function removerItem(index) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.splice(index, 1);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  location.reload();
}

function iniciarCheckout() {
  document.getElementById("checkout-form").onsubmit = function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const endereco = document.getElementById("endereco").value;
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const pedido = {
      nome, email, endereco,
      itens: carrinho,
      total: carrinho.reduce((acc, i) => acc + i.preco, 0),
      data: new Date().toLocaleString()
    };
    salvarPedido(pedido);
    localStorage.removeItem("carrinho");
    alert("Pedido confirmado!");
    window.location.href = "account.html";
  }
}

function mostrarMeusPedidos() {
  const pedidos = listarPedidos();
  const container = document.getElementById("meus-pedidos");
  pedidos.forEach(p => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${p.nome} - ${p.data}</h3>
    <p>Total: R$ ${p.total.toFixed(2)}</p>
    <ul>${p.itens.map(i => `<li>${i.nome}</li>`).join("")}</ul><hr>`;
    container.appendChild(div);
  });
}

function listarPedidosAdmin() {
  const pedidos = listarPedidos();
  const container = document.getElementById("admin-pedidos");
  pedidos.forEach(p => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${p.nome} (${p.email})</h3>
    <p>Endereço: ${p.endereco}</p>
    <p>Total: R$ ${p.total.toFixed(2)} | Data: ${p.data}</p>
    <ul>${p.itens.map(i => `<li>${i.nome} - R$ ${i.preco.toFixed(2)}</li>`).join("")}</ul><hr>`;
    container.appendChild(div);
  });
}
