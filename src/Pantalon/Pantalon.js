import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PropsModel from "../PropsModel/PropsModel";

import { useMyContext } from "../ContextComp";

export default function Pantalon() {

  const [productObject, setProductObject] = useState([]); //State variable ou on va store tous les objets représentants les produits
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3005/pantalon`)
      .then((response) => setProductObject(response.data))
      .catch((error) => {
        console.error("Front-end error:", error.message);
        setError('An Eroor occured while fetching data');
      })
      .catch((error) => {
        console.error(error.response &&
          `${error.response.status}: ${error.response.data.message}`
        );
      });
  }, [])

  //cartItems et setCartItems sont set in the <Main /> Component, pour pouvoir utiliser cartItems dans plusieurs component
  const { cartItems, setCartItems } = useMyContext();

  //But: Clique sur addToCart => Store elements of the card clicked in "cartItems" state => To map on it for ShoppingCart
  const handleAddToCart = (newItem) => { //Valeur paramètre est donné lors de l'appel de la function handleAddToCart quand on clique

    const isItemInCart = cartItems.find((e) => e._id === newItem._id) //Cherche si item est déjà dans l'array cartItems

    if (isItemInCart === undefined) {//Possible de faire (!isIteminCart) = si name item clicked pas dans l'array cartItems, alors ajoute le dans une copie
      setCartItems((e) => [...e, newItem]) //States in react are immutable => On ajoute l'item à la fin d'une une copie {...e} de l'array de cartItems
    }
  }

  return (
    <>
      <Header />

      <PropsModel
        productsArr={productObject}
        error={error}
        addToCart={handleAddToCart}
      />

      <Footer />

    </>
  )
}
