import { useQuery } from "@tanstack/react-query";

export const Produtos = () => {
  const getProdutos = async () => {
    try {
      const resp = await fetch("http://localhost:8080/produtos");

      if (!resp.ok) throw new Error("Erro ao buscar produtos.");

      const data = resp.json();
      return data;
    } catch (error) {
      return [];
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ["produtos"],
    queryFn: getProdutos,
  });
  console.log(data);

  if (isLoading) return <h1>Carregando</h1>;

  return (
    <>
      <h1>Teste</h1>
    </>
  );
};
