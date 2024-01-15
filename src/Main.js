import { useEffect, useState } from "react"
import Header from "./Header/Header"
import HomeGet from "./HomeGet/HomeGet"
import axios from "axios"


export default function Main() {

  //I'll define the cartItems state here, so that i can use it as props in different components
  //the setCartItems will be defined in the HomeGet component, to have the products

  const [homeProducts, setHomeProducts] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3005/homeProducts?limit=20`)
      .then((response) => setHomeProducts(response.data))
      .catch(() => setErrorMsg('An Error occured while fetching data'))
  }, [])

  return (
    <div>
  
      <Header cartItems={cartItems}/> {/* Pass cartItems state, as a value of the cartItems prop in Header */}
      <HomeGet cartItems={cartItems} setCartItems={setCartItems} /> {/* Pass setCartItems updateMethode, as a value of the setCartItems prop to HomeGet */}

    </div>
  )
}
