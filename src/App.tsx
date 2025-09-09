import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Produtos } from "./screens/produtos/Produtos"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Produtos />
    </QueryClientProvider>
  )
}

export default App
