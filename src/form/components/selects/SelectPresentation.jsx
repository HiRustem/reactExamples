import React from 'react'

const SelectPresentation = (props) => {
    const {name, source, options, selectFunction, inputFunction} = props

    return (
        <label className="w-1/2 flex formSelectAdaptiveFlex formLabel m-auto">
            {name}
            <select className={`formSelect formInputLeftMargin border-b-2 border-orange-500 w-full`} onChange={selectFunction}>
                {options.map(((option, index) => (
                    <option key={index} className={`${option === "" ? 'hidden' : ''}`} value={option}>{option}</option>
                )))}
            </select>
            <input className={`${source === "другой вариант" ? '' : 'hidden'} formInputLeftMargin inputStyle border-b-2 border-orange-500 w-full`} onChange={inputFunction} />
        </label>
    )
}

export default SelectPresentation