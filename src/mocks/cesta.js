import logo from '../assets/logo.png';

const cesta = {
  topo: {
    titulo: "Detalhe da cesta",
  },
  detalhes: {
    nome: "Cesta de Verduras",
    logoFazenda: logo,
    nomeFazenda: "Jenny Jack Farm",
    descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
    preco: "R$ 40,00",
    botao: "Comprar",
  },
  itens: {
    titulo: "Itens da cesta",
    lista: [
      {
        nome: "Tomate",
      },
      {
        nome: "Brócolis",
      },
      {
        nome: "Batata",
      },
      {
        nome: "Pepino",
      },
      {
        nome: "Abóbora",
      }
    ]
  }
}

export default cesta;