import { useForm, type SubmitHandler } from "react-hook-form"
import { useMutation, useQuery } from "@apollo/client/react"
import { getProdutosQuery } from "../data/produtoQueries"
import { salvarProdutoMutation } from "../data/produtoMutations"
export interface Produto {
  id: number
  nome: string
  categoria: string
  preco: number
}
export interface ProdutoValues {
  nome: string
  categoria: string
  preco: number
}

interface ProdutoQuery {
  listarProdutos: Produto[]
}

export const useProdutos = () => {
  const { data: { listarProdutos = [] } = {}, loading } =
    useQuery<ProdutoQuery>(getProdutosQuery)

  const [salvarProduto] = useMutation(salvarProdutoMutation, {
    refetchQueries: [{ query: getProdutosQuery }],
  })

  const form = useForm<ProdutoValues>()

  const submitForm: SubmitHandler<ProdutoValues> = async (produto) => {
    const produtoInput = {
      ...produto,
      preco: Number(produto.preco),
    }
    salvarProduto({ variables: { produtoInput } })
    form.reset()
  }

  return { produtos: listarProdutos, loading, form, submitForm }
}
