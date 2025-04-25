import { Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./components/MainLayout";
import Login from "./components/auth/Login";
import Layout from "./components/auth/Layout";
import Signup from "./components/auth/Signup";
import Profile from "./pages/Profile";

function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
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
