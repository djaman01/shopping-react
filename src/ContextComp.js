
import { createContext, useContext, useState } from "react"

const myContext = createContext() //Utiliser variable dans <myContext.Provider value ={{}} />

//Donne valeur à variable myContext, pour contenir les shared states
export default function ContextComp({ children }) {

  const [cartItems, setCartItems] = useState([]);  //A utiliser dans Header et HomeGet

  return (
    //par le props value, on donne à myContext les states à partager
    <myContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </myContext.Provider>
  )
}

//Exportation de myContext pour pouvoir, l'importer dans les components ou on veut utiliser les states
export const useMyContext = () => {
  return useContext(myContext);
}





