import './mainPage.css';


export default function MainPage({ imageUrl, name, details, prix }) {
  return (


    <div className="item-map-products">

      <div className="div-thumbnail-map-products">
        <img
          className='thumbnail-map-products'
          src={imageUrl}//On store le path de l'image dans la database,, donc c'est ce qu'il faut chercher
          alt={name}
        />
      </div>


      <div className="div-text-map-products">
      <p className='map-products-type'>{name}</p>
        <p className='map-products-type'>{details}</p>
        <p className='map-products-price'>{prix}</p>
      </div>

      <div>
        <button className='button-add'>Add to List</button>
      </div>

    </div>


  )
}
