import React from 'react'
import './propsModel.css'

export default function PropsModel({productsArr, error}) {

//On ne met que 2 props, car après on va mapper sur l'array en props et on va utiliser ces élements à elle
  return (
    <>
      <div className='all-products'>
        {error ? <p> Error: {error} </p> :

          <div className="grid-map-products">
              {productsArr.map((element) =>
                <article id="product-card" key={element._id}>

                  <header id="header-card">
                    <img id="img-card" src={`http://localhost:3005/${element.imageUrl}`} alt={element.auteur} />
                  </header>

                  <div className='product-text'>
                    <p className='product-auteur'>{element.auteur}</p>
                    <p className='product-info'>{element.infoProduit}</p>
                    <p className='product-price'>{element.prix}</p>
                  </div>

                  <div className='cart-btn-div'>
                    <button id='cart-button'>Add to Cart</button>
                  </div>

                </article>
              )}
          </div>

        }

      </div>
    </>
  )

}
