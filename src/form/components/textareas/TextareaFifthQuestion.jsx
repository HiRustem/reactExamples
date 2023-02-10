import React from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {setFifthQuestion} from '../../features/counter/MainInfoReducer'

import Textarea from './Textarea'

const TextareaFifthQuestion = () => {
    const dispatch = useDispatch()

    const name = "23. Опишите зоны профессиональной деятельности, в которых Вы обладаете наибольшим практическим опытом и специальными знаниями:"

    const value = useSelector((state) => state.mainInfo.fifthQuestion)

    const myFunction = (event) => {
        dispatch(setFifthQuestion(event.target.value))
    }

    return (
        <div className="w-full">
            <Textarea name={name} value={value} myFunction={myFunction} />
        </div>
    )
}

export default TextareaFifthQuestion