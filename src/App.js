import Home from "./components/Home/Home";
import { ChakraProvider } from "@chakra-ui/react";
import {BrowserRouter} from "react-router-dom"
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
      <Home />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
