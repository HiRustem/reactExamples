import React from 'react'

import {MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md'

const CheckboxPresentation = (props) => {
    const {id, text, addedText, value, variables, setFunction} = props

    return (
        <div className="russianTestAdaptiveWidth m-auto mb-5">
            <h1 className="russianTestH1 mb-2 text-justify">{id}. {text}</h1>
            <p className="text-justify">{addedText}</p>
            {
                variables.map((variant, index) => (
                    <div key={index} className="content-center flex mb-2">
                        <button className={`${value === variant ? 'hidden' : ''}`} onClick={() => setFunction(variant)}><MdCheckBoxOutlineBlank className="text-orange-500 mr-1 active:scale-95" /></button>
                        <button className={`${value === variant ? '' : 'hidden'}`} onClick={() => setFunction("")}><MdCheckBox className="text-orange-500 mr-1 active:scale-95" /></button>
                        {variant}
                    </div>
                ))
            }
        </div>
    )
}

export default CheckboxPresentation