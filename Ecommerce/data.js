// Simulação de produtos
const produtos = [
  { id: 1, nome: "Camiseta manga curta flor", preco: 99.90, imagem: "https://static.bershka.net/assets/public/8566/6830/3dd14132b266/b193761d10c7/07567071251-p/07567071251-p.jpg?ts=1746521606435&w=750" },
  { id: 2, nome: "Camisa manga curta print", preco: 99.90, imagem: "https://static.bershka.net/assets/public/5d58/5b41/b85d4e2cbad7/4e7c1ca15103/02417093251-p/02417093251-p.jpg?ts=1744726252027&w=750" },
  { id: 3, nome: "Camiseta manga curta tailândia", preco: 99.90, imagem: "https://static.bershka.net/assets/public/9635/996a/6f62450586be/be9a19cc97de/02358152251-p/02358152251-p.jpg?ts=1737476685619&w=750" }
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
