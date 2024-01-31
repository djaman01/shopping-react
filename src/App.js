import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import NoPage from "./NoPage";
import '@picocss/pico';
import AddAllProduct from "./AddAllProduct/AddAllProduct";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import Dashboard from "./Dashboard/Dashboard";
import FicheProduit from "./FicheProduit/FicheProduit";
import Chemise from "./Chemises/Chemise";
import Sport from "./Sport/Sport";
import Pantalon from "./Pantalon/Pantalon";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} /> 
        <Route path="addAllProduct" element={<AddAllProduct/>} /> 
        <Route path="shopCart" element={<ShoppingCart/>} /> 
        <Route path="addProduct" element={<AddAllProduct />} />
        <Route path="dashboard" element={<Dashboard/>} /> 
        <Route path="chemise" element={<Chemise/>} />  
        <Route path="sport" element={<Sport/>} /> 
        <Route path="pantalon" element={<Pantalon/>} /> 
        <Route path="ficheProduit/:productId" element={<FicheProduit/>} /> {/* /:productid = paramètre dynamique */}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )

}


export default App;
