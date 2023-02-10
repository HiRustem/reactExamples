import React from 'react'

import SelectPresentation from './SelectPresentation'

import {useDispatch, useSelector} from 'react-redux'
import {setSources, setSourceValue} from '../../features/counter/MainInfoReducer'

const SelectSource = () => {
    const dispatch = useDispatch()

    const name = "12. Откуда Вы узнали о вакансии:"

    const options = ["", "через hh.ru", "работа России", "проходил практику", "рекомендации знакомых", "данные с военкома", "другой вариант"]

    const source = useSelector((state) => state.mainInfo.sources)

    const sourcesOnChange = (event) => {
        dispatch(setSources(event.target.value))
    }

    const inputOnChange = (event) => {
        dispatch(setSourceValue(event.target.value))
    }
    
    return (
        <div className="w-full bg-transparent">
            <SelectPresentation name={name} source={source} options={options} selectFunction={sourcesOnChange} inputFunction={inputOnChange} />
        </div>
    )
}

export default SelectSource