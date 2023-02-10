import React from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {setFourthQuestion} from '../../features/counter/MainInfoReducer'

import Textarea from './Textarea'

const TextareaFourthQuestion = () => {
    const dispatch = useDispatch()

    const name = "22. Почему нам стоит принять Вас на  работу?"

    const value = useSelector((state) => state.mainInfo.fourthQuestion)

    const myFunction = (event) => {
        dispatch(setFourthQuestion(event.target.value))
    }

    return (
        <div className="w-full">
            <Textarea name={name} value={value} myFunction={myFunction} />
        </div>
    )
}

export default TextareaFourthQuestion