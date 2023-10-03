import TableContainer from '@/Components/react-components/tableCopmponents/TableContainer'
import TableFour from '@/Components/react-components/tableCopmponents/TableFour'
import TableOne from '@/Components/react-components/tableCopmponents/TableOne'
import TableThree from '@/Components/react-components/tableCopmponents/TableThree'
import TableTwo from '@/Components/react-components/tableCopmponents/TableTwo'
import React from 'react'

const page = () => {
  return (
    <>
        <TableContainer title="Simple">
            <TableOne/>
        </TableContainer>

        <TableContainer title="With striped rows">
            <TableTwo/>
        </TableContainer>

        <TableContainer title="With grouped rows">
            <TableThree/>
        </TableContainer>

        <TableContainer title="With checkboxes">
            <TableFour/>
        </TableContainer>
    </>
  )
}

export default page