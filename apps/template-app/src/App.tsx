import { Route, Routes } from "react-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/auth/Layout";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import MainLayout from "./components/MainLayout";

function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="*" element={<Dashboard />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
