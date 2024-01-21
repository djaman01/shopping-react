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
    },
    {
      name: 'Prix',
      selector: row => row.prix,
    },
    {
      name: 'Actions',
      selector: row => row._id,//_id donné par MongoDB: Pour selectionner 1 produit spécifique
      //Objetcif: Si state productId = null alors on voit 1 stylo et 1 poubelle / Sinon on voit 1 btn update et 1 btn cancel
      cell: row => productId === null ?
        <div>
          <FaRegPenToSquare onClick={() => setProductId(row._id)} />
          <FaRegTrashAlt />
        </div>
        : //Si on clique sur stylo et qu'on donne une valeur à la state product_id (ne pas mettre de condition sinon ça ne changera que la ligne selectionnée)
        <div>
          <p role="button"> Update </p>
          <p role="button" onClick={() => setProductId(null)} > Cancel </p>
        </div>
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
