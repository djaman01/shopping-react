import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"

const myContext = createContext() //Utiliser variable dans <myContext.Provider value ={{}} />

//On créer un context provider qui contient toutes les states qu'on veut passer aux autres components
export default function ContextComp({ children }) {

  const [homeProducts, setHomeProducts] = useState([]);
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    axios.get(`http://localhost:3005/homeProducts?limit=20`)
      .then((response) => setHomeProducts(response.data))
      .catch(() => setErrorMsg('An error occured while fetching data'))
  }, [])

  const [cartItems, setCartItems] = useState([]);

  return (
    //Enables components to subscribe to Context changes / value props enables to share a JS object with other components
    <myContext.Provider value={{ cartItems, setCartItems, homeProducts, errorMsg }}>

      {children} {/* = any component wrapped by myContext.Provider, will have access to the shared states */}

    </myContext.Provider>
  )
}

export const useMyContext = () => {
  return useContext(myContext);
}





