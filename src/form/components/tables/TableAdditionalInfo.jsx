import React from 'react'

import {useSelector} from 'react-redux'

import ButtonAdditionalInfo from '../buttons/ButtonAdditionalInfo'
import TablePresentation from './TablePresentation'

const TableAdditionalInfo = () => {
    const additionalInfo = useSelector((state) => state.mainInfo.additionalInfo)
    const caption = "17. Дополнительная информация"

    return (
        <div>
            <TablePresentation caption={caption} array={additionalInfo} />
            <ButtonAdditionalInfo />
        </div>
    )
}

export default TableAdditionalInfo