import React from 'react'

import {useSelector} from 'react-redux'

import ButtonEducation from '../buttons/ButtonEducation'
import TablePresentation from './TablePresentation'

const TableEducation = () => {
    
    const educations = useSelector((state) => state.mainInfo.educations)
    const caption = "13. Образование (учебные заведения, курсы)"

    return (
        <div className="w-full mt-5">
            <TablePresentation caption={caption} array={educations} />
            <ButtonEducation />
        </div>
    )
}

export default TableEducation