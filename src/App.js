import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import NoPage from "./NoPage";
import '@picocss/pico';
import AddProduct from "./AddProduct/AddProduct";
import AddAllProduct from "./AddAllProduct/AddAllProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} /> 
        <Route path="addAllProduct" element={<AddAllProduct/>} /> 
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )

}


export default App;
