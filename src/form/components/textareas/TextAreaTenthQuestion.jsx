import React from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {setTenthQuestion} from '../../features/counter/MainInfoReducer'

import Textarea from './Textarea'

const TextAreaTenthQuestion = () => {
    const dispatch = useDispatch()

    const name = "31. Ваши профессиональные планы на ближайший год (3 года)?"

    const value = useSelector((state) => state.mainInfo.tenthQuestion)

    const myFunction = (event) => {
        dispatch(setTenthQuestion(event.target.value))
    }

    return (
        <div className="w-full">
            <Textarea name={name} value={value} myFunction={myFunction} />
        </div>
    )
}

export default TextAreaTenthQuestion