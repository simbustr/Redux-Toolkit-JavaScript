import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import DashboardPage from "./pages/Dashboard";
import UsersPage from "./pages/Users";


function App() {
  return (
    <>
      
      <BrowserRouter>
      <Layout />
        <Routes>
         
          <Route path="/dasboard" element={<DashboardPage />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </BrowserRouter>
   
    </>
  );
}

export default App;
