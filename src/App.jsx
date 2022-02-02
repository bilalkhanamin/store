import { useState } from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Error from "./pages/Error";
import SignIn from "./components/SignIn";
import CreateStore from "./components/createStore";
import Dashboard from "./dashboard/Dashboard";
import DashboardNavbar from "./dashboard/DashboardNavbar";
import AddProduct from "./dashboard/AddProduct";
import Store from "./pages/Store";
import Products from "./components/Products";
import Stats from "./dashboard/Stats";
import { useLocation } from "react-router-dom";

function App() {
  if (useLocation().pathname.includes("/dashboard")) {
    return (
      <>
        <DashboardNavbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/add" element={<AddProduct />} />
          <Route path="/dashboard/products" element={<Products />} />
          <Route path="/dashboard/stats" element={<Stats />} />
        </Routes>
      </>
    );
  } else if (useLocation().pathname.includes("/store")) {
    return (
      <Routes>
        <Route path="/store" element={<Store />} />
      </Routes>
    );
  } else {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/store" element={<Store />} />
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="/createstore" element={<CreateStore />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </>
    );
  }
}

export default App;
