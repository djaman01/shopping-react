import { useEffect, useState } from "react";
import { products } from "../products";
import MainPage from "../MainPage/MainPage";
import './filter.css';

export default function Filter() {
  
  // Pour le search input
  const [name, setName] = useState('');

  const updateName = (event) => setName(event.target.value);

  //On a filtrer l'array: ce sera la nouvelle array sur laquelle on va mapper
  const filteredArray = products.filter((element) =>
    element.name.toLowerCase().includes(name.toLowerCase())
  );
  //Fin search input

  //Pour stocker certaines données des produits sur lesquels on va cliquer
  const [cartItems, setCartItems] = useState([]);

  //Donne valeur à cartItems ET limite l'ajout dans le cart que 1 fois pour chaque item dans l'array cartItems
  const handleAddToCart = (newItem) => {
    // Check if the item is already in the cart based on its name
    const isItemInCart = cartItems.find((item) => item.name === newItem.name);

    // If the item is not in the cart, add it
    if (!isItemInCart) {
      setCartItems((prevItems) => [...prevItems, newItem]);
    }
  };

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

      <div className="grid-filter">
        {filteredArray.map((element, index) => {
          // Destructure pour cibler les propriétés qu'on veut addToCart quand on clique sur addToList
          const { imageUrl, name, prix } = element;
          return (
            // Là, on donne en props de MainPage toutes les propriétés des objets de l'array products,
            // puis la valeur de onAddToCart quand on clique sur add to list
            <MainPage
              {...element}
              key={index}
              onAddToCart={() => handleAddToCart({ imageUrl, name, prix })}
            />
          );
        })}
      </div>
      <div>
  {/* On map sur carItems state variable pour créer shopping cart */}
        <h2>Shopping Cart</h2>
        <ul>
        {cartItems.map((item, index) => (
            <div className="shopCart" key={index}>
              <img
                src={item.imageUrl}
                alt={item.name}
                className="image-shop-cart"
              />
              <div className="name-prix">
                <p>
                  {item.name}
                </p>

                <p>
                  {item.prix}
                </p>

                <input type="number" id="quantity-product" min="1" />
              </div>

            </div>
          ))}

        </ul>
      </div>
    </>
  );
}
