import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "./Root/Layout.jsx";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./Context/AuthProvider.jsx";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Layout></Layout>
        <ToastContainer />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
