import React, { useState } from 'react'
import './propsModel.css'

export default function PropsModel({ productsArr, error, addToCart }) { //productsArr= props array sur laquel on va mapper poru chaque component

  const [valueInput, setValueInput] = useState("")
  const handleInput = (e) => {
    setValueInput(e.target.value)
  }
  const filteredArr = productsArr.filter((e) => e.auteur.toLowerCase().includes(valueInput.toLowerCase()))

  return (
    <>
      <div className="div-input-home">
        <input type="search" placeholder="Name of product" id="search-input" value={valueInput} onChange={handleInput} />
      </div>

      <div className='all-products'>
        {error ? <p> Error: {error} </p> :

          <div className="grid-map-products">
            {filteredArr.map((element) =>

              <div className="item-map-products" key={element._id}>

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
                  <p className='product-prix'>{element.prix}</p>
                </div>

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
