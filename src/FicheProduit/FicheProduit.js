import axios from "axios";
import { useEffect, useState } from "react"
import Header from "../Header/Header";
import { Link, useParams } from "react-router-dom";

export default function FicheProduit() {

  const [product, setProduct] = useState(null);
  const [errorMsg, setErrorMsg] = useState('')

  const { productId } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:3005/article/${productId}`)

      .then((response) => setProduct(response.data))

      .catch((error) => {
        console.error("Front-end error:", error.message);
        setErrorMsg('Error while Fetching Data')
       console.error(error.response &&
          `${error.response.status}: ${error.response.data.message}`
        );
      });

  }, [])




  return (
    <>
    
      <Header />
{errorMsg ? <p>{errorMsg}</p>: product ? (
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
    ) : null }
    </>
  )
}
