import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component"

import { StyleSheetManager } from 'styled-components'; //Pour eviter les erreurs de styled props dans la console

import { FaRegPenToSquare } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";


export default function Dashboard() {

  //Pour GET Request pour display les products à l'ouverture de la page: donc on va utiliser useEffect et []
  const [products, setProducts] = useState([]); //A mettre dans data attribute du <DataTable /> Component dans return
  const [error, setErrorMsg] = useState('') // A ecrire en condition à dans le return si produit non fetched

  useEffect(() => {
    axios.get('http://localhost:3005/allProducts')
      .then(response => setProducts(response.data))
      .catch(() => setErrorMsg("error while fetching data"))
  }, [])


  //Pour que quand on clique sur stylo ou cancel, apporte des changements
  const [productId, setProductId] = useState(null);

  //Pour PUT request et modifier certains élements selectionnés; donc stocker l'arrow function dans une variable qu'on va appeler avec un paramètre pour cibler le produit
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');

  //On donne aux VALEURS des propriétés prix et quantité de la database, les 2 states variables précédentes que l'on peut changer
  const updatedProducts = {
    prix: productPrice,
    quantité: productQuantity,
  }



  //Création database avec npm react data table component--------------------------------------

  const columns = [
    {
      name: 'Image',
      selector: row => row.imageUrl,//même nom que dans base de donnée pour extraire info
      cell: row => <img className='dashboard-img' src={`http://localhost:3005/${row.imageUrl}`} alt={row.auteur} />
    },
    {
      name: 'Auteur',
      selector: row => row.auteur,
      sortable: true, //Pour ordonner par ordre alphabétic ou l'inverse
    },
    {
      name: 'Type',
      selector: row => row.type,
    },
    {
      name: 'info Produit',
      selector: row => row.infoProduit,
    },
    {
      name: 'Quantité',
      selector: row => row.quantity,

      //Objectif: si productId===row._id alors fait apparaitre un input pour changer la valeur, sinon on ne voit que la quantité
      cell: row => productId === row._id ?
        <div>
          <input
            placeholder="New Quantity"
            value={productQuantity}
            onChange={(e) => setProductQuantity(e.target.value)} //productQuantity se met à jour en même temps que ce qu'on écrit dans l'input
          />
        </div>
        :
        row.quantity
    },
    {
      name: 'Prix',
      selector: row => row.prix,
      //Objectif: si productId===row._id alors fait apparaitre un input pour changer la valeur, sinon on ne voit que le prix
      cell: row => productId === row._id ?
        <div>
          <input
            placeholder="New Price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)} //productPrice se met à jour en même temps que ce qu'on écrit dans l'input
          />
        </div>
        :
        row.prix
    },

    {
      name: 'Actions',
      selector: row => row._id,//_id donné par MongoDB: Pour selectionner 1 produit spécifique

      //Obligé de faire dans cet ordre pour que ça n’affecte que la row selectionnée
      cell: row => productId === row._id ?
        <div>
          <p role="button"> Update </p>
          <p role="button" onClick={() => setProductId(null)} > Cancel </p>
        </div>
        :
        <div>
          <FaRegPenToSquare onClick={() => setProductId(row._id)} />
          <FaRegTrashAlt />
        </div>
      //Si on clique sur stylo et qu'on donne une valeur à la state product_id

    },
  ];




  const shouldForwardProp = (prop) => prop !== 'sortActive'; //Pour éviter les erreurs des styled components, dans la console

  return (
    <>
      {error ? <p style={{ color: 'red' }}>{error}</p> :

        <StyleSheetManager shouldForwardProp={shouldForwardProp}>
          <DataTable
            columns={columns}
            data={products}
            pagination
          />
        </StyleSheetManager>
      }
    </>

  )
}
