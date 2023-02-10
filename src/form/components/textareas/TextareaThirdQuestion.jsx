import React from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {setThirdQuestion} from '../../features/counter/MainInfoReducer'

import Textarea from './Textarea'

const TextareaThirdQuestion = () => {
    const dispatch = useDispatch()

    const name = "21. Что, по Вашему мнению, стимулирует людей работать наиболее эффективно?"

    const value = useSelector((state) => state.mainInfo.thirdQuestion)

    const myFunction = (event) => {
        dispatch(setThirdQuestion(event.target.value))
    }

    return (
        <div className="w-full">
            <Textarea name={name} value={value} myFunction={myFunction} />
        </div>
    )
}

export default TextareaThirdQuestion