import React from 'react'

import {useDispatch} from 'react-redux'
import {setMilitary} from '../../features/counter/MainInfoReducer'

import SelectPresentation from './SelectPresentation'

const SelectMilitary = () => {
    const dispatch = useDispatch()

    const name = "14. Наличие военного билета:"

    const options = ["", "есть", "являюсь призывником", "вхожу в категорию лиц, не подлежащих призыву"]

    const militaryOnChange = (event) => {
        dispatch(setMilitary(event.target.value))
    }

    return (
        <div className="w-full bg-transparent">
            <SelectPresentation name={name} options={options} selectFunction={militaryOnChange} />
        </div>
    )
}

export default SelectMilitary