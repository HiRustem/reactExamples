import React from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {setFirstQuestion} from '../../features/counter/MainInfoReducer'

import Textarea from './Textarea'

const TextareaFirstQuestion = () => {
    const dispatch = useDispatch()

    const name = "19. Какой из перечисленных периодов работы внес наибольший вклад в Ваше развитие? Почему?"

    const value = useSelector((state) => state.mainInfo.firstQuestion)

    const myFunction = (event) => {
        dispatch(setFirstQuestion(event.target.value))
    }

    return (
        <div className="w-full">
            <Textarea name={name} value={value} myFunction={myFunction} />
        </div>
    )
}

export default TextareaFirstQuestion