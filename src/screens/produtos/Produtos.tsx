import { FormProvider } from "react-hook-form"
import { useProdutos, type Produto } from "./hooks/useProdutos"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"

export const Produtos = () => {
  const { produtos, loading, form, submitForm } = useProdutos()
  const { handleSubmit, register } = form

  if (loading) return <h1>Carregando...</h1>

  if (!produtos) return <h1>Não há dados.</h1>

  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center gap-8">
      <FormProvider {...form}>
        <form
          onSubmit={handleSubmit(submitForm)}
          className="flex flex-col w-[30rem] gap-2"
        >
          <Input
            type="text"
            {...register("nome")}
            placeholder="Nome"
            className="outline-none"
          />
          <Input
            type="number"
            {...register("preco")}
            placeholder="Preço"
            className="outline-none"
          />
          <Input
            type="text"
            {...register("categoria")}
            placeholder="Categoria"
            className="outline-none"
          />
          <Button className="cursor-pointer">Enviar</Button>
        </form>
      </FormProvider>
      <div className="grid grid-cols-3 gap-8">
        {produtos.map((produto: Produto) => (
          <div key={produto.id}>
            <h1 className="text-red-600">{produto.nome}</h1>
            <h3>{produto.categoria}</h3>
            <p>R${produto.preco.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
