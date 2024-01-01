import { useEffect, useState } from "react"
import { products } from "../products"
import MainPage from "../MainPage/MainPage"
import './filter.css'


export default function Filter() {
  
  //Pour créer la rechercher du produit
  const[name, setName]= useState('');

  const updateName = (event) => setName(event.target.value);

  const filteredArray = products.filter((element,index)=>element.name.toLowerCase().includes(name.toLowerCase())) ;

  useEffect(()=>{document.title= `Players page`},[])


  return (
    <>
    <div className="div-input-home">
    <input style={{width:"400px"}} className="search-input" type="search" placeholder="type name of product" value={name} onChange={updateName}/>
    </div>
    <div className="grid-filter">
      {filteredArray.map((e, i)=><MainPage {...e} key='i'/>)}
    </div>
    </>
  )
}
