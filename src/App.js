import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import NoPage from "./NoPage";
import '@picocss/pico';
import AddAllProduct from "./AddAllProduct/AddAllProduct";
import MainContext from "./MainContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContext />} /> 
        <Route path="addAllProduct" element={<AddAllProduct/>} /> 
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )

}


export default App;
