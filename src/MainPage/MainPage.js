import './mainPage.css';


export default function MainPage({imageUrl, name, details, prix}) {
  return (
    <>
    
    
        <div className='product-card'>
          <img src={imageUrl} alt={name} style={{width: 300, height: 300}}  />

          <h3>{details}</h3>
          <h3>{prix}</h3>
        </div>


  

    </>


  )
}
