import DataTable from "react-data-table-component"

import { StyleSheetManager } from 'styled-components'; //Pour eviter les erreurs de styled props dans la console

const columns = [
  {
    name: 'Title',
    selector: row => row.title,
  },
  {
    name: 'Year',
    selector: row => row.year,
  },
];

const data = [
  {
    id: 1,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
]

export default function Dashboard() {

  const shouldForwardProp = (prop) => prop !== 'sortActive'; //Pour éviter les erreurs des styled components, dans la console

  return (
    <>

      <StyleSheetManager shouldForwardProp={shouldForwardProp}> {/* Pour éviter errur styledprops component dans la console */}

        <DataTable
          columns={columns}
          data={data} //possible de mettre données variable qui store products base de donnée
          pagination
        />
      </StyleSheetManager>
    </>
  )
}
