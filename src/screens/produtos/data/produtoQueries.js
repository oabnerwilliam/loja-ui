import gql from "graphql-tag"

export const getProdutosQuery = gql`
  query {
    listarProdutos {
      id
      nome
      categoria
      preco
    }
  }
`

export const getProdutoQuery = gql`
  query getProdutoQuery($id: ID!) {
    produtoPorId(id: $id) {
      id
      nome
      categoria
      preco
    }
  }
`
