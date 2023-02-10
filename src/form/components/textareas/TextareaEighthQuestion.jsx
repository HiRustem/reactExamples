import React from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {setEighthQuestion} from '../../features/counter/MainInfoReducer'

import Textarea from './Textarea'

const TextareaEighthQuestion = () => {
    const dispatch = useDispatch()

    const name = "26. Назовите главные недостатки руководителя, которые больше всего могут мешать эффективной работе подразделения, организации?"

    const value = useSelector((state) => state.mainInfo.eighthQuestion)

    const myFunction = (event) => {
        dispatch(setEighthQuestion(event.target.value))
    }

    return (
        <div className="w-full">
            <Textarea name={name} value={value} myFunction={myFunction} />
        </div>
    )
}

export default TextareaEighthQuestion