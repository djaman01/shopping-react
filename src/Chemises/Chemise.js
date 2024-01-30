import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PropsModel from "../PropsModel/PropsModel";

export default function Chemise() {

  const [productObject, setProductObject] = useState([]); //State variable ou on va store tous les objets représentants les produits
  const [error, setError] = useState('');

  useEffect(()=>{
    axios.get(`http://localhost:3005/chemise`)
    .then((response)=>setProductObject(response.data))
    .catch((error) => {
      console.error("Front-end error:", error.message);
      setError('An Eroor occured while fetching data');
    })
    .catch((error) => { console.error( error.response &&
        `${error.response.status}: ${error.response.data.message}`
      );
    });
  }, [])

  return (
    <>
    <Header />

    <PropsModel
    productsArr={productObject}
    error={error}
    />

    <Footer />
    
    </>

  )
}
