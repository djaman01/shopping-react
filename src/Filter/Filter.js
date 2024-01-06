import { useEffect, useState } from "react";
import { products } from "../products";
import MainPage from "../MainPage/MainPage";
import './filter.css';

export default function Filter() {
  const [name, setName] = useState(''); //Pour store value input et créer un search
  const [cartItems, setCartItems] = useState([]); // Pour store les produits sélectionnés

  //Store valeur input dans la state "name"
  const updateName = (event) => setName(event.target.value);

  //Valeur du props onAddToCart / Pour donner toutes les valeurs des cartes à la state cartItems, puis mapper dessus
  const handleAddToCart = (newItem) => { //newItem = paramètre dont valeur les valeurs sont {...element, quantity:1} donné lors de lappel de fonction quand on clique

    const isItemInCart = cartItems.find((item) => item.name === newItem.name);//Store true or false si item ajouté a le même nom que celui dans le shopping Cart

    if (!isItemInCart) { //si isItemInCart = false alors ajoute l'item selectionné dans la state variable 'cartItems' + ajoute la property quantity: 1
      setCartItems((prevItems) => [...prevItems, { ...newItem }]);
    }
  };

  //Pour update la property quantity quand on augmente le nombre de l'input et ainsi pouvoir plutard calculé le total
  const updateQuantity = (index, newQuantity) => {//valeur des paramètres index et newQuantity sont donnés lors de l'appel de function
    setCartItems((prevItems) => //Si +1 ou -1 quantity input alors: vérifie si l'element mis à jour à le même index et si oui update sa property quantity / sinon ne fait rien
      prevItems.map((item, i) =>
        i === index ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  //Pour calculer le subtotal de chaque item (on donne la valeur du paramètre item lors de l'appel de function pour reconnaitre l'item selectionné)
  const calculateTotalPerItem = (item) => {
    return item.quantity * item.prix;
  };

  //Pour calculer le total général: ça fonctionne même si cartItems est un objet avec différentes properties car:
  //Ici on fait le reduce pour additionner un total dont on donne une valeur initial = 0 + le total de chaque ligne codé précedemment
  const calculateTotalGeneral = () => {
    return cartItems.reduce((accumulator, item) => accumulator + calculateTotalPerItem(item), 0);
  };

  //Pour Remove l'article du shoppingCart
  const handleRemove = (index) => {
    const removeArray = cartItems.filter((_, i) => i !== index);
    setCartItems(removeArray);
  }

  useEffect(() => {
    document.title = `Shopping cart`;
  }, []);

  return (
    <>
      <div className="div-input-home">
        <input
          id="search-input"
          type="search"
          placeholder="type name of product"
          value={name}
          onChange={updateName}
        />
      </div>
      {/* Au lieu de créer une variable qui store le filter de products avant le return; on fait tout d'un coup ici */}
      <div className="grid-filter">
        {/*  .filter is done to display only those products whose names contain the term searched in input */}
        {products
          .filter((element) =>
            element.name.toLowerCase().includes(name.toLowerCase())
          )
          .map((element, index) => (
            <MainPage
              {...element} //Donne les valeurs aux props de MainPage qui sont: toutes les properties' value de la products array sur laquelle on map 
              key={index} //Onligé pour reconnaitre chaque element sur lequel on map
              onAddToCart={() => handleAddToCart({ ...element, quantity: 1 })} //A chaque clique on passe toutes les valeurs des properties du produits en argument
            />
          ))}
      </div>
      
      {/* Shopping Cart */}
      <div className="all-shop-cart">
        <h2 className="shop-cart-title">Shopping Cart</h2>
        {/* On map sur les produits sur lesquels on a cliqué et ajouté dans la state variable "cartItems" */}
        {/* On remplace chaque element de la cart items par tout <div></div> pour créer le shopping cart  */}
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="image-shop-cart"
                  />
                  <p>{item.name}</p>
                </td>
                <td>{item.prix}</td>
                <td>
                  <input
                    type="number"
                    id="quantity-product"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(index, e.target.value)} //e.target.value= cible quantity input et donne en valeur paramètre
                  />
                </td>
                <td className="sub-total">{calculateTotalPerItem(item)}</td>
                <td>
                  <p role="button" id="remove-btn" onClick={() => handleRemove(index)}>
                    Remove
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* On appelle la function calculateTotalGeneral pour avoir le total géneral */}
        <div className="total-general">
          <h4>Total General: <span style={{color:'#00A170'}}>{calculateTotalGeneral()}</span></h4> 
        </div>
      </div>
    </>
  );
}
