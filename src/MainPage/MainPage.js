import './mainPage.css';


export default function MainPage({ imageUrl, name, details, prix }) {
  return (
    <>


   
      <article id="all-card">
        <header>
        <img className='image-card' src={imageUrl} alt={name} />
        </header>
        <p>{details}</p>
        <p>{prix}</p>
      </article>



    </>


  )
}
