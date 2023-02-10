import React from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {setSixthQuestion} from '../../features/counter/MainInfoReducer'

import Textarea from './Textarea'

const TextareaSixthQuestion = () => {
    const dispatch = useDispatch()

    const name = "24. Какими качествами должен обладать исполнитель для успешного выполнения своих обязанностей?"

    const value = useSelector((state) => state.mainInfo.sixthQuestion)

    const myFunction = (event) => {
        dispatch(setSixthQuestion(event.target.value))
    }

    return (
        <div className="w-full">
            <Textarea name={name} value={value} myFunction={myFunction} />
        </div>
    )
}

export default TextareaSixthQuestion