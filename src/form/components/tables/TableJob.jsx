import React from 'react'

import {useSelector} from 'react-redux'

import ButtonJob from '../buttons/ButtonJob'
import TablePresentation from './TablePresentation'

const TableJob = () => {
    const jobs = useSelector((state) => state.mainInfo.jobs)
    const name = "15. Опыт работы"

    return (
        <div className="w-full mt-5">
            <TablePresentation caption={name} array={jobs} />
            <ButtonJob />
        </div>
    )
}

export default TableJob