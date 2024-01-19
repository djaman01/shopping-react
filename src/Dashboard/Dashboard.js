import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component"

import { StyleSheetManager } from 'styled-components'; //Pour eviter les erreurs de styled props dans la console



export default function Dashboard() {

  const [products, setProducts] = useState([]); //A mettre dans data attribute du <DataTable /> Component dans return
  const [error, setErrorMsg] = useState('') // A ecrire en condition à dans le return si produit non fetched

  useEffect(() => {
    axios.get('http://localhost:3005/allProducts')
      .then(response => setProducts(response.data))
      .catch(() => setErrorMsg("error while fetching data"))
  }, [])

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
