import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import './App.css';
import AddCategory from "./Pages/AddCategory";
import Categories from "./Pages/Categories";
import AddClients from "./Pages/AddClients";
import Clients from "./Pages/Clients";
import AddProducts from "./Pages/AddProducts";
import Products from "./Pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes>
        
        {/* Categories -----------> */}
        <Route path="/add-category" element={<AddCategory />} />
        <Route path="/categories" element={<Categories />} />

        {/* Clients -----------> */}
        <Route path="/add-clients" element={<AddClients />} />
        <Route path="/clients" element={<Clients />} />

        {/* Products ------------> */}
        <Route path="/add-products" element={<AddProducts />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  )


}
export default App;
