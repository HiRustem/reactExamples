import React from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {setSecondQuestion} from '../../features/counter/MainInfoReducer'

import Textarea from './Textarea'


const TextareaSecondQuestion = () => {

    const dispatch = useDispatch()

    const name = "20. Что, по Вашему мнению, является наиболее привлекательным в работе?"

    const value = useSelector((state) => state.mainInfo.secondQuestion)

    const myFunction = (event) => {
        dispatch(setSecondQuestion(event.target.value))
    }

    return (
        <div className="w-full">
            <Textarea name={name} value={value} myFunction={myFunction} />
        </div>
    )
}

export default TextareaSecondQuestion