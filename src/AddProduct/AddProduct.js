import axios from "axios";
import { useState } from "react";


import Header from '../Header/Header'


export default function AddProduct() {

  const [formData, setFormData] = useState({
    type: "",
    details: "",
    prix: "",
    code: "",
  });

  //onChange={handleChange} Va être écrit dans tous les inputs du form pour mettre à jour les values des properties du state
  const handleChange = (e) => {
    const { name, value } = e.target; //e.target => extrait name et value (ici defaultValue) ecrits par l'user
    setFormData({ ...formData, [name]: value, }); //On rajoute key:value qu'on écrit dans la state formData
  };

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post('http://localhost:3005/upload', formData);//on envoie toutes les properties en 1 fois avec la state formData qui est un objet avec toutes les properties et values entrés par l'user
      console.log('Response from the server:', response.data); //dans la console; on voit la reponse du serveur pour voir si tout a bien été recu
      alert('Formulaire Envoyé ! Nous vous répondrons dès que possible')
    }
    catch (error) {

      console.error('Error:', error);
    }
  };


  return (
    <>
      <Header />

      <div>

        <div className='div-add-product'>
          <input
            required
            className="input-product"
            placeholder="Type produit"
            type="text"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange} />
        </div>
        <div className='div-add-product'>
          <input
            required
            className="input-product"
            placeholder="details produit"
            type="text"
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange} />
        </div>
        <div className='div-add-product'>
          <input
            required
            className="input-product"
            placeholder="Type produit"
            type="text"
            id="prix"
            name="prix"
            value={formData.prix}
            onChange={handleChange} />
        </div>
        <div className='div-add-product'>
          <input
            required
            className="input-product"
            placeholder="Type produit"
            type="text"
            id="code"
            name="code"
            value={formData.code}
            onChange={handleChange} />
        </div>
        <button onClick={handleSubmit}>Submit Product</button>

      </div>




    </>
  )
}
