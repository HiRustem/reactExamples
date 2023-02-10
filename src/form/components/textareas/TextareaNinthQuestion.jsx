import React from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {setNinthQuestion} from '../../features/counter/MainInfoReducer'

import Textarea from './Textarea'

const TextareaNinthQuestion = () => {
    const dispatch = useDispatch()

    const name = "27. Что Вас привлекает в нас?"

    const value = useSelector((state) => state.mainInfo.ninthQuestion)

    const myFunction = (event) => {
        dispatch(setNinthQuestion(event.target.value))
    }

    return (
        <div className="w-full">
            <Textarea name={name} value={value} myFunction={myFunction} />
        </div>
    )
}

export default TextareaNinthQuestion