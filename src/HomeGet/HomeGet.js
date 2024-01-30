import { useEffect, useState } from "react"
import PropsModel from "../PropsModel/PropsModel"
import axios from "axios";
import "./homeGet.css"

import { useMyContext } from "../ContextComp";

export default function HomeGet() {

  //Pour Mapper sur les produits dans database (voir PropsModel) + search input
  const [homeProducts, setHomeProducts] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3005/homeProducts?limit=20`)
      .then((response) => setHomeProducts(response.data))
      .catch(() => setErrorMsg('An Error occured while fetching data'))
  }, [])


  //cartItems et setCartItems sont set in the <Main /> Component, pour pouvoir utiliser cartItems dans plusieurs component
const {cartItems, setCartItems} = useMyContext();

  //But: Clique sur addToCart => Store elements of the card clicked in "cartItems" state => To map on it for ShoppingCart
  const handleAddToCart = (newItem) => { //Valeur paramètre est donné lors de l'appel de la function handleAddToCart quand on clique

    const isItemInCart = cartItems.find((e) => e._id === newItem._id) //Cherche si item est déjà dans l'array cartItems

    if (isItemInCart === undefined) {//Possible de faire (!isIteminCart) = si name item clicked pas dans l'array cartItems, alors ajoute le dans une copie
      setCartItems((e) => [...e, newItem]) //States in react are immutable => On ajoute l'item à la fin d'une une copie {...e} de l'array de cartItems
    }
  }

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);


  useEffect(() => {
    document.title = `Shopping cart`;
  }, []);



  return (
    <div>

      <h1 className="home-title">Last products added</h1>
   
      <PropsModel
        productsArr={homeProducts}
        error={errorMsg}
        addToCart={handleAddToCart}
      />
    

    </div>
  )
}
