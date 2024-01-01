import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import NoPage from "./NoPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} /> 
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )

}


export default App;
