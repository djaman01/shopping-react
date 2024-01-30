import axios from "axios";
import { useEffect, useState } from "react"
import Header from "../Header/Header";
import { useParams } from "react-router-dom";

export default function FicheProduit() {

  const [product, setProduct] = useState(null);
  const [errorMsg, setErrorMsg] = useState('')

  const { productId } = useParams() // pour extraire la valeur du paramètre productId de l'URL, définit dans app.js et dont on a donné une valeur dans PropsModel.js

  useEffect(() => {
    axios.get(`http://localhost:3005/article/${productId}`) //Utilisation valeur paramètre pour effecture une requête API et récupérer les données du produit correspondant à cet ID

      .then((response) => setProduct(response.data))

      .catch((error) => {

        //Front-end error
        console.error("Front-end error:", error.message);
        setErrorMsg('Error while Fetching Data')

        //Back-end Error
        console.error(error.response &&
          `${error.response.status}: ${error.response.data.message}`
        );
      });

  }, [])




  return (
    <>

      <Header />
      {errorMsg ? <p>{errorMsg}</p> : product ? (
        <div>

          <div>
            <img src={`http://localhost:3005/${product.imageUrl}`} alt={product.type} />
          </div>

          <div>
            <h1>{product.type}</h1>
            <h2>{product.auteur}</h2>
            <h2>{product.infoProduit}</h2>
            <h3>{product.prix} Dhs</h3>
            <h3>{product.quantity}</h3>
          </div>

        </div>
      ) : null}
    </>
  )
}
