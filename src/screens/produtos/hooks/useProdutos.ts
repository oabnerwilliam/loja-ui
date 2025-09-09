import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { get, post } from "../../../utils/api"
import { useForm, type SubmitHandler } from "react-hook-form"

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

export const useProdutos = () => {
  const queryClient = useQueryClient()
  const getProdutos = async () => {
    try {
      return await get("http://localhost:8080/produtos")
    } catch (error) {
      console.error((error as Error).message)
    }
  }

  const postProduto = async (produto: Omit<Produto, "id">) => {
    try {
      return await post("http://localhost:8080/produtos", produto)
    } catch (error) {
      console.error((error as Error).message)
    }
  }

  const { data: produtos, isLoading } = useQuery({
    queryKey: ["produtos"],
    queryFn: getProdutos,
  })

  const { mutate } = useMutation({
    mutationKey: ["salvarProduto"],
    mutationFn: async (produto: Omit<Produto, "id">) => {
      postProduto(produto)
    },
    onSuccess: async () =>
      await queryClient.invalidateQueries({ queryKey: ["produtos"] }),
  })

  const form = useForm<ProdutoValues>()

  const submitForm: SubmitHandler<ProdutoValues> = (produto) => {
    mutate(produto)
    form.reset()
  }

  return { produtos, isLoading, form, submitForm }
}
