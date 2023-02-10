import React from 'react'

import {useSelector} from 'react-redux'

import ButtonFamily from '../buttons/ButtonFamily'
import TablePresentation from './TablePresentation'

const TableFamily = () => {
    const family = useSelector((state) => state.mainInfo.family)
    const caption = "18. Близкие родственники (жена/муж, отец, мать, братья, сестры)"

    return (
        <div>
            <TablePresentation caption={caption} array={family} />
            <ButtonFamily />
        </div>
    )
}

export default TableFamily