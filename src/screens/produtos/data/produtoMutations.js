import gql from "graphql-tag"

export const salvarProdutoMutation = gql`
  mutation salvarProduto($produtoInput: ProdutoInput) {
    salvarProduto(produtoInput: $produtoInput) {
      id
      nome
      categoria
      preco
    }
  }
`
