import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component"

import { StyleSheetManager } from 'styled-components'; //Pour eviter les erreurs de styled props dans la console

import { FaRegPenToSquare } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import './dashboard.css'
import Header from "../Header/Header";


export default function Dashboard() {

  //Pour GET Request: products state va contenir tous les produits de la database 

  const [products, setProducts] = useState([]); //A mettre dans data attribute du <DataTable /> Component dans return
  const [error, setErrorMsg] = useState('') // A ecrire en condition à dans le return si produit non fetched

  useEffect(() => {
    axios.get('http://localhost:3005/allProducts')
      .then(response => setProducts(response.data))
      .catch(() => setErrorMsg("error while fetching data"))
  }, [products])//!![] = Ne va get products que lors de l'ouverture de la page, donc si on fait des modif, il faudra refresh pour les voir dans la page / [products] va appeler GET a chaque changement dans la state products, donc quand on va faire un chgt dans un produit, ça va réaffiché le chgt sasn actualiser


  //Pour PUT request et modifier certains élements selectionnés; donc stocker l'arrow function dans une variable qu'on va appeler avec un paramètre pour cibler le produit

  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');

  //Pour que quand on clique sur stylo ou cancel, apporte des changements
  const [productId, setProductId] = useState(null);

  //Function to set the productId and initial values for quantity and price
  const handleEditClick = (row) => {
    setProductId(row._id);  //Pour définir su on voit l'input quand on clique sur le stylo ou cancel
    setProductQuantity(row.quantity);
    setProductPrice(row.prix);
  };

  //On donne aux VALEURS des propriétés prix et quantité de la database, les 2 states variables précédentes que l'on peut changer
  const updatedProductData = {
    prix: productPrice,
    quantity: productQuantity,
  }
  //C'est le bouton update qui doit appeler cette function, avec pour argument row._id, pour appliquer la modif.
  const handleUpdates = (productId) => {
    axios.put(`http://localhost:3005/putDash/${productId}`, updatedProductData)
      .then((response) => {
        console.log(response.data)//Montre ce qu'on a codé dans le server: res.json({message:'', stateProduc}), dans la console du browser
        setProductId(null);
      })
      .catch((error) => {
        console.error("Front-end error:", error.message);
      })
      .catch((error) => { console.error( error.response &&
          `${error.response.status}: ${error.response.data.message}`
        );
      });
      
  }

  //Pour DELETE request et supprimer un élement selectionné; donc stocker l'arrow function dans une variable qu'on va appeler avec un paramètre pour cibler le produit

  const handleDelete = (productId) => {
    axios.delete(`http://localhost:3005/deleteElement/${productId}`)
      .then((response) => {
        setProducts(products.filter((element) => element._id !== productId)) //productId a pour valeur l'id du produit, donc on le compare à element._id
        console.log(response.data); //message = property codé dans res.status(200).json({message:""}) = ok dans le server
      })
      .catch((error) => {
        console.error("Front-end error or unexpected issue:", error.message);
      })
      .catch((error) => { console.error( error.response &&
        `${error.response.status}: ${error.response.data.message}`
      );
    });
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
          <p role="button" onClick={() => handleUpdates(row._id)}> Update </p>
          <p role="button" onClick={() => setProductId(null)} > Cancel </p>
        </div>
        :
        <div className="pen-trash-icones">
          <FaRegPenToSquare size={17} onClick={() => handleEditClick(row)} />  {/* Click sur stylo= appel functiin handleEditClick avec argument row selectionnée*/}
          <FaRegTrashAlt size={17} onClick={() => handleDelete(row._id)} />
        </div>

    },
  ];

  const shouldForwardProp = (prop) => prop !== 'sortActive'; //Pour éviter les erreurs des styled components, dans la console

  return (
    <>
    
    <Header />
    
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
