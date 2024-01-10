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
                <div className="all-card" key={element._id}>
                  <div>
                    <img src={`http://localhost:3005/${element.imageUrl}`} alt={element.auteur} />
                  </div>

                  <div>
                    <p>{element.auteur}</p>
                    <p>{element.infoProduit}</p>
                    <p>{element.prix}</p>
                  </div>

                </div>
              )}
          </div>

        }

      </div>
    </>
  )

}
