import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// const router = createBrowserRouter([
//   { path: "/", element: <Root /> },
//   { path: "about", element: <About /> },
//   { path: "FAQ", element: <FAQ /> },
//   { path: "counter", element: <Counter /> },
// ]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </BrowserRouter>
);
