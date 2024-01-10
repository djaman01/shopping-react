import { useEffect, useState } from "react"
import PropsModel from "../PropsModel/PropsModel"
import axios from "axios";
import './homeGet.css'

export default function HomeGet() {

  const [homeProducts, setHomeProducts] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect (()=>{
    axios.get(`http://localhost:3005/homeProducts?limit=20`)
    .then((response)=>setHomeProducts(response.data))
    .catch(()=>setErrorMsg('An Error occured while fetching data'))
  }, [])


  return (
    <div>
      <PropsModel
       productsArr={homeProducts}
       error={errorMsg}
      />

    </div>
  )
}
