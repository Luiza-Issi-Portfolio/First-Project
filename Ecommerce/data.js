// Simulação de produtos
const produtos = [
  { id: 1, nome: "Camiseta Básica", preco: 59.90, imagem: "https://via.placeholder.com/150" },
  { id: 2, nome: "Tênis Esportivo", preco: 299.90, imagem: "https://via.placeholder.com/150" },
  { id: 3, nome: "Jaqueta Jeans", preco: 179.90, imagem: "https://via.placeholder.com/150" }
];

// Simulação de pedidos (salva no localStorage)
function salvarPedido(pedido) {
  let pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
  pedidos.push(pedido);
  localStorage.setItem('pedidos', JSON.stringify(pedidos));
}

function listarPedidos() {
  return JSON.parse(localStorage.getItem('pedidos')) || [];
}
