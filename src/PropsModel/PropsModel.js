import React, { useState } from 'react'
import './propsModel.css'
import { Link } from 'react-router-dom'

export default function PropsModel({ productsArr, error, addToCart }) { //productsArr= props array sur laquel on va mapper poru chaque component

  const [valueInput, setValueInput] = useState("")
  const handleInput = (e) => {
    setValueInput(e.target.value)
  }

  //Pour que le search inpu soit lié au produit qui apparaissent sur le site
  const filteredArr = productsArr.filter((e) => e.auteur.toLowerCase().includes(valueInput.toLowerCase()))

  return (
    <>
      <div className="div-input-home">
        <input type="search" placeholder="Type a Brand" id="search-input" value={valueInput} onChange={handleInput} />
      </div>

      <div className='all-products'>
        {error ? <p> Error: {error} </p> :

          <div className="grid-map-products">
            {filteredArr.map((element) =>

              <div className="item-map-products" key={element._id}>

                <Link style={{textDecoration: "none"}} key={element._id} to={`/ficheProduit/${element._id}`}>

                  <div className="div-thumbnail-map-products">
                    <img
                      className='thumbnail-map-products'
                      src={`http://localhost:3005/${element.imageUrl}`}
                      alt={element.auteur}
                    />
                  </div>


                  <div className="div-text-products">
                    <p className='product-auteur'>{element.auteur}</p>
                    <p className='product-infoProduit'>{element.infoProduit}</p>
                    <p className='product-prix'>{element.prix} Dhs</p>
                  </div>

                </Link>

                <div>
                  <button className='button-add' onClick={() => addToCart(element)}>Add to List</button>
                </div>

              </div>


            )}
          </div>

        }

      </div>
    </>
  )

}
