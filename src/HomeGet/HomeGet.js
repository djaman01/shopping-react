import { useEffect, useState } from "react"
import PropsModel from "../PropsModel/PropsModel"
import axios from "axios";
import './homeGet.css'

export default function HomeGet() {

  const [homeProducts, setHomeProducts] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect (()=>{
    axios.get(`http://localhost:3005/homeProducts?limit=20`)
    .then((response)=>setHomeProducts(response.data))
    .catch(()=>setErrorMsg('An Error occured while fetching data'))
  }, [])

  const [cartItems, setCartItems] = useState ([]);

  const handleAddToCart = (newItem) => {
   
    const isItemInCart = cartItems.find((e) => newItem.infoProduit === e.infoProduit);
  
    if (!isItemInCart) {
      setCartItems((cartItems) => [...cartItems, newItem]);
    //comme c'est asynchrone il faut mettre console.log dans un useEffect pour que ça se passe après mise à jour (metter cartItems en dependency)
    }
  };
  
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);



  return (
    <div>
      <PropsModel
       productsArr={homeProducts}
       error={errorMsg}
       addToCart={handleAddToCart}
      />

    </div>
  )
}
