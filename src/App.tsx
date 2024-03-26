import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RouteList from "../src/routes/index";
import "./App.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouteList />
      </QueryClientProvider>
    </>
  );
}

export default App;
