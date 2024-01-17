import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import NoPage from "./NoPage";
import '@picocss/pico';
import AddAllProduct from "./AddAllProduct/AddAllProduct";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} /> 
        <Route path="addAllProduct" element={<AddAllProduct/>} /> 
        <Route path="shopCart" element={<ShoppingCart/>} /> 
        <Route path="dashboard" element={<Dashboard/>} /> 
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )

}


export default App;
