import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Produtos } from "./components/Produtos";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Produtos />
    </QueryClientProvider>
  );
}

export default App;
