import React from 'react'

import {MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md'

const CheckboxPresentation = (props) => {

    const { name, status, addFunction, deleteFunction } = props

    return (
        <div className="w-full font-normal">
            <button className={`${status === false ? '' : 'hidden'} mr-2 text-orange-500 active:scale-95`} onClick={addFunction}><MdCheckBoxOutlineBlank /></button>
            <button className={`${status === true ? '' : 'hidden'} mr-2 text-orange-500 active:scale-95`} onClick={deleteFunction}><MdCheckBox /></button>
            {name}
        </div>
    )
}

export default CheckboxPresentation