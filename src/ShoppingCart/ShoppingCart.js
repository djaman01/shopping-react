import { useMyContext } from "../ContextComp"
import Header from "../Header/Header";

export default function ShoppingCart() {

  const { cartItems, setCartItems } = useMyContext();


  //Pour update la property quantity quand on augmente le nombre de l'input et ainsi pouvoir plutard calculé le total
  const updateQuantity = (index, newQuantity) => {//valeur des paramètres index et newQuantity sont donnés lors de l'appel de function
    setCartItems((cartItems) => //paramète update method est la state variable elle-même et donc ces valerus; on peut donc mapper dessus
      cartItems.map((item, i) => //Si +1 ou -1 quantity input alors: vérifie si l'element mis à jour à le même index et si oui update sa property quantity / sinon ne fait rien
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
    const removeArray = cartItems.filter((_, i) => i !== index); //Ne garde que les pdouits différents de clui sur lequel on a cliqué
    setCartItems(removeArray);
  }


  return (
    <>
      <Header />

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
                    src={`http://localhost:3005/${item.imageUrl}`} //Pour chercher l'image stockée dans le serveur
                    alt={item.name}
                    className="image-shop-cart"
                  />
                  <p>{item.name}</p>
                </td>
                <td>{item.prix} Dhs</td>
                <td>
                  <input
                    type="number"
                    id="quantity-product"
                    min="1"
                    value={item.quantity} //Pour voir 1 dès le départ
                    onChange={(e) => updateQuantity(index, e.target.value)} //e.target.value= cible quantity input et donne en valeur paramètre
                  />
                </td>
                <td className="sub-total">{calculateTotalPerItem(item)} Dhs</td>
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
          <h4>Total General: <span style={{ color: '#00A170' }}>{calculateTotalGeneral()} Dhs</span></h4>
        </div>
      </div>

    </>
  )
}
